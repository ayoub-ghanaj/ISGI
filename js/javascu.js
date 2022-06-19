
// #BY AYOUB GHANAJ
$(function() {
    $("li").click(function(e) {
      e.preventDefault();
      $("li").removeClass("active");
      $(this).addClass("active");
    });
  });
  var mode = 1;
  function switcher(int){
      if(int ==1){
          mode = 2;
          //$("#menu1").hide();
          //$("#menu2").show();
          $(".menu-text").hide();
          $('.sidebar').css('width', '50px'); 
          $(".sidebar").animate({
              width: "50"
          })
          $(".main_content").css('margin-left', '200px'); 
          $(".uppermenu").css('padding-left', '200px');
          $(".topperval").css('margin-right', '200px');
          $(".img-menu").css('margin-left', '20px');
          $(".main_content").animate({
              marginLeft: "-=150px"
          }, 400);
          $(".img-menu").animate({
              marginLeft: "-=20px"
          }, 400);
          $(".topperval").animate({
              marginRight: "-=150px"
          }, 400);
          $(".uppermenu").animate({
              paddingLeft: "-=150px"
          }, 400);
          setTimeout(function() {
              $(".main_content").css('margin-left', '50px'); 
              $(".uppermenu").css('padding-left', '50px');
              $(".topperval").css('margin-right', '50px');
              $(".img-menu").css('margin-left', '0px');
             }, 420);
          //$(".main_content").css('margin-left', '50px'); 
          //$(".uppermenu").css('margin-left', '50px');
          //$(".topperval").css('margin-right', '50px');
         // $(".sidebar").css('width', '50px');
          $(".sidebar").css('padding-top', '15px');
          $("#name1").hide();
          $("#name2").show();
          $(".logo").css('margin-left', '8px');
          $(".logo").css('margin-top', '5px');
          $(".logo").css('margin-bottom', '13px');
      }
      else
      {
          mode = 1
          $('.side').css('width', '200px');
          $(".sidebar").animate({
              width: "200"
          })
          $(".main_content").css('margin-left', '50px'); 
          $(".uppermenu").css('padding-left', '50px');
          $(".topperval").css('margin-right', '50px');
          $(".img-menu").css('margin-left', '0px');
          $(".main_content").animate({
              marginLeft: "+=150px"
          }, 450);
          $(".img-menu").animate({
              marginLeft: "+=20px"
          }, 400);
          $(".topperval").animate({
              marginRight: "+=150px"
          }, 450);
          $(".uppermenu").animate({
              paddingLeft: "+=150px"
          }, 400);
          setTimeout(function() {
                  $(".main_content").css('margin-left', '200px'); 
                  $(".uppermenu").css('padding-left', '200px');
                  $(".topperval").css('margin-right', '200px');
                  $(".img-menu").css('margin-left', '20px');
             }, 470);
          //$(".main_content").css('margin-left', '200px'); 
          //$(".uppermenu").css('margin-left', '200px');
          //$(".topperval").css('margin-right', '200px');
          //$(".menu-text").show();
          //$(".sidebar").css('width', '200px');
          $(".sidebar").css('padding-top', '28px');
          setTimeout(function() {
              $("#name2").hide();
              $("#name1").show();
              $(".menu-text").show();
             }, 300);
         // $("#name2").hide();
        //  $("#name1").show();
          $(".logo").css('margin-left', '28px');
          $(".logo").css('margin-top', '0px');
          $(".logo").css('margin-bottom', '18px');
      }
  }

  $(document).ready(()=>{
      resizes();
      $("#name2").hide();
      $("#menu2").hide();
      $("#menu1").show();
      $(".main_content").css('margin-top', '50px'); 
      $(".home").show();
      $(".eleves").hide();
      $(".rec").hide();
      $(".menu").hide();
      $(".logo").click(()=>{
          if(igo){
              igo = false;
              switcher(mode);
         setTimeout(function() {
             igo = true;
            }, 500);
          }
          
      })
      /*
      $("#logo2").click(()=>{
          $("#menu2").hide();
          $("#menu1").show();
          $('#side').css('width', '200px');
          $(".main_content").css('margin-left', '200px'); 
          $(".uppermenu").css('margin-left', '200px');
          $(".topperval").css('margin-right', '200px');
      })*/
  })
  $(document).on('click', '#home', function() {
      $(".home").show();
      $(".eleves").hide();
      $(".rec").hide();
      $(".menu").hide();
  })
  $(document).on('click', '#eleves', function() {
      $(".home").hide();
      $(".eleves").show();
      $(".rec").hide();
      $(".menu").hide();
  })
  $(document).on('click', '#rec', function() {
      $(".home").hide();
      
      $(".eleves").hide();
      $(".rec").show();
      $(".menu").hide();
  })
  $(document).on('click', '#menu', function() {
      $(".home").hide();
          $(".eleves").hide();
          $(".rec").hide();
          $(".menu").show();
  })
  var w = window.innerWidth;
  function resizes(){
       w = window.innerWidth;
  if(w>900){
      if(igo && mode == 2){
          igo = false;
     switcher(2);
     setTimeout(function() {
         igo = true;
        }, 500);
      }
  }
  else{
      
     if(igo && mode == 1){
         switcher(1);
         igo = false;
         setTimeout(function() {
             igo = true;
            }, 500);
     }
    
  } 
  }
  var igo=true;
  window.onresize = function(){
       w = window.innerWidth;
       if(w>900){
           if(igo && mode == 2){
               igo = false;
          switcher(2);
          setTimeout(function() {
              igo = true;
             }, 500);
           }
       }
       else{

          if(igo && mode == 1){
              switcher(1);
              igo = false;
              setTimeout(function() {
                  igo = true;
                 }, 500);
          }
         
       } 
      }
var str;
const result = {};
$(document).ready(()=>{
    $('#pfpe1').click(function(){ 
        $('.fileget').trigger('click');
     });
     $('.fileget').change(()=>{
        console.log(username + "mchat");
        file = $('.fileget')[0].files;
        dbimgupdate().then((data)=>{
            console.log(data);  
        })
        //console.log(file);
     });
    $("#logoutbtn").click(()=>{
        dblogout(result.code+"=").then((data)=>{
            document.cookie = 'trader=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
            document.cookie = 'code=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
            window.location.href = "login.html";
        })
            document.cookie = 'trader=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
            document.cookie = 'code=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
            window.location.href = "login.html";

    })
    str = document.cookie;

    str = str.split('; ');
    for (let i in str) {
        const cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }

    if(result.code == undefined || result.trader == undefined){
        window.location.href = "login.html";
    }
    if(result.trader != undefined && result.code != undefined){
        //console.log(result.trader + " / " + result.code )
        dbexistsess(result.code+"=").then((data)=>{
            //console.log(data);
           // console.log(JSON.parse(data));
            if(JSON.parse(data)[1].existus == '1' ){

                code = result.code+"=";
                let decrypted = CryptoJS.AES.decrypt(code.toString(),result.trader);
                let plaintext = decrypted.toString(CryptoJS.enc.Utf8);
                username = plaintext;
                dbimg(username).then((data)=>{
                    let datj = JSON.parse(data);
                    //console.log(datj[0])
                    if(datj.length >0){
                        $("#pfpe").attr("src", "uploads/"+datj[0].link);
                        $("#pfpe1").attr("src", "uploads/"+datj[0].link);
                        $("#rela").attr('href', "uploads/"+datj[0].link);
                    }
                });


                console.log(username);
                getmypasses(username).then((data)=>{
                    console.log(data);
                    var jsn=JSON.parse(data);
                    console.log(jsn);
                    for(let i = 0 ; i<jsn.length ; i++)
                    if(jsn[i].result == 'pass'){
                    $("#data").append(`
                    <tr>
                   <td>${jsn[i].idbat}</td>
                   <td >${jsn[i].idpass}</td>
                   <td>${jsn[i].note}</td>
                   <td> Reussie</td>
                   <td>${jsn[i].datepassed}</td>
                   <td><button class="myBtn"  id="idpass${jsn[i].idpass}">Show</button></td>
                    </tr>
                    `)
                    $(`#idpass${jsn[i].idpass}`).click(()=>{
                        document.cookie = 'exahys='+jsn[i].idpass+';time=2020;expires='+new Date(2028,11,13).toUTCString()+'';
                        window.open('http://localhost:90/EFF/Project/quizhistory.html');
                    });
                    }else{
                        $("#data").append(`
                    <tr>
                   <td>${jsn[i].idbat}</td>
                   <td>${jsn[i].idpass}</td>
                   <td>${jsn[i].note}</td>
                   <td> Fail</td>
                   <td>${jsn[i].datepassed}</td>
                   <td><button class="myBtn"  id="idpass${jsn[i].idpass}">Show</button></td>
                    </tr>
                    `)
                    $(`#idpass${jsn[i].idpass}`).click(()=>{
                        document.cookie = 'exahys='+jsn[i].idpass+';time=2020;expires='+new Date(2028,11,13).toUTCString()+'';
                        window.open('http://localhost:90/EFF/Project/quizhistory.html');
                    });
                    }
                    
                })


                setInterval(function(){
                    result.code = undefined ;
                     result.trader  = undefined;
                    str = document.cookie;
                    str = str.split('; ');
                    for (let i in str) {
                        const cur = str[i].split('=');
                        result[cur[0]] = cur[1];
                        
                    }
                    checkersess();
                    if(result.done == "true"){
                        location.reload(true);
                        document.cookie = 'done=false;expires='+new Date(2020,11,13).toUTCString()+'';
                    }
                    //console.log('done');
                    }, 1000);
                }}
                )
            }
            
    $("#showquiz").click(()=>{
        $("#divshow").show()
    });
    $("#hidequiz").click(()=>{
        $("#divshow").hide();
    });
    $("#lunch").click(()=>{
        let val = $("#ixmid").val();
        if(val !=""){
        document.cookie = 'batch='+val+';expires='+new Date(2026,11,13).toUTCString()+'';
        document.cookie = 'exam='+val+';expires='+new Date(2026,11,13).toUTCString()+'';
        window.open('http://localhost:90/EFF/Project/quiz.html');
        }
    });
})

function checkersess(){
    if(result.code == undefined || result.trader == undefined){
        window.location.href = "login.html";
    }
    if(result.trader != undefined && result.code != undefined){
       // console.log(result.trader + " / " + result.code )
        dbexistsess(result.code+"=").then((data)=>{
            //console.log(data);
            if(JSON.parse(data)[1].existus == '1' ){

            }else{
                document.cookie = 'trader=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
                document.cookie = 'code=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
                window.location.href = "login.html";
            }
        })
    }
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
               // console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

// function getmypass(username) {
//     return new Promise(function(resolve, reject) {
//         $.ajax({
//             method: "POST",
//             url: "userdata.php",
//             data: {
//                 "username": username
//             },
//             success: function(data) {
//                 resolve(data) // Resolve promise and go to then()
//             },
//             error: function(err) {
//                // console.log(err)
//                 reject(err) // Reject the promise and go to catch()
//             }
//         });
//     });
//   }




    
    const targetDiv = document.getElementById("divshow");
    const btnshow = document.getElementById("showquiz");
    const btnhide = document.getElementById("hidequiz");





    document.getElementById("myBtn").onclick = function() {checkForm()};
    function checkForm()
   {
    var oldP=document.getElementById("oldP").value;
    var newP=document.getElementById("newP").value;
    var confirmP =document.getElementById("confirmP").value;

    if(oldP!=""&&newP!=""&&confirmP!="")
    {
      if(oldP!=newP)
      {
        if(newP==confirmP)
         {
          
          document.getElementById("message").innerHTML="Modifier Avec secces"
          document.getElementById("message").style.color="green";
          return true;
         }
         else
          {
           
            
            document.getElementById("message").innerHTML="Confirm password is not same as you new password."
          document.getElementById("message").style.color="red";
          return false;
          }
      }
      else
     {
        document.getElementById("message").innerHTML=" This Is Your Old Password,Please Provide A New Password"
          document.getElementById("message").style.color="red";
      
      return false;
     }
    }
    else
    {
        document.getElementById("message").innerHTML=" All Fields Are Required"
          document.getElementById("message").style.color="red";
     
     return false;
    }
}
$(document).ready(function() {
  $('.btn').on('click', function() {
    $('.file').trigger('click');
  });

  $('.file').on('change', function() {
    var fileName = $(this)[0].files[0].name;    
    $('#file-name').val(fileName);
  });
})
function dblogout(sess) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "logout.php",
            data: {
                "sess": sess,
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
function getmypasses() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "getupasses.php",
            data: {
                "username": username,
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
function dbimg(usernamee) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "imgget.php",
            data: {
                "username": usernamee
            },
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
               // console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}
function dbimgupdate() {

    return new Promise(function(resolve, reject) {
        if(file.length > 0){
            let form_data = new FormData();
            form_data.append('username', username);
            form_data.append('my_image', file[0]);
            $.ajax({
                url: 'imgupload.php',
                type: 'post',
                data: form_data,
                contentType: false,
                processData: false,
                success: function(res){
                    resolve(res)
                },
                error: function(err) {
                    //console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
         
        }else {
           $("#errorMs").text("Please select an image.");
        }
    });
}