<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$sender = $conn->real_escape_string($_POST['sender']);
$oldxm="update chate set stats = 2 where ( sender = '$sender') AND (receiver = '$username');";
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