<?php
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\AuthenticationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return Inertia::render('Login');
});

Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.submit');

// OTP Authentication Routes
Route::get('/authentication', [AuthenticationController::class, 'showVerificationForm'])->name('authentication');
Route::post('/verify-otp', [AuthenticationController::class, 'verifyOtp'])->name('verify.otp');
Route::post('/resend-otp', [AuthenticationController::class, 'resendOtp'])->name('resend.otp');

// Dashboard (after successful verification)
Route::get('/landing', function() {
    return Inertia::render('User-page/Landingpage');
})->name('landing');
