<?php

namespace App\Models;

use App\Core\App;

class Article
{
	public function __construct(String $title) {
		$this->title = $title;
		$this->dbdata = App::get("database")->sql("SELECT * FROM `articles` WHERE `name` LIKE '{$title}'");
	}

	public function title() {
		return $this->dbdata[0]->name;
	}

	public function section() {
		return $this->dbdata[0]->section;
	}

	public function content() {
		return $this->dbdata[0]->content;
	}

	public function published_at() {
		return $this->dbdata[0]->published_at;
	}

	public function version() {
		return $this->dbdata[0]->version;
	}
}