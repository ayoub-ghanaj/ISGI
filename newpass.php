
<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$oldpass = $conn->real_escape_string($_POST['oldpass']);
$newpass = $conn->real_escape_string($_POST['newpass']);
$result = mysql_query("SELECT EXISTS(SELECT * FROM users WHERE username = '$username' and passw = '$oldpass') as eixst");

while ($row = mysql_fetch_array($result)) 
{
    $text = $row['eixst'];  
}
if($text == 1)
{
    $result = mysql_query("UPDATE users SET passw = '$newpass' WHERE username = '$username'");
    if(mysqli_query($conn,$result)){
        echo "1";
    }else{
        echo "0";
    }
    
}
else
{
    echo "0";
}
exit();
?>