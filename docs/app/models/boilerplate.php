<?php

namespace App\Models;

use App\Core\App;

class Boilerplate
{
	public function __construct() {
		$this->dbdata = App::get("database")->selectAll("templates");
	}

	public function getAll() {
		return $this->dbdata;
	}
}