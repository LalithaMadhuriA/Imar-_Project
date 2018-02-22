<?php
$name=$_POST["cname"];
$email=$_POST["cmail"];
$phno=$_POST["cphno"];

echo "dnvadv";
$conn=new mysqli("localhost","root","","contacts_management");
//echo "add_con db";
if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		 } 
  		 $sql = " INSERT INTO user_groups VALUES  ('$name','$email','facebook','1201','$phno') ";
		 $result = $conn->query($sql);
		 if($result==true)
		 	echo 'true';
		 
?>