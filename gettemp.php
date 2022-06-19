<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idtempu =  $conn->real_escape_string($_POST['id']);
$result = mysqli_query($conn, "SELECT * FROM temusers WHERE idtempu = '$idtempu';" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`