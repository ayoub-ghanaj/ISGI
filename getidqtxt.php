<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idqtxt =  $conn->real_escape_string($_POST['idqtxt']);
$result = mysqli_query($conn, "SELECT * FROM questiontxt WHERE idqtxt = $idqtxt;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`