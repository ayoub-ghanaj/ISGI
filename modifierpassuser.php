<?php
$host="localhost";
$username="root";
$passoword="";
$database="isgiexams";
$conn=mysqli_connect($host,$username,$passoword,$database);

if(isset($_POST["action"])){
    if($_POST["action"]=="modifierus"){
        modifierus();
    }
}

/*"username":username,
        "passw":passw,
        "email":email,
        "rank":rank,
        "loger":loger,
        "sessions":sessions,
        "dated":dated,*/
function modifierus(){
    global $conn;
    $username=$_POST["username"];
    $passw=$_POST["passw"];
 
   // ($username+" /"+$passw+" /"+$email+" /"+$rank+" /"+$loger+" /"+$sessions+" /"+$dated);
   

    
    

    

mysqli_query($conn," UPDATE users SET passw ='$passw'  WHERE   username='$username'");

    echo 1;



}