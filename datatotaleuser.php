<?php
$host="localhost";
$username="root";
$passoword="";
$database="isgiexams";
$conn=mysqli_connect($host,$username,$passoword,$database);
$result=$conn->query("SELECT COUNT(*)as m FROM users WHERE rank != 'Admin'");



?>
 <?php while($data =$result->fetch_assoc()):?>

<span>
 <?php  echo $data["m"];?>
</span>

    <?php endwhile;?>

