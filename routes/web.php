<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\CounterController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/*
*   MOCKING API Router
*/

$base_api = "/api/";

// query param ?category=food
Route::get($base_api.'list-menu', function (Request $request) {
    $category = $request->query('category');

    $jsonfile;
    $data;

    if($category == 'drink') 
        $json = Storage::get('public/list-menu/drink.json');
    else if ($category == 'snack') 
        $json = Storage::get('public/list-menu/snack.json');
    else
        $json = Storage::get('public/list-menu/food.json');     // default or fallback
    
    $data = json_decode($json, true);
    return response()->json($data);
});

Route::post($base_api.'order', function (Request $request) {
    // get request payload
    $data = $request->all();
    $request_payload_json = json_encode($data, JSON_PRETTY_PRINT);

    // get current counter
    $counterJson = Storage::get('public/checkout/counter.json');
    $counterData = json_decode($counterJson, true);

    // generating order code
    $date = new DateTime();
    $year = $date->format('Y');
    $month = $date->format('m');
    $day = $date->format('d');
    $hour = $date->format('H');
    $dateISO = date('c');

    $orderIdentifier = ($hour > 12) ? 'P' : 'A';
    $orderIdentifier .= $counterData["counter"];

    $postfix = preg_replace('/\s+/', '-', $data["name"]);

    $orderCode = "{$year}{$month}{$day}-{$orderIdentifier}-{$postfix}";

    $file_name = 'public/order/'.$orderCode.'.json';
    
    Storage::put($file_name, $request_payload_json);

    // Increment the counter property
    $counterData['counter']++;

    // Write the updated counter back to storage
    $updatedCounterJson = json_encode($counterData);
    Storage::put('public/checkout/counter.json', $updatedCounterJson);

    return response()->json(['status' => 'ok', 'message' => 'order has been saved', 'orderCode' => $orderCode , 'date' => $dateISO], 201);
});

Route::get($base_api.'order', function () {
    return "use this url with POST method";
});


Route::get($base_api.'checkout/counter', [CounterController::class, 'getCounter']);

/*
*   FrontEnd Endpoint
*/

Route::get('/{any?}', function() {
    return view('main');
})->where('any', '.*');
