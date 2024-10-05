<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->paginate(5);
        return Inertia('Posts/Home', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        return inertIa('Posts/Create');
    }

    public function store(Request $request)
    {
        $post = $request->validate([
            'title' => 'required|min:3',
            'content' => 'required',
        ]);
        Post::create($post);

        return $this->index();
    }

    public function show(Post $post)
    {
        $post = Post::find($post);
        return inertia('Posts/Show', ["post" => $post]);
    }

    public function edit(Post $post)
    {
        return inertia('Posts/Edit', ["post" => $post]);
    }

    public function update(Request $request, Post $post)
    {
        $validPost = $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        $post->update($validPost);
        return to_route('posts.index')->with('success', 'Post updated successfully');
    }

    public function destroy(Post $post)
    {
        $post->delete();
    
        return to_route('posts.index')->with('message', 'Post deleted successfully');
    }
}
