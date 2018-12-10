<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ValidationController extends Controller
{

    public function register()
    {
        return view('validation.register');
    }
}
