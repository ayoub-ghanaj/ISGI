<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$result = mysqli_query($conn, "SELECT count(*) as newbie FROM users WHERE (DATEDIFF(dated,CURRENT_DATE()) = 0)" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`