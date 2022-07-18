<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function(){
    Route::get('posts', 'App\Http\Controllers\Api\PostsController@index');
    Route::post('post/create', 'App\Http\Controllers\Api\PostsController@create');
    Route::post('post/edit', 'App\Http\Controllers\Api\PostsController@edit');
    Route::post('post/update', 'App\Http\Controllers\Api\PostsController@update');
});