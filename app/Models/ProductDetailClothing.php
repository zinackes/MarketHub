<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetailClothing extends Model
{
    use HasFactory;

    protected $table = 'product_details_clothing';

    protected $fillable = [
        'product_id',
        'size',
        'material',
        'gender',
        'season',
        'type',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
