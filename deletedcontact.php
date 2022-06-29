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
    $idc=$_POST["idc"];
    
    

    

mysqli_query($conn,"DELETE FROM contact WHERE idc='$idc'");

    echo 1;



}