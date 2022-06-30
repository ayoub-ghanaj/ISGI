<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$mat = $conn->real_escape_string($_POST['mat']);
$fil = $conn->real_escape_string($_POST['fil']);
$result = mysqli_query($conn, "SELECT idbat FROM batchexam WHERE idf = $fil AND idm = $mat;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>