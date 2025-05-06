<?php

namespace App\Http\Controllers;

use App\Models\ProductDetailElectronics;
use App\Models\Vendor;
use Illuminate\Http\Request;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Crypt;

class ProductDetailElectronicController extends Controller
{
    protected $vendor;

    protected $rules;
    protected $messages;

    public function __construct()
    {
        if (auth()->check()) {
            $this->vendor = Vendor::where('user_id', auth()->id())->first();

            $this->rules = [
                'brand' => 'nullable|string',
                'category_id' => 'required|integer|exists:categories,id',
                'name' => 'required|string|max:255',
                'slug' => 'nullable|string|max:255|unique:products,slug',
                'description' => 'required|string',
                'color' => 'nullable|string',
                'price' => 'required|numeric|min:0',
                'stock_quantity' => 'required|integer|min:0',
                'sku' => 'nullable|string',
                'image' => 'nullable|string',
            ];

            $this->messages = [
                'brand.string' => 'La marque doit être une chaîne de caractères.',

                'category_id.required' => 'La catégorie du produit est requise.',
                'category_id.integer' => 'La catégorie doit être un entier valide.',
                'category_id.exists' => 'La catégorie sélectionnée n\'existe pas.',

                'name.required' => 'Le nom du produit est requis.',
                'name.string' => 'Le nom du produit doit être une chaîne de caractères.',
                'name.max' => 'Le nom du produit ne peut pas dépasser 255 caractères.',

                'slug.string' => 'Le slug doit être une chaîne de caractères.',
                'slug.max' => 'Le slug ne peut pas dépasser 255 caractères.',
                'slug.unique' => 'Le slug doit être unique.',

                'description.string' => 'La description doit être une chaîne de caractères.',
                'description.required' => 'La description du produit est requis.',

                'color.string' => 'La couleur doit être une chaîne de caractères.',

                'price.required' => 'Le prix est requis.',
                'price.numeric' => 'Le prix doit être un nombre valide.',
                'price.min' => 'Le prix doit être supérieur ou égal à 0.',

                'stock_quantity.required' => 'La quantité en stock est requise.',
                'stock_quantity.integer' => 'La quantité en stock doit être un entier valide.',
                'stock_quantity.min' => 'La quantité en stock ne peut pas être inférieure à 0.',

                'sku.string' => 'Le SKU doit être une chaîne de caractères.',

                'image.string' => 'L\'image doit être une chaîne de caractères.',
            ];

        }
    }

    public function store(Request $request){

        $request->validate($this->rules, $this->messages);

        $productController = new ProductController();
        $fullProduct = $productController->store($request);


        $productDetail = ProductDetailElectronics::create([
            'product_id' => $fullProduct['id'],
            'model' => $request->model,
            'condition' => $request->condition,
            'warranty' => $request->warranty,
            'capacity' => $request->capacity,
            'device_type' => $request->device_type
        ]);



        return Redirect::route('product.show', [
            'slug' => $fullProduct['slug'],
            'product_id' => $fullProduct['product_id'],
        ]);

    }
}
