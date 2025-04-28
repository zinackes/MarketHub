<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductColor extends Model
{
    protected $table = 'product_colors';

    protected $fillable = [
        'product_id',
        'color'
    ];

    public function product(){
        return $this->belongsTo(Product::class);
    }
}
