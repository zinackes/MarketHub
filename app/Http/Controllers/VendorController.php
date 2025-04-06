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
        ], [
            'shop_name.required' => 'Le nom de la boutique est requis.',
            'shop_name.string' => 'Le nom de la boutique doit être une chaîne de caractères.',

            'shop_description.required' => 'La description de la boutique est requise.',
            'shop_description.string' => 'La description doit être une chaîne de caractères.',

            'phone.required' => 'Le numéro de téléphone est requis.',
            'phone.integer' => 'Le numéro de téléphone doit contenir uniquement des chiffres.',

            'address.required' => 'L’adresse de la boutique est requise.',
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
