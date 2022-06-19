<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$sender = $conn->real_escape_string($_POST['sender']);
$result = mysqli_query($conn, "SELECT * FROM chate WHERE sender = '$sender' AND receiver = '$username' AND stats = 0;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>