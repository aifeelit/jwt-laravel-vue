<?php
/*
|--------------------------------------------------------------------------
| Single Page Application Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return View::make('index');
});