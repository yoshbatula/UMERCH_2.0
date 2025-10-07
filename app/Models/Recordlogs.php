<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recordlogs extends Model
{
    protected $table = '_recordlogs'; 
    
    protected $fillable = [
        'User_name',
        'User_email',
        'logged_in_at'
    ];
    
    protected $dates = [
        'logged_in_at'
    ];
}
