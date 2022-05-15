<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$result = mysqli_query($conn, "SELECT a.idbat,a.code,a.username,a.vari,b.nom as filier ,c.nom as matiere FROM batchexam a INNER JOIN filier b on a.idf = b.idf INNER JOIN matier c on c.idm = a.idm WHERE username = '".$username."'" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>