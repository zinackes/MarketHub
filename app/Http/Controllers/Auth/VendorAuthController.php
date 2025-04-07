<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Vendor;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class VendorAuthController extends Controller
{
    public function showLoginForm(){
        return Inertia::render('Vendor/Login');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $vendor = Vendor::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'status' => 'active',
            'password' => Hash::make($request->password),
        ]);

        //event(new Registered($user));

        Auth::guard('vendor')->login($vendor);

        return redirect(route('dashboard', absolute: false));
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::guard('vendor')->attempt($credentials)) {
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors(['email' => 'Invalid credentials.']);
    }

    public function logout()
    {
        Auth::guard('vendor')->logout();
        return redirect('/');
    }
}
