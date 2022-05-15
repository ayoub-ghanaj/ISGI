<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idpass = $conn->real_escape_string($_POST['idpass']);
if(mysqli_query($conn, "DELETE FROM passed WHERE idpass = ".$idpass.";")) {
    echo '1';
} else {
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
mysqli_close($conn);
exit();
?>