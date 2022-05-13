<?php
$conn = mysqli_connect("localhost", "root", "", "isgiexams");
$usename = $conn->real_escape_string($_POST['username']);
$mat =  $conn->real_escape_string($_POST['mat']);
$fil = $conn->real_escape_string($_POST['fil']);
$ques =  $conn->real_escape_string($_POST['ques']);
$res1 =  $conn->real_escape_string($_POST['res1']);
$res1v=  $conn->real_escape_string($_POST['res1v']);
$res2 =  $conn->real_escape_string($_POST['res2']);
$res2v=  $conn->real_escape_string($_POST['res2v']);
$res3 =  $conn->real_escape_string($_POST['res3']);
$res3v=  $conn->real_escape_string($_POST['res3v']);
$res4 =  $conn->real_escape_string($_POST['res4']);
$res4v=  $conn->real_escape_string($_POST['res4v']);
$id = uniqid();
if($res3 != '' && $res4 !='' && $res1 != '' && $res2 !='' ){
    if(mysqli_query($conn, "INSERT INTO question(idq,username,quest,idf,idm) VALUES('$id','$usename','$ques',$fil,$mat);")) {
        if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res1',$res1v);")) {
            if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res2',$res2v);")) {
                if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res3',$res3v);")) {
                    if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res4',$res4v);")) {
                        echo '1';
                    } else {
                        echo "Error: " . $sql . "" . mysqli_error($conn);
                    }
                } else {
                    echo "Error: " . $sql . "" . mysqli_error($conn);
                }
            } else {
                echo "Error: " . $sql . "" . mysqli_error($conn);
            }
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
}else if ($res3 != '' ){
    if(mysqli_query($conn, "INSERT INTO question(idq,username,quest,idf,idm) VALUES('$id','$usename','$ques',$fil,$mat);")) {
        if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res1',$res1v);")) {
            if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res2',$res2v);")) {
                if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res3',$res3v);")) {
                    echo '1';
                } else {
                    echo "Error: " . $sql . "" . mysqli_error($conn);
                }
            } else {
                echo "Error: " . $sql . "" . mysqli_error($conn);
            }
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
}else if ($res4 != '' ){
    if(mysqli_query($conn, "INSERT INTO question(idq,username,quest,idf,idm) VALUES('$id','$usename','$ques',$fil,$mat);")) {
        if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res1',$res1v);")) {
            if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res2',$res2v);")) {
                if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res4',$res4v);")) {
                    echo '1';
                } else {
                    echo "Error: " . $sql . "" . mysqli_error($conn);
                }
            } else {
                echo "Error: " . $sql . "" . mysqli_error($conn);
            }
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
}
else if($res3 != '' && $res4 !=''){
    if(mysqli_query($conn, "INSERT INTO question(idq,username,quest,idf,idm) VALUES('$id','$usename','$ques',$fil,$mat);")) {
        if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res3',$res3v);")) {
            if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res4',$res4v);")) {
                echo '1';
            } else {
                echo "Error: " . $sql . "" . mysqli_error($conn);
            }
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
}
else{
    if(mysqli_query($conn, "INSERT INTO question(idq,username,quest,idf,idm) VALUES('$id','$usename','$ques',$fil,$mat);")) {
        if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res1',$res1v);")) {
            if(mysqli_query($conn, "INSERT INTO respond(idq,chois,qcm) VALUES('$id','$res2',$res2v);")) {
                echo '1';
            } else {
                echo "Error: " . $sql . "" . mysqli_error($conn);
            }
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
}
mysqli_close($conn);
exit();
?>