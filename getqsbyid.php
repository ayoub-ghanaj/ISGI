<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$idq =  $conn->real_escape_string($_POST['idq']);
$result = mysqli_query($conn, "select * from question where idq ='$idq';" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>`