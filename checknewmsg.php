<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$result = mysqli_query($conn, "SELECT EXISTS(SELECT * FROM chate WHERE (receiver = '$username' )and stats = 0) as notif" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
$result = mysqli_query($conn, "SELECT COUNT(idmsg) as count FROM chate WHERE receiver = '$username' and stats = 0;" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>
