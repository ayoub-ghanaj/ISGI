<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username =  $conn->real_escape_string($_POST['username']);
$idxm = $conn->real_escape_string($_POST['idxm']);
$exm = $conn->real_escape_string($_POST['exm']);
$batch = $conn->real_escape_string($_POST['batch']);
$count = $conn->real_escape_string($_POST['vari']);
$oldxm="INSERT INTO exam(idexam,code,username,idbat,vari) VALUES('$idxm','$exm','$username',$batch,$count);";
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