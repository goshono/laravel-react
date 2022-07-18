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

    function create(Request $request) {
        $post = new Post();
        $post->name = $request->name;
        $post->content = $request->content;
        $post->save();

        return response($post, 200);
    }

    // 編集画面遷移
    function edit(Request $request) {
        $post = Post::find($request->id);
        return $post;
    }

    // データを更新するためのアクション
    function update(Request $request) {
        $post = Post::find($request->id);
        $post->name = $request->name;
        $post->content = $request->content;
        $post->save();

        $posts = Post::all();
        return $posts;
    }
}
