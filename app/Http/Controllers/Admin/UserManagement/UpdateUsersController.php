<?php

namespace App\Http\Controllers\Admin\UserManagement;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;


class UpdateUsersController extends Controller {
    
    public function index() {
        $users = User::all();
        return Inertia::render('Admin-page/RecordLogs', [
            'users' => $users
        ]);
    }
    public function updateUser(Request $request, $id) {
        error_log('UpdateUsersController::updateUser called with ID: ' . $id);
        Log::info('UpdateUser request received:', ['user_id' => $id, 'data' => $request->all()]);
        
        try {
            $user = User::findOrFail($id);

            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users,email,' . $id,
                'userId' => 'required|string|max:255|unique:users,user_id,' . $id,
                'password' => 'nullable|string|min:8', 
            ]);

            $user->name = $request->name;
            $user->email = $request->email;
            $user->user_id = $request->userId;
            
            if ($request->filled('password')) {
                Log::info('Password update requested:', ['user_id' => $id, 'password_provided' => true]);
                $user->password = bcrypt($request->password); 
                Log::info('Password hashed and set for user:', ['user_id' => $id]);
            } else {
                Log::info('No password update requested:', ['user_id' => $id, 'password_value' => $request->password ?? 'null']);
            }

            $user->save();
            
            Log::info('User updated successfully:', ['user_id' => $user->id, 'email' => $user->email]);
            
            return redirect()->back()->with('success', 'User updated successfully!');
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('Update validation failed:', $e->errors());
            throw $e;
        } catch (\Exception $e) {
            Log::error('User update failed:', ['error' => $e->getMessage()]);
            return redirect()->back()->withErrors(['error' => 'Failed to update user. Please try again.']);
        }
    }
}