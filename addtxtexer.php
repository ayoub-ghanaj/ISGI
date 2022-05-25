<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$mat = $conn->real_escape_string($_POST['mat']);
$fil = $conn->real_escape_string($_POST['fil']);
$txt = $conn->real_escape_string($_POST['txt']);
$user= $conn->real_escape_string($_POST['user']);
$oldxm="INSERT INTO questiontxt(txt,idf,idm,username) VALUES('$txt',$fil,$mat,'$user');";
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