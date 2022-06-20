<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$usename = $conn->real_escape_string($_POST['username']);
$sql = "SELECT email FROM users WHERE username = '$usename'"; 
$email = "" ;
$result = mysqli_query($conn, $sql);  
 while($row = mysqli_fetch_array($result))  
 {  
    $email = $row["email"];
 }

$uniq = uniqid();
if($email != ''){
    if(mysqli_query($conn, "INSERT INTO resetrequest(idreq,username) VALUES('$uniq','$usename');")){
        $to = $email;
        // Subject
        $subject = 'This is a reset password';
        // Message
        $message = "<h1>Hi there.</h1> <br> <a href=\"http://localhost:90/EFF/Project/passchange.html?id=$usename&uniq=$uniq\">Click here to reset your password $usename</a>";
        // Headers
        $headers="From:The Sender Name<ISGI@noreply.ma>\r\n";
        $headers.="Reply-To:ayoubfwd@gmail.com\r\n";
        $headers .="Content-type: text/html\r\n";
        // Send email
        mail($to,$subject,$message,$headers);
        echo "1";   
    } else {
        echo "false";
    }   
}
mysqli_close($conn);
exit();
?>