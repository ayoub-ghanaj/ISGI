<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$exam = $conn->real_escape_string($_POST['exam']);

$result = mysqli_query($conn, "SELECT b.idpass,a.username,b.note,b.result,b.datepassed,d.nom  as filier,e.nom  as matier FROM users a INNER JOIN passed b ON a.username = b.username INNER JOIN batchexam c on c.idbat = b.idbat INNER JOIN filier d on d.idf = c.idf INNER JOIN matier e on e.idm = c.idm   WHERE b.idpass IN (SELECT idpass FROM passed where idbat = $exam) ORDER BY b.datepassed" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>