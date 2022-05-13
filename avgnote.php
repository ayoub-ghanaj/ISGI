<?php
$idexam = $_POST['idexam'];
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$data = array();
$result = mysqli_query($conn, "SELECT AVG(note) as avrg FROM passed WHERE idbat = ".$idexam.";" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
$result = mysqli_query($conn, "SELECT (SELECT COUNT(idpass) from passed where idbat = ".$idexam." and result = 'pass')/(SELECT COUNT(idpass) from passed where idbat = ".$idexam." ) * 100 AS dub" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>