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
            $("#name1").hide();
            $("#name2").show();
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
            $("#name2").hide();
            $("#name1").show();
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
    var str;
    const result = {};
    $(document).ready(()=>{
        resizes();
        $('#pfpe1').click(function(){ 
            $('.fileget').trigger('click');
         });
         $('#pfpe').click(function(){ 
            $('.fileget').trigger('click');
         });
         $('.fileget').change(()=>{
            console.log(username + "mchat");
            file = $('.fileget')[0].files;
            dbimgupdate().then((data)=>{
                console.log(data);
                let ff = JSON.parse(data);
                if(ff.error== '0'){
                    reloadpfp();
                }
            })
            //console.log(file);
         });
        $(".changepass").click(()=>{
            let oldpass = $("#oldP").val();  ;
            let newpass = $("#newP").val(); ;
            let conf = $("#confirmP").val();
            if(newpass == conf && oldpass != '' && newpass !=''){
                passchange(newpass,oldpass).then((data)=>{
                    if(data == '1'){
                        $("#oldP").val('');
                        $("#newP").val('');
                        $("#confirmP").val('');
                        // // $("#passchange").modal("hide");
                        ////////alert("Password changed successfully");
                    }else{
                        ////////alert("Old password is incorrect");
                    }
                })
            }
        });
        $(".dblogout").click(()=>{
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
                if(JSON.parse(data)[2].existad == '1' ){
                    
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



        $("#name2").hide();
        $("#menu2").hide();
        $("#menu1").show();
        $(".main_content").css('margin-top', '50px'); 
        $(".home").show();
        $(".eleves").hide();
        $(".rec").hide();
        $(".contact").hide();
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
        $(document).on('click', '#home', function() {
            $(".home").show();
            $(".eleves").hide();
            $(".rec").hide();
            $(".menu").hide();
            $(".contact").hide();
        })
        $(document).on('click', '#eleves', function() {
            $(".home").hide();
            $(".eleves").show();
            $(".rec").hide();
            $(".menu").hide();
            $(".contact").hide();
        })
        $(document).on('click', '#rec', function() {
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").show();
            $(".menu").hide();
            $(".contact").hide();
        })
        $(document).on('click', '#menu', function() {
            $(".home").hide();
                $(".eleves").hide();
                $(".rec").hide();
                $(".menu").show();
                $(".contact").hide();
        })
        $(document).on('click', '#contactid', function() {
    
            $(".home").hide();
                $(".eleves").hide();
                $(".rec").hide();
                $(".menu").hide();
                $(".contact").show();
        })
    })
    function checkersess(){
        if(result.code == undefined || result.trader == undefined){
            window.location.href = "login.html";
        }
        if(result.trader != undefined && result.code != undefined){
           // console.log(result.trader + " / " + result.code )
            dbexistsess(result.code+"=").then((data)=>{
                //console.log(data);
                if(JSON.parse(data)[2].existad == '1' ){
    
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
           $("#name1").hide();
           $("#name2").show();
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



         //data user
$(document).ready(function(){
    setTimeout(() => {
        switcher(mode);
    }, 10);
    setTimeout(() => {
        switcher(mode);
    }, 430);
    $.ajax({
    type:"GET",
    url:"datauser.php",
    dataType:"Html",
    success:function(data){
    $('#mydata').html(data);
    }
    
    });
    
    
    
    });
    //dataetudiant
    $(document).ready(function(){
    $.ajax({
    type:"GET",
    url:"dataeleve.php",
    dataType:"Html",
    success:function(data){
    $('#dataetud').html(data);
    }
    
    });
    
    
    
    });
    
    //dataprofesseur
    $(document).ready(function(){
    $.ajax({
    type:"GET",
    url:"dataproffeseur.php",
    dataType:"Html",
    success:function(data){
    $('#dataprof').html(data);
    }
    
    });
    
    
    
    });
    //deleteproffesseur
    function deletedataeleve(ide){
        $(document).ready(function(){
    $.ajax({
    url:'deleteduser.php',
    type:'POST',
    data:{ 
        "username":ide,
        "action":"delete"
    },
    success:function(response){
        if(response==1){
            var e=ide+"proffesseur"
            ////alert("hada etudiant");

            document.getElementById(e).style.display="none";
            
            
        }
        else if(response==0){
            //alert("ma to9afche");
        }
    }
    
    });       
        });
    }
    
       
    //delete user
    function deletedatauser(id){
        $(document).ready(function(){
    $.ajax({
    url:'deleteduser.php',
    type:'POST',
    data:{ 
        "username":id,
        "action":"delete"
    },
    success:function(response){
        if(response==1){
            
            document.getElementById(id).style.display="none";
            $('.alertDeleteuser').css({'display':'none'});
            $('.alertDeleteuser').css({'display':'block'});
            $('.alertDeleteuser').css({'background-color':'#ff9800'});
            $('.alertDeleteuser').html("Supprimer Avec Secces");
            $("#nraj3o").trigger("click");
        }
        else if(response==0){
            //alert("ma to9afche");
        }
    }
    
    });       
        });
    }
    
    function deletedataeleve(ide){
        $(document).ready(function(){
    $.ajax({
    url:'deleteduser.php',
    type:'POST',
    data:{ 
        "username":ide,
        "action":"delete"
    },
    success:function(response){
        if(response==1){
            var e=ide+"etudiant"
            ////alert('supprimer');
            ////alert(e);
            document.getElementById(e).style.display="none";
            $('.alertsuppprof').css({'display':'none'});
            $('.alertsuppprof').css({'display':'block'});
            $('.alertsuppprof').css({'background-color':'#04AA6D'});
            $('.alertsuppprof').html("suprrimer Avec Secces");
        }
        else if(response==0){
            //alert("ma to9afche");
        }
    }
    
    });       
        });
    }


    //data totaleuser
$(document).ready(function(){
    $.ajax({
    type:"GET",
    url:"datatotaleuser.php",
    dataType:"Html",
    success:function(data){
    $('#datatotaleuser').html(data);
    }
    
    });
    
    
    
    });

         //data totaleproffeseur
$(document).ready(function(){
    $.ajax({
    type:"GET",
    url:"datatotalproffeseur.php",
    dataType:"Html",
    success:function(data){
    $('#datatotalproffeseur').html(data);
    }
    
    });
    
    
    
    });





    
    

    //data totaleetudiant
$(document).ready(function(){
    $.ajax({
    type:"GET",
    url:"datatotaleetudiant.php",
    dataType:"Html",
    success:function(data){
    $('#datatotaleetudiant').html(data);
    }
    
    });
    
    
    
    });


    $(document).ready(function(){
        
//referche data proffeseur
$( "#refreshprofesseur" ).click(function() {
    
    $(document).ready(function(){
    $.ajax({
    type:"GET",
    url:"dataproffeseur.php",
    dataType:"Html",
    success:function(data){
    $('#dataprof').html(data);
    }
    
    });
    
    
    
    });

});

//serach proffesseur
$( "#serchbuttonproffeseur" ).click(function() {
    var value=$("#serchatextproffesseur").val()
    $.ajax({
    url:'searchdataproff.php',
    type:'POST',
    data:'request='+value,
    
    beforeSend:function(){
    $("#dataprof").html('Working on...')
    },
    success:function(data){
        $("#dataprof").html(data);
    }
    });
    
    
    
      
    });


//serachetudiant
$( "#serchbuttonetudian" ).click(function() {
    var value=$("#serchatextetudiant").val()
    $.ajax({
    url:'serchedataetudiant.php',
    type:'POST',
    data:{'request':value},
    
    beforeSend:function(){
    $("#dataetud").html('Working on...')
    },
    success:function(data){
        $("#dataetud").html(data);
    }
    });
    
    
    
      
    });
    //referche data etudiant
    $( "#refreshetudiant" ).click(function() {
        
        $(document).ready(function(){
        $.ajax({
        type:"GET",
        url:"dataeleve.php",
        dataType:"Html",
        success:function(data){
        $('#dataetud').html(data);
        }
        
        });
        
        
        
        });
    
    });


      //searchuser
      $( "#serchbutton" ).click(function() {
        var value=$("#serchatext").val()
        $.ajax({
        url:'serchedata.php',//user
        type:'POST',
        data:'request='+value,
        
        beforeSend:function(){
        $("#mydata").html('Working on...')
        },
        success:function(data){
            $("#mydata").html(data);
        }
        });
        
        
        
          
        });
        //refreshdata user
        
        $( "#nraj3o" ).click(function() {
            $(document).ready(function(){
            $.ajax({
            type:"GET",
            url:"datauser.php",
            dataType:"Html",
            success:function(data){
            $('#mydata').html(data);
            }
            
            });
            
            
            
            });
        
        });


//cancel button md
$("#btncancelbox").click(function(){
$('.modifieruserbox').css({'display':'none'});
});

//btn modifier user
$("#btnmdbox").click(function(){
    //alert("jj");
    $(document).ready(function(){
       
       var username= $("#mdboxuser").val();
      
       var passw=$("#mdboxpass").val();
       var email= $("#mdboxemail").val();
       var rank=$("#mdboxrank").val();
 //var loger= $("#mdboxloger").val();
       var sessions=$("#mdboxsession").val();
       var dated= $("#mdboxdatted").val();
       //alert(username+" /"+passw+" /"+email+" /"+rank+" /"+" /"+sessions+" /"+dated);
    $.ajax({
    url:'modifierdatauser.php',
    type:'POST',
    data:{ 
        "username":username,
        "passw":passw,
        "email":email,
        "rank":rank,
        //"loger":loger,
        "sessions":sessions,
        "dated":dated,
        "action":"modifierus"
    },
    success:function(response){
        if(response==1){
            $('.alertmodifieruser').css({'display':'none'});
            $('.alertmodifieruser').css({'display':'block'});
            $('.alertmodifieruser').css({'background-color':'#04AA6D'});
            $('#alertmodifieruser').text("Modifier Avec Secces");
            $("#nraj3o").trigger("click");
            $("#refreshprofesseur").trigger("click");
            $("#refreshetudiant").trigger("click");

           // $("#btncancelboxetud").trigger("Click");
        }
        else if(response==0){
            $('.alertmodifieruser').css({'display':'none'});
            $('.alertmodifieruser').css({'display':'block'});
            $('.alertmodifieruser').css({'background-color':'#04AA6D'});
            $('#alertmodifieruser').text("Problem");
        }
    }
    
    });       
        });


});



//cancel button md
$("#btncancelboxpro").click(function(){
    $('.modifierprobox').css({'display':'none'});
});


//btn modifier PROF
$("#btnmdboxpro").click(function(){
    $(document).ready(function(){
      // //alert("ma3ert malo");
       var username= $("#mdboxuserpro").val();
      
       var passw=$("#mdboxpasspro").val();
       var email= $("#mdboxemailpro").val();
       var rank=$("#mdboxrankpro").val();
       //var loger= $("#mdboxlogerpro").val();
       var sessions=$("#mdboxsessionpro").val();
       var dated= $("#mdboxdattedpro").val();
       //alert(username+" /"+passw+" /"+email+" /"+rank+" /"+sessions+" /"+dated);
    $.ajax({
    url:'modifierdatauser.php',
    type:'POST',
    data:{ 
        "username":username,
        "passw":passw,
        "email":email,
        "rank":rank,
       // "loger":loger,
        "sessions":sessions,
        "dated":dated,
        "action":"modifierus"
    },
    success:function(response){
        if(response==1){
            $('.alertmodifierprof').css({'display':'none'});
            $('.alertmodifierprof').css({'display':'block'});
            $('.alertmodifierprof').css({'background-color':'#04AA6D'});
            $('.alertmodifierprof').html("Modifier Avec Secces");
        }
        else if(response==0){
            $('.alertmodifierprof').css({'display':'none'});
            $('.alertmodifierprof').css({'display':'block'});
            $('.alertmodifierprof').css({'background-color':'#f44336'});
            $('.alertmodifierprof').html("Erreur");
        }
    }
    
    });       
        });


});

//cancel button md etudiant
$("#btncancelboxetud").click(function(){
    $('.modifieretudiantbox').css({'display':'none'});
});


//btn modifier etudiant
$("#btnmdboxetud").click(function(){
    $(document).ready(function(){
      
       var username= $("#mdboxuseretud").val();
      
       var passw=$("#mdboxpassetud").val();
       var email= $("#mdboxemailetud").val();
       var rank=$("#mdboxranketud").val();
      // var loger= $("#mdboxlogeretud").val();
       var sessions=$("#mdboxsessionetud").val();
       var dated= $("#mdboxdattedetud").val();
       //alert(username+" /"+passw+" /"+email+" /"+rank+"  /"+sessions+" /"+dated);
    $.ajax({
    url:'modifierdatauser.php',
    type:'POST',
    data:{ 
        "username":username,
        "passw":passw,
        "email":email,
        "rank":rank,
        //"loger":loger,
        "sessions":sessions,
        "dated":dated,
        "action":"modifierus"
    },
    success:function(response){
        if(response==1){
            $('.alertmodifieretd').css({'display':'none'});
            $('.alertmodifieretd').css({'display':'block'});
            $('.alertmodifieretd').css({'background-color':'#04AA6D'});
            $('.alertmodifieretd').html("Modifier Avec Secces");
        }
        else if(response==0){
            //alert("il ya un problem");
        }
    }
    
    });       
        });


});







    });//lkher



    
    
//show info modifier etudiant
function Updateeleve(username,passw,email,rank,sessions,dated){
    $(document).ready(function(){
      
        $('.modifieretudiantbox').css({'display':'block'});
      //alert(username +passw +email+rank+sessions+dated);
////alert("ma3ert malo");
      $("#mdboxuseretud").val(username);
      $("#mdboxpassetud").val(passw);
      $("#mdboxemailetud").val(email);
      $("#mdboxranketud").val(rank);
     // $("#mdboxlogeretud").val(loger);
      $("#mdboxsessionetud").val(sessions);
      $("#mdboxdattedetud").val(dated);

    });
}

  //show info modifier user
  function Updateuser(username,passw,email,rank,sessions,dated){
    $(document).ready(function(){
        $('.modifieruserbox').css({'display':'block'});
     //alert(username +passw +email+rank+sessions+dated)
//alert("ma3ert malo");
      $("#mdboxuser").val(username);
      $("#mdboxpass").val(passw);
      $("#mdboxemail").val(email);
      $("#mdboxrank").val(rank);
     // $("#mdboxloger").val(loger);
      $("#mdboxsession").val(sessions);
      $("#mdboxdatted").val(dated);

    });
}

//show info modifier proffesuer
function Updateproffesseur(username,passw,email,rank,sessions,dated){
    $(document).ready(function(){
      ////alert("ma3ert malo");
        $('.modifierprobox').css({'display':'block'});
      ////alert(username +passw +email+rank+sessions+dated);

      $("#mdboxuserpro").val(username);
      $("#mdboxpasspro").val(passw);
      $("#mdboxemailpro").val(email);
      $("#mdboxrankpro").val(rank);
     // $("#mdboxlogerpro").val(loger);
      $("#mdboxsessionpro").val(sessions);
      $("#mdboxdattedpro").val(dated);

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

function passchange(newpass,oldpass) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "newpass.php",
            data: {
                "newpass": newpass,
                "username" : username,
                "oldpass" : oldpass
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

function reloadpfp(){
    dbimg(username).then((data)=>{
        let datj = JSON.parse(data);
        //console.log(datj[0])
        if(datj.length >0){
            $("#pfpe").attr("src", "uploads/"+datj[0].link);
            $("#pfpe1").attr("src", "uploads/"+datj[0].link);
            $("#rela").attr('href', "uploads/"+datj[0].link);
        }
    });
}



// chartjs
var darr1=[];
var darr2=[];
var colar=[];
$(document).ready(()=>{
statistacs1().then((data)=>{
    let statjsn = JSON.parse(data);
    console.log(statjsn);
    darr2 = [];
    darr1 = [];
    for(let i =0 ; i< statjsn.length ; i++){
        darr1.push(statjsn[i].nom);
        darr2.push(parseInt(statjsn[i].counter));
        colar.push(rgbarandom());
    }
    chart1(darr1,darr2,colar);
})
statistacs2().then((data)=>{
    let statjsn = JSON.parse(data);
    chart2(statjsn[0].newbie);
})
statistacs3().then((data)=>{
    let statjsn = JSON.parse(data);
    console.log(statjsn)
    let val = (((statjsn[0].dub)/(statjsn[1].allp))*100);
    chart3(val);
})
});


function chart1(arr1,arr2,color){
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: arr1,
        datasets: [{
          data: arr2,
          backgroundColor: color,
          borderColor: color,
          borderWidth: 1
        }]
      },
      options: {
           //cutoutPercentage: 40,
        responsive: false,
    
      }
    });
}
function chart2(val){
    let colora = rgbarandom();
    var ctx = document.getElementById("myChart1");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['','New Users'],
        datasets: [{
          label: 'New Users count ',
          data: [0,val],
          backgroundColor: [colora],
          borderColor: [colora],
          borderWidth: 1
        }]
      },
      options: {
           //cutoutPercentage: 40,
        responsive: false,
    
      }
    });
}
function chart3(S){
    let s = S.toFixed(2);
    let F = (100-s).toFixed(2);
    let coloraS = rgbarandom();
    let coloraF = rgbarandom();
    var ctx = document.getElementById("myChart2");
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Fail','Succes'],
        datasets: [{
          label: 'succes rate',
          data: [F,s],
          backgroundColor: [coloraF,coloraS],
          borderColor: [coloraF,coloraS],
          borderWidth: 1
        }]
      },
      options: {
           //cutoutPercentage: 40,
        responsive: false,
    
      }
    });
}
function rgbarandom(){
    let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    return rgb = `rgb(${r},${g},${b})`;
}

function statistacs1() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "statistacs.php",
            data: {
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
function statistacs2() {

    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "statistacs1.php",
            data: {
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
function statistacs3() {

    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "statistacs2.php",
            data: {
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