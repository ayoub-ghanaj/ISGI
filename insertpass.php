<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username =  $conn->real_escape_string($_POST['username']);
$idxm = $conn->real_escape_string($_POST['idxbat']);
$note = $conn->real_escape_string($_POST['note']);
$pass = $conn->real_escape_string($_POST['pass']);
$oldxm="INSERT INTO passed(username,idbat,note,result) VALUES('$username',$idxm,$note,'$pass');";
if (mysqli_query($conn,$oldxm)) 
{
    echo "1";
}
else
{   
    echo "0";
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
exit();
?>