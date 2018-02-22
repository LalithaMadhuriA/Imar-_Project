<?php
 
$username=$_POST['uname'];
$password=$_POST['lpswd'];
//$password=md5($password);
$conn = new mysqli("localhost", "root", "","contacts_management");


$sql="SELECT Password from users where email_id='$username' AND Password='$password' ";
$query=$conn->query($sql);

if ($query->num_rows==1) {
setcookie("test","x", time() + (86400 * 30), "/");
setcookie("username",$username, time() + (86400 * 30), "/");
header('Location: contacts.html');

} else {
$error = "Username or Password is invalid";
header('Location:login.html');
}
$conn->close(); 


?>
