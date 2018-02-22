<?php
	
					$gid=$_POST['gid'];
    				$gname=$_POST['gname'];
    				$owner_email=$_COOKIE['username'];    				
                    
    				$conn = new mysqli('localhost', 'root', '', 'contacts_management');
    				// Check connection
    				if ($conn->connect_error) 
    				{
       					die("Connection failed: " . $conn->connect_error);
    				} 
    				$sql = "insert into group_inf values('$owner_email','$gid','$gname')";
    				$result = $conn->query($sql);
    				if($result==true)
    				{
    					echo "<h4>user created successfully</h4>";	
    				}	
    				else
    				{
    					echo "<h4>Registration failed</h4>";	
    				}	

?>