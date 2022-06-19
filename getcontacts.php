<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$result = mysqli_query($conn, "SELECT contacts  from (SELECT DISTINCT sender as contacts FROM chate WHERE sender != '$username' AND receiver = '$username' UNION SELECT DISTINCT receiver as contacts FROM chate WHERE sender = '$username' AND receiver != '$username') AS contacters" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>