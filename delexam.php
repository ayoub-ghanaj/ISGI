<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idexe = $conn->real_escape_string($_POST['idexe']);
$result = "DELETE FROM exam WHERE idexam = '$idexe' ;";
if(mysqli_query($conn,$result)){
    echo "1";
}else{
    echo "0";
}
exit();
?>