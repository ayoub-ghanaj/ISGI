<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$idreq = $conn->real_escape_string($_POST['idreq']);

$result = mysqli_query($conn, "SELECT EXISTS(SELECT * FROM resetrequest WHERE idreq = '$idreq' AND username = '$username' AND valid = 1 ) as resexist" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
if(mysqli_query($conn,"UPDATE resetrequest SET valid = 0 WHERE username='$username' AND idreq='$idreq'")){
  echo json_encode($data);  
}
exit();
?>