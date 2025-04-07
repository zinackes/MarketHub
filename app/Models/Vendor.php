<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use Notifiable;

    protected $guard = 'vendor';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'status',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
