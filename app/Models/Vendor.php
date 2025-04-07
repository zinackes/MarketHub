<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $table = 'vendors';

    protected $guard = 'vendor';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
        'shop_name',
        'shop_description',
        'status',
        'password',
    ];
}
