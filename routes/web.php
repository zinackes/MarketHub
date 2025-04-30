<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VendorController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/vendor-create', [VendorController::class, 'store'])->name('vendor.store');


    Route::get('/dashboard/products', [DashboardController::class, 'products'])->name('dashboard.products');
    Route::get('/product/choose_category', [ProductController::class, 'chooseCategory'])->name('product.choose_category');
    Route::get('/product/create', [ProductController::class, 'create'])->name('product.create'); // Page to display form creation of a product
    //Route::post('/product/create', [ProductController::class, 'store'])->name('product.store');
    Route::put('/product/update/{product_id}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/product/destroy/{product_id}', [ProductController::class, 'destroy'])->name('product.destroy');


    Route::get('/dashboard/orders', [DashboardController::class, 'orders'])->name('dashboard.orders');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
