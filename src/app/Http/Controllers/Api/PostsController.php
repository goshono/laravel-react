<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    //
    function index() {
        $posts = Post::all();
        return response()->json($posts, 200);
    }
}
