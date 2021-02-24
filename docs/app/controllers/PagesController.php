<?php

namespace App\Controllers;

use App\Models\Article;
use App\Models\Boilerplate;
use App\Models\Viewcount;
use App\Core\Forms\Forms;

class PagesController
{
	public function home()
	{
		$count = new Viewcount("frontpage");
		$count->up();
		$article = new Article("Welcome");
		$boilerplates = new Boilerplate();
		return view('index', [
			"article" => $article,
			"boilerplate" => $boilerplates->getAll()
		]);
	}

	public function article()
	{
		Forms::validate([
			"title" => ["required", "min:3", "max:12"]
		], function () {
			\Ignite(412);
		});
		$article = new Article($_GET["title"]);
		return view("article", [
			"article" => $article
		]);
	}

	public function code()
	{
		if ($_GET["format"] == "zip" || $_GET["format"] == "tarxz" || $_GET["format"] == "7z" || $_GET["format"] == "demo") {
			$count = new Viewcount($_GET["name"]);
			$count2 = new Viewcount($_GET["format"]);
			$count->up();
			$count2->up();
		} else {
			\Ignite(406);
		}

		if ($_GET["format"] == "demo") {
			redirect("assets/templates/{$_GET["name"]}/index.html");
		} else if ($_GET["format"] == "zip") {
			redirect("assets/templates/{$_GET["name"]}/codeload.zip");
		} else if ($_GET["format"] == "tarxz") {
			redirect("assets/templates/{$_GET["name"]}/codeload.tar.xz");
		} else if ($_GET["format"] == "7z") {
			redirect("assets/templates/{$_GET["name"]}/codeload.7z");
		}
	}
}
