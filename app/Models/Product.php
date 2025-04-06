<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    public function vendor(){
        return $this->belongsTo('App\Models\Vendor', 'vendor_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    protected $fillable = [
        'vendor_id',
        'name',
        'slug',
        'description',
        'price',
        'stock_quantity',
        'category_id',
        'image',
    ];
}
