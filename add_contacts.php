<?php

$jsondata1=json_decode(stripslashes(file_get_contents("php://input")));
$grp_name="facebook";
$grp_id="1201";
$conn = new mysqli('localhost', 'root', '', 'contacts_management');
if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		 } 
		 //foreach ($jsondata1 as $jsondata) {
  /*for($i=0;i<sizeof($jsondata);$i++)
  	{ 
  		$umail=$jsondata->us[0]->email;
  		if($umail){
  		 $sql = "SELECT * FROM users where UName='$umail'";
		 $result = $conn->query($sql);
		 $row = $result->fetch_assoc();*/$phno="9652312368"; $email_id="alinmar.com";$UName="Lalitha";
		 $inst="INSERT into user_groups(UName,email_id,grp_name,grp_id,phno) values ('$UName','$email_id','$grp_name',$grp_id,'$phno')";
		}
	}

?>