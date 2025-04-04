<?php

namespace App\Http\Controllers;

use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'shop_name' => 'required|string',
            'shop_description' => 'required|string',
            'phone' => 'required|integer',
            'address' => 'required',
        ]);

        $vendor = Vendor::create([
            'user_id' => auth()->id(),
            'shop_name' => $request['shop_name'],
            'shop_description' => $request['shop_description'],
            'phone' => $request['phone'],
            'address' => $request['address'],
            'status' => 'active',
        ]);


        return redirect()->back()->with('success', 'Votre boutique à bien été créee');
    }
}
