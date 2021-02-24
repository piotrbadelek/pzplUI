@extends('head')

<main>
	<h1>{{ $article->title() }}</h1>
	<p>
		@if ($article->published_at())
			<i>Published at {{ $article->published_at() }}</i>
		@endif
		Avalible since {{ $article->version() }}
	</p>
	
	{{ $article->content() }}	
</main>

@extends('footer')