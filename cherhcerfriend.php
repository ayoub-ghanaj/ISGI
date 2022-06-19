<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$val = $conn->real_escape_string($_POST['val']);
$username = $conn->real_escape_string($_POST['username']);
$result = mysqli_query($conn, "SELECT * from users where username like '%$val%' and username != '$username';" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>