<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$txt = $conn->real_escape_string($_POST['txt']);
$sendto = $conn->real_escape_string($_POST['sendto']);
$username= $conn->real_escape_string($_POST['username']);
$oldxm="INSERT INTO chate(sender,receiver,message) VALUES('$username','$sendto','$txt');";
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