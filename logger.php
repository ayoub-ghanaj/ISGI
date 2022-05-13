<?php
$con = mysqli_connect("localhost", "root", "", "isgiexams");
$login = $con->real_escape_string($_POST['username']);
$logger = $con->real_escape_string($_POST['pass']); //$connection->real_escape_string($_POST['item']);
$data = array();
$result = mysqli_query($con, "SELECT EXISTS(SELECT username from users WHERE rank = 'Teacher' AND username='".$login."' AND  passw = '".$logger."') as existad;" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
    break;
}

$result = mysqli_query($con, "SELECT EXISTS(SELECT username from users WHERE rank = 'Student   ' AND username='".$login."' AND  passw = '".$logger."') as existus;" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
    break;
}
$result = mysqli_query($con, "CALL sp_sess('$login')" );
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
    break;
}
echo json_encode($data);
exit();

?>
