<?php
$exam = $_POST['exam'];
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$result = mysqli_query($conn, "SELECT * FROM batchexam WHERE idbat = $exam;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>