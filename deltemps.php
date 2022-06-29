<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$usename = $conn->real_escape_string($_POST['username']);
$email = $conn->real_escape_string($_POST['mail']);
if(mysqli_query($conn, "DELETE FROM temusers where username = '$usename' OR  email = '$email'")) {
    echo '1';
} else {
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
mysqli_close($conn);
exit();
?>