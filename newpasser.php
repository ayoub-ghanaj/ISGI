
<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$username = $conn->real_escape_string($_POST['username']);
$newpass = $conn->real_escape_string($_POST['newpass']);
$result = mysqli_query($conn,"SELECT EXISTS(SELECT * FROM users WHERE username = '$username') as eixst");

while ($row = mysqli_fetch_array($result)) 
{
    $text = $row['eixst'];  
}
if($text == 1)
{
    $result = "UPDATE users SET passw = '$newpass' WHERE username = '$username'";
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