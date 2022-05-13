<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$exm = $conn->real_escape_string($_POST['code']);
$batch = $conn->real_escape_string($_POST['batch']);
$count = $conn->real_escape_string($_POST['vari']);
$oldxm="UPDATE batchexam SET code = '$exm' , vari = $count  where idbat = $batch ";
if (mysqli_query($conn,$oldxm)) 
{
    echo "1";
}
else
{   
    echo "0";
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
exit();
?>
