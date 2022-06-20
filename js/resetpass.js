
$(document).ready(()=>{
    $("#resetpass").click(()=>{
        let username = $("#userlg").val()
        resetpass(username).then(data=>{
            console.log(data)
            if(data == "1"){
                window.location.href = "login.html"
            }
        })
    })
})
function resetpass(username) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "resetpass.php",
            data: {
                "username": username,
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