<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idqmg =  $conn->real_escape_string($_POST['idqmg']);
$result = mysqli_query($conn, "SELECT * FROM questionimg WHERE idqmg = $idqmg;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();

?>`