<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    public function vendor(){
        return $this->belongsTo('App\Models\Vendor', 'vendor_id');
    }

    protected $fillable = [
        'vendor_id',
        'name',
        'slug',
        'description',
        'price',
        'stock_quantity',
        'image',
    ];
}
