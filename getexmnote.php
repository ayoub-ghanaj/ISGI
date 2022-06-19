<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idpass =  $conn->real_escape_string($_POST['idpass']);
$result = mysqli_query($conn, "SELECT * FROM passed WHERE idpass = '$idpass';" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`