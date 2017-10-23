<?php
	header('Content-type:text/html;charset=utf8');
	$mysql=new mysqli('localhost','root','','wuif1707',3306);//3306 端口号
	$mysql->query('set names utf8');
	if($mysql->connect_errno){
		echo '数据库连接失败，失败信息' .$mysql->connect_errno;
		exit;
	}
	$sql="select * from students";  //sql语句
	$result=$mysql->query($sql);
	$data=$result->fetch_all(MYSQL_ASSOC);// 把它变成一个结果集     MYSQL_ASSOC=1
	echo json_encode($data);
	// var_dump($data);
	
?>

