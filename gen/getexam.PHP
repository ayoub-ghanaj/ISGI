<?php
$conn = mysqli_connect("localhost", "root", "", "eff");
$result = mysqli_query($conn, "select * from oldexm where idold = 1;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>