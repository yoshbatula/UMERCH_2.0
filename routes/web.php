<?php
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\Admin\AddUsersController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin', function() {
    return Inertia::render('Login');
});

Route::get('/', function() {
    return Inertia::render('Admin-page/RecordLogs');
});

// Login Routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.submit');

// add user route
Route::apiResource('users', AddUsersController::class);

// OTP Authentication Routes
Route::get('/authentication', [AuthenticationController::class, 'showVerificationForm'])->name('authentication');
Route::post('/verify-otp', [AuthenticationController::class, 'verifyOtp'])->name('verify.otp');
Route::post('/resend-otp', [AuthenticationController::class, 'resendOtp'])->name('resend.otp');

// Dashboard
Route::get('/landing', function() {
    return Inertia::render('User-page/Landingpage', [
        'auth' => [
            'user' => Auth::user()
        ]
    ]);
})->name('landing');
