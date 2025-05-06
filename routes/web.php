<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\ProductDetailElectronicController;
use App\Http\Controllers\ProductDetailAccessoryController;
use App\Http\Controllers\ProductDetailClothingController;
use App\Http\Controllers\ProductDetailFoodController;
use App\Http\Controllers\ProductDetailBeautyCareController;
use App\Http\Controllers\ProductDetailHomeFurnitureController;
use App\Http\Controllers\ProductDetailToyController;
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
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/vendor-create', [VendorController::class, 'store'])->name('vendor.store');


    Route::get('/dashboard/products', [DashboardController::class, 'products'])->name('dashboard.products');
    Route::get('/product/choose_category', [ProductController::class, 'chooseCategory'])->name('product.choose_category');
    Route::get('/product/{slug}/{product_id}', [ProductController::class, 'show'])
        ->where('slug', '^(?!create$)[a-zA-Z0-9\-]+') // Exclut "create"
        ->name('product.show');


    Route::get('/product/create', [ProductController::class, 'create'])->name('product.create'); // Page to display form creation of a product

    Route::post('/product/store/clothings', [ProductDetailClothingController::class, 'store'])->name('product.clothings.store');

    Route::post('/product/store/electronics', [ProductDetailElectronicController::class, 'store'])->name('product.electronique.store');

    Route::post('/product/store/accessories', [ProductDetailAccessoryController::class, 'store'])->name('product.accessories.store');
    Route::post('/product/store/toys', [ProductDetailToyController::class, 'store'])->name('product.toys.store');
    Route::post('/product/store/food', [ProductDetailFoodController::class, 'store'])->name('product.food.store');
    Route::post('/product/store/beauty-care', [ProductDetailBeautyCareController::class, 'store'])->name('product.beauty.care.store');
    Route::post('/product/store/home-furniture', [ProductDetailHomeFurnitureController::class, 'store'])->name('product.home.furniture.store');


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
