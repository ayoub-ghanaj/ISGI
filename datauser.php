<?php
$host="localhost";
$username="root";
$passoword="";
$database="isgiexams";
$conn=mysqli_connect($host,$username,$passoword,$database);
$result=$conn->query("SELECT * FROM users where rank !='Admin'");

?>
<?php while($data =$result->fetch_assoc()):?>

<tr id="<?php echo $data['username']; ?>">
    <td><?php echo $data['username'] ?> </td>
    <td><?php echo $data['passw'] ?> </td>
    <td><?php echo $data['email'] ?> </td>
    <td><?php echo $data['rank'] ?> </td>  
    <td><?php echo $data['sessions'] ?> </td>
    <td><?php echo $data['dated'] ?> </td>
    <td><button type="button" name="button" class="button-3" onclick="deletedatauser('<?php echo $data['username'];?>');">Deleted</button></td>
    <td><button type="button" name="button" class="button-3" onclick="Updateuser('<?php echo $data['username'];?>','<?php echo $data['passw'];?>','<?php echo $data['email'];?>','<?php echo $data['rank'];?>','<?php echo $data['sessions'];?>','<?php echo $data['dated'];?>');">Modifier</button></td>

</tr>

    <?php endwhile;?>

