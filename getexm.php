<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$exam = $conn->real_escape_string($_POST['exam']);
$result = mysqli_query($conn, "SELECT * FROM exam WHERE idexam = '$exam';" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>