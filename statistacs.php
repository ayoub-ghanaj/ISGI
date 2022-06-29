<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$result = mysqli_query($conn, "SELECT c.nom,count(idpass) as counter from passed a  inner join batchexam b on b.idbat = a.idbat inner join matier c on c.idm = b.idm WHERE (DATEDIFF(a.datepassed,CURRENT_DATE()) = 0) GROUP BY c.nom" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`