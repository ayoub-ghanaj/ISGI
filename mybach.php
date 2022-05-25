<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$exam = $conn->real_escape_string($_POST['exam']);
$result = mysqli_query($conn, "select b.header ,b.code , c.nom as matier,d.nom as filier from  batchexam b INNER JOIN matier c on c.idm = b.idm INNER JOIN filier d on d.idf = b.idf where  b.idbat = $exam ;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>