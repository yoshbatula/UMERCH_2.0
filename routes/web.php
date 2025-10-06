<?php
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\Admin\AddUsersController;
use App\Http\Controllers\Admin\UpdateUsersController;
use App\Http\Controllers\Admin\DeleteUsersController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin', function() {
    return Inertia::render('Login');
});

Route::get('/', [AddUsersController::class, 'index'])->name('admin.users.index');

// Login Routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.submit');

// Admin Users Routes
Route::post('/admin/users', [AddUsersController::class, 'addUser'])->name('admin.users.store');
Route::put('/admin/users/{id}', [UpdateUsersController::class, 'updateUser'])->name('admin.users.update');
Route::delete('/admin/users/{id}', [DeleteUsersController::class, 'deleteUser'])->name('admin.users.delete');

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
