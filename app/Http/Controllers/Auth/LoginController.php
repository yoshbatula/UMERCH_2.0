<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class LoginController extends Controller {
    
    public function showLoginForm() {
        return Inertia::render('Authentication');
    }

    // Handle the login logic
    public function login(Request $request) {
    
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        // Check if user exists with either email or user_id
        $user = \App\Models\User::where('email', $request->email)
                    ->orWhere('user_id', $request->email)
                    ->first();

        // If user not found error
        if (!$user) {
            return back()->withErrors([
                'email' => 'No account found with this email/user ID.',
            ])->withInput($request->except('password'));
        }

        // checked password 
        if ($request->password !== $user->password) {
            return back()->withErrors([
                'password' => 'The password is incorrect.',
            ])->withInput($request->except('password'));
        }

        // if the credentials are correct, redirect to authentication
        Auth::login($user);
        $request->session()->regenerate();
        
        return redirect('/authentication');
    }
}
