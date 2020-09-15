<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomepageController extends Controller
{
    public function __invoke(Request $request)
    {
        if ($user = Auth::user()) {
            \App\Transaction::create([
                'user_id' => $user->id,
                'url' => $request->path(),
                'method' => $request->method()
            ]);
        }

        return view('welcome');
    }
}
