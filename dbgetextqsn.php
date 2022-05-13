<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idf = $conn->real_escape_string($_POST['idf']);
$idm = $conn->real_escape_string($_POST['idm']);
$result = mysqli_query($conn, "select * from questiontxt where idf = $idf AND idm = $idm ;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>