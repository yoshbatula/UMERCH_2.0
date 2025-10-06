<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AddUsersController extends Controller {
    public function index() {
        $users = User::all();
        return Inertia::render('Admin-page/RecordLogs', [
            'users' => $users
        ]);
    }

    public function addUser(Request $request) {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'user_id' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'user_id' => $request->user_id,
            'password' => bcrypt($request->password), 
        ]);

        $user = User::create($request);
        return response()->json(['message' => 'User added successfully'], 201);
    }
}