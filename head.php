<?php
$exam = $_POST['exam'];
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$result = mysqli_query($conn, "select b.idbat ,b.header ,b.code , c.nom as matier,d.nom as filier from exam a INNER join batchexam b on a.idbat = b.idbat INNER JOIN matier c on c.idm = b.idm INNER JOIN filier d on d.idf = b.idf where  a.idexam = '$exam' ;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>