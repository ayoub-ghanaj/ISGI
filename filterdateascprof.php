<?php
$host="localhost";
$username="root";
$passoword="";
$database="isgiexams";
$conn=mysqli_connect($host,$username,$passoword,$database);
$result=$conn->query("SELECT * FROM users WHERE rank='Teacher'  order by dated ASC");

?>
<?php while($data =$result->fetch_assoc()):?>

<tr id="<?php echo $data['username'].'etudiant' ?>">
    <td><?php echo $data['username'] ?> </td>
    <td><?php echo $data['passw'] ?> </td>
    <td><?php echo $data['email'] ?> </td>
    <td><?php echo $data['rank'] ?> </td>
    
    <td><?php echo $data['sessions'] ?> </td>
    <td><?php echo $data['dated'] ?> </td>
    
    <td><button type="button" name="button" class="button-3" onclick="deletedataeleve('<?php echo $data['username'];?>');">Deleted</button></td>
    <td><button type="button" name="button" class="button-3" onclick="Updateproffesseur('<?php echo $data['username'];?>','<?php echo $data['passw'];?>','<?php echo $data['email'];?>','<?php echo $data['rank'];?>','<?php echo $data['sessions'];?>','<?php echo $data['dated'];?>');">Modifier</button></td>

</tr>

    <?php endwhile;?>

 