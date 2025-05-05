<?php

namespace App\Http\Controllers;

use App\Models\ProductDetailElectronic;
use Illuminate\Http\Request;
use App\Http\Controllers\ProductController;

class ProductDetailElectronicController extends Controller
{

    public function store(Request $request){
        $productController = new ProductController();
        $product = $productController->store($request);

        $productDetail = ProductDetailElectronic::create([
            
        ])

    }
}
