<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller {
    // Show the login form

    public function showLoginForm() {
        return Inertia::render('Authentication');
    }

    // Handle the login logic

    public function login(Request $request) {
        // Validate the form inputs
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        // For now, accept any credentials and redirect to authentication
        // Later you can add real authentication logic here
        return redirect('/authentication');
    }
}
