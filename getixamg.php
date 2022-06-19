<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idexe =  $conn->real_escape_string($_POST['idexe']);
$result = mysqli_query($conn, "SELECT * from examings where idexe = $idexe;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`