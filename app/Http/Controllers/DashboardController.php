<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){

        $vendor = Vendor::where('user_id', auth()->id())->first();

        $products = Product::where('vendor_id', $vendor->id)->get();

        $vendorId = auth()->id();

        $soldProducts = OrderItem::whereHas('product', function ($query) use ($vendorId) {
            $query->where('vendor_id', $vendorId);
        })
            ->whereHas('order', function ($query) {
                $query->whereIn('status', ['shipped', 'delivered']);
            })
            ->with(['product', 'order'])
            ->get();

        return Inertia::render('Dashboard', [
            'products' => $products,
            'vendor' => $vendor,
            'soldProducts' => $soldProducts,
        ]);
    }

    public function products(){
        $vendor = Vendor::where('user_id', auth()->id())->first();

        if (!$vendor) {
            return Inertia::render('DashboardProducts', [
                'products' => [],
            ]);
        }

        $products = Product::where('vendor_id', $vendor->id)->get()->toArray();


        return Inertia::render('DashboardProducts', [
            'products' => $products,
        ]);
    }

}
