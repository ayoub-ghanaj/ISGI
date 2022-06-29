<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$result = mysqli_query($conn, "SELECT count(*) as dub FROM passed WHERE result = 'pass' AND (DATEDIFF(datepassed,CURRENT_DATE()) = 0)" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
$result = mysqli_query($conn, "SELECT count(*) as allp FROM passed WHERE (DATEDIFF(datepassed,CURRENT_DATE()) = 0)" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`