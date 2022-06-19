<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$usename = $conn->real_escape_string($_POST['username']);
if(mysqli_query($conn, "DELETE FROM temusers where username = '$usename'")) {
    echo '1';
} else {
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
mysqli_close($conn);
exit();
?>