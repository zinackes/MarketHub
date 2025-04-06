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


        $userId = auth()->id();

        $userRole = auth()->user()->role;

        if($userRole === "vendor"){
            $vendor = Vendor::where('user_id', auth()->id())->first();


            $soldProducts = OrderItem::whereHas('product', function ($query) use ($userId) {
                $query->where('vendor_id', $userId);
            })
                ->whereHas('order', function ($query) {
                    $query->whereIn('status', ['shipped', 'delivered']);
                })
                ->with(['product', 'order'])
                ->get();


            $products = Product::where('vendor_id', $vendor->id)->get();
        }
        else{
            $soldProducts = [];
            $products = [];
            $vendor = [];
        }


        return Inertia::render('Dashboard', [
            'products' => $products,
            'vendor' => $vendor,
            'soldProducts' => $soldProducts,
            'userRole' => $userRole,
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
