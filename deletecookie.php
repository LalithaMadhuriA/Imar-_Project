<?php    
  $p1=$_GET['p1'];
  $p2=$_GET['p2'];  
  $p1=trim($p1);   
  $p2=trim($p2);   
  unset($_COOKIE[$p1]);       
  unset($_COOKIE[$p2]);
  setcookie($p1,"0", time()-3600,"/");        
  setcookie($p2,"0", time()-3600,"/");    
?>   
<html>
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<style>
img.avatar
{
  height: 100px;
  width: 100px;
}
body
{
  background: url(medical1.jpg) no-repeat center center fixed;
 /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;*/
  background-size: 1400px 850px;
}
.container
{
  margin-top: 100px;
  padding: 16px;

}

input[type=text], input[type=password] {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 15%;
}

button:hover {
    opacity: 0.8;
}

.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

.imgcontainer {
    text-align: center;
    margin: 2px 0 10px 50px;
}
span.psw {
    float: right;
    padding-top: 16px;
}
/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .cancelbtn {
       width: 100%;
    }
}
</style>
<body>
<div class="container">
<!--<div class="row logout" align="center"><h1>You are logged out</h1></div>-->
<div class="row">
<div class="col-xs-2"></div>
<div class="col-xs-8">
  <script type="text/javascript">
    window.location.assign("login.html");
  </script>
</div>
<div class="col-xs-2">
</div>
</div>
</div>
</body>
</html>