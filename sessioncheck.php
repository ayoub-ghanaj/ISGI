<?php
$con = mysqli_connect("localhost", "root", "", "isgiexams");
$sess = $con->real_escape_string($_POST['sess']);
$data = array();
$result = mysqli_query($con, "SELECT EXISTS(SELECT stat FROM `sessionu` a  INNER JOIN users b on a.username = b.username WHERE b.rank = 'Teacher' AND  a.idses = '$sess' AND a.stat = '1') as existad;" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
    break;
}
$result = mysqli_query($con, "SELECT EXISTS(SELECT stat FROM `sessionu` a  INNER JOIN users b on a.username = b.username WHERE b.rank = 'Student' AND  a.idses = '$sess' AND a.stat = '1') as existus;" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
    break;
}
$result = mysqli_query($con, "SELECT EXISTS(SELECT stat FROM `sessionu` a  INNER JOIN users b on a.username = b.username WHERE b.rank = 'Admin' AND  a.idses = '$sess' AND a.stat = '1') as existad;" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
    break;
}
echo json_encode($data);
exit();

?>
