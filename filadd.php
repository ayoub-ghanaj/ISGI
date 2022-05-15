<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$fil = $conn->real_escape_string($_POST['fil']);
$oldxm="INSERT INTO filier(nom) VALUES('$fil');";
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