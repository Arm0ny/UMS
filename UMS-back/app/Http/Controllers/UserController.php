<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return User::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'surname' => 'required|string',
            'gender' => 'required|string|max:1',
            'username' => 'required|string|unique:users,username,' . $user->id,
            'email' => 'required|email|unique:users,email,' . $user->id,
        ],
            [
                'username.unique' => 'Lo username specificato è già in uso.',
                'email.unique' => 'L\'indirizzo email specificato è già in uso.',
            ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user->update($request->only(['name', 'surname', 'gender', 'username', 'email']));

        return response()->json(['message' => 'Dati utente aggiornati con successo']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Utente non trovato'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'Utente eliminato con successo']);
    }


    public function getByGender($gender){
        return User::query()
            ->where('gender', "=", $gender);
    }
}
