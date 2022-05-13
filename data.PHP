<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idm  = $conn->real_escape_string($_POST['idm']);
$idf  = $conn->real_escape_string($_POST['idf']);
//$result = mysqli_query($conn, "select a.idq,a.quest from question a INNER JOIN matier b on b.idm = a.idm INNER join filier c on c.idf = a.idf where c.nom = \"".$idf."\" and b.label= \"".$idm."\";" );
$result = mysqli_query($conn, "select a.idq,a.quest from question a WHERE a.idf = $idf AND a.idm = $idm;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>