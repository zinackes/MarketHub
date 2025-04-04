<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){

        $products = Product::where('vendor_id', auth()->id())->get();

        return Inertia::render('Dashboard', [
            'products' => $products
        ]);
    }
}
