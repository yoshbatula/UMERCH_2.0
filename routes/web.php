<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return Inertia::render('Login');
});

Route::get('/landing', function () {
    return Inertia::render('User-page/Landingpage');
});

Route::get('/About', function () {
    return Inertia::render('User-page/About');
});

Route::get('/Authentication', function () {
    return Inertia::render('User-page/Authentication');
});
