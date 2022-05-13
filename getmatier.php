<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$result = mysqli_query($conn, "select * from matier" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>