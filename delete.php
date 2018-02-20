<?php

$uname=$_POST['uname'];
$conn=new sqli("localhost","root","","contacts_management");
if($conn->connect_error)
die('connection failed to establish');

$sql="DELET FROM users_group where UName='$uname' ";

$result=$conn->query($sql);


?>

