<?php

namespace App\Migrations;

use App\Core\Helpers\Storage;

class CreateTableMigration
{
	/**
     * Run the migration.
     * @return String A sql query
     */

	public function up()
	{
		return Storage::get("createTable.sql");
	}

	/**
     * Reverse the migration.
     * @return String A sql query
     */

	public function down()
	{
		return "DROP TABLE `pzpluiDocs`";
	}
}