<?php
//$ques  = $_POST['qes'];
$con = mysqli_connect("localhost", "root", "", "eff");
$check="SELECT * FROM oldexm WHERE code ='$_POST[qes]'";
$rs = mysqli_query($con,$check);
$data = mysqli_fetch_array($rs, MYSQLI_NUM);
$oldxm="INSERT INTO oldexm(code) VALUES('$_POST[qes]')";
if (mysqli_query($con,$oldxm))
{
    echo "0";
}
else
{
    echo "1";
}
exit();
?>