<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetailFood extends Model
{
    use HasFactory;

    protected $table = 'product_details_food';

    protected $fillable = [
        'product_id',
        'food_type',
        'weight_volume',
        'expiration_date',
        'is_organic',
        'allergens'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
