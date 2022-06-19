<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username =  $conn->real_escape_string($_POST['username']);
$result = mysqli_query($conn, "SELECT a.idq,a.username,a.quest,b.nom as filier ,c.nom as matier FROM question a  INNER JOIN filier b on a.idf = b.idf INNER JOIN matier c ON c.idm = a.idm WHERE username = '$username';" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`