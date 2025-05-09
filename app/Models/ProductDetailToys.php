<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetailToys extends Model
{
    use HasFactory;

    protected $table = 'product_details_toys';

    protected $fillable = [
        'product_id',
        'age_recommendation',
        'toy_type',
        'material',
        'dimensions',
        'gender'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
