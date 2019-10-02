<?php

$mysqli = new mysqli('localhost','root','','firemap');

if ($mysqli->connect_error) {
    die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$results = $mysqli->query("SELECT password FROM users WHERE login = '".$_POST['login']."'");

while($row = $results->fetch_assoc()) {
	if($row["password"] == $_POST['password']){
    echo '<app-menu><div class="icons"><img src="app/images/docs.svg" height="40" alt="Документы" onclick="cwindow(\'450px\',\'450px\',\'d0\');"></div><div class="icons"><img src="app/images/newdoc.svg" height="40" alt="Загрузка документа" onclick="cwindow(\'450px\',\'450px\',\'d1\');"></div></app-menu><app-windows></app-windows><script src="app/js/app.js"></script>';
	}
	else
	{
    echo "0";
	}
}


$results->free();

$mysqli->close();
?>