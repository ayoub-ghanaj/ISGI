


//butt
//document.getElementById("mybtn").addEventListener("click", function() {
  //$(".cs").hide(); 
  //$(".Result").show();
 // alert("aahah");
//});
$(document).ready(function(){

});

$("#restt").hide();
$( "#mybtn" ).click(function() {
 
  $("#conts").hide();
  $("#restt").show();
});



//dropdown generete

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

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
  if(result.eximag != undefined){
    $("#mybtn").click(()=>{
      window.print();
    });
    getixamg(result.eximag).then((data)=>{
        //console.log(data);
        let jsn = JSON.parse(data);
        console.log(jsn);
        let exam = JSON.parse(jsn[0].exam);
        if(jsn[0].header != "none"){
          $(".container").prepend(`<img src="${jsn[0].header}"  style="width : 100%; height : 100%; max-height : 350px;" > `);
        }
        console.log(exam);
        $("#examimg").empty();
        $("#examqcm").empty();
        for(let i = 0 ; i < exam.length ; i++){
          if(exam[i].type  == 1){
            getidqmg(exam[i].id).then((data)=>{
              console.log(data)
              let imgjsn = JSON.parse(data);
              console.log(imgjsn);
            $("#examimg").append(`
            <h2 class="quiz-question">EXERCISE ${(i+1)}:(${exam[i].barem} point) </h2>
        <div class="Exerciseimg">
          <img src="imgqsn/${imgjsn[0].curl}" alt="">
        </div>
            `);
          });
          }else if(exam[i].type == 2){
            getidqtxt(exam[i].id).then((data)=>{
              let txtjsn = JSON.parse(data);
            $("#examimg").append(`<h2 class="quiz-question">EXERCISE ${(i+1)}:(${exam[i].barem} point) </h2>
        <div class="Exerciseimg">
          <p> ${txtjsn[0].txt} </p>
        </div>` );
            });
          }else if(exam[i].type == 3){
            getmyques(exam[i].id).then((data)=>{
              console.log(data);
              let qcmjsn = JSON.parse(data);
              console.log(qcmjsn);
            $("#examqcm").append(`<h2 class="quiz-question">Q${(i+1)} (1 point): ${qcmjsn[0].quest}</h2>
            <ul id="choise${exam[i].id}" >
              
            </ul>` );
            getmyres2(exam[i].id).then((data)=>{
              let choisjsn = JSON.parse(data);
              console.log(choisjsn);
              for(let j = 0 ; j < choisjsn.length ; j++){
                $(`#choise${exam[i].id}`).append(`<li style="margin: 10px;" >1) -${choisjsn[j].chois} </li>`);
              }
            });
            });
            
          }
        }
    });

    document.cookie = 'eximag=null;time=2020;expires='+new Date(2020,11,13).toUTCString()+'';
  }else{
    window.location.href = "login.html";
  }
  // note 
  

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
function getmyres2(idq) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getresidq.php",
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
function getixamg(idexe) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getixamg.php",
          data: {
              "idexe": idexe
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
function getidqmg(idqmg) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getidqmg.php",
          data: {
              "idqmg": idqmg
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
function getidqtxt(idtxt) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          method: "POST",
          url: "getidqtxt.php",
          data: {
              "idqtxt": idqtxt
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