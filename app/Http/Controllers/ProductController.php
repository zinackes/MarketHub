<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function store(Request $request){

        $vendor = Vendor::where('user_id', auth()->id())->first();

        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock_quantity' => 'required|numeric',
        ]);

        $product = Product::create([
            'vendor_id' => $vendor->id,
            'name' => $request['name'],
            'slug' => Str::slug($request['name']),
            'description' => $request['description'],
            'price' => $request['price'],
            'stock_quantity' => $request['stock_quantity'],
            'image' => "null",
        ]);

        return to_route('dashboard.products')->with('success', "{$product->name} a été ajouté à votre liste de produits");

    }
}
