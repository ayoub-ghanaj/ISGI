    //Laravel


// #BY AYOUB GHANAJ
$(function() {
    $("li").click(function(e) {
      e.preventDefault();
      $("li").removeClass("active");
      $(this).addClass("active");
    });
  });
  var w = window.innerWidth;
  var file ;
  var file1 ;
  var file2 ;
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
          $(".main-grid").css('padding-left', '200px');
          $(".uppermenu").css('padding-left', '200px');
          $(".chat").css('width', 'calc(65% - 130px)');
         // $("#overlap").css('padding-right', '200px');
         // $(".topperval").css('margin-right', '200px');
          $(".img-menu").css('margin-left', '20px');
          $(".main_content").animate({
              marginLeft: "-=150px"
          }, 400);
          
          $(".img-menu").animate({
              marginLeft: "-=20px"
          }, 400);
         // $(".topperval").animate({
             // marginRight: "-=150px"
         // }, 400);
          $(".uppermenu").animate({
              paddingLeft: "-=150px"
          }, 400);
          $(".chat").animate({
            width: "+=96px"
        }, 400);
        //  $("#overlap").animate({
         //   paddingRight: "-=150px"
        //}, 400);
          setTimeout(function() {
              $(".main_content").css('margin-left', '50px'); 
            
              $(".uppermenu").css('padding-left', '50px');
             // $(".topperval").css('margin-right', '50px');
              $(".img-menu").css('margin-left', '0px');
             }, 420);
            // $("#overlap").css('padding-right', '50px');
             
          //$(".main_content").css('margin-left', '50px'); 
          //$(".uppermenu").css('margin-left', '50px');
          //$(".topperval").css('margin-right', '50px');
         // $(".sidebar").css('width', '50px');
            $("#name1").hide();
            $("#name2").show();
          $(".sidebar").css('padding-top', '5px'); 
           $(".menu-text").hide();
           $(".chat").css('width', 'calc(65% - 34px)');
          $(".logo").css('margin-left', '1px');
          $(".logo").css('margin-top', '0px');
          $(".main-grid").css('padding-left', '50px');
            //$(".maingrid").css('padding-top', '50px');
          $(".logo").css('margin-bottom', '2px');
      }
      else
      {  
          mode = 1
          $('.side').css('width', '200px');
          $(".sidebar").animate({
              width: "200"
          })
          $(".main_content").css('margin-left', '50px'); 
          $(".main-grid").css('padding-left', '50px');
          $(".chat").css('width', 'calc(65% - 34px)');
          $(".uppermenu").css('padding-left', '50px');
         // $(".topperval").css('margin-right', '50px');
        // $("#overlap").css('padding-right', '50px');
          $(".img-menu").css('margin-left', '0px');
          $(".main_content").animate({
              marginLeft: "+=150px"
          }, 450);
          
          $(".img-menu").animate({
              marginLeft: "+=20px"
          }, 400);
        //  $(".topperval").animate({
        //      marginRight: "+=150px"
         // }, 450);
         $(".chat").animate({
            width: "-=96px"
        }, 400);
          $(".uppermenu").animate({
              paddingLeft: "+=150px"
          }, 400);
        //   $("#overlap").animate({
        //     paddingRight: "+=150px"
        // }, 400);
          setTimeout(function() {
                  $(".main_content").css('margin-left', '200px');
                  
                  $(".uppermenu").css('padding-left', '200px');
                 // $("#overlap").css('padding-right', '200px');
            //      $(".topperval").css('margin-right', '200px');
                  $(".img-menu").css('margin-left', '20px');
                  
                  //width: calc(65% - 130px);
             }, 470);
          //$(".main_content").css('margin-left', '200px'); 
          //$(".uppermenu").css('margin-left', '200px');
          //$(".topperval").css('margin-right', '200px');
          //$(".menu-text").show();
          //$(".sidebar").css('width', '200px');
          $(".sidebar").css('padding-top', '5px');
          setTimeout(function() {
              $("#name2").hide();
              $("#name1").show();
              $(".menu-text").show();
             }, 300);
         // $("#name2").hide();
        //  $("#name1").show();
          $(".logo").css('margin-left', '28px');
          $(".logo").css('margin-top', '0px');
          $(".chat").css('width', 'calc(65% - 130px)');
          $(".main-grid").css('padding-left', '200px');
          $(".logo").css('margin-bottom', '2px');
      }
  }
  var exel = 0;
  function swiscel(){
    if(exel == 0){
        exel= 1;
        $(".excel").show();
        $(".questadd").hide();
        $("#switchexcelval").text("excel");
    }
    else{
        exel = 0;
        $(".excel").hide();
        $(".questadd").show();
        $("#switchexcelval").text("manuel");
    }
  }
  $(document).ready(()=>{
    setTimeout(() => {
        switcher(mode);
    }, 10);
    setTimeout(() => {
        switcher(mode);
    }, 430);
    $('.discussion').click(function(e) {
        if (!$( this ).hasClass('search')) {
        $('.discussion').removeClass('message-active');
        $(this).addClass('message-active');
        e.preventDefault();
        }
    });
    $("#btnexmswich").click(()=>{
        $("#ajtexm").show();
        $("#modexm").hide();    
    });
    $("#btnecmswich").click(()=>{
       
        $("#ajtexm").hide();
        $("#modexm").show();
    });
    if( w<900){
        $("#name1").hide();
        $("#name2").show();
      }
      resizes();
      
      $("#menu2").hide();
      $("#menu1").show();
      $(".main_content").css('margin-top', '50px'); 
      $(".home").show();
      $(".eleves").hide();
      $(".rec").hide();
      $(".create").hide();
      $(".menu").hide();
      $(".chatt").hide();
      $(".imgen").hide();
      $(".maimgtxt").hide();
      $(".maflie").hide();
      $(".logo").click(()=>{
          if(igo){
              igo = false;
              switcher(mode);
         setTimeout(function() {
             igo = true;
            }, 500);
          }
          
      })
      $("#switchexcel").click(()=>{
        swiscel();
      })

        $('.pfpi').click(function(){ 
            $('.fileget').trigger('click');
         });
         $('.fileget').change(()=>{
            file = $('.fileget')[0].files;
            dbimgupdate().then((data)=>{
                console.log(data);
                let ff = JSON.parse(data);
                if(ff.error== '0'){
                    reloadpfp();
                }  
            })
            //////console.log(file);
         });
         $("#headerport").click(()=>{
            $('.fileget2').trigger('click');
         });
        $('.execelget').click(function(){ $('.fileget1').trigger('click'); });
        
        

        $("#home").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").show();
            $(".eleves").hide();
            $(".rec").hide();
            $(".menu").hide();
            $(".maimgtxt").hide();
            $(".maflie").hide();
            $(".chatt").hide();
            $(".create").hide();
            $(".imgen").hide();
        })
        $("#eleves").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").show();
            $(".rec").hide();
            $(".menu").hide();
            $(".create").hide();
            $(".maimgtxt").hide();
            $(".maflie").hide();
            $(".chatt").hide();
            $(".imgen").hide();
        })
        $("#rec").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").show();
            $(".menu").hide();
            $(".maimgtxt").hide();
            $(".maflie").hide();
            $(".create").hide();
            $(".chatt").hide();
            $(".imgen").hide();
        })
        $("#menu").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").hide();
            $(".maimgtxt").hide();
            $(".maflie").hide();
            $(".menu").show();
            $(".create").hide();
            $(".chatt").hide();
            $(".imgen").hide();
        })
        $("#pfpe").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").hide();
            $(".maimgtxt").hide();
            $(".maflie").hide();
            $(".menu").show();
            $(".create").hide();
            $(".chatt").hide();
            $(".imgen").hide();
        });
        $("#create").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").hide();
            $(".menu").hide();
            $(".create").show();
            $(".maimgtxt").hide();
            $(".maflie").hide();
            $(".chatt").hide();
            $(".imgen").hide();
        });
        $("#imgen").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").hide();
            $(".menu").hide();
            $(".create").hide();
            $(".maimgtxt").hide();
            $(".maflie").hide();
            $(".chatt").hide();
            $(".imgen").show();
        });
        $("#maflie").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").hide();
            $(".menu").hide();
            $(".create").hide();
            $(".imgen").hide(); 
            $(".maimgtxt").hide();
            $(".chatt").hide();
            $(".maflie").show();
           
        });
        $("#maimgtxt").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").hide();
            $(".menu").hide();
            $(".create").hide();
            $(".imgen").hide();
            $(".maflie").hide();
            $(".chatt").hide();
            $(".maimgtxt").show();
        });
        $("#chat").click(()=>{
            $("#overlapclass1").hide();
            $("#overlapclass").hide();
            $(".home").hide();
            $(".eleves").hide();
            $(".rec").hide();
            $(".menu").hide();
            $(".create").hide();
            $(".imgen").hide();
            $(".maflie").hide();
            $(".maimgtxt").hide();
            $(".chatt").show();
        });
        $("#closeoverlap").click(()=>{
            $("#overlapclass").hide();
        });
        $("#closeoverlap1").click(()=>{
            $("#overlapclass1").hide();
        });
  })



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

// table home 
$(document).ready(function() {
    resizes();
  var table = $('#table');

  // Table bordered
  $('#table-bordered').change(function() {
      var value = $( this ).val();
      table.removeClass('table-bordered').addClass(value);
  });

  // Table striped
  $('#table-striped').change(function() {
      var value = $( this ).val();
      table.removeClass('table-striped').addClass(value);
  });

  // Table hover
  $('#table-hover').change(function() {
      var value = $( this ).val();
      table.removeClass('table-hover').addClass(value);
  });

  // Table color
  $('#table-color').change(function() {
      var value = $(this).val();
      table.removeClass(/^table-mc-/).addClass(value);
  });
});


(function(removeClass) {

jQuery.fn.removeClass = function( value ) {
  if ( value && typeof value.test === "function" ) {
    for ( var i = 0, l = this.length; i < l; i++ ) {
      var elem = this[i];
      if ( elem.nodeType === 1 && elem.className ) {
        var classNames = elem.className.split( /\s+/ );

        for ( var n = classNames.length; n--; ) {
          if ( value.test(classNames[n]) ) {
            classNames.splice(n, 1);
          }
        }
        elem.className = jQuery.trim( classNames.join(" ") );
      }
    }
  } else {
    removeClass.call(this, value);
  }
  return this;
}

})(jQuery.fn.removeClass);


      $('.js-pscroll').each(function(){
        var ps = new PerfectScrollbar(this);
  
        $(window).on('resize', function(){
          ps.update();
        })
      });
















      ///////// js/////////////////////////////////
      //
      /*$(document).ready(()=>{
        $( ".button_su_inner" ).mouseenter(function(e) {
            var parentOffset = $(this).offset(); 
           
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;
            $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
            $(this).prev(".su_button_circle").removeClass("desplode-circle");
            $(this).prev(".su_button_circle").addClass("explode-circle");
         
         });
         
         $( ".button_su_inner" ).mouseleave(function(e) {
         
              var parentOffset = $(this).offset(); 
         
              var relX = e.pageX - parentOffset.left;
              var relY = e.pageY - parentOffset.top;
              $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
              $(this).prev(".su_button_circle").removeClass("explode-circle");
              $(this).prev(".su_button_circle").addClass("desplode-circle");
         
         });
      })
     */

    /* AJAX  + dynamic items loading*/
    function dbmatier() {
        return new Promise(function(resolve, reject) {
            $.ajax({
                method: "POST",
                url: "getmatier.php",
                data: {
                },
                success: function(data) {
                    resolve(data) // Resolve promise and go to then()
                },
                error: function(err) {
                    //////console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
        });
    }
    function dbfilier() {
        return new Promise(function(resolve, reject) {
            $.ajax({
                method: "POST",
                url: "getfilier.php",
                data: {
                },
                success: function(data) {
                    resolve(data) // Resolve promise and go to then()
                },
                error: function(err) {
                   // ////console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
        });
    }

    function dbcounters() {
        return new Promise(function(resolve, reject) {
            $.ajax({
                method: "POST",
                url: "counters.php",
                data: {
                    "username": username
                },
                success: function(data) {
                    resolve(data) // Resolve promise and go to then()
                },
                error: function(err) {
                    //////console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
        });
    }
    function dbqesn(idexam,jsn,vari,batch) {
        return new Promise(function(resolve, reject) {
            arrqesidq = [];
            for (let i = 0; i < arrqes.length; i++) {
                arrqesidq.push(arrqes[i].idq);
            }
            $.ajax({
                method: "POST",
                url: "dbqesn.php",
                data: {
                   "username" : username,
                   "idxm" : idexam,
                   "exm" : jsn,
                   "vari" : vari,
                   "batch" : batch
                },
                success: function(data) {
                    resolve(data) // Resolve promise and go to then()
                },
                error: function(err) {
                    //////console.log("err")
                    reject(err) // Reject the promise and go to catch()
                }
            });
        });
    }

    function dbloaded(idm,idf) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                method: "POST",
                url: "data.php",
                data: {
                    "idm": idm,
                    "idf": idf
                },
                success: function(data) {
                    resolve(data) // Resolve promise and go to then()
                },
                error: function(err) {
                    //////console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
        });
    }
    function randomBet(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var str = document.cookie;

    function used(id) {
        for (let i = 0; i < arrdm.length; i++) {
            if (id == arrdm[i]) {
                return true
            }
        }
        return false;
    }
    const result = {};
    var username ;
    var code ;
    var showen = [];
    function checkersess(){
        if(result.code == undefined || result.trader == undefined){
            window.location.href = "login.html";
        }
        if(result.trader != undefined && result.code != undefined){
           // ////console.log(result.trader + " / " + result.code )
            dbexistsess(result.code+"=").then((data)=>{
                //////console.log(data);
                if(JSON.parse(data)[0].existad == '1' ){

                }else{
                    document.cookie = 'trader=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
                    document.cookie = 'code=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
                    window.location.href = "login.html";
                }
            })
        }
    }
    function wait(sec) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < sec*1000);
      }
    var arrqes = [];
    var arrdm = [];
    var arrqesidq = [];
    var batch = [];
    var idbat;

$(document).ready(()=>{
    $("#editeconf").click(()=>{
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
                    alert("Password changed successfully");
                }else{
                    alert("Old password is incorrect");
                }
            })
        }
    });
    $("#AjoutTXTBTN").click(()=>{
        let filiere= $("#dropfilier6").val();
        let matiere= $("#dropmatier6").val();
        let TXT = $("#TXTEXER").val();
        let barem = $("#text-barem").val();
        let deffi = $("#dropdiff6").val();
        TXT = TXT.replace(/\n/g, "<br>");
        if(matiere !=null && filiere !=null && TXT !="" && barem !="" && deffi !=null){
            addtextexer(filiere,matiere,TXT,barem,deffi).then((data)=>{
                ////console.log(data);
                if(data == "1"){
                    alert("Ajout avec succes");
                    $("#TXTEXER").val("");
                }
            }) 
        }
    });
    var img;
    $("#AjoutIMGBTN").click(()=>{
        let filiere= $("#dropfilier6").val();
        let matiere= $("#dropmatier6").val();
        let barem = $("#file-Barem").val();
        let diff = $("#dropdiff6").val();
        //img = $("#my-file").val();
        if(filiere !=null && matiere !=null && barem !="" && diff !=""){
            addimgexer(filiere,matiere,barem,diff).then((data)=>{
                console.log(data);
                if(data == "1"){
                    alert("Ajout avec succes");
                    $("#IMGEXER").val("");
                }
            }) 
        }
    });

    // $("#countbarqsn").click(()=>{
    //     baremcheck();
    //    // alert(baremecount)
    //     if(baremecount == $("#dropinq").val()){
    //     window.print();
    //     }
    //     else{
    //         alert("reparais le baremes")
    //     }
    // })

    // $("#dropitF").change(()=>{
    //     getrandydata();
    // })

    // $("#dropitM").change(()=>{
    //     getrandydata();
    // })
    $("#imgGenExam").click(()=>{
        //alert("hy")
        getrandydata();
    });

    $("#maingen").click(()=>{
        batch = [];
        idbat = Date.now().toString().substring(5); 
        let variant = parseInt($("#countvaria").val());
        let matiere = $("#dropmatier2").val();
        let filiere = $("#dropfilier2").val();
        let counter = parseInt($("#countquest").val());
        //////console.log(idbat);
        if(variant && matiere &&  filiere && counter){
        dbbatch(idbat,matiere,filiere,'').then((data)=>{
            console.log("batch dart" + idbat)
            console.log(data);
            
        //console.log(variant+ " / "+matiere + " / " + filiere +" / " + counter );
        if(variant && matiere &&  filiere && counter){
            for(let t = 0 ; t< variant ; t++){
            dbloaded(matiere,filiere).then((data)=>{
                let datap = JSON.parse(data);
                console.log(datap);
                arrqes = [];
                arrdm = [];
                var num = counter;
                if (num <= datap.length) {
                    for (let n = 0; n < num; n++) {
                        let rd = randomBet(0, datap.length - 1);
                        if (used(rd)) {
                            n -= 1;
                        } else {
                            arrdm.push(rd);
                            arrqes.push(datap[rd]);
                            //////console.log(datap[rd]);
                        }
                    }
                    arrqesidq = [];
                for (let j = 0; j < arrqes.length; j++) {
                    arrqesidq.push(arrqes[j].idq);
                }
                
                let idxm = Date.now().toString().substring(7); + randomise(1,91993233103) ;
                
                console.log("mcha : " + idxm + " idbat  :" + idbat)
                dbqesn(idxm,JSON.stringify({"code" : arrqesidq}) , (t+1),idbat).then((data)=>{
                    console.log(data);
                    if(data != '1'){
                        t-=1;
                    }else{
                        
                        batch.push(idxm);
                        //////console.log(t +" / "+ batch.length)
                        if(batch.length == variant){
                           // alert(variant)
                        
                            dbupbatch(idbat,variant,JSON.stringify({"exams": batch})).then((data)=>{
                                console.log(data);
                                document.cookie = 'batch='+idbat+';expires='+new Date(2026,11,13).toUTCString()+'';

                                showbat(idbat);
                            })
                        }
                    }
                })
                wait(0.2);
                } else {
                    alert(num + " est trop large ! ");
                }
            })
            }

            //update()  
        }
        });
        }
        
    })
    $(".fileget2").change(()=>{
        file2 = $('.fileget2')[0].files;

    });

    $("#MATBTNADD").click(()=>{
        let matiere = $("#matieradded").val();
        addmatier(matiere).then((data)=>{
            //////console.log(data);
            if(data == '1'){
                ////console.log("matiere ajouté")
            }else{
                alert("matiere existe déja")
            }
        })
    })
    $("#FIBTNADD").click(()=>{
        let filiere = $("#filieradded").val();
        addfiler(filiere).then((data)=>{
            //////console.log(data);
            if(data == '1'){
                ////console.log("filiere ajouté")
            }else{
                alert("filiere existe déja")
            }
        })
    })

    $('.fileget1').change(()=>{
        let filer =  document.getElementById("fileget1").files[0];
        if(filer){
            let filereader = new FileReader();
            filereader.readAsBinaryString(filer);
            filereader.onload = (event)=>{
                let data = event.target.result;
                let workbook = XLSX.read(data,{type:"binary"});
                
                workbook.SheetNames.forEach(sheet =>{
                    let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    //////console.log(rowObject);
                    //document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)

                    for(let i = 0 ; i < rowObject.length;i++){
                        let mat = $("#dropmatier").val();
                        let fil = $("#dropfilier").val();
                        let ques = '';
                        if(rowObject[i].question){
                            ques=rowObject[i].question;
                        }
                        let res1 = '';
                        if(rowObject[i].choix1){
                            res1=rowObject[i].choix1;
                        }
                        let res2 = '';
                        if(rowObject[i].choix2){
                            res2=rowObject[i].choix2;
                        }
                        let res3 = '';
                        if(rowObject[i].choix3){
                            res3=rowObject[i].choix3;
                        }
                        let res4 = '';
                        if(rowObject[i].choix4){
                            res4=rowObject[i].choix4;
                        }
                        let res1v =1 ;
                        let res2v = 0;
                        let res3v =0;
                        let res4v =0;
                        if(rowObject[i].val1){
                            res1v = 1;
                        }else{
                            res1v = 0;
                        }
                        if(rowObject[i].val2){
                        }else{
                            res2v = 0;
                        }
                        if(rowObject[i].val3){
                            res3v = 1;
                        }else{
                            res3v = 0;
                        }
                        if(rowObject[i].val4){
                            res4v = 1;
                        }else{
                            res4v = 0;
                        }
                        if(mat != null && fil != null && rowObject[i].question){
                            sendquesman(ques,res1,res2,res3,res4,res1v,res2v,res3v,res4v,mat,fil).then((data)=>{
                               //////console.log(data);
                               if(data = '1' && i ==    (rowObject.length-1)){
                                reloeadqueses();
                                }
                            });
                        }else{
                           // ////console.log(ques+ " / " +res1+ " / " +res2+ " / " +res3+ " / " +res4+ " / " +res1v+ " / " +res2v+ " / " +res3v+ " / " +res4v)
                        }
                    }
                })
            }   
        }
     });

     $("#editeconf").click(()=>{
         let oldpass = $("#oldP").val();
         let newpass =  $("#newP").val();
         dbeditpass(oldpass,newpass).then((data)=>{
            // ////console.log(data);
         }) 
     });

    $("#saveques").click(()=>{
        let mat = $("#dropmatier").val();
        let fil = $("#dropfilier").val();
        let ques = $("#Questionval").val();
        let res1 = $("#Reponse1val").val();
        let res2 = $("#Reponse2val").val();
        let res3 = $("#Reponse3val").val();
        let res4 = $("#Reponse4val").val();
        let res1v =1 ;
        let res2v = 0;
        let res3v =1;
        let res4v =0;
        if($('#Reponse1valch').is(':checked')){
            res1v = 1;
        }else{
            res1v = 0;
        }
        if($('#Reponse2valch').is(':checked')){
            res2v = 1;
        }else{
            res2v = 0;
        }
        if($('#Reponse3valch').is(':checked')){
            res3v = 1;
        }else{
            res3v = 0;
        }
        if($('#Reponse4valch').is(':checked')){
            res4v = 1;
        }else{
            res4v = 0;
        }
        if(mat != null && fil != null){
            sendquesman(ques,res1,res2,res3,res4,res1v,res2v,res3v,res4v,mat,fil).then((data)=>{
              //////console.log(data);

              if(data = '1'){
                    reloeadqueses();
                    $("#Questionval").val("");
                    $("#Reponse1val").val("");
                    $("#Reponse2val").val("");
                    $("#Reponse3val").val("");
                    $("#Reponse4val").val("");
              }

            });
        }else{
            alert("select a group")
        }
        
        
        
        

        

    })


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
        //////console.log(result.trader + " / " + result.code )
        dbexistsess(result.code+"=").then((data)=>{
            //////console.log(data);
            if(JSON.parse(data)[0].existad == '1' ){

                code = result.code+"=";
                let decrypted = CryptoJS.AES.decrypt(code.toString(),result.trader);
                let plaintext = decrypted.toString(CryptoJS.enc.Utf8);
                username = plaintext; 
               // //console.log(username);
               //alert("anajit" + username);
              // chatload();

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
                    ////console.log('done');
                    }, 500);
                //when confirmed u exist 
                $("#dropmatier").empty();
                $("#dropfilier").empty();
                $("#examsholder").empty();
                $("#usernameid").text(username);

                dbimg(username).then((data)=>{
                    let datj = JSON.parse(data);
                    ////console.log(datj[0])
                    if(datj.length >0){
                        $("#pfpe").attr("src", "uploads/"+datj[0].link);
                        $("#pfpe1").attr("src", "uploads/"+datj[0].link);
                        $("#rela").attr('href', "uploads/"+datj[0].link);
                    }
                });
                //getexm2
                dbgetexm2(username).then((data)=>{
                    //console.log(data);
                    let datj = JSON.parse(data);
                    //console.log(datj);
                    $("#tabexams2").empty();
                    for(let i = 0 ; i<datj.length ; i++){
                        $("#tabexams2").append(`
                        <tr>
                        <td>${datj[i].idexe}</td>
                        <td>${datj[i].fil}</td>
                        <td>${datj[i].mat}</td>
                        <td>${datj[i].barem}</td>
                        <td><div class="cb"><button id="showimgquiz${datj[i].idexe}" class="button-88">show</button></div></td>
                <td><div class="cb"><button id="Deletimgequiz${datj[i].idexe}" class="button-88">Delete</button></div></td>
                        </tr>
                        `);
                        $("#showimgquiz"+datj[i].idexe).click(()=>{
                            document.cookie = 'eximag='+datj[i].idexe+';time=2020;expires='+new Date(2028,11,13).toUTCString()+'';
                            window.open("http://localhost:90/EFF/Project/imgquiz.html");
                        });
                        $("#Deletimgequiz"+datj[i].idexe).click(()=>{
                            deleexmg2(`${datj[i].idexe}`).then((data)=>{
                                alert(data)
                                if(data == "1"){
                                    reloadexams2();
                                }
                            });
                        });
                    }

                });
                dbmatier().then((data)=>{
                    $("#dropmatier").empty();
                    $("#dropmatier6").empty();
                    $("#dropmatier7").empty();
                    $("#dropmatier1").empty();
                    $("#dropmatier2").empty();
                    //alert("kheat");
                    $("#dropitM").empty();
                    let datamat = JSON.parse(data);
                    $("#dropmatier").append(`
                    <option value="" style="display:none;" disabled selected>Matiere</option>
                    `);
                    $("#dropmatier6").append(`
                    <option value="" style="display:none;" disabled selected>Matiere</option>
                    `);
                    $("#dropmatier7").append(`
                    <option value="" style="display:none;" disabled selected>Matiere</option>
                    `);
                    $("#dropitM").append(`
                    <option value="" style="display:none;" disabled selected>Select Matiere:</option>
                    `);
                    $("#dropmatier1").append(`
                    <option value="" style="display:none;" disabled selected>Matiere</option>
                    `);
                    $("#dropmatier2").append(`
                    <option value="" style="display:none;" disabled selected>Matiere</option>
                    `);
                    for(let i = 0 ; i<datamat.length;i++){
                        $("#dropmatier").append(`
                        <option value="${datamat[i].idm}">${datamat[i].nom}</option>
                        `);
                        $("#dropmatier6").append(`
                        <option value="${datamat[i].idm}">${datamat[i].nom}</option>
                        `);
                        $("#dropmatier7").append(`
                        <option value="${datamat[i].idm}">${datamat[i].nom}</option>
                        `);
                        $("#dropitM").append(`
                        <option value="${datamat[i].idm}">${datamat[i].nom}</option>
                        `);
                        $("#dropmatier1").append(`
                        <option value="${datamat[i].idm}">${datamat[i].nom}</option>
                        `);
                        $("#dropmatier2").append(`
                        <option value="${datamat[i].idm}">${datamat[i].nom}</option>
                        `);
                    }
                });
                dbfilier().then((data)=>{
                    $("#dropfilier").empty();
                    $("#dropfilier1").empty();
                    $("#dropfilier2").empty();
                    $("#dropfilier6").empty();
                    $("#dropfilier7").empty();
                    //console.log("khwat");
                    $("#dropitF").empty();
                    let datamat = JSON.parse(data);
                    $("#dropfilier").append(`
                        <option value="" style="display:none;" disabled selected>Filier</option>
                        `);
                        $("#dropfilier6").append(`
                        <option value="" style="display:none;" disabled selected>Filier</option>
                        `);
                        $("#dropfilier7").append(`
                        <option value="" style="display:none;" disabled selected>Filier</option>
                        `);
                        $("#dropitF").append(`
                        <option value="" style="display:none;" disabled selected>Select Filier:</option>
                        `);
                        $("#dropfilier1").append(`
                        <option value="" style="display:none;" disabled selected>Filier</option>
                        `);
                        $("#dropfilier2").append(`
                        <option value="" style="display:none;" disabled selected>Filier</option>
                        `);
                    for(let i = 0 ; i<datamat.length;i++){
                        $("#dropfilier").append(`
                        <option value="${datamat[i].idf}">${datamat[i].nom}</option>
                        `);
                        $("#dropfilier6").append(`
                        <option value="${datamat[i].idf}">${datamat[i].nom}</option>
                        `);
                        $("#dropfilier7").append(`
                        <option value="${datamat[i].idf}">${datamat[i].nom}</option>
                        `);
                        $("#dropitF").append(`
                        <option value="${datamat[i].idf}">${datamat[i].nom}</option>
                        `);
                        $("#dropfilier1").append(`
                        <option value="${datamat[i].idf}">${datamat[i].nom}</option>
                        `);
                        $("#dropfilier2").append(`
                        <option value="${datamat[i].idf}">${datamat[i].nom}</option>
                        `);
                    }
                });
                dbcounters().then((data)=>{
                   // //console.log(data);
                    let datamat = JSON.parse(data);
                    ////console.log(datamat);
                    $("#valc1").text(datamat[0].counts);
                    $("#valc2").text(datamat[1].counts);
                    ////console.log( datamat[1].counts + " / " + datamat[2].counts )
                    let i = datamat[2].counts / datamat[1].counts * 100
                    i = i + "";
                    i = i.toString().substring(0, 5) ;
                    if(i.toString() !="NaN"){
                    $("#valc3").text(i + "%");
                    }else{
                        $("#valc3").text( 0+ "%");
                    }
                });
                getmyques().then((data)=>{
                    let dadata = JSON.parse(data);
                    ////console.log(dadata);
                    for(let k=0 ; k< dadata.length ; k++){
                        $("#tabqsny").append(`
                        <tr>
                        <td data-title="ID" id="row1">${dadata[k].idq}</td>
                        <td data-title="Question">${dadata[k].quest}</td>
                        <td data-title="Filiere">${dadata[k].filier}</td>
                        <td data-title="Matiere">${dadata[k].matier}</td>
                          <td data-title="" style="padding-top: 7px;  padding-right: 0px;  padding-bottom: 2px;  padding-left: 0 px;">
                            <div class='wrapper1'>
                              <div class="button_su" style="margin: auto;" id="qsnshow${dadata[k].idq}">
                                <span class="su_button_circle">
                                </span>
                                <a href="#" class="button_su_inner">
                                  <span class="button_text_container">
                                    Show
                                  </span>
                                </a>
                            </div> 
                          </td>
                      </tr>
                        `);
                        $( `#qsnshow${dadata[k].idq}`).click(()=>{
                            gettheques(dadata[k].idq);
                        })
                    }
                })
                dbexam().then((data)=>{ 
                    ////console.log(data)
                    let databd = JSON.parse(data);
                   
                    if(databd.length >= 0){
                        //generer home table
                        
                        $("#examsholder").append(`
                        <table id="table" class="table table-hover table-mc-light-blue" style="word-break: break-all;">
                
                            <thead>
                                <tr>
                                    <td style="text-align: center;"><span style="visibility: hidden;">123</span>ID<span style="visibility: hidden;"></span></td>
                                    <td style="text-align: center;">avg points</td>
                                
                                    <td style="text-align: center;">reussis</td>
                                    <td style="text-align: center;"> Variants</td>
                                    <td style="text-align: center;"> Filiere</td>
                                    <td style="text-align: center;"> Matiere <span style="visibility: hidden;"></span></td>
                                    
                                </tr>
                            </thead>
                        </table>
                        `);
                        let avg ;
                        let dub ;
                        showen = [];
                        for(let i = databd.length-1 ; i >=0;i--){

                            showen.push({ "id" :databd[i].idbat , "val" : true });
                            let len = showen.length;
                            dbavgxam(databd[i].idbat).then((data)=>{
                                    ////console.log(JSON.parse(data));
                                   // //console.log(databd);
                                    if(JSON.parse(data)[1].dub == null){
                                        dub = '----';
                                    }else{
                                        dub = JSON.parse(data)[1].dub + "";
                                        dub = dub.toString().substring(0, 5) + "%";
                                        
                                    }
                                    if(JSON.parse(data)[0].avrg == null){
                                        avg = '----';
                                    }else{
                                        avg = JSON.parse(data)[0].avrg + "";
                                        avg = avg.toString().substring(0, 5) ;
                                        
                                    }
                                    

                                    $("#examsholder").append(`
                                        <table id="table${databd[i].idbat}" class="table table-hover table-mc-light-blue" style="word-break: break-all;">
                            
                                        <tbody>
                                        <tr id="tabler${databd[i].idbat}">
                                            <td class="td1" data-title="ID ">${databd[i].idbat}</td>
                                            <td class="td2" data-title="avg de points" >${avg}</td>
                                            <td class="td3" data-title="nombre des reussis" >${dub}</td>
                                            <td class="td1" data-title="nombre dequestion" >${databd[i].vari}</td>
                                            <td class="td4" data-title="Filiere" >${databd[i].filier}</td>
                                            <td class="td5" data-title="Matiere" >${databd[i].matiere}</td>
                                            
                                        </tr>
                                        </tbody>
                                    </table>
                                        `);

                                        $("#tablebat2").append(`
                                        <tr id="rowbats${databd[i].idbat}">
                                        <td data-title="ID" >${databd[i].idbat}</td>
                                        <td data-title="Vari">${databd[i].vari}</td>
                                       
                                        <td data-title="Matiere">${databd[i].matiere}</td>
                                        <td data-title="Filiere">
                                        ${databd[i].filier}
                                          </td>
                                          <td data-title="" style="padding-top: 7px;  padding-right: 0px;  padding-bottom: 2px;  padding-left: 0 px;">
                                            <div class='wrapper1'>
                                              
                                              
                                              <div class="button_su" style="margin: auto;" id="showbat${databd[i].idbat}">
                                                <span class="su_button_circle">
                                                </span>
                                                <a href="#" class="button_su_inner">
                                                  <span class="button_text_container">
                                                    Show
                                                  </span>
                                                </a>
                                              </div>
                                        
                                              <!--<div class="button_su" id="dele${databd[i].idbat}"  style="margin: auto;">
                                                <span class="su_button_circle">
                                                </span>
                                                <a href="#" class="button_su_inner">
                                                  <span class="button_text_container">
                                                   Delete
                                                  </span>
                                                </a>
                                              </div>-->
                                              
                                                    
                                            </div> 
                                          </td>
                                      </tr>
                                        `);
                                        $(`#showbat${databd[i].idbat}`).click(()=>{
                                            showbat(databd[i].idbat);
                                        })
                                        // $(`#dele${databd[i].idbat}`).click(()=>{
                                        //     dbdelexam(`${databd[i].idbat}`).then((data)=>{
                                        //         alert(data)
                                        //         if(data == "1"){
                                        //             reloadexams1();
                                        //         }
                                        //     });
                                        // });
                                    dbpasses(databd[i].idbat).then((data=>{
                                        $(`
                                        <div class="container" id="ele${databd[i].idbat}" style="display: none;" >
                                            <div class="row row--top-41">
                                                <div class="col-md-12">
                                                    <h2 class="row__title">Etudients </h2>
                                                </div>
                                            </div>
                                            <div class="row row--top-21">
                                                <div class="col-md-12">
                                                    <div class="table-container">
                                                        <table class="table">
                                                            <thead class="table__thead">
                                                                <tr>
                                                                <th class="table__th">Name</th>
                                                                <th class="table__th">Filier</th>
                                                                <th class="table__th">Matiere</th>
                                                                <th class="table__th">Note</th>
                                                                <th class="table__th">Status</th>
                                                                <th class="table__th">date</th>
                                                                <th class="table__th"></th>
                                                                <th class="table__th"></th>
                                                                </tr>
                                                            </thead>
                                                    <tbody class="table__tbody" id="tbody${databd[i].idbat}">
                                                    </tbody>
                                                    </table>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                        `).insertAfter(`#table${databd[i].idbat}`);
                                        ////console.log(data);
                                        let dbpass = {};
                                        dbpass = JSON.parse(data);
                                        ////console.log(dbpass)
                                        for(let j = 0; j< dbpass.length ; j++){
                                           
                                            if(dbpass[j].result == "pass"){
                                                
                                                $(`
                                                <tr class="table-row table-row--chris" id="eleves${dbpass[j].idpass}">
                                    <!-- <td class="table-row__td">
                                      <input id="" type="checkbox" class="table__select-row">
                                    </td> -->
                                    <td class="table-row__td" >
                                      <img class="table-row__img" id="pfpel${dbpass[j].idpass}" src="img/clt.png">
                                      <div class="table-row__info">
                                        <p class="table-row__name">${dbpass[j].username}</p>
                                        <span class="table-row__small"></span>
                                      </div>
                                    </td>
                                    <td data-column="Policy" class="table-row__td">
                                      <div class="">
                                        <p class="table-row__policy">${dbpass[j].filier}</p>
                                      </div>                
                                    </td>
                                    <td data-column="Policy status" class="table-row__td">
                                      <p class="table-row__p-status ">${dbpass[j].matier}</p>
                                    </td>
                                    <td data-column="Destination" class="table-row__td">
                                      ${dbpass[j].note}
                                    </td>
                                    <td  data-column="Status" class="table-row__td">
                                      <p class="table-row__status status--green status">Réussi</p>
                                    </td>
                                    <td data-column="Progress" class="table-row__td">
                                      <p class="table-row__progress status--blue status">${dbpass[j].datepassed}</p>
                                    </td>
                                    </td>
                      <td class="table-row__td">
                                     
                                      
                                        
                                      <svg data-toggle="tooltip" data-placement="bottom" title="Delete" version="1.1" id="deletele${dbpass[j].idpass}" class="table-row__bin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<g>		<path d="M436,60h-90V45c0-24.813-20.187-45-45-45h-90c-24.813,0-45,20.187-45,45v15H76c-24.813,0-45,20.187-45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693-17.594,44.815-40.926c0.004-0.043,0.008-0.086,0.011-0.129L449.817,150H466c8.284,0,15-6.716,15-15v-30    C481,80.187,460.813,60,436,60z M196,45c0-8.271,6.729-15,15-15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c-0.729,7.753-7.142,13.592-14.934,13.592H133.396c-7.792,0-14.204-5.839-14.934-13.592L92.284,150h327.432L393.537,468.408z     M451,120h-15H76H61v-15c0-8.271,6.729-15,15-15h105h150h105c8.271,0,15,6.729,15,15V120z" style="fill: rgb(158, 171, 180);"></path>	</g></g><g>	<g>		<path d="M256,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C271,186.716,264.284,180,256,180z" style="fill: rgb(158, 171, 180);"></path>	</g></g><g>	<g>		<path d="M346,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C361,186.716,354.284,180,346,180z" style="fill: rgb(158, 171, 180);"></path>	</g></g><g>	<g>		<path d="M166,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C181,186.716,174.284,180,166,180z" style="fill: rgb(158, 171, 180);"></path>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                      <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                      </svg>                
                                    </td>
                                    <td data-column="Show" class="table-row__td">
                                        <img src="img/b9da86621775cd18447abbfacf20c04c.svg" id="idpass${dbpass[j].idpass}" style="width: 30px;height: 22px;">
                                    </td>
                                  </tr>
                                                    `).insertAfter(`#tbody${databd[i].idbat}`);
                                                    dbimg(dbpass[j].username).then((data)=>{
                                                        let datj = JSON.parse(data);
                                                        ////console.log(datj[0])
                                                        if(datj.length >0){
                                                            $(`#pfpel${dbpass[j].idpass}`).attr("src", "uploads/"+datj[0].link);
                                                        }else{
                                                        }
                                                    });
                                                    
                                                    $(`#deletele${dbpass[j].idpass}`).click(()=>{
                                                        
                                                        dbdelpass(dbpass[j].idpass).then((data)=>{
                                                            console.log(data);
                                                            if(data == "1"){
                                                                $(`#eleves${dbpass[j].idpass}`).hide();
                                                            }
                                                        })

                                                    })
                                                    $(`#idpass${dbpass[j].idpass}`).click(()=>{
                                                        document.cookie = 'exahys='+dbpass[j].idpass+';time=2020;expires='+new Date(2028,11,13).toUTCString()+'';
                                                        window.open('http://localhost:90/EFF/Project/quizhistory.html');
                                                    });

                                            }else{
                                                $(`
                                                <tr class="table-row table-row--chris" id="eleves${dbpass[j].idpass}">
                                    <!-- <td class="table-row__td">
                                      <input id="" type="checkbox" class="table__select-row">
                                    </td> -->
                                    <td class="table-row__td" >
                                      <img class="table-row__img" id="pfpel${dbpass[j].idpass}" src="img/clt.png">
                                      <div class="table-row__info">
                                        <p class="table-row__name">${dbpass[j].username}</p>
                                        <span class="table-row__small"></span>
                                      </div>
                                    </td>
                                    <td data-column="Policy" class="table-row__td">
                                      <div class="">
                                        <p class="table-row__policy">${dbpass[j].filier}</p>
                                      </div>                
                                    </td>
                                    <td data-column="Policy status" class="table-row__td">
                                      <p class="table-row__p-status ">${dbpass[j].matier}</p>
                                    </td>
                                    <td data-column="Destination" class="table-row__td">
                                      ${dbpass[j].note}
                                    </td>
                                    <td data-column="status" class="table-row__td">
                                      <p class="table-row__status status--red status">Faild</p>
                                    </td>
                                    <td data-column="Progress" class="table-row__td">
                                      <p class="table-row__progress status--blue status">${dbpass[j].datepassed}</p>
                                    </td>
                                    </td>
                      <td class="table-row__td">             
                                      <svg data-toggle="tooltip" data-placement="bottom" title="Delete" version="1.1" class="table-row__bin" id="deletele${dbpass[j].idpass}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<g>		<path d="M436,60h-90V45c0-24.813-20.187-45-45-45h-90c-24.813,0-45,20.187-45,45v15H76c-24.813,0-45,20.187-45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693-17.594,44.815-40.926c0.004-0.043,0.008-0.086,0.011-0.129L449.817,150H466c8.284,0,15-6.716,15-15v-30    C481,80.187,460.813,60,436,60z M196,45c0-8.271,6.729-15,15-15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c-0.729,7.753-7.142,13.592-14.934,13.592H133.396c-7.792,0-14.204-5.839-14.934-13.592L92.284,150h327.432L393.537,468.408z     M451,120h-15H76H61v-15c0-8.271,6.729-15,15-15h105h150h105c8.271,0,15,6.729,15,15V120z" style="fill: rgb(158, 171, 180);"></path>	</g></g><g>	<g>		<path d="M256,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C271,186.716,264.284,180,256,180z" style="fill: rgb(158, 171, 180);"></path>	</g></g><g>	<g>		<path d="M346,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C361,186.716,354.284,180,346,180z" style="fill: rgb(158, 171, 180);"></path>	</g></g><g>	<g>		<path d="M166,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C181,186.716,174.284,180,166,180z" style="fill: rgb(158, 171, 180);"></path>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                      <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                      </svg>                
                                    </td>
                                    <td data-column="Show" class="table-row__td">
                                        <img src="img/b9da86621775cd18447abbfacf20c04c.svg" id="idpass${dbpass[j].idpass}" style="width: 30px;height: 22px;">
                                    </td>
                                  </tr>
                                                    `).insertAfter(`#tbody${databd[i].idbat}`);
                                                    dbimg(dbpass[j].username).then((data)=>{
                                                        let datj = JSON.parse(data);
                                                        ////console.log(datj[0])
                                                        if(datj.length >0){
                                                            $(`#pfpel${dbpass[j].idpass}`).attr("src", "uploads/"+datj[0].link);
                                                        }else{
                                                        }
                                                    });
                                                    $(`#deletele${dbpass[j].idpass}`).click(()=>{
                                                        $(`#eleves${dbpass[j].idpass}`).hide();
                                                       // alert("r we there yet ?")
                                                        dbdelpass(dbpass[j].idpass).then((data)=>{
                                                            ////console.log(data);
                                                        })

                                                    })
                                                    $(`#idpass${dbpass[j].idpass}`).click(()=>{
                                                        document.cookie = 'exahys='+dbpass[j].idpass+';time=2020;expires='+new Date(2028,11,13).toUTCString()+'';
                                                        window.open('http://localhost:90/EFF/Project/quizhistory.html');
                                                    });
                                            }

                                        }
                                        if(i==0){
                                            for(let t = 0 ; t <showen.length;t++ ){
                                                ////console.log(showen);alert( " / " +    t);
                                                $(`#tabler${showen[t].id}`).click(()=>{
                                                    
                                                    
                                                    if(showen[t].val ){
                                                        showen[t].val = false;
                                                        $(`#ele${showen[t].id}`).show();
                                                    }else{
                                                        showen[t].val = true;
                                                        $(`#ele${showen[t].id}`).hide();
                                                    }
                                                    
                                                    ////console.log(showen)
                                                })
                                            }
                                        }
                                    }))
                            
                                    
                                
                                })
                            
                        }
                        

                    }

                });

                
            }
            else{
                window.location.href = "login.html";
            }
        })
    }
})

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
               // //console.log(err)
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
                ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

function dbdelpass(idpass) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "deletepass.php",
            data: {
                "idpass": idpass,
            },
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
                ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

function dbexam() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "getexams.php",
            data: {
                "username": username
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
               // //console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

function dbpasses(exm) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "getpasses.php",
            data: {
                "exam": exm
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

function dbavgxam(id) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "avgnote.php",
            data: {
                "idexam": id
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
function dbpercentdb(id) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "percentdub.php",
            data: {
                "idexam": id
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

function randomise(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
var coded;


function addimgexer(fil,mat,barem,diff){
    var img =  $('#my-file')[0].files;
    return new Promise(function(resolve, reject) {
        if(img.length > 0){
            let form_data = new FormData();
            form_data.append('username', username);
            form_data.append('mat', mat);
            form_data.append('fil', fil);
            form_data.append('barem', barem);
            form_data.append('diff', diff);
            form_data.append('my_image', img[0]);
            console.log(form_data);
            $.ajax({
                url: 'addimgexer.php',
                type: 'post',
                data: form_data,
                contentType: false,
                processData: false,
                success: function(res){
                    resolve(res)
                },
                error: function(err) {
                    ////console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
         
        }else {
           $("#errorMs").text("Please select an image.");
        }
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
                    ////console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
         
        }else {
           $("#errorMs").text("Please select an image.");
        }
    });
}
function sendquesman(ques,res1,res2,res3,res4,res1v,res2v,res3v,res4v,mat,fil) {

    return new Promise(function(resolve, reject) {
        ////console.log("machat")
        $.ajax({
            url: 'addques.php',
            type: 'post',
            data: {
                "username": username,
                "mat" : mat,
                "fil" : fil,
                "ques" : ques,
                "res1" : res1,
                "res2" : res2,
                "res3" : res3,
                "res4" : res4,
                "res1v" : res1v,
                "res2v" : res2v,
                "res3v" : res3v,
                "res4v" : res4v
            },
            success: function(res){
                resolve(res)
            },
            error: function(err) {
                ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

function dbeditpass(old , newpass) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "newpass.php",
            data: {
                "username": username,
                "oldpass" : old ,
                "newpass" : newpass
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

function dbbatch(idbat,mat,fil,jsn) {

    return new Promise(function(resolve, reject) {
        
        if( file2 && file2.length > 0){
            let form_data = new FormData();
            form_data.append('username', username);
            form_data.append('code', jsn);
            form_data.append('idbat', idbat);
            form_data.append('mat', mat);
            form_data.append('fil', fil);
            form_data.append('my_image', file2[0]);
            $.ajax({
                url: 'batch.php',
                type: 'post',
                data: form_data,
                contentType: false,
                processData: false,
                success: function(res){
                    resolve(res)
                },
                error: function(err) {
                    ////console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
         
        }else {
            let form_data = new FormData();
            form_data.append('username', username);
            form_data.append('code', jsn);
            form_data.append('mat', mat);
            form_data.append('idbat', idbat);
            form_data.append('fil', fil);
            //form_data.append('my_image', file[0]);
            $.ajax({
                url: 'batch.php',
                type: 'post',
                data: form_data,
                contentType: false,
                processData: false,
                success: function(res){
                    resolve(res)
                },
                error: function(err) {
                    ////console.log(err)
                    reject(err) // Reject the promise and go to catch()
                }
            });
        }
    });
}
function dbupbatch(idbat,count,jsn) {

    return new Promise(function(resolve, reject) {
    
        let form_data = new FormData();
        form_data.append('code', jsn);
        form_data.append('batch', idbat);
        form_data.append('vari', count);
        $.ajax({
            url: 'updatebatch.php',
            type: 'post',
            data: form_data,
            contentType: false,
            processData: false,
            success: function(res){
                resolve(res)
            },
            error: function(err) {
                ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}


function dbseexm(exam) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "getexm.php",
            data: {
                "exam": exam,
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

function dbseebatch(batch) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "getbatch.php",
            data: {
                "exam": batch,
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

function showbat(idbat){
    
    dbseebatch(idbat).then((data)=>{
        console.log(idbat);
        
        let jsn = JSON.parse(data);
        console.log(jsn);
        $("#overlapclass").show();
    $("#overhead").text("Variants");
    $("#tablebatch").empty();
        let exams = JSON.parse(jsn[0].code).exams;
        ////console.log(exams);
        for(let i = 0 ; i<exams.length ; i++){
            $("#tablebatch").append(`
            <tr>
            <td data-title="ID" id="row1" style="width: 100%;">${exams[i]}</td>
              <td data-title="" style="padding-top: 7px;  padding-right: 0px;  padding-bottom: 2px;  padding-left: 0 px;">
                <div class='wrapper1'>
                  <div class="button_su"  style="margin: auto;" id="show${exams[i]}">
                    <span class="su_button_circle">
                    </span>
                    <a href="#" class="button_su_inner">
                      <span class="button_text_container">
                       show
                      </span>
                    </a>
                  </div>
                  
                        
                </div> 
              </td>
          </tr>
            `);
            $(`#show${exams[i]}`).click(()=>{
               //alert("wow" + exams[i])
               //console.log(exams[i]);
                document.cookie = 'exam='+exams[i]+';expires='+new Date(2026,11,13).toUTCString()+'';
                window.open('http://localhost:90/EFF/Project/quiz.html');
            })
        }
        $("#tablebatch").append(`
            <tr style="visibility:hidden;height: 70px;">
            <td data-title="ID" id="row1" style="width: 75%; "></td>
              <td data-title="" style="padding-top: 7px;  padding-right: 0px;  padding-bottom: 2px;  padding-left: 0 px;">
                
              </td>
          </tr>
            `);

    })
}


function getmyques() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "getqsn.php",
            data: {
                "username": username
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

function getmychoi(idqsnt) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "getchois.php",
            data: {
                "qsn": idqsnt
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

function gettheques(idqsn){
    
    getmychoi(idqsn).then((data)=>{
        ////console.log(data)
        let jsn = JSON.parse(data);
        ////console.log(jsn);
        $("#overlapclass1").show();
    $("#tablemchoix").empty();
        for(let i = 0 ; i<jsn.length ; i++){
            $("#tablemchoix").append(`
            <tr>
                      <td data-title="ID" id="row1" >${jsn[i].idr}</td>
                      <td data-title="Question" >${jsn[i].chois}</td>
            </tr>
            `);
        }
        $("#tablemchoix").append(`
            <tr style="visibility:hidden;height: 70px;">
            <td data-title="ID" id="row1" style="width: 75%; "></td>
              <td data-title="" style="padding-top: 7px;  padding-right: 0px;  padding-bottom: 2px;  padding-left: 0 px;">
                
              </td>
          </tr>
            `);

    })
}
function nl2br(str){
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}
function getimgqsn(idf,idm,defi) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "dbgetimgqsn.php",
            data: {
                "idf": idf,
                "idm":idm,
                "defi":defi
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
function gettxtqsn(idf,idm,defi) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "dbgetextqsn.php",
            data: {
                "idf": idf,
                "idm":idm,
                "defi":defi
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
// var allimgs = [];
// var allimgsselected = [];
// var alltxtsselected = [];
// function lookforqsn(text){
//     for(let i = 0 ; i<allimgsselected.length;i++){
//         if(allimgsselected[i]==text){
//             return true;
//         }
//     }
//     return false;
// }
// function lookfortxt(text){
//     for(let i = 0 ; i<alltxtsselected.length;i++){
//         if(alltxtsselected[i]==text){
//             return true;
//         }
//     }
//     return false;
// }
// var barremcont;
// function refreshthemimgs(){
//     $("#offiexam").empty();
//     //console.log(allimgsselected);
//     for(let i = 0 ; i <allimgsselected.length;i++){
//         $("#offiexam").append(`
//         <div>
//             <div class="nprnt">
//             <h3 class="titlebr nprnt">Bareme:</h3>
            
//             </div><input type="text" class="inex " id="the${allimgsselected[i]}"><br/>
//             <div class="exl"><img class="inint" id="img${allimgsselected[i]}" src="${$(`#${allimgsselected[i]}`).attr('src')}" alt=""> </div>
            
        
//         </div>
//         `);
//     }
//     for(let i = 0 ; i <alltxtsselected.length;i++){
//         $("#offiexam").append(`
//         <div>
//             <div class="nprnt">
//             <h3 class="titlebr ">Bareme:</h3>
            
//             </div><input type="text" class="inex" id="thet${alltxtsselected[i]}"><br/>
//             <div class="exl inint1" id="text${alltxtsselected[i]}" > ${$(`#${alltxtsselected[i]}`).text()} </div>
            
        
//         </div>
//         `);
//     }
// }

// function checknq() {
//     if(allimgsselected.length + alltxtsselected.length >3){
//         return false;
//     }else{
//         return true;
//     }
// }



// function getemxams() {
//     let idf = $("#dropitF").val();
//     let idm = $("#dropitM").val();
//     if(idf != null && idm != null){
//         $("#imgqsn").empty();
//         $("#textqsn").empty();
//         getimgqsn(idf,idm).then((data)=>{
//            // //console.log(data);
//             //console.log(JSON.parse(data));
//             let imjsn = JSON.parse(data);
//             for(let i =0;i<imjsn.length;i++){
//                 //allimgs.push(`imgq${imjsn[i].idqmg}`);
//                 // $("#imgqsn").append(`
//                 // <img class="a" id="imgq${imjsn[i].idqmg}" src="imgqsn/${imjsn[i].curl}" alt="">
//                 // `);
//                 // $(`#imgq${imjsn[i].idqmg}`).click((event)=>{
//                 //     //console.log(event.target.id);
                   
//                 //     if(lookforqsn(`imgq${imjsn[i].idqmg}`) ){
//                 //     $(`#imgq${imjsn[i].idqmg}`).css("border","0px solid green");
//                 //     allimgsselected = allimgsselected.filter(function(item) {
//                 //         return item !== `imgq${imjsn[i].idqmg}`;
//                 //     })
//                 //     refreshthemimgs()
//                 //     //allimgsselected.remove(`#imgq${imjsn[i].idqmg}`);
//                 //     }else{
//                 //         if(checknq()){
//                 //         $(`#imgq${imjsn[i].idqmg}`).css("border","2px solid green");
//                 //         allimgsselected.push(`imgq${imjsn[i].idqmg}`);
//                 //         ////console.log(allimgsselected);   
//                 //         refreshthemimgs();
//                 //         }
//                 //     }
                
//                 // });
//             }
//         })
//         gettxtqsn(idf,idm).then((data)=>{
//             ////console.log(data);
//             //console.log(JSON.parse(data));
//             let imjsn1 = JSON.parse(data);
//             for(let i =0;i<imjsn1.length;i++){
//                 // $("#textqsn").append(`
//                 // <div class="divexamtext" id="textq${imjsn1[i].idqtxt}">
//                 //     ${imjsn1[i].txt}
//                 //  </div>
//                 // `);
//                 // $(`#textq${imjsn1[i].idqtxt}`).click((event)=>{
//                 //     //console.log(event.target.id);
//                 //     if(lookfortxt(`textq${imjsn1[i].idqtxt}`)){
//                 //        // alert(`textq${imjsn1[i].idqtxt}`)
//                 //     $(`#textq${imjsn1[i].idqtxt}`).css("border","2px solid black");
//                 //     alltxtsselected = alltxtsselected.filter(function(item) {
//                 //         return item !== `textq${imjsn1[i].idqtxt}`;
//                 //     })
//                 //     refreshthemimgs()
//                 //     //allimgsselected.remove(`#imgq${imjsn[i].idqmg}`);
//                 //     }else{
//                 //         if(checknq()){
//                 //         $(`#textq${imjsn1[i].idqtxt}`).css("border","2px solid green");
//                 //         alltxtsselected.push(`textq${imjsn1[i].idqtxt}`);
//                 //         //alert(`textq${imjsn1[i].idqtxt}`)
//                 //         ////console.log(allimgsselected);  
//                 //         refreshthemimgs();
//                 //         }
//                 //     }
                
//                 // });
//             }
//         })
//     }
// }
var imgready=false;
var txtready=false;
var choisestxt = [] ;
var choisesimg = [] ;
var allimgs;
var alltext;
var qsns;
function getrandydata(){
    let idf = $("#dropitF").val();
    let idm = $("#dropitM").val();
    let deffi = $("#dropitdiff").val();
    if(idf != null && idm != null && deffi != null){
        //alert("" + idf + " " + idm + " " + deffi);
        getimgqsn(idf,idm,deffi).then((data)=>{
                //console.log(data);
             console.log(JSON.parse(data));
             allimgs = JSON.parse(data);
             imgready = true;
             generate_examoff();
         })
        

       
        gettxtqsn(idf,idm,deffi).then((data)=>{
            ////console.log(data);
            console.log(JSON.parse(data));
            alltext = JSON.parse(data);
            txtready = true;
            generate_examoff();
        })
    }


}

var exam_offic = [];

function chercherxam(ty,val){
    choisesimg = [];
    choisestxt = [];
    let gottim = false;
    if(ty){
        for(let i =0;i<allimgs.length;i++){
            if(allimgs[i].barem == val){
                choisesimg.push(i);
                gottim = true;
            }
        }
        
    }else{
        for(let i =0;i<alltext.length;i++){
            if(alltext[i].barem == val){
                choisestxt.push(i);
                gottim = true;
            }
        }
    }
    return gottim;
}
var oldies = [];

function noreprandom( int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies.length;i++){
        if(oldies[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies.push(val);
        return val;
    }else{
        if(oldies.length == 4){
            oldies = [];
            return 0;
        }else{
            return noreprandom();
        }
        
    }
}
var oldiesolo = [];

function noreprandomsolo( int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldiesolo.length;i++){
        if(oldiesolo[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldiesolo.push(val);
        return val;
    }else{
        if(oldiesolo.length == 4){
            oldiesolo = [];
            return 0;
        }else{
            return noreprandomsolo();
        }
        
    }
}

var oldies21 = [];

function noreprandom21(int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies21.length;i++){
        if(oldies21[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies21.push(val);
        return val;
    }else{
        if(oldies21.length == 4){
            oldies21 = [];
            return 0;
        }else{
            return noreprandom21();
        }
        
    }
}
var oldies41 = [];

function noreprandom41(int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies41.length;i++){
        if(oldies41[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies41.push(val);
        return val;
    }else{
        if(oldies41.length == 4){
            oldies41 = [];
            return 0;
        }else{
            return noreprandom41();
        }
        
    }
}
var oldies42 = [];

function noreprandom42(int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies42.length;i++){
        if(oldies42[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies42.push(val);
        return val;
    }else{
        if(oldies42.length == 4){
            oldies42 = [];
            return 0;
        }else{
            return noreprandom42();
        }
        
    }
}

var oldies43 = [];

function noreprandom43(int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies43.length;i++){
        if(oldies43[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies43.push(val);
        return val;
    }else{
        if(oldies43.length == 4){
            oldies43 = [];
            return 0;
        }else{
            return noreprandom43();
        }
        
    }
}

var oldies31 = [];

function noreprandom31(int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies31.length;i++){
        if(oldies31[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies31.push(val);
        return val;
    }else{
        if(oldies31.length == 4){
            oldies31 = [];
            return 0;
        }else{
            return noreprandom31();
        }
        
    }
}
var oldies32 = [];

function noreprandom32(int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies32.length;i++){
        if(oldies32[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies32.push(val);
        return val;
    }else{
        if(oldies32.length == 4){
            oldies32 = [];
            return 0;
        }else{
            return noreprandom32();
        }
        
    }
}

var oldies33 = [];

function noreprandom33(int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies33.length;i++){
        if(oldies33[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies33.push(val);
        return val;
    }else{
        if(oldies33.length == 4){
            oldies33 = [];
            return 0;
        }else{
            return noreprandom33();
        }
        
    }
}
var oldies34 = [];

function noreprandom34(int){

    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies34.length;i++){
        if(oldies34[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies34.push(val);
        return val;
    }else{
        if(oldies34.length == 4){
            oldies34 = [];
            return 0;
        }else{
            return noreprandom34();
        }
        
    }
}



var oldies2 = [];

function noreprandom2(int){
    ////console.log(oldies2);
    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies2.length;i++){
        if(oldies2[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies2.push(val);
        return val;
    }else{
        if(oldies2.length == 4){
            oldies2 = [];
            return 0;
        }else{
            return noreprandom2();
        }
        
    }
}

var oldies22 = [];

function noreprandom22(int){
    ////console.log(oldies22);
    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies22.length;i++){
        if(oldies22[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies22.push(val);
        return val;
    }else{
        if(oldies22.length == 4){
            oldies22 = [];
            return 0;
        }else{
            return noreprandom22();
        }
        
    }
}

var oldies23 = [];

function noreprandom23(int){
    ////console.log(oldies23);
    let val = randomise((int-4),int);
    let exist = false;
    for(let i =0;i<oldies23.length;i++){
        if(oldies23[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        oldies23.push(val);
        return val;
    }else{
        if(oldies23.length == 4){
            oldies23 = [];
            return 0;
        }else{
            return noreprandom23();
        }
        
    }
}



var oldies3 = [];
var lenofthjsn ;
function noreprandom3(){
    //console.log(oldies3);
    //console.log(thjsn);   
    let val = randomise(0,thjsn.length-1);
    let exist = false;
    for(let i =0;i<oldies3.length;i++){
        if(oldies3[i] ==val ){
            exist = true;
        }
    }
    if(!exist){
        //alert("hada dzad = "+val +" /len:"  + thjsn.length);
        oldies3.push(val);
        return val;
    }else{
        
        if(oldies3.length == thjsn.length){
            oldies3 = [];
            return -1;
        }else{
            return noreprandom3();
        }
        
    }
}


function check_if_exam_doop(typ,val){

    for(let i = 0;i<exam_offic.length;i++){
        if(exam_offic[i].id == val && exam_offic[i].type == typ){
            return true;
        }
    }
    return false;
}

var first = 0;
var sec = 0;
var third = 0;
var fourth = 0;
var fifth = 0;
var thjsn  ;
var fwd = 0;
function generate_examoff(){
    let fil = $("#dropitF").val();
    let mat = $("#dropitM").val();
    let barem_off =parseInt( $("#dropinq").val());
    let barem = $("#dropinq").val();
    barem = parseInt(barem);
    if(imgready && txtready){
        exam_offic = [];
        if( barem < 12 && barem >= 8){
            let firstq =true;
            while(firstq){
                 first =  noreprandomsolo(Math.floor(barem/2));
                 //console.log(first);
                 if (first == 0){
                    firstq = false;
                    //alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                // exam 1
                if(chercherxam(second,first)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else if(chercherxam(!second,first)){
                    if(!second){
                         let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else{
                    continue;
                    
                }
        }
        //alert(first + "sdada");
        if(first>0){

            let firstq =true;
            while(firstq){
                //alert("2")
                 sec =  barem - first;
                 //console.log(sec + " : sec");
                 if (sec == 0){
                    firstq = false;
                    alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,sec)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("sec 1 i :" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                           // alert("2 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 1 t:" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(gotit){
                    break;
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,sec)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("sec 2 i:" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                            //alert("2 dazz");
                            ////console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            alert("you don't have enogh questions");

            //fallback
        } 
        var gotit = false;
        if(sec>0){
            addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                console.log(data);
            });
            console.log(exam_offic);
            dumpdata(); 
        }
        else{
            if(!gotit && first>0){ // if we didn't get any question
                //console.log("u don't have enogh questions to make an exam");
               
                if(exam_offic[3] == undefined){
                    let idf = $("#dropitF").val();
                let idm = $("#dropitM").val();
                dbloaded(idm,idf).then((data)=>{
                    thjsn = JSON.parse(data);
                    oldies3 =[];
                    console.log(thjsn);
                    console.log('thjsn');
                    if(thjsn.length >0){
                        var lastwsn = 0 ;
                        oldies3 = [];
                        fwd = 0;
                        while(fwd< (barem - (sec+first+third))){
                            ////console.log(thjsn);
                            ////console.log("thjsnloop" + (fwd+1));
                            let qsn = noreprandom3();
                                if(qsn==-1){
                                   ////console.log(-1);
                                    ////console.log(exam_offic);
                                    break;
                                    }
                           ////console.log("f:" + f + "/ exam_offic.length" + exam_offic.length + "/ qsn" + qsn);
                            lastwsn = fwd;
                            ////console'.log(thjsn[qsn]);
                            console.log(lastwsn ); 
                            exam_offic.push({"type":3, "id" : thjsn[qsn].idq,"barem" : 1});
                            console.log(exam_offic);
                            //console.log("rahzedt " + thjsn[qsn].idq); 
                            fwd++;
                            //alert(sec)
                            //////console.log( first);
    
                        }
    
                        if(lastwsn == ((barem-1) - (sec+first+third))){
                            console.log("done");
                            //console.log(exam_offic);
                            addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                                        console.log(data);
                                    });
                            dumpdata();
                        }else{
                            dumpdata();
                            alert("you don't have enogh questions" );
                            //////console.log(exam_offic);
                        }
                    }
                    //SEND 3 3
                    
                })  
                }
                
                //alert("hna l qcm");
            } 
        }
        }
        else if(barem <= 30 && barem >=12){
            qsns = 3;
            let firstq =true;
            while(firstq){
                 first =  noreprandom(Math.floor(barem/3));
                 //console.log(first);
                 if (first == 0){
                    firstq = false;
                    //alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                // exam 1
                if(chercherxam(second,first)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else if(chercherxam(!second,first)){
                    if(!second){
                         let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else{
                    continue;
                    
                }
        }
        //alert(first + "sdada");
        if(first>0){

            let firstq =true;
            while(firstq){
                //alert("2")
                 sec =  noreprandom2(Math.floor(barem/3));
                 //console.log(sec + " : sec");
                 if (sec == 0){
                    firstq = false;
                    alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,sec)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("sec 1 i :" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                           // alert("2 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 1 t:" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(gotit){
                    break;
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,sec)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("sec 2 i:" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                            //alert("2 dazz");
                            ////console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            alert("you don't have enogh questions");

            //fallback
        } 
        var gotit = false;
        if(sec>0){
            console.log(exam_offic);
            let firstq =true;
           
            while(firstq){
                 third =   barem - (first+sec) ;
                 //console.log(third + " : third");
                 if (third == 0){
                    firstq = false;
                    //alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                if(chercherxam(second,third)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("3 1 i:"+history.length + " " + choisesimg.length + " " + third + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : third});
                            //alert("3 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        firstq = false;
                        gotit = false;
                        //alert("you don't have enogh questions qcm time");
                    }
                    
                        
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                     gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("3 1 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : third});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                    }
                    

                }else if(chercherxam(!second,third)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("3 2 i:"+history.length + " " + choisesimg.length + " " + third + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : third});
                           //alert("3 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        firstq = false;
                        gotit = false;
                        //alert("you don't have enogh questions");
                    }
                    
                     

                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("3 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : third});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }

                    }
                    

                }else{
                    firstq = false;
                    //third = 0;
                    break;
                }
        }
        if(gotit){
            ////console.log(allimgs);
            console.log(exam_offic);
            //SEND 1
            addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                console.log(data);
            });
            dumpdata();
        }
        console.log(exam_offic);

        }
        console.log(exam_offic);
        if(!gotit && sec>0){ // if we didn't get any question
            if(exam_offic[2] == undefined){
                let idf = $("#dropitF").val();
            let idm = $("#dropitM").val();
            dbloaded(idm,idf).then((data)=>{
                thjsn = JSON.parse(data);
                ////console.log(thjsn);
                ////console.log('thjsn');
                if(thjsn.length >0){
                    var lastwsn = 0 ;
                    oldies3 = [];
                    fwd = 0;
                    while(fwd< (barem - (sec+first))){
                        ////console.log(thjsn);
                        ////console.log("thjsnloop" + (fwd+1));
                        let qsn = noreprandom3();
                            if(qsn==-1){
                               ////console.log(-1);
                                ////console.log(exam_offic);
                                break;
                                }
                       //alert("f:" + f + "/ exam_offic.length" + exam_offic.length + "/ qsn" + qsn);
                        lastwsn = fwd;
                        ////console.log(thjsn[qsn]);
                        ////console.log(); 
                        exam_offic.push({"type":3, "id" : thjsn[qsn].idq,"barem" : 1});
                        //console.log("rahzedt " + thjsn[qsn].idq); 
                        fwd++;
                        //alert(sec)
                        ////console.log( first);

                    }

                    if(lastwsn == (barem -1 )-(first +sec)){
                        console.log("done");
                        console.log(exam_offic);
                        //SEND 1 1
                        addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                            console.log(data);
                        });
                        dumpdata();
                    }else{
                        dumpdata();
                        alert("you don't have enogh questions");
                        ////console.log(exam_offic);
                    }
                }
                
            })  
            }
            
            //alert("hna l qcm");
        }
        
        }else if(barem >= 30 && barem <= 50){
            qsns = 4;
            let firstq =true;
            while(firstq){
                 first =  noreprandom21(Math.floor(barem/4));
                 //console.log(first);
                 if (first == 0){
                    firstq = false;
                    //alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                // exam 1
                if(chercherxam(second,first)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else if(chercherxam(!second,first)){
                    if(!second){
                         let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else{
                    continue;
                    
                }
        }
        //alert(first + "sdada");
        if(first>0){

            let firstq =true;
            while(firstq){
                //alert("2")
                 sec =  noreprandom22(Math.floor(barem/4));
                 //console.log(sec + " : sec");
                 if (sec == 0){
                    firstq = false;
                    alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,sec)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("sec 1 i :" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                           // alert("2 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 1 t:" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(gotit){
                    break;
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,sec)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("sec 2 i:" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                            //alert("2 dazz");
                            ////console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            //alert("you don't have enogh questions");

            //fallback
        } 
        if(sec>0){

            let firstq =true;
            while(firstq){
                //alert("2")
                third =  noreprandom23(Math.floor(barem/4));
                 //console.log(third + " : third");
                 if (third == 0){
                    firstq = false;
                    alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,third)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("third 1 i :" +history.length + " " + choisesimg.length + " " + third + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : third});
                           // alert("2 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("third 1 t:" +history.length + " " + choisestxt.length + " " + third + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : third});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(gotit){
                    break;
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,third)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("third 2 i:" +history.length + " " + choisesimg.length + " " + third + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : third});
                            //alert("2 dazz");
                            ////console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("third 2 t :" +history.length + " " + choisestxt.length + " " + third + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : third});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            //alert("you don't have enogh questions");

            //fallback
        } 
        var gotit = false;
        if(third>0){

            let firstq =true;
           
            while(firstq){
                 fourth =  barem - (first+sec+third);
                 //console.log(fourth + " : fourth");
                 if (fourth == 0){
                    firstq = false;
                    //alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                if(chercherxam(second,fourth)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("3 1 i:"+history.length + " " + choisesimg.length + " " + fourth + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : fourth});
                            //alert("3 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        firstq = false;
                        gotit = false;
                        //alert("you don't have enogh questions qcm time");
                    }
                    
                        
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                     gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("3 1 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : fourth});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                    }
                    

                }else if(chercherxam(!second,fourth)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("3 2 i:"+history.length + " " + choisesimg.length + " " + fourth + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : fourth});
                           //alert("3 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        //console.log(exam_offic);
                        break;
                    }
                    if(history.length == choisesimg.length){
                        firstq = false;
                        gotit = false;
                        //alert("you don't have enogh questions");
                    }
                    
                     

                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("3 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : fourth});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }

                    }
                    

                }else{
                    firstq = false;
                    //fourth = 0;
                    break;
                }
        }
        if(gotit){
            ////console.log(allimgs);
            //SEND 2
            console.log(exam_offic);
            addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                console.log(data);
            });
            dumpdata(); 
        }


        }  
        if(!gotit && third>0){ // if we didn't get any question
            console.log(exam_offic);
            alert("you don't have enogh questions qcm time");
            if(exam_offic[3] == undefined){
                let idf = $("#dropitF").val();
            let idm = $("#dropitM").val();
            dbloaded(idm,idf).then((data)=>{
                thjsn = JSON.parse(data);
                ////console.log(thjsn);
                ////console.log('thjsn');
                if(thjsn.length >0){
                    var lastwsn = 0 ;
                    oldies3 = [];
                    fwd = 0;
                    while(fwd< (barem - (sec+first+third))){
                        ////console.log(thjsn);
                        ////console.log("thjsnloop" + (fwd+1));
                        let qsn = noreprandom3();
                            if(qsn==-1){
                               ////console.log(-1);
                                ////console.log(exam_offic);
                                break;
                                }
                       ////console.log("f:" + f + "/ exam_offic.length" + exam_offic.length + "/ qsn" + qsn);
                        lastwsn = fwd;
                        ////console.log(thjsn[qsn]);
                        ////console.log(); 
                        exam_offic.push({"type":3, "id" : thjsn[qsn].idq,"barem" : 1});
                        //console.log(exam_offic);
                        //console.log("rahzedt " + thjsn[qsn].idq); 
                        fwd++;
                        //alert(sec)
                        ////console.log( first);

                    }

                    if(lastwsn == ((barem -1) - (sec+first+third))){
                        console.log("done");
                        xconsole.log(exam_offic);
                        addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                                console.log(data);
                            });
                            dumpdata();
                    }else{
                        alert("you don't have enogh questions" );
                        ////console.log(exam_offic);
                    }
                }
                //SEND 2 2
                

            })  
            }
            
            //alert("hna l qcm");
        }
        
        }else if(barem >= 50){
            //alert("60");
            console.log(exam_offic  );
            qsns = 5;
            let trio = randomise(1,2);
            //delete
            trio = 1;   
            if(trio == 1){

            let firstq =true;
            while(firstq){
                 first =  noreprandom31(Math.floor(barem/5));
                 if (first == 0){
                    firstq = false;
                    //alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                // exam 1
                if(chercherxam(second,first)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        console.log(exam_offic);
                        console.log("1 dazz");
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else if(chercherxam(!second,first)){
                    if(!second){
                         let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        console.log(exam_offic);
                        console.log("1 dazz");
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else{
                    continue;
                    
                }
        }
        //alert(first + "sdada");
        if(first>0){

            let firstq =true;
            while(firstq){
                //alert("2")
                 sec =  noreprandom32(Math.floor(barem/5));
                 console.log(sec + " : sec");
                 console.log(exam_offic);
                 if (sec == 0){
                    firstq = false;
                    alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,sec)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("sec 1 i :" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                           // alert("2 dazz");
                           console.log("2 dazz");
                            console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 1 t:" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(gotit){
                    break;
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,sec)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("sec 2 i:" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                            console.log("2 dazz");
                            console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            //alert("you don't have enogh questions");

            //fallback
        } 
        if(sec>0){

            let firstq =true;
            while(firstq){
                //alert("2")
                third =  noreprandom33(Math.floor(barem/5));
                 console.log(third + " : third");
                 if (third == 0){
                    firstq = false;
                    alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,third)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("third 1 i :" +history.length + " " + choisesimg.length + " " + third + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : third});
                           // alert("2 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("third 1 t:" +history.length + " " + choisestxt.length + " " + third + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : third});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(gotit){
                    break;
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,third)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("third 2 i:" +history.length + " " + choisesimg.length + " " + third + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : third});
                            //alert("2 dazz");
                            ////console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("third 2 t :" +history.length + " " + choisestxt.length + " " + third + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : third});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            //alert("you don't have enogh questions");

            //fallback
        } 

        if(third>0){

            let firstq =true;
            while(firstq){
                //alert("2")
                fourth =  noreprandom34(Math.floor(barem/5));
                 //console.log(fourth + " : fourth");
                 if (fourth == 0){
                    firstq = false;
                    alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,fourth)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("fourth 1 i :" +history.length + " " + choisesimg.length + " " + fourth + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : fourth});
                           // alert("2 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("fourth 1 t:" +history.length + " " + choisestxt.length + " " + fourth + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : fourth});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                    }
                }
                if(gotit){
                    break;
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,fourth)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("fourth 2 i:" +history.length + " " + choisesimg.length + " " + fourth + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : fourth});
                            //alert("2 dazz");
                            ////console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("third 2 t :" +history.length + " " + choisestxt.length + " " + third + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : fourth});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            //alert("you don't have enogh questions");

            //fallback
        } 

        var gotit = false;
        if(fourth>0){
            
            let firstq =true;
           
            while(firstq){
                 fifth =  60 - (first+sec+third+fourth);
                 //console.log(fifth + " : fifth");
                 if (fifth == 0){
                    firstq = false;
                    //alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                if(chercherxam(second,fifth)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("3 1 i:"+history.length + " " + choisesimg.length + " " + fifth + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : fifth});
                            //alert("3 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        firstq = false;
                        gotit = false;
                        //alert("you don't have enogh questions qcm time");
                    }
                    
                        
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                     gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("3 1 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : fifth});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                    }
                    

                }else if(chercherxam(!second,fifth)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("3 2 i:"+history.length + " " + choisesimg.length + " " + fifth + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : fifth});
                           //alert("3 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                        }
                    }
                    if(gotit){
                        //console.log(exam_offic);
                        break;
                    }
                    if(history.length == choisesimg.length){
                        firstq = false;
                        gotit = false;
                        //alert("you don't have enogh questions");
                    }
                    
                     

                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("3 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : fifth});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }

                    }
                    

                }else{
                    firstq = false;
                    //fourth = 0;
                    break;
                }
        }
        if(gotit){
            ////console.log(allimgs);
            //SEND 3
            addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                console.log(data);
            });
            console.log(exam_offic);
            dumpdata(); 
        }


        }  
        if(!gotit && fourth>0){ // if we didn't get any question
            if(exam_offic[4] == undefined){
                let idf = $("#dropitF").val();
            let idm = $("#dropitM").val();
            dbloaded(idm,idf).then((data)=>{
                thjsn = JSON.parse(data);
                ////console.log(thjsn);
                ////console.log('thjsn');
                if(thjsn.length >0){
                    var lastwsn = 0 ;
                    oldies3 = [];
                    fwd = 0;
                    while(fwd< (barem - (sec+first+third+fourth))){
                        ////console.log(thjsn);
                        ////console.log("thjsnloop" + (fwd+1));
                        let qsn = noreprandom3();
                            if(qsn==-1){
                               ////console.log(-1);
                                ////console.log(exam_offic);
                                break;
                                }
                       ////console.log("f:" + f + "/ exam_offic.length" + exam_offic.length + "/ qsn" + qsn);
                        lastwsn = fwd;
                        ////console.log(thjsn[qsn]);
                        ////console.log(); 
                        exam_offic.push({"type":3, "id" : thjsn[qsn].idq,"barem" : 1});
                        //////console.log(exam_offic);
                        //////console.log("rahzedt " + thjsn[qsn].idq); 
                        fwd++;
                        //alert(sec)
                        //////console.log( first);

                    }

                    if(lastwsn == (barem-1)-(sec+first+third+fourth)){
                        ////console.log("done");
                        console.log(exam_offic);

                        addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                            console.log(data);
                        });
                        dumpdata();
                    }else{
                        alert("you don't have enogh questions" + lastwsn);
                        //////console.log(exam_offic);
                    }
                }
                //SEND 3 3
                
            })  
            }
            
            //alert("hna l qcm");
        }
        }else{
            //alert("val2")
            let firstq =true;
            while(firstq){
                 first =  noreprandom41(Math.floor(barem/4));
                 //console.log(first);
                 if (first == 0){
                    firstq = false;
                    //alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                // exam 1
                if(chercherxam(second,first)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else if(chercherxam(!second,first)){
                    if(!second){
                         let rddsa = randomise(0,choisesimg.length-1);
                        exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(allimgs[choisesimg[rddsa]]);
                        firstq = false;
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                    }
                    

                }else{
                    continue;
                    
                }
        }
        //alert(first + "sdada");
        if(first>0){

            let firstq =true;
            while(firstq){
                //alert("2")
                 sec =  noreprandom42(Math.floor(barem/4));
                 console.log(sec + " : sec");
                 if (sec == 0){
                    firstq = false;
                    console.log(exam_offic)
                    alert("you don't have enogh questions");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,sec)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("sec 1 i :" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                            //alert("2 dazz");
                            console.log(exam_offic);
                            console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }

                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 1 t:" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(gotit){
                    break;
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,sec)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("sec 2 i:" +history.length + " " + choisesimg.length + " " + sec + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : sec});
                            //alert("2 dazz");
                            ////console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("sec 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : sec});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            //alert("you don't have enogh questions");

            //fallback
        } 
        if(sec>0){
            console.log(exam_offic)
            //alert(2)
            let firstq =true;
            while(firstq){
                //alert("2")
                third =  noreprandom43(Math.floor(barem/4));
                //alert("third:" + third)
                 //console.log(third + " : third");
                 if (third == 0){
                    firstq = false;
                    console.log(exam_offic)
                    alert("you don't have enogh questions43");
                    break;
                 }
                let second = randomise(1,2);
                 if(second == 1){
                    second = true;
                 }else{
                     second = false;
                 }
                //exam 2
                if(chercherxam(second,third)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("third 1 i :" +history.length + " " + choisesimg.length + " " + third + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : third});
                           // alert("2 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                        
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("third 1 t:" +history.length + " " + choisestxt.length + " " + third + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : third});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(gotit){
                    //console.log("hawa")
                    //console.log(exam_offic);
                    break;
                    
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                
                   }
                    

                }else if(chercherxam(!second,third)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        let gotit = false;
                        while(history.length < choisesimg.length){
                           // alert("third 2 i:" +history.length + " " + choisesimg.length + " " + third + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : third});
                            //alert("2 dazz");
                            ////console.log(exam_offic);
                            ////console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                       
                    if(history.length == choisesimg.length){
                        //alert("you don't have enogh questions");
                    }
                     
                   }else{
                    //    let rddsa = randomise(0,choisestxt.length-1);
                    //    exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : first});
                    //    //console.log(exam_offic);
                    //    //console.log(alltext[choisestxt[rddsa]]);
                    //    firstq = false;
                    let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("third 2 t :" +history.length + " " + choisestxt.length + " " + third + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : third});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                   }
                    

                }else{
                    continue;
                    
                }
        }
        }else{
            //alert("you don't have enogh questions");

            //fallback
        } 
        var gotit = false;
        if(third>0){

            let firstq =true;
           
            while(firstq){
                 fourth =  barem - (first+sec+third);
                 //console.log(fourth + " : fourth");
                 if (fourth == 0){
                    gotit = true;
                    //alert("you don't have enogh questions44");
                    break;
                 }
                let second = randomise(1,2);
                if(second == 1){
                    second = true;
                }else{
                    second = false;
                }
                if(chercherxam(second,fourth)){
                    if(second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("3 1 i:"+history.length + " " + choisesimg.length + " " + fourth + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : fourth});
                            //alert("3 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        break;
                    }
                    if(history.length == choisesimg.length){
                        firstq = false;
                        gotit = false;
                        //alert("you don't have enogh questions qcm time");
                    }
                    
                        
                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                     gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("3 1 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : fourth});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }
                    }
                    

                }else if(chercherxam(!second,fourth)){
                    if(!second){
                        let rddsa = randomise(0,choisesimg.length-1);
                        let history = [];
                        gotit = false;
                        while(history.length < choisesimg.length){
                            //alert("3 2 i:"+history.length + " " + choisesimg.length + " " + fourth + " / " + allimgs[choisesimg[0]].idqmg + " / " + choisesimg[0] );
                           
                            let rddsa1 = false;
                            for(let i =0;i<history.length;i++){
                                if(history[i] == rddsa){
                                    rddsa = randomise(0,choisesimg.length-1);
                                    rddsa1 = true;
                                }
                            }
                            if(rddsa1){
                                continue;
                            }
                            history.push(rddsa);
                             
                        if(!check_if_exam_doop(1,allimgs[choisesimg[rddsa]].idqmg)){
                            exam_offic.push({"type":1, "id" : allimgs[choisesimg[rddsa]].idqmg,"barem" : fourth});
                           //alert("3 dazz");
                            //console.log(exam_offic);
                            //console.log(allimgs[choisesimg[rddsa]]);
                            firstq = false;
                            gotit = true;
                            break;
                        }
                    }
                    if(gotit){
                        //console.log(exam_offic);
                        break;
                    }
                    if(history.length == choisesimg.length){
                        firstq = false;
                        gotit = false;
                        //alert("you don't have enogh questions");
                    }
                    
                     

                    }else{
                        let rddsa = randomise(0,choisestxt.length-1);
                    let history = [];
                    let gotit = false;
                    while(history.length < choisestxt.length){
                        //alert("3 2 t :" +history.length + " " + choisestxt.length + " " + sec + " / " + alltext[choisestxt[0]].idqtxt + " / " + choisestxt[0] );
                       
                        let rddsa1 = false;
                        for(let i =0;i<history.length;i++){
                            if(history[i] == rddsa){
                                rddsa = randomise(0,choisestxt.length-1);
                                rddsa1 = true;
                            }
                        }
                        if(rddsa1){
                            continue;
                        }
                        history.push(rddsa);
                         
                    if(!check_if_exam_doop(2,alltext[choisestxt[rddsa]].idqtxt)){
                        exam_offic.push({"type":2, "id" : alltext[choisestxt[rddsa]].idqtxt,"barem" : fourth});
                        //alert("2 dazz");
                        //console.log(exam_offic);
                        //console.log(alltext[choisestxt[rddsa]]);
                        firstq = false;
                        gotit = true;
                        break;
                    }
                }
                if(history.length == choisestxt.length){
                    //alert("you don't have enogh questions");
                }
                if(gotit){
                    break;
                }

                    }
                    

                }else{
                    firstq = false;
                    //fourth = 0;
                    break;
                }
        }
        if(gotit){
            ////console.log(allimgs);
            //SEND 2
            //console.log(exam_offic);
            addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                console.log(data);
            });
            dumpdata(); 
        }


        } 
        if(!gotit && third>0){ // if we didn't get any question
            //console.log("u don't have enogh questions to make an exam");
           
            if(exam_offic[3] == undefined){
                let idf = $("#dropitF").val();
            let idm = $("#dropitM").val();
            dbloaded(idm,idf).then((data)=>{
                thjsn = JSON.parse(data);
                oldies3 =[];
                console.log(thjsn);
                console.log('thjsn');
                if(thjsn.length >0){
                    var lastwsn = 0 ;
                    oldies3 = [];
                    fwd = 0;
                    while(fwd< (barem - (sec+first+third))){
                        ////console.log(thjsn);
                        ////console.log("thjsnloop" + (fwd+1));
                        let qsn = noreprandom3();
                            if(qsn==-1){
                               ////console.log(-1);
                                ////console.log(exam_offic);
                                break;
                                }
                       ////console.log("f:" + f + "/ exam_offic.length" + exam_offic.length + "/ qsn" + qsn);
                        lastwsn = fwd;
                        ////console'.log(thjsn[qsn]);
                        console.log(lastwsn ); 
                        exam_offic.push({"type":3, "id" : thjsn[qsn].idq,"barem" : 1});
                        console.log(exam_offic);
                        //console.log("rahzedt " + thjsn[qsn].idq); 
                        fwd++;
                        //alert(sec)
                        //////console.log( first);

                    }

                    if(lastwsn == ((barem-1) - (sec+first+third))){
                        console.log("done");
                        //console.log(exam_offic);
                        addexm2(fil,mat,JSON.stringify(exam_offic),barem).then(function(data){
                                    console.log(data);
                                });
                        dumpdata();
                    }else{
                        dumpdata();
                        alert("you don't have enogh questions" );
                        //////console.log(exam_offic);
                    }
                }
                //SEND 3 3
                
            })  
            }
            
            //alert("hna l qcm");
        } 
        }
        }
        txtready = false;
        imgready = false;
        
    }
    
}
function dbaddExamImg(mat,fil,exam) {
    let texam =  exam;
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "filadd.php",
            data: {
                "username": username,
                "exam" : texam,
                "mat" : mat,
                "fil" : fil
            },
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
               // ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}
function dumpdata(){
    first  = 0;
    sec = 0;
    third = 0;
    fourth= 0;
    fifth = 0;
    gotit = false;
    oldies = [];
    oldies2 = [];
    oldies3 = [];
    thjsn =[];
    oldies21 = [];
    oldies22 = [];
    oldies23 = [];
    oldies41 = [];
    oldies42 = [];
    oldies43 = [];
    oldies31 = [];
    oldies32 = [];
    oldies33 = [];
    oldies34 = [];
    exam_offic = [];
    reloadexams2();
}

// var baremecount;
// function baremcheck() {
//     baremecount =0;
//     let count = allimgsselected.length ;
//     for(let i = 0 ; i<count ; i++){
//         ////console.log(parseInt( $(`#the${allimgsselected[i]}`).val()));
//     baremecount += parseInt( $(`#the${allimgsselected[i]}`).val());
//     }
//     count = alltxtsselected.length;
//     for(let i = 0 ; i<count ; i++){
//         baremecount += parseInt($(`#thet${alltxtsselected[i]}`).val());
//     }
//     //alert(baremecount);
// }


$(document).ready(()=>{

      
      $('.tab2 a').on('click', function (e) {
        
        e.preventDefault(); 
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
      
        $('.tab-content3 > div').not(target).hide();
        
        $(target).fadeIn(600);
        
      });
    
    


      document.querySelector("html").classList.add('js');

      var fileInput  = document.querySelector( ".input-file" ),  
          button     = document.querySelector( ".input-file-trigger" ),
          the_return = document.querySelector(".file-return");
            
      button.addEventListener( "keydown", function( event ) {  
          if ( event.keyCode == 13 || event.keyCode == 32 ) {  
              fileInput.focus();  
          }  
      });
      button.addEventListener( "click", function( event ) {
         fileInput.focus();
         return false;
      });  
      fileInput.addEventListener( "change", function( event ) {  
          the_return.innerHTML = this.value;  
      });  
      
      
      
      
      
      $('.form').find('input, textarea').on('keyup blur focus', function (e) {
        
          var $this = $(this),
              label = $this.prev('label');
        
              if (e.type === 'keyup') {
                    if ($this.val() === '') {
                  label.removeClass('active highlight');
                } else {
                  label.addClass('active highlight');
                }
            } else if (e.type === 'blur') {
                if( $this.val() === '' ) {
                    label.removeClass('active highlight'); 
                    } else {
                    label.removeClass('highlight');   
                    }   
            } else if (e.type === 'focus') {
              
              if( $this.val() === '' ) {
                    label.removeClass('highlight'); 
                    } 
              else if( $this.val() !== '' ) {
                    label.addClass('highlight');
                    }
            }
        
        });
        
        $('.tab a').on('click', function (e) {
          
          e.preventDefault();
          
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
          
          target = $(this).attr('href');
        
          $('.tab-content > div').not(target).hide();
          
          $(target).fadeIn(600);
          
        });
});
function addmatier(mat) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "matadd.php",
            data: {
                "mat": mat
            },
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
               // ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}
function addfiler(fil) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "filadd.php",
            data: {
                "fil": fil
            },
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
               // ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

function addtextexer(fil,mat,txt,barem,deffi) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "addtxtexer.php",
            data: {
                "txt": txt,
                "fil": fil,
                "mat": mat,
                "user" : username,
                "barem" : barem,
                "deffi" : deffi
            },
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
               // ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}
function addexm2(fil,mat,txt,barem) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "addexmimgx.php",
            data: {
                "exm": txt,
                "fil": fil,
                "mat": mat,
                "user" : username,
                "barem" : barem
            },
            success: function(data) {
                resolve(data) // Resolve promise and go to then()
            },
            error: function(err) {
               // ////console.log(err)
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}
function dbgetexm2() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "getexams2.php",
            data: {
                "username": username
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
function deleexmg2(idxm) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            method: "POST",
            url: "delexemg2.php",
            data: {
                "idexe": idxm
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

///passchange

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

function reloadexams2(){
    dbgetexm2(username).then((data)=>{
        //console.log(data);
        let datj = JSON.parse(data);
        //console.log(datj);
        $("#tabexams2").empty();
        for(let i = 0 ; i<datj.length ; i++){
            $("#tabexams2").append(`
            <tr>
            <td>${datj[i].idexe}</td>
            <td>${datj[i].fil}</td>
            <td>${datj[i].mat}</td>
            <td>${datj[i].barem}</td>
            <td><div class="cb"><button id="showimgquiz${datj[i].idexe}" class="button-88">show</button></div></td>
    <td><div class="cb"><button id="Deletimgequiz${datj[i].idexe}" class="button-88">Delete</button></div></td>
            </tr>
            `);
            $("#showimgquiz"+datj[i].idexe).click(()=>{
                document.cookie = 'eximag='+datj[i].idexe+';time=2020;expires='+new Date(2028,11,13).toUTCString()+'';
                window.open("http://localhost:90/EFF/Project/imgquiz.html");
            });
            $("#Deletimgequiz"+datj[i].idexe).click(()=>{
                deleexmg2(`${datj[i].idexe}`).then((data)=>{
                    if(data == "1"){
                        reloadexams2();
                    }
                });
            });
        }

    });
}

function reloadexams1(){
    $("#tablebat2").empty();
    dbexam().then((data)=>{ 
        ////console.log(data)
        let databd = JSON.parse(data);
       
        if(databd.length >= 0){
            //generer home table
            
            

            for(let i = databd.length-1 ; i >=0;i--){



                        ////console.log(JSON.parse(data));
                       // //console.log(databd);
                        
                        

                        

                            $("#tablebat2").append(`
                            <tr id="rowbats${databd[i].idbat}">
                            <td data-title="ID" >${databd[i].idbat}</td>
                            <td data-title="Vari">${databd[i].vari}</td>
                           
                            <td data-title="Matiere">${databd[i].matier}</td>
                            <td data-title="Filiere">
                            ${databd[i].filier}
                              </td>
                              <td data-title="" style="padding-top: 7px;  padding-right: 0px;  padding-bottom: 2px;  padding-left: 0 px;">
                                <div class='wrapper1'>
                                  
                                  
                                  <div class="button_su" style="margin: auto;" id="showbat${databd[i].idbat}">
                                    <span class="su_button_circle">
                                    </span>
                                    <a href="#" class="button_su_inner">
                                      <span class="button_text_container">
                                        Show
                                      </span>
                                    </a>
                                  </div>
                            
                                  <div class="button_su" id="dele${databd[i].idbat}" style="margin: auto;">
                                    <span class="su_button_circle">
                                    </span>
                                    <a href="#" class="button_su_inner">
                                      <span class="button_text_container">
                                       Delete
                                      </span>
                                    </a>
                                  </div>
                                  
                                        
                                </div> 
                              </td>
                          </tr>
                            `);
                            $(`#showbat${databd[i].idbat}`).click(()=>{
                                showbat(databd[i].idbat);
                            })
                            $(`#dele${databd[i].idbat}`).click(()=>{
                                dbdelexam(`${databd[i].idbat}`).then((data)=>{
                                    if(data == "1"){
                                        reloadexams1();
                                    }
                                });
                            });
                        
                        
        
            }
    
        }
    })
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



// function dbdelexam(idexam){
//     return new Promise((resolve,reject)=>{
//         $.ajax({
//             url:"delexam.php",
//             type:"POST",
//             data:{
//                 "idexe":idexam
//             },
//             success:function(data){
//                 resolve(data);
//             },
//             error:function(data){
//                 reject(data);
//             }
//         })
//     });
// }

function reloeadqueses() {
    $("#tabqsny").empty();
    getmyques().then((data)=>{
        let dadata = JSON.parse(data);
        ////console.log(dadata);
        for(let k=0 ; k< dadata.length ; k++){
            $("#tabqsny").append(`
            <tr>
            <td data-title="ID" id="row1">${dadata[k].idq}</td>
            <td data-title="Question">${dadata[k].quest}</td>
            <td data-title="Filiere">${dadata[k].filier}</td>
            <td data-title="Matiere">${dadata[k].matier}</td>
              <td data-title="" style="padding-top: 7px;  padding-right: 0px;  padding-bottom: 2px;  padding-left: 0 px;">
                <div class='wrapper1'>
                  <div class="button_su" style="margin: auto;" id="qsnshow${dadata[k].idq}">
                    <span class="su_button_circle">
                    </span>
                    <a href="#" class="button_su_inner">
                      <span class="button_text_container">
                        Show
                      </span>
                    </a>
                </div> 
              </td>
          </tr>
            `);
            $( `#qsnshow${dadata[k].idq}`).click(()=>{
                gettheques(dadata[k].idq);
            })
        }
    })
}