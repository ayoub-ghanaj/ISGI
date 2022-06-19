<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$mat = $conn->real_escape_string($_POST['mat']);
$fil = $conn->real_escape_string($_POST['fil']);
$exm = $conn->real_escape_string($_POST['exm']);
$user= $conn->real_escape_string($_POST['user']);
$barem = $conn->real_escape_string($_POST['barem']);
$oldxm="INSERT INTO examings(username,idf,idm,exam,barem) VALUES('$user',$fil ,$mat,'$exm',$barem);";
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