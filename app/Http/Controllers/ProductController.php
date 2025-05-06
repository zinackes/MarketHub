<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductDetailAccessory;
use App\Models\ProductDetailBeautyCare;
use App\Models\ProductDetailClothing;
use App\Models\ProductDetailElectronics;
use App\Models\ProductDetailFood;
use App\Models\ProductDetailHomeFurniture;
use App\Models\ProductDetailToys;
use App\Models\ProductVariant;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Crypt;

class ProductController extends Controller
{
    protected $vendor;

    protected $rules;
    protected $messages;

    public function __construct()
    {
        if (auth()->check()) {
            $this->vendor = Vendor::where('user_id', auth()->id())->first();

            $this->rules = [
                'brand' => 'required|string',
                'category_id' => 'required',
            ];

            $this->messages = [
                'brand.required' => 'Le nom de la marque est requis.',
                'brand.string' => 'La marque doit être une chaîne de caractères.',
                'category_id.required' => 'La catégorie du produit est requise.',
            ];
        }
    }

    public function findProductDetails($product_id){
        $models = [
            ProductDetailHomeFurniture::class,
            ProductDetailBeautyCare::class,
            ProductDetailFood::class,
            ProductDetailToys::class,
            ProductDetailAccessory::class,
            ProductDetailClothing::class,
            ProductDetailElectronics::class,
        ];

        foreach ($models as $model) {
            $result = $model::where('product_id', $product_id)->first();

            if($result){
                return $result;
            }
        }

        return null;
    }


    public function show($slug, $product_id){

        try {

            $product = Product::find($product_id);

            $productVariants = ProductVariant::where('product_id', $product_id)->get();

            $productVariant = ProductVariant::where('product_id', $product_id)->first();

            $productDetail = $this->findProductDetails($product_id);

            if (!$product) {
                return redirect()->route('home')->with('error', 'Produit introuvable.');
            }

            //$product->increment('views');

            $productWithVariants = [
                'product' => $product,
                'variant' => $productVariant
            ];

            return Inertia::render('Products/ShowProduct', [
                'product' => $productWithVariants,
                'productDetails' => $productDetail,
                'category_id' => $product->category_id,
                'productVariants' => $productVariants,
            ]);
        } catch (\Illuminate\Contracts\Encryption\DecryptException $e) {
            return redirect()->route('home')->with('error', 'Le produit est introuvable ou l\'ID est corrompu.');
        }
    }


    public function chooseCategory(){

        $categories = Category::all();


        return Inertia::render('Products/ChooseCategory', [
            'categories' => $categories,
        ]);
    }

    public function create(Request $request){

        $slug = $request->query('category');
        $id = $request->query('id');


        return Inertia::render('Products/ProductPageCreation', [
            'category_id' => $id,
            'slug' => $slug,
            'product' => null,
            'productDetails' => null,
        ]);
    }


    public function store(Request $request){


            $product = Product::create([
                'vendor_id' => $this->vendor->id,
                'brand' => $request->brand,
                'category_id' => $request->category_id,
            ]);

            $productVariant = ProductVariant::create([
                'product_id' => $product->id,
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'description' => $request->description,
                'color' => $request->color,
                'price' => $request->price,
                'stock_quantity' => $request->stock_quantity,
                'sku' => null,
                'image'=> null
            ]);

        $fullProduct = array_merge(
            $product->toArray(),
            $productVariant->toArray()
        );


        return $fullProduct;

    }

    public function update(Request $request, $product_id){

        $request->validate($this->rules, $this->messages);

        $product = Product::where('id', $product_id)->first();

        $product->update([
            'name' => $request['name'],
            'slug' => Str::slug($request['name']),
            'description' => $request['description'],
            'price' => $request['price'],
            'stock_quantity' => $request['stock_quantity'],
            'category_id' => $request['category_id'],
        ]);

        return to_route('dashboard.products')->with('success', "{$product->name} a été bien été modifié");

    }

    public function destroy($product_id){


        $product = Product::where('id', $product_id)->first();

        $product_data = [
            'name' => $product->name,
        ];

        $product->delete();

        return to_route('dashboard.products')->with('success', "{$product_data['name']} a été bien été supprimé");
    }
}
