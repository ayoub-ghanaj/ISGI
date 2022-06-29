$(document).ready(function(){

    var currentUrl = window.location.href;
    let paramaters = (new URL(currentUrl)).searchParams;
    var id = paramaters.get("id");
    var uniq = paramaters.get("uniq");
    $("#changepass").click(function(){
        var pass = $("#pass").val();
        var conf = $("#passconf").val();
        if(pass == conf && pass != ""){
            gettemp(id,uniq).then((data)=>{
                //console.log(data);
                let jsnb = JSON.parse(data);
               // console.log(jsnb)
                if(jsnb[0].resexist == '1'){
                    passchange(id,pass).then((data)=>{
                        //console.log(data);
                        //alert(data.length);
                        if(data.trim() == '1'){
                            alert("Password changed");
                            window.location.href = "login.html";
                        }
                    })
                }else{
                    window.location.href = "home.html";
                }
            })
        }
    })
    //confirm
    //dellet all usernames
    //0 == Teacher
    
    
});
function gettemp(id,idreq) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "checkrespass.php",
            data: {
                'username' : id,
                "idreq":idreq
            }, 
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
                console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}
function passchange(username,newpass) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "newpasser.php",
            data: {
                "newpass": newpass,
                "username" : username,
            },
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
               // //console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}