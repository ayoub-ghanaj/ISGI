<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idr =  $conn->real_escape_string($_POST['idr']);
$result = mysqli_query($conn, "select * from respond where idr =$idr;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`