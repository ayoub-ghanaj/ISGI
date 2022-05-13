<?php

$conn=mysqli_connect("localhost","root","","isgiexams");
$username =  $conn->real_escape_string($_POST['username']);
$result=mysqli_query($conn,"SELECT * from passed WHERE username='$username';");
$data=array();
while($row=mysqli_fetch_assoc($result)){
  $data[]=$row;

}
echo json_encode($data); 


?>