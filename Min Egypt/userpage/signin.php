<?php 
session_start();
include('config.php');

$email = mysqli_real_escape_string($con,$_POST['email']);
$password = mysqli_real_escape_string($con,$_POST['password']);

$sql = "SELECT * FROM users WHERE Email='$email' AND Password ='$password'";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);

if(is_array($row) && !empty($row)){
  // $_SESSION['vaild'] = $row['username'];
  $sectionPage = 'interface/sectionns/section.php';
  $_SESSION['email'] = $row['email'];
  $_SESSION['password'] = $row['password'];
  $sectionPage = 'section.html';
  header('Location: ' . $sectionPage);
  exit();
}else{
  echo "wrong email or password";
}
?>
