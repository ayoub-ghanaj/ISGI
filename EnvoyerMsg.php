<?php
$host="localhost";
$username="root";
$passoword="";
$database="isgiexams";
$conn=mysqli_connect($host,$username,$passoword,$database);

if(isset($_POST["action"])){
    if($_POST["action"]=="envoyermessage"){
        AjouterMEESAGE();
    }
}

/*"username":username,
        "passw":passw,
        "email":email,
        "rank":rank,
        "loger":loger,
        "sessions":sessions,
        "dated":dated,*/
function AjouterMEESAGE(){
    global $conn;
    $name=$_POST["name"];
    $email=$_POST["email"];
    $message=$_POST["message"];
   
   
   

    
    



if(mysqli_query($conn,"insert into contact(nom,email,message) VALUES('$name','$email','$message')")){
    echo 1;
}

   



}
