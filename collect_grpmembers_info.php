<?php
       $gid=$_POST['cgid'];
	   $data1=array();
		$conn = new mysqli('localhost', 'root', '', 'contacts_management');
		 
		 if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		 } 
		 $sql = "SELECT * FROM user_groups where group_id='$gid' ";
		 $result = $conn->query($sql);
		 if ($result->num_rows > 0) 
		 {
		    
		    while($row = $result->fetch_assoc()) {
		        array_push($data1,array('email_id'=>$row['email_id'],'user_name'=>$row['UName'],'phone'=>$row['phno']));
		    }
		 } else 
		 {
		    echo "0 results";
		 }
		 echo json_encode($data1);
?>