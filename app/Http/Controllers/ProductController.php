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
            'category_id' => 'required',
        ], [
            'name.required' => 'Le nom du produit est requis.',
            'name.string' => 'Le nom du produit doit être une chaîne de caractères.',
            'description.required' => 'La description du produit est requise.',
            'description.string' => 'La description du produit doit être une chaîne de caractères.',
            'price.required' => 'Le prix du produit est requis.',
            'price.numeric' => 'Le prix du produit doit être un nombre.',
            'stock_quantity.required' => 'La quantité en stock est requise.',
            'stock_quantity.numeric' => 'La quantité en stock doit être un nombre.',
            'category_id.required' => 'La catégorie du produit est requise.',
        ]);


        $product = Product::create([
            'vendor_id' => $vendor->id,
            'name' => $request['name'],
            'slug' => Str::slug($request['name']),
            'description' => $request['description'],
            'price' => $request['price'],
            'stock_quantity' => $request['stock_quantity'],
            'category_id' => $request['category_id'],
            'image' => "null",
        ]);

        return to_route('dashboard.products')->with('success', "{$product->name} a été ajouté à votre liste de produits");

    }
}
