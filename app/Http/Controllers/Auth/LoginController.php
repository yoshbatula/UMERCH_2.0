<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Recordlogs;
use Carbon\Carbon;

class LoginController extends Controller {
    
    public function showLoginForm() {
        return Inertia::render('Authentication');
    }
    public function login(Request $request) {
    
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)
                    ->orWhere('user_id', $request->email)
                    ->first();

        if (!$user) {
            return back()->withErrors([
                'email' => 'No account found with this email/user ID.',
            ])->withInput($request->except('password'));
        }

        Log::info('Login attempt', [
            'email' => $request->email,
            'password_provided' => $request->password,
            'user_found' => $user ? 'Yes' : 'No',
            'password_check' => $user ? Hash::check($request->password, $user->password) : 'No user'
        ]);

        if (!Hash::check($request->password, $user->password)) {
            return back()->withErrors([
                'password' => 'The password is incorrect.',
            ])->withInput($request->except('password'));
        }
        
        Auth::login($user);
        $request->session()->regenerate();
        
        Recordlogs::create([
            'User_name' => $user->name,
            'User_email' => $user->email,
            'logged_in_at' => Carbon::now('Asia/Manila'),
        ]);
        
        return redirect()->route('authentication');
    }
}
