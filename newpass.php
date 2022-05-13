<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$password =  $conn->real_escape_string($_POST['oldpass']);
$newpass = $conn->real_escape_string($_POST['newpass']);
if(mysqli_query($conn, "UPDATE  users SET passw = '$newpass' where username = '$username' and passw = '$password';")) {
    echo '1';
} else {
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
mysqli_close($conn);
exit();
?>