
var rank = 1;
var username = "";
const result = {};
var str = document.cookie;
var queryString;
$(document).ready(()=>{
    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        $("#err").hide();
        $("#err1").hide();
    });

    //console.log(visitor);
    str = str.split('; ');
    
    for (let i in str) {
        const cur = str[i].split('=');
        result[cur[0]] = cur[1];
        
    }
    //console.log(result);
    
    if(result.trader != undefined && result.code != undefined){
        dbexistsess(result.code+"=").then((data)=>{
            //console.log(data);
            if(JSON.parse(data)[0].existad == '1' ){
                document.cookie = 'temp='+ null +';expires='+new Date(2020,11,13).toUTCString()+'';
                //queryString = "?user=" + result.username + "&code="+ result.code;
                //console.log('go');
                window.location.href = "page.html" //+ queryString;
            }
            else if (JSON.parse(data)[1].existus == '1' ){
                document.cookie = 'temp='+ null +';expires='+new Date(2020,11,13).toUTCString()+'';
                window.location.href = "user.html" 
            }else if(JSON.parse(data)[2].existad == '1' ){
                document.cookie = 'temp='+ null +';expires='+new Date(2020,11,13).toUTCString()+'';
                window.location.href = "admin.html";
            }
        })
    }
    if(result.temp != undefined){
        $("#err").text("verify your email");
        $("#err").show();
    }
    
    $("#btnlog").click(()=>{
        let usernamelog = $("#userlg").val();
        let passlog = $("#passlg").val()
        dblogin( usernamelog,passlog  ).then((data)=>{
            console.log(data)
            let dbval = JSON.parse(data);
            console.log(dbval);
            if(dbval[0].existad == '1' ){
                //alert("kain ")
                dbsecmake(usernamelog,passlog).then((data)=>{
                    console.log(data);
                    //console.log(data + " / " + usernamelog + " / " + coded + " / " + passlog );
                    if(data == '1'){
                        document.cookie = 'trader='+ cookierand +';expires='+new Date(2022,11,13).toUTCString()+'';
                        document.cookie = 'code = '+ encrypted.toString().slice(0,-1)  +';expires='+new Date(2022,11,13).toUTCString()+'';
                        document.cookie = 'temp='+ null +';expires='+new Date(2020,11,13).toUTCString()+'';
                       // queryString = "?user=" + usernamelog + "&code="+ coded;
                         window.location.href = "page.html";
                    }
                })
            }
            else if (dbval[1].existus == '1' ){
                    // user normal
                    dbsecmake(usernamelog,passlog).then((data)=>{
                        //console.log(data);
                        //console.log(data + " / " + usernamelog + " / " + coded + " / " + passlog );
                        if(data == '1'){
                            document.cookie = 'trader='+ cookierand +';expires='+new Date(2022,11,13).toUTCString()+'';
                            document.cookie = 'code = '+ encrypted.toString().slice(0,-1)  +';expires='+new Date(2022,11,13).toUTCString()+'';
                           // queryString = "?user=" + usernamelog + "&code="+ coded;
                             window.location.href = "user.html";
                        }
                    })
            }else if(dbval[2].existad == '1'){
                //alert("raktema")
                dbsecmake(usernamelog,passlog).then((data)=>{
                    //console.log(data);
                    //console.log(data + " / " + usernamelog + " / " + coded + " / " + passlog );
                    if(data == '1'){
                        document.cookie = 'trader='+ cookierand +';expires='+new Date(2022,11,13).toUTCString()+'';
                        document.cookie = 'code = '+ encrypted.toString().slice(0,-1)  +';expires='+new Date(2022,11,13).toUTCString()+'';
                       // queryString = "?user=" + usernamelog + "&code="+ coded;
                         window.location.href = "admin.html";
                    }
                })
            }else{
                $("#err").text("Wrong username or password !");
              
                $("#err").show();
            }
        })
    })
    $('#userlg').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $( "#btnlog" ).trigger( "click" );  
        }
      });
      $('#passlg').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $( "#btnlog" ).trigger( "click" );
        }
      });
   $(".switch__input").change(()=>{
        if($(".switch__input").is(":checked")){
            
           $(".switch__span").text("Teacher");
          // console.log(rank);
        }else{
            $(".switch__span").text("Student");
           // console.log(rank);
        }
       
    })
    $(".switch__icon").click(()=>{
       if(rank != 1){
           rank = 1;
        $('.switch__input').prop('checked', true);
       }else{
           rank = 0;
        $('.switch__input').prop('checked', false);
       }
    })
    $("#btnreg").click(()=>{
        userdoup().then((data)=>{
            console.log(data);
            let exist = JSON.parse(data);
            console.log(exist);
            if(exist[0].exist == "0"){
        if(validateEmail($("#mail").val())){
        dbadduser().then((data)=>{
            console.log(data);
            if(data == "false"){
                $("#err").text("username or mail already used !");
                $("#err").show();
            }else{
                $("#err").hide();
                document.cookie = 'temp='+ true +';expires='+new Date(2022,11,13).toUTCString()+'';
                $("#userlg").val(username);
                $("#signa").trigger("click");
                $("#err").text("Verify your mail !");
                $("#err").show();
            }
       
         })
    }else{
        $("#err").text("Wrong email!");
        $("#err").show();
    }
    }else{
        $("#err").text("username or mail already used !");
                $("#err").show();
    }
    });
    })
   
})
function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

function dbadduser() {
    return new Promise(function(resolve, reject) {
        username = $("#username").val();
        let mailv = $("#mail").val();
        let pass = $("#password").val();
        $.ajax({
            method: "POST",
            url: "adduser.php",
            data: {
                rank : rank.toString(),
                username : username,
                mail : mailv,
                password : pass
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
function getrand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
var cookierand ;
var encrypted;
function dbsecmake(usernameed,pass) {
    var Name = "Unknown OS";
    if (navigator.userAgent.indexOf("Win") != -1) Name = 
      "Windows OS";
    if (navigator.userAgent.indexOf("Mac") != -1) Name = 
      "Macintosh";
    if (navigator.userAgent.indexOf("Linux") != -1) Name = 
      "Linux OS";
    if (navigator.userAgent.indexOf("Android") != -1) Name = 
      "Android OS";
    if (navigator.userAgent.indexOf("like Mac") != -1) Name = 
      "iOS";
      let coded = usernameed ; 
      cookierand = getrand(2000000000000000000,9000000000000000000);
      //alert(cookierand);
       encrypted = CryptoJS.AES.encrypt(coded , cookierand.toString());
      //var decrypted = CryptoJS.AES.decrypt(encrypted, cookierand.toString());
      //var plaintext = decrypted.toString(CryptoJS.enc.Utf8);
      //console.log(encrypted + " / " + decrypted + " / " + plaintext);
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "session.php",
            data: {                      
                username : usernameed,
                braws : visitor.browser.engine.name,
                ip : visitor.ip.address,
                locat : visitor.geo.countryName + " , " + visitor.geo.continentName + " , " + visitor.geo.city + ", ( latitude : "+ visitor.geo.coordinates.latitude+" , longitude : "+ visitor.geo.coordinates.longitude+")",
                os : Name,
                device :  visitor.device.name + " , " + visitor.device.screen.resolution ,
                pass : pass,
                sesid : encrypted.toString()
            }, 
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
                //console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

function dblogin(username , code) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "logger.php",
            data: {
                "username": username,
                "pass": code
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
function dbexistsess(sess) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "sessioncheck.php",
            data: {
                "sess": sess,
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
function userdoup() {
    username = $("#username").val();
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "userdoupchk.php",
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