<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AddUsersController extends Controller {
    public function index() {
        $users = User::all();
        return Inertia::render('Admin-page/RecordLogs', [
            'users' => $users
        ]);
    }

    public function addUser(Request $request) {
        

        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'userId' => 'required|string|max:255|unique:users,user_id',
                'password' => 'required|string|min:8',
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'user_id' => $request->userId,
                'password' => bcrypt($request->password), 
            ]);

            Log::info('User created successfully:', ['user_id' => $user->id, 'email' => $user->email]);

            return redirect()->back()->with('success', 'User added successfully!');
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('Validation failed:', $e->errors());
            throw $e;
        } catch (\Exception $e) {
            Log::error('User creation failed:', ['error' => $e->getMessage()]);
            return redirect()->back()->withErrors(['error' => 'Failed to create user. Please try again.']);
        }
    }
}