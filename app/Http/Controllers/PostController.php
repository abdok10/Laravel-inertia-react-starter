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
        return Inertia('Home', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        return inertIa('Create');
    }

    public function store(Request $request)
    {
        $post = $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        Post::create($post);

        return $this->index();
    }

    public function show(Post $post)
    {
        $post = Post::find($post);
        return inertia('Show', ["post" => $post]);
    }

    public function edit(Post $post)
    {
        return inertia('Edit', ["post" => $post]);
    }

    public function update(Request $request, Post $post)
    {
        $validPost = $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        $post->update($validPost);
        return redirect('/')->with('success', 'Post updated successfully');
    }

    public function destroy(Post $post)
    {
        $post->delete();
    
        return redirect('/')->with('message', 'Post deleted successfully');
    }
}
