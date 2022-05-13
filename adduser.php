<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$usename = $conn->real_escape_string($_POST['username']);
$rank =  $conn->real_escape_string($_POST['rank']);
$mail = $conn->real_escape_string($_POST['mail']);
$password =  $conn->real_escape_string($_POST['password']);
if($rank == '0'){
    if(mysqli_query($conn, "INSERT INTO users(username,passw,email,rank,loger,sessions) VALUES(\"".$usename."\",'".$password."','".$mail."','Teacher','true',1);
    ")) {
        echo '1';
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
}else{
    if(mysqli_query($conn, "INSERT INTO users(username,passw,email,rank,loger,sessions) VALUES(\"".$usename."\",'".$password."','".$mail."','Student','true',1);
    ")) {
        echo '1';
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
}
mysqli_close($conn);
exit();
?>