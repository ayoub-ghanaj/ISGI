<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$result = mysqli_query($conn, "SELECT idpfp,link FROM pfpu WHERE username = '$username' ORDER by idpfp DESC LIMIT 1 ;" );
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
echo json_encode($data);
exit();
?>