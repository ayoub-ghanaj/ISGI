<?php
$username = $_POST['username'];
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$result = mysqli_query($conn, "SELECT * FROM passed WHERE username = '$username';" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>