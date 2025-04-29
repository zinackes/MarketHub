<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetailBeautyCare extends Model
{
    use HasFactory;

    protected $table = 'product_details_beauty_care';

    protected $fillable = [
        'product_id',
        'product_type',
        'volume',
        'main_ingredients',
        'target',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
