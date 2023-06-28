<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        //validate the request
        $validation = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        //attempt to login
        if (!auth()->attempt($validation)) {
            return response()->json(['message' => 'Invalid Credentials'], 401);
        }

        //return the response
        return $request->user();
    }
}
