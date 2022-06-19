<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$sender = $conn->real_escape_string($_POST['sender']);
$start = $conn->real_escape_string($_POST['start']);
$result = mysqli_query($conn, "SELECT * from chate where (sender = '$username' or sender = '$sender') AND (receiver = '$sender' or receiver  = '$username') ORDER BY idmsg DESC limit  $start, 10" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>