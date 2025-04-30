<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetailAccessory extends Model
{
    use HasFactory;

    protected $table = 'product_details_accessories';

    protected $fillable = [
        'product_id',
        'type',
        'material',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
