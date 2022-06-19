<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username =  $conn->real_escape_string($_POST['username']);
$idxm = $conn->real_escape_string($_POST['idxbat']);
$note = $conn->real_escape_string($_POST['note']);
$pass = $conn->real_escape_string($_POST['pass']);
$exam = $conn->real_escape_string($_POST['exam']);
$unsrs = $conn->real_escape_string($_POST['unsrs']);
$id = uniqid();
$oldxm="INSERT INTO passed(idpass,username,idbat,note,result) VALUES('$id','$username',$idxm,$note,'$pass');";
if (mysqli_query($conn,$oldxm)) 
{
    $oldxm="INSERT INTO passedhistory(idpass,exam,unsrs) VALUES('$id','$exam','$unsrs');";
    if(mysqli_query($conn,$oldxm))
    {
        echo "1";
    }else{
        echo "0";
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
}
else
{   
    echo "0";
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
exit();
?>