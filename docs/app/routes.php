<?php

$router->get('', 'PagesController@home');
$router->get('article', 'PagesController@article');
$router->get('codeload', 'PagesController@code');
//$router->post('users', 'UsersController@store'); for POSTs