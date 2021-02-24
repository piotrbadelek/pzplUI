<?php

namespace App\Models;

use App\Core\App;

class Viewcount
{
	public function __construct(String $name) {
		$this->name = $name;
		$this->dbdata = App::get("database")->sql("SELECT * FROM `viewcount` WHERE `name` LIKE '{$name}'");
	}

	public function up() {
		$new = $this->dbdata[0]->count + 1;
		App::get("database")->sqle("UPDATE `viewcount` SET `count` = '{$new}' WHERE `viewcount`.`name` = '{$this->name}';");
	}
}