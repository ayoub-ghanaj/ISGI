<?php
$host="localhost";
$username="root";
$passoword="";
$database="isgiexams";
$conn=mysqli_connect($host,$username,$passoword,$database);
$result=$conn->query("SELECT COUNT(*) as totalep FROM users WHERE rank='Teacher'");
?>
 <?php while($data =$result->fetch_assoc()):?>

<span>
 <?php  echo $data["totalep"];?>
</span>

    <?php endwhile;?>

