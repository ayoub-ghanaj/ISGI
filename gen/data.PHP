<?php
$idm  = $_POST['idm'];
$idf  = $_POST['idf'];
$conn = mysqli_connect("localhost", "root", "", "eff");
$result = mysqli_query($conn, "select a.idq,a.quest from question a INNER JOIN matier b on b.idm = a.idm INNER join filier c on c.idf = a.idf where c.nom = \"".$idf."\" and b.label= \"".$idm."\";" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>