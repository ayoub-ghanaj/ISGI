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

var idbatat;
var curry; 
$("#restt").hide();
var cop=0;
//the answers
var arrvr = [];
// uploaded questions
var ans = [];
var arrqes = [];
var idqs = [];


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
  if(result.exahys != undefined){
    getmynote(result.exahys).then((data)=>{
    let note = JSON.parse(data)[0].note;
    //console.log(note)
    $("#demo").text(note);
  });
  getmyhistory(result.exahys).then((data)=>{
    $("#exam").empty();
    //console.log(data);
    let jsn = JSON.parse(data);
    let exam = JSON.parse(jsn[0].exam);
    let qsn = JSON.parse(jsn[0].unsrs);
    let int = 0;
    for(let i = 0 ; i<exam.exam.length;i++){
      getmyques(exam.exam[i].idq).then((data)=>{
        let jsn = JSON.parse(data);
        //console.log(jsn);
        $("#exam").append(`<h2 class="quiz-question" id="que${jsn[0].idq}">${jsn[0].quest}</h2>
        <ul id="res${jsn[0].idq}">
        </ul>`);  
        for(let j = 0 ; j<exam.exam[i].idrs.length;j++){
        getmyres(exam.exam[i].idrs[j]).then((data)=>{
          let jsn1 = JSON.parse(data);
          //console.log(jsn);
          if(jsn1[0].qcm == "0"){
          $(`#res${exam.exam[i].idq}`).append(`<li class="quiz-answer" id="chois${jsn1[0].idr}"><input type="radio"  value="${jsn1[0].chois}">${jsn1[0].chois}</li>`);
          }else{
            idrs.push(jsn1[0].idr);
            $(`#res${exam.exam[i].idq}`).append(`<li class="quiz-answer" id="chois${jsn1[0].idr}" style="background-color: #ff9730;"><input type="radio"  value="${jsn1[0].chois}">${jsn1[0].chois}</li>`);
          }
          if(j == exam.exam[i].idrs.length-1){
            int++;
          }
          if(int == exam.exam.length){
            //alert("jsn1");
            for(let k = 0 ; k<qsn.length;k++){
              if(qsn[k].on && redify(qsn[k].idr)){
                $(`#chois${qsn[k].idr}`).css({"backgroundColor" : "#ff4c38"});
                //console.log("hmer " + jsn1[0].chois);
              }else if(qsn[k].on){
                $(`#chois${qsn[k].idr}`).css({"backgroundColor" : "#74ff57"});
                //console.log("kheder " + jsn1[0].chois);
              }
            }
          }
        });
      }
      });
      
      //console.log(exam.exam[i].idrs);
    }

    //console.log(jsn);
    //console.log(exam);
   // console.log(qsn);
    
  });
    document.cookie = 'exahys='+null+';expires='+new Date(2020,11,13).toUTCString()+'';
  }else{
    window.location.href = "login.html";
  }
  // note 
  

});

var idrs = [];
function redify(idr){
for(let i = 0 ; i<idrs.length;i++){
  if(idrs[i] == idr){
    return false;
  }
}
return true;
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
             // console.log(err)
              reject(err) // Reject the promise and go to catch()
          }
      });
  });
}
function getmyres(idr) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getresid.php",
          data: {
              "idr": idr
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
function getmyques(idq) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getqsbyid.php",
          data: {
              "idq": idq
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
function getmyhistory(idpass){
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getexmhistory.php",
          data: {
              "idpass": idpass
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
function getmynote(idpass){
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getexmnote.php",
          data: {
              "idpass": idpass
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
            "pass" : pass1,
            "exam" : JSON.stringify({"exam" : idqs , "correct" : arrvr}),
            "unsrs": JSON.stringify(exam),
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