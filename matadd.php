<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$mat = $conn->real_escape_string($_POST['mat']);
$oldxm="INSERT INTO matier(nom) VALUES('$mat');";
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