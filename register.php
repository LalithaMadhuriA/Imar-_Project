<?php
	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$email=$_POST['emailid'];
	$aadh=$_POST['aadno'];
	$phno=$_POST['phno'];
	$pswd=$_POST['pswrd'];

    $uname= $fname.' '.$lname;
	$conn=new mysqli("localhost","root","","contacts_management");
	if($conn->connect_error)
     die("connection failed".$conn->connect_error);

    //$pswd=md5($pswd);

	$sql="INSERT into users(UName,email_id,Aadhar,Phno,Password) values ('$uname','$email','$aadh','$phno','$pswd')";
	if($conn->query($sql))
    echo "successfull";
header('location:contacts.html');
   else
   	echo "failed to enter the data" .$conn->error ;
	
?>