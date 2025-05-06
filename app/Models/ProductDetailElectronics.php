<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetailElectronics extends Model
{
    use HasFactory;

    protected $table = 'product_details_electronics';

    protected $fillable = [
        'product_id',
        'model',
        'condition',
        'warranty',
        'capacity',
        'device_type'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
