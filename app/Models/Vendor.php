<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $table = 'vendors';

    protected $fillable = [
        'user_id',
        'shop_name',
        'shop_description',
        'phone',
        'address',
        'status'
    ];
}
