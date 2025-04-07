<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Client\Request;
use Inertia\Inertia;

class VendorAuthController extends Controller
{
    public function showRegisterForm(){
        dd('ds');
        return Inertia::render('Auth/VendorRegister');
    }

    public function store(Request $request){
        $validate = $request->validate([

        ]);
    }

}
