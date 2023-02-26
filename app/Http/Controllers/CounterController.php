<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\Storage;


class CounterController extends Controller
{
    private static $counterPath = 'public/checkout/counter.json';

    public function getCounter(){

        $counterJson = Storage::get(self::$counterPath);
        $counterData = json_decode($counterJson, true);

         // Increment the counter property
        $counterData['counter']++;

        // Write the updated JSON file back to storage
        $updatedCounterJson = json_encode($counterData);
        Storage::put(self::$counterPath, $updatedCounterJson);

        return response()->json(['counter' => $counterData['counter']])->header('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
}
