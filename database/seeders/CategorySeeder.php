<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name' => 'Vêtements', 'slug' => 'vetements'],
            ['name' => 'Électronique', 'slug' => 'electronique'],
            ['name' => 'Accessoires', 'slug' => 'accessoires'],
            ['name' => 'Maison & Meubles', 'slug' => 'maison-meubles'],
            ['name' => 'Jouets', 'slug' => 'jouets'],
            ['name' => 'Beauté & Soins', 'slug' => 'beaute-soins'],
            ['name' => 'Alimentation', 'slug' => 'alimentation'],
        ];

        foreach ($categories as $category) {
            \App\Models\Category::firstOrCreate([
                'slug' => $category['slug'],
            ], $category);
        }
    }

}
