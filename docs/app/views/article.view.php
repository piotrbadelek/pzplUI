<?php /* Compiled from a Blade Template on 19-02-2021 13:25:52 */ ?>
<?php require_once('partials/head.php'); ?>

<h1><?= $article->title() ?></h1>
<p>
	<?php if ($article->published_at()) : ?>
		<i>Published at <?= $article->published_at() ?></i>
	<?php endif; ?>
	Updated on pzplUI <?= $article->version() ?>
</p>
<br>
<?= $article->content() ?>

<?php require_once('partials/footer.php') ?>