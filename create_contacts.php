<?php

	$fname=$_POST['uname'];
	$email=$_POST['email'];
	$phno=$_POST['phone'];
	$gid=$_POST['gid'];

    $uname= $fname.' '.$lname;
	$conn=new mysqli("localhost","root","","contacts_management");
	if($conn->connect_error)
     die("connection failed".$conn->connect_error);

	$sql="INSERT into user_groups(UName,email_id,grp_name,group_id,phno) values ('$uname','$email','college','1204','$phno')";
	if($conn->query($sql))
    echo "successfull";//header('location:contacts.html');
   else
   	echo "failed to enter the data" .$conn->error ;
	
?>