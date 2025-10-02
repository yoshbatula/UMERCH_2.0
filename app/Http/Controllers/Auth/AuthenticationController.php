<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class AuthenticationController extends Controller {
    
    // Show the authentication/OTP verification page
    public function showVerificationForm()
    {
        $user = Auth::user();
        
        if (!$user) {
            Log::warning("showVerificationForm - No authenticated user");
            return redirect()->route('login');
        }

        Log::info("showVerificationForm - User authenticated: {$user->email}");

        // Generate and send OTP when showing the form
        $emailSent = $this->generateAndSendOtp($user);

        return Inertia::render('User-page/Authentication', [
            'user' => $user,
            'emailSent' => $emailSent
        ]);
    }

    // Generate and send OTP to user's email
    private function generateAndSendOtp($user)
    {
        try {
            // Generate 6-digit OTP
            $otp = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
            
           
            Cache::put("otp_{$user->id}", $otp, now()->addMinutes(10));
            
            Log::info("OTP generated for user {$user->email}: {$otp}");
            
            Log::info("Mail configuration - Driver: " . config('mail.default'));
            Log::info("Mail configuration - Host: " . config('mail.mailers.smtp.host'));
            Log::info("Mail configuration - From: " . config('mail.from.address'));
            
            // Send OTP via email
            Mail::to($user->email)->send(new \App\Mail\OtpMail($otp, $user));
            
            // Check for mail failures
            if (count(Mail::failures()) > 0) {
                Log::error("Mail failures detected for {$user->email}");
                return false;
            }
            
            Log::info("OTP email sent successfully to {$user->email}");
            return true;
            
        } catch (\Exception $e) {
            Log::error("Failed to send OTP email to {$user->email}: " . $e->getMessage());
            Log::error("Stack trace: " . $e->getTraceAsString());
            return false;
        }
    }

    // Verify the submitted OTP
    public function verifyOtp(Request $request)
    {
        $request->validate([
            'otp' => 'required|string|size:6'
        ]);

        $user = Auth::user();

        Log::info("OTP Verification - User: " . ($user ? $user->email : "Not authenticated"));

        if (!$user) {
            return redirect()->route('login')->withErrors(['error' => 'Session expired. Please login again.']);
        }

        // Get stored OTP from cache
        $storedOtp = Cache::get("otp_{$user->id}");
        
        Log::info("OTP Verification - Submitted: {$request->otp}, Stored: " . ($storedOtp ?: 'NOT FOUND'));
        
        if (!$storedOtp) {
            return back()->withErrors([
                'otp' => 'OTP has expired or not found. Please request a new one.'
            ]);
        }

        // Verify OTP
        if ($request->otp !== $storedOtp) {
            Log::warning("OTP Verification - Invalid OTP for user {$user->email}");
            return back()->withErrors([
                'otp' => 'Invalid OTP. Please check and try again.'
            ]);
        }

        Log::info("OTP Verification - Success for user {$user->email}");

        Cache::forget("otp_{$user->id}");
        
        
        $userModel = User::find($user->id);
        
        if ($userModel) {
            
            $userModel->email_verified_at = now();
            $userModel->save();
            
            Log::info("User {$userModel->email} email verified successfully");
            
            Auth::login($userModel);
        } else {
            Log::error("User model not found during OTP verification for ID: {$user->id}");
            return redirect()->route('login')->withErrors(['otp' => 'User not found. Please try logging in again.']);
        }

        // Redirect to landing page
        Log::info("About to redirect to landing page for user {$userModel->email}");
        $redirectResponse = redirect()->route('landing')->with('success', 'Email verified successfully!');
        Log::info("Redirect response created, target URL: " . $redirectResponse->getTargetUrl());
        return $redirectResponse;
    }

    // Resend OTP
    public function resendOtp(Request $request)
    {
        $user = Auth::user();
        
        if (!$user) {
            return redirect()->route('login');
        }

       
        $lastSent = Cache::get("otp_last_sent_{$user->id}");
        if ($lastSent && now()->diffInSeconds($lastSent) < 60) {
            return back()->withErrors([
                'resend' => 'Please wait ' . (60 - now()->diffInSeconds($lastSent)) . ' seconds before requesting another OTP.'
            ]);
        }

        // Generate and send new OTP
        $emailSent = $this->generateAndSendOtp($user);
        
        // Store last sent time
        Cache::put("otp_last_sent_{$user->id}", now(), now()->addMinutes(10));

        if ($emailSent) {
            return back()->with('success', 'A new verification code has been sent to your email.');
        } else {
            return back()->withErrors([
                'resend' => 'Failed to send email. Please check your email configuration or try again later.'
            ]);
        }
    }
}