<?php

use Illuminate\Database\Seeder;
use App\Quote;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        User::create([
            'name' => 'Demo of GM',
            'email' => 'demo@gomedia.com',
            'password' => bcrypt('12345678'),
        ]);

        Quote::create([
            'body' => 'In delay there lies no plenty.',
            'quotee' => 'William Shakespeare'
        ]);

        Quote::create([
            'body' => 'Do anything but let it produce joy.',
            'quotee' => 'Walt Whitman'
        ]);

        Quote::create([
            'body' => 'Wheresoever you go, go with all your heart.',
            'quotee' => 'Confucius'
        ]);

        Quote::create([
            'body' => 'In the faces of men and women, I see God',
            'quotee' => 'Walt Whitman'
        ]);


    }
}
