<?php
$idq  = $_POST['idq'];
$conn = mysqli_connect("localhost", "root", "", "eff");
$result = mysqli_query($conn, "SELECT * FROM respond where idq = ".$idq);
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>