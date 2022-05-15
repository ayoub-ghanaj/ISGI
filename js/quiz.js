// #BY AYOUB GHANAJ
var end = false;

function ontimer(){
  // Set the date we're counting down to
let duree =  120;
let currentDate = new Date();
console.log(currentDate);
var countDownDate = new Date(currentDate.getTime() + duree*60000);
console.log(countDownDate);
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML ="Durée:" + hours + " h"
  +" "+ minutes + " m " +" "+ seconds + " s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TEST ENDED";
    $( "#mybtn" ).trigger( "click" );
  }
}, 1000);
} 

function quest(val) {
  if (ans[val].length == arrvr[val].length) {
      for (let i = 0; i < ans[val].length; i++) {
          if (ans[val][i] != arrvr[val][i]) {
              return false;
          }
      }
      return true;
  }
  return false;
}
//butt
//document.getElementById("mybtn").addEventListener("click", function() {
  //$(".cs").hide(); 
  //$(".Result").show();
 // alert("aahah");
//});
var idbatat;
var curry; 
$("#restt").hide();
var cop=0;
//the answers
var arrvr = [];
// uploaded questions
var ans = [];
var arrqes = [];
function loadexam(idxm){
  getmyhead(idxm).then((data)=>{
    if(data == '[]'){
     // document.cookie = 'batch=null;expires='+new Date(2020,11,13).toUTCString()+'';
      document.cookie = 'exam=null;expires='+new Date(2020,11,13).toUTCString()+'';
        setTimeout(function () {
          location.reload(true);
        }, 500);
     // window.location.href = "quiz.html";
     // window.location.href = "login.html";  
    }
    let fd = JSON.parse(data);
    idbatat = fd[0].idbat;
    if(fd[0].header != 'default'){
      $("#imgheader").attr("src","headers/"+fd[0].header);
    }
    let fw = JSON.parse(fd[0].code).exams;
    for(let k = 0 ; k<fw.length ; k++){
        if(fw[k] == idxm){
          $("#vari").text("V " + (k+1));
        }
    }
    //console.log(fd[0])
    $("#matie").text(""+ fd[0].matier);
    $("#filie").text(""+ fd[0].filier);
  })
  exam = [];
  getmyexm(idxm).then((data)=>{
    
    let jsn = JSON.parse(data); 
    //console.log(jsn)
    let examp = JSON.parse(jsn[0].code).code;
    $("#exam").empty();
    for(let i = 0 ; i<examp.length ; i++){
      let row = [];
      getmyqsn(examp[i]).then((data)=>{
        let vss  = JSON.parse(data);
        $("#exam").append(`
        <h2 class="quiz-question">${vss[0].quest}</h2>
            <ul id="row${vss[0].idq}">
              
            </ul>
        `);
          getmychoi(examp[i]).then((data)=>{
            let jss = JSON.parse(data);
            let arrv = [];
            //console.log(jss);
            for(let j = 0 ; j<jss.length ; j++){
              $(`#row${vss[0].idq}`).append(`
              <li class="quiz-answer" style="text-align : center;" id="chois${jss[j].idr}">${jss[j].chois}</li>
              `);
              if(jss[j].qcm == 0){
                arrv.push(false); 
              }else{
                arrv.push(true);
              }
              //arrv.push(jss[j].idr)
              exam.push({
                "qcm": i,
                "idq": vss[0].idq,
                "idr": jss[j].idr,
                "on": false
            });

              $(`#chois${jss[j].idr}`).click(()=>{
                //console.log(`#chois${jss[j].idr}`);
                curry = jss[j].idr;
                flip()
                // if(exam[parseInt(`${cop}`)].on){
                //   exam[parseInt(`${cop}`)].on = false
                //   $(`#chois${jss[j].idr}`).css({"backgroundColor" : "#ffffff"});
                  
                // }else{
                //   exam[parseInt(`${cop}`)].on = true
                //   $(`#chois${jss[j].idr}`).css({"backgroundColor" : "#cccccc"});
                // }
              })
              cop++;
            }
            nbtheqsn = arrv.length+1
            arrvr.push(arrv);
            $("#bari").text(" /" +(arrv.length+1));
            
          })
      })
    }

  })
  

}

var nbtheqsn ;
function flip(){
  for(let i = 0 ; i<exam.length;i++){
    if(exam[i].idr == curry){
      if(exam[i].on){
        exam[i].on = false
        $(`#chois${exam[i].idr}`).css({"backgroundColor" : "#ffffff"});
        
      }else{
        exam[i].on = true
        $(`#chois${exam[i].idr}`).css({"backgroundColor" : "#cccccc"});
      }
    }
  }
}
var taken = 0;
var note = 0 ;
function calculatit(){
  note = 0;
  //console.log(exam);
  //console.log(arrvr)
  let same ;
  taken = 0;
  for(let b = 0 ;b<arrvr.length ; b++){
    same = true;
    for( let c = 0 ; c<arrvr[b].length ; c++){
      if(exam[taken].on != arrvr[b][c]){
        same = false;
        //console.log(exam[taken].idr)
      }
      taken++;
    }
    if(same){
      note++;
    }
  }
  //console.log(note);
  return note;
}
 var str = document.cookie;
var exam = [];
var canpass ;
const result = {};
var username;
$(document).ready(()=>{
  str = document.cookie;
    str = str.split('; ');
    for (let i in str) {
        const cur = str[i].split('=');
        result[cur[0]] = cur[1];
        
    }
    let tcode = result.code+"=";
    let decrypted = CryptoJS.AES.decrypt(tcode.toString(),result.trader);
    let plaintext = decrypted.toString(CryptoJS.enc.Utf8);
    username = plaintext;

  dbexistsess(result.code+"=").then((data)=>{
    if(JSON.parse(data)[0].existad == '1' ){
        canpass = false;
    }
    else if (JSON.parse(data)[1].existus == '1' ){
            canpass = true;
            ontimer();
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
    //console.log('done');
    }, 5000);

str = document.cookie;
str = str.split('; ');
for (let i in str) {
    const cur = str[i].split('=');
    result[cur[0]] = cur[1];
    
}
//console.log(result);
  if(result.exam != undefined){
    
    loadexam(result.exam);
    //document.cookie = 'exam='+null+';expires='+new Date(2020,11,13).toUTCString()+'';
  }else if(result.batch != undefined){
    getmybach(result.batch).then((data)=>{
      var fd;
      try {
        fd = JSON.parse(data);
      }
      catch (e) {
            document.cookie = 'batch=null;expires='+new Date(2020,11,13).toUTCString()+'';
            //document.cookie = 'exam=null;expires='+new Date(2020,11,13).toUTCString()+'';
            location.reload();
            window.location.href = "login.html";  
      }
      if(fd[0].header != 'default'){
        $("#imgheader").attr("src","headers/"+fd[0].header);
      }
      let fw = JSON.parse(fd[0].code).exams;
      //console.log(fw.length);
      loadexam(fw[randomise(0,fw.length-1)]);
    })
   // document.cookie = 'batch='+null+';expires='+new Date(2020,11,13).toUTCString()+'';
   
  }

  $("#mybtn").click(()=>{
    if(canpass){
      if(end == false){
      let not = calculatit();
      let pass;
      if(nbtheqsn/2 <= not){
        pass = "pass"
      }else{
        pass = "fail"
      }
      dbaddpass(username,idbatat,not,pass).then((data)=>{
          if(data == '1'){     
            document.cookie = 'batch=null;expires='+new Date(2020,11,13).toUTCString()+'';
            document.cookie = 'exam=null;expires='+new Date(2020,11,13).toUTCString()+'';
            document.cookie = 'done=true;expires='+new Date(2023,11,13).toUTCString()+'';
            console.log("kain");
            wait(0.5);
            //alert("Bye")
            window.close();
          }
          })
      //console.log(idbatat + ' / ' + not + " / " + ( nbtheqsn/2 <= not) +" /" +  username  )

      end = true;
      }
    }else{
        let not = calculatit();
        document.getElementById("demo").innerHTML = not +" / " +nbtheqsn;
        $('html, body').animate({
          scrollTop: $("#demo").offset().top
        });
        document.cookie = 'batch=null;expires='+new Date(2020,11,13).toUTCString()+'';
        document.cookie = 'exam=null;expires='+new Date(2020,11,13).toUTCString()+'';
        
      }
    //$("#conts").hide();
    //$("#restt").show();
  });
});
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
             // console.log(err)
              reject(err) // Reject the promise and go to catch()
          }
      });
  });
}
function randomise(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
function getmyexm(idqsnt) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getexm.php",
          data: {
              "exam": idqsnt
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
function getmyqsn(idqsnt) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getqssn.php",
          data: {
              "exam": idqsnt
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

function getmyhead(idqsnt) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "head.php",
          data: {
              "exam": idqsnt
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
function getmybach(idqsnt) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "mybach.php",
          data: {
              "exam": idqsnt
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
function checkersess(){
  if(result.code == undefined || result.trader == undefined){
      window.location.href = "login.html";
  }
  if(result.trader != undefined && result.code != undefined){
     // console.log(result.trader + " / " + result.code )
      dbexistsess(result.code+"=").then((data)=>{
          //console.log(data);
          if(JSON.parse(data)[0].existad == '1' ){

          }else if (JSON.parse(data)[1].existus == '1' )
          {

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
              //console.log(err)
              reject(err) // Reject the promise and go to catch()
          }
      });
  });
}
function dbaddpass(username1,idbat1,note1,pass1) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "insertpass.php",
          data: {
            "username" : username1,
            "idxbat" : idbat1,
            "note" : note1,
            "pass" : pass1
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
function wait(sec) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < sec*1000);
}