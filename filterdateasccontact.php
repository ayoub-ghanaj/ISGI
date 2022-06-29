<?php
$host="localhost";
$username="root";
$passoword="";
$database="isgiexams";
$conn=mysqli_connect($host,$username,$passoword,$database);
$result=$conn->query("SELECT * FROM contact order by nom ASC");

?>
<?php while($data =$result->fetch_assoc()):?>

<tr id="<?php echo $data['idc']; ?>">
    <td><?php echo $data['nom'] ?> </td>
    <td><?php echo $data['email'] ?> </td>
    <td><?php echo $data['message'] ?> </td>
    
    
    <td><button type="button" name="button" class="button-3" onclick="deletedatacontact('<?php echo $data['idc'];?>');">Deleted</button></td>
</tr>

    <?php endwhile;?>

