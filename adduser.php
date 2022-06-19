<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$usename = $conn->real_escape_string($_POST['username']);
$rank =  $conn->real_escape_string($_POST['rank']);
$mail = $conn->real_escape_string($_POST['mail']);
$password =  $conn->real_escape_string($_POST['password']);
$uniq = uniqid();
if($rank == '0'){
    if(mysqli_query($conn, "INSERT INTO temusers(idtempu,username,passw,email,rank,loger,sessions,confirmed) VALUES('$uniq',\"".$usename."\",'".$password."','".$mail."','Teacher','true',1,'false');
    ")) {
        // Recipient
        $to = $mail;
        // Subject
        $subject = 'This is a verification email';
        // Message
        $message = "<h1>Hi there.</h1> <br> <a href=\"http://localhost:90/EFF/Project/verify.html?id=$uniq\">Click here to verify your account $usename</a>";
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
}else{
    if(mysqli_query($conn, "INSERT INTO temusers(idtempu,username,passw,email,rank,loger,sessions,confirmed) VALUES('$uniq',\"".$usename."\",'".$password."','".$mail."','Student','true',1,'false');
    ")) {
        // Recipient
        $to = $mail;
        // Subject
        $subject = 'This is a verification email';
        // Message
        $message = "<h1>Hi there.</h1> <br> <a href=\"http://localhost:90/EFF/Project/verify.html?id=$uniq\">Click here to verify your account $usename</a>";
        // Headers
        $headers="From:Email Verification ISGI<ISGI@noreply.ma>\r\n";
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