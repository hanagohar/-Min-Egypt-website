<?php 
include('config.php'); 
if(isset($_POST['submit'])){ 
    $username = $_POST['username']; 
    $email = $_POST['email']; 
    $password = $_POST['password']; 
  } 
   
  $sql = "SELECT Email FROM users WHERE Email ='$email'";

  $result = mysqli_query($con,$sql);
  
  if(mysqli_num_rows($result) != 0){
    echo "this email is already taken";
  }else{
    $sql2 = "INSERT INTO users(Username,Email,Password) VALUES('$username','$email','$password')";
    mysqli_query($con,$sql2);
    $sectionPage = 'interface/sectionns/section.php';
    $sectionPage = 'section.html';
    header('Location: ' . $sectionPage);
    

  }
   
?>

