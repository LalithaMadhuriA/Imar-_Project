<?php
$email=$_POST['con_email'];
$conn=new mysqli("localhost","root","","contacts_management");echo "delete db";
if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		 } 
  		 $sql = " DELETE FROM user_groups WHERE email_id='$email' ";
		 $result = $conn->query($sql);
		 if($result==true)
		 	echo 'true';
		 
?>