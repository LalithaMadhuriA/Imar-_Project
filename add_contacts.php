<?php

$jsondata= json_decode(stripslashes(file_get_contents("php://input")));

$conn = new mysqli('localhost', 'root', '', 'contacts_management');
if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		 } 
  for($i=0;i<sizeof($jsondata);$i++)
  	{ 
  		$umail=$jsondata->us[0]->email;
  		if($umail){
  		 $sql = "SELECT * FROM users where UName='$umail'";
		 $result = $conn->query($sql);
		 $row = $result->fetch_assoc();
		 $inst="INSERT into users_group(UName,email_id,grp_name,grp_id,phno) values ('$row['UName']','$row['email_id']','$grp_name',$grp_id,'$row['phno']')";
		}
	}

?>