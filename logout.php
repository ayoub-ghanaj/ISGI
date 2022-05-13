<?php
$con = mysqli_connect("localhost", "root", "", "isgiexams");
$sess = $con->real_escape_string($_POST['sess']);
$data = array();
$result = mysqli_query($con, "UPDATE sessionu set stat = 0 where idses = '$sess';" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
    break;
}
echo json_encode($data);
exit();

?>
