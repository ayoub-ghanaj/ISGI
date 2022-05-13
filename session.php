<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$usename = $conn->real_escape_string($_POST['username']);
$braws =  $conn->real_escape_string($_POST['braws']);
$sesid =  $conn->real_escape_string($_POST['sesid']);
$ip = $conn->real_escape_string($_POST['ip']);
$locat = $conn->real_escape_string($_POST['locat']);
$os =  $conn->real_escape_string($_POST['os']);
$device = $conn->real_escape_string($_POST['device']);
$pass = $conn->real_escape_string($_POST['pass']);
if(mysqli_query($conn, "INSERT INTO `sessionu` (`idses`,`username`, `browser`, `ip`, `location`, `os`, `dateses`, `devicname`, `stat`) VALUES ('$sesid', '$usename', '$braws', '$ip', '$locat', '$os', current_timestamp(), '$device', '1');")) {
    echo '1';
} else {
    echo "Error: " . $sql . "" . mysqli_error($conn);
}

mysqli_close($conn);
?>