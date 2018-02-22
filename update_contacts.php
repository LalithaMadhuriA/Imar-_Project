<?php
echo "db";
$uname=$_POST['cname'];
$umail=$_POST['cemail'];
$phno=$_POST['cphno'];
echo $phno."</br>";
$conn=new mysqli("localhost","root","","contacts_management");
echo "update php";
if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		 } 
  		 $sql = " UPDATE user_groups SET phno='$phno', UName='$uname' where email_id='$umail' ";
		 $result = $conn->query($sql);
		 if($result==true)
		 	echo 'contact updated';
		 
?>