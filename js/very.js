$(document).ready(function(){

    var currentUrl = window.location.href;
    let paramaters = (new URL(currentUrl)).searchParams;
    var id = paramaters.get("id");
    //confirm
    //dellet all usernames
    //0 == Teacher
    console.log(id);
    gettemp(id).then(function(data) {;
        let temp = JSON.parse(data);
        console.log(temp);
        if(temp[0].rank == "Teacher"){
            dbadduser(0,temp[0].username,temp[0].email,temp[0].passw).then((data)=>{
                if(data == "1"){
                    deltemps(temp[0].username).then(()=>{
                        window.location.href = "login.html";
                    });
                }
            });
        }else{
            dbadduser(1,temp[0].username,temp[0].email,temp[0].passw).then((data)=>{
                if(data == "1"){
                    deltemps(temp[0].username,temp[0].email).then(()=>{
                        window.location.href = "login.html";
                    });
                }
            });
        }
    });
});
function gettemp(id) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "gettemp.php",
            data: {
                'id' : id
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
function dbadduser( rank,username,mailv,pass) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "adduser2.php",
            data: {
                "rank" : rank,
                "username" : username,
                'mail' : mailv,
                'password' : pass
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
function deltemps(username,email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "deltemps.php",
            data: {
                "username" : username,
                "email": email

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

