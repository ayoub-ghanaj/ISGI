<?php
$host="localhost";
$username="root";
$passoword="";
$database="isgiexams";
$conn=mysqli_connect($host,$username,$passoword,$database);

if(isset($_POST["action"])){
    if($_POST["action"]=="delete"){
        delete();
    }
}

function delete(){
    global $conn;
    $id=$_POST["username"];
    
    

    

mysqli_query($conn,"DELETE FROM users WHERE username='$id'");

    echo 1;



}