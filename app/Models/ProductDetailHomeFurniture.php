<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetailHomeFurniture extends Model
{
    use HasFactory;

    protected $table = 'product_details_home_furniture';

    protected $fillable = [
        'product_id',
        'type',
        'material',
        'dimensions',
        'condition'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
