<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username  = $conn->real_escape_string($_POST['username']);

$result = mysqli_query($conn, "SELECT COUNT(batchexam.idbat) as counts from batchexam where batchexam.username = \"".$username."\" ");
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
$result = mysqli_query($conn, "SELECT COUNT(a.idpass) as counts from passed a WHERE a.idpass in(SELECT a.idpass FROM passed a INNER JOIN batchexam b on a.idbat = b.idbat where b.username = \"".$username."\"  )");
while ($row = mysqli_fetch_object($result))
{   
    array_push($data, $row);
}
$result = mysqli_query($conn, "SELECT COUNT(a.idpass) as counts from passed a WHERE a.idpass in(SELECT a.idpass FROM passed a INNER JOIN batchexam b on a.idbat = b.idbat where b.username =\"".$username."\" AND a.result = \"pass\")");
while ($row = mysqli_fetch_object($result))
{   
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>