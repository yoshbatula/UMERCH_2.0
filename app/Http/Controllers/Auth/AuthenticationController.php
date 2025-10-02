<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
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
            return redirect()->route('login');
        }

        // Generate and send OTP when showing the form
        $this->generateAndSendOtp($user);

        return Inertia::render('User-page/Authentication', [
            'user' => $user
        ]);
    }

    // Generate and sent OTP to user's email
    private function generateAndSendOtp($user)
    {
        // Generate 6-digit OTP
        $otp = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);
        
        // Store OTP in cache with 10 minutes expiration
        Cache::put("otp_{$user->id}", $otp, now()->addMinutes(10));
        
        // Log OTP for debugging (remove in production)
        Log::info("OTP for user {$user->email}: {$otp}");
        
        // Send OTP via email
        try {
            Mail::to($user->email)->send(new \App\Mail\OtpMail($otp, $user));
            Log::info("OTP email sent successfully to {$user->email}");
        } catch (\Exception $e) {
            Log::error("Failed to send OTP email to {$user->email}: " . $e->getMessage());
        }
    }

    // verify the submitted OTP
    public function verifyOtp(Request $request)
    {
        $request->validate([
            'otp' => 'required|string|size:6'
        ]);

        $user = Auth::user();
        
        if (!$user) {
            return redirect()->route('login');
        }

        // Get stored OTP from cache
        $storedOtp = Cache::get("otp_{$user->id}");
        
        if (!$storedOtp) {
            return back()->withErrors([
                'otp' => 'OTP has expired. Please request a new one.'
            ]);
        }

        // Verify OTP
        if ($request->otp !== $storedOtp) {
            return back()->withErrors([
                'otp' => 'Invalid OTP. Please check and try again.'
            ]);
        }

        // OTP is valid - clear it from cache
        Cache::forget("otp_{$user->id}");
        
        // Mark user as verified (you might want to add a column for this)
        $user->email_verified_at = now();
        $user->save();

        // rediret to landing page
        return redirect('/landing')->with('success', 'Email verified successfully!');
    }

    // Resend OTP
    public function resendOtp(Request $request)
    {
        $user = Auth::user();
        
        if (!$user) {
            return redirect()->route('login');
        }

        // Check if user is trying to resend too frequently
        $lastSent = Cache::get("otp_last_sent_{$user->id}");
        if ($lastSent && now()->diffInSeconds($lastSent) < 60) {
            return back()->withErrors([
                'resend' => 'Please wait before requesting another OTP.'
            ]);
        }

        // Generate and send new OTP
        $this->generateAndSendOtp($user);
        
        // Store last sent time
        Cache::put("otp_last_sent_{$user->id}", now(), now()->addMinutes(10));

        return back()->with('success', 'A new verification code has been sent to your email.');
    }
}