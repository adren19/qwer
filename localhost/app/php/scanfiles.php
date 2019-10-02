<?php

function myscandir($dir, $sort=0)
{
	$list = scandir($dir, $sort);
	
	if (!$list) return false;
	
	if ($sort == 0) unset($list[0],$list[1]);
	else unset($list[count($list)-1], $list[count($list)-1]);
	return $list;
}

$dir = '../FILES';
$files1 = myscandir($dir);
//$files2 = myscandir($dir, 1);

echo '<table class="files"><tr><th>Название файла</th><th>Загрузка</th></tr>';


foreach ($files1 as $value) {
	echo '<tr>';
    echo '<td>'.$value.'</td>';
	echo '<td><a href="app/FILES/'.$value.'" download>Скачать</a></td>';
	echo '</tr>';
  }
echo '</table>';


?>