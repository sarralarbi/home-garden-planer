'use strict';

let sign = document.querySelector("#signin");
let log = document.querySelector("#login");



document.getElementsByClassName("overlay")[0].style.height = document.getElementsByTagName("body")[0].scrollHeight;


log.addEventListener("click",()=>{
    document.getElementsByClassName("overlay")[0].style.height = document.getElementsByTagName("body")[0].scrollHeight;
    document.getElementsByClassName("overlay")[0].style.display="block";
  setTimeout(()=>{  document.getElementsByClassName("overlay")[0].style.opacity="1";},50)
  document.getElementsByClassName("overlay")[0].innerHTML ='<div id="formit"><div class="slfm" id="loginf"> \
  <form action="#" method="post">  \
  <p><b> : للتسجيل يرجى ملئ جميع الخانات  </b></p>\
  <hr></hr>\
  <img src ="img/core-img/logo2.png" style="transform: scale(.5); " ></img>\
  <div class="row lsgform"> \
  <label for="useris">:اسم المستخدم/رقم الهاتف/البريد الالكتروني</label>\
  <input type="text" class="sform-control" id="useris" placeholder="المستخدم" required>\
  <label for="passwd">: كلمة السر</label>\
  <input type="password" class="sform-control" id="passwd" placeholder="كلمة السر" required>\
  <div class="containersg" style="background-color:#f1f1f1">\
  <label for="remember"  class = "checks"  >تذكرني</label>\
  <input type="checkbox"   id="remember"><br>\
    <button type="submit" id="btnsignin" >الدخول</button>\
    <button type="button" class="cancelbtn">إلغاء</button>\
  </div>\
  </div>  \
 </form>\
  </div> </div>' + document.getElementsByClassName("overlay")[0].innerHTML;
    document.getElementsByClassName("cancelbtn")[0].addEventListener("click",()=>{       
        document.getElementsByClassName("overlay")[0].style.opacity="0";
        document.getElementsByClassName("overlay")[0].style="none";
        document.getElementsByClassName("overlay")[0].removeChild(document.getElementsByClassName("overlay")[0].childNodes[0]); 
 //       document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("body")[0].childNodes[0]); 
    });
});  



sign.addEventListener("click",()=>{
  /*
    document.getElementsByClassName("overlay")[0].style.height = document.getElementsByTagName("body")[0].scrollHeight;
    document.getElementsByClassName("overlay")[0].style.display="block";
    setTimeout(()=>{  document.getElementsByClassName("overlay")[0].style.opacity="1";},50)
    document.getElementsByClassName("overlay")[0].innerHTML ='<div id="formit"><div class="slfm" id="signinf"> \
    <form action="#" method="post">  \
    <p><b> : للتسجيل يرجى ملئ جميع الخانات  </b></p>\
    <hr></hr>\
    <img src ="img/core-img/logo2.png" style="transform: scale(.5); " ></img>\
    <div class="row lsgform"> \
    <label for="name">: الاسم</label>\
    <input type="text" class="sform-control" id="name" placeholder="الاسم" required>\
    <label for="fname">: اللقب</label>\
    <input type="text" class="sform-control" id="fname" placeholder="اللقب" required>\
    <label for="username">: اسم المستخدم</label>\
    <input type="text" class="sform-control" id="username" placeholder="اسم المسخدم" required>\
    <label for="phonenumber">: رقم الهاتف</label>\
    <input type="number" class="sform-control" id="phonenumber" placeholder="رقم الهاتف" required>\
    <label for="email">: البريد الالكتروني</label>\
    <input type="email" class="sform-control" id="useremail" placeholder="البريد الالكتروني" required>\
    <label for="passwd">: كلمة السر</label>\
    <input type="password" class="sform-control" id="passwd" placeholder="كلمة السر" required>\
    <div class="containersg" style="background-color:#f1f1f1">\
    <label for="remember"  class = "checks"  >تذكرني  </label>\
    <input type="checkbox"   id="remember"><br>\
    <label for="remember" class = "checks" required>أوافق على <a  style="font-size:x-small !important;" href="https://github.com/ENSIA-AI/Khadra_Team_3.5" target="_blank">الشروط و الأحكام</a></label>\
    <input type="checkbox"   id="ahkam"><br>\
      <button type="submit" id="btnsignin" >سجل</button>\
      <button type="button" class="cancelbtn">إلغاء</button>\
    </div>\
    </div>  \
   </form>\
    </div> </div>' + document.getElementsByClassName("overlay")[0].innerHTML;
      document.getElementsByClassName("cancelbtn")[0].addEventListener("click",()=>{       
          document.getElementsByClassName("overlay")[0].style.opacity="0";
          document.getElementsByClassName("overlay")[0].style="none";
          document.getElementsByClassName("overlay")[0].removeChild(document.getElementsByClassName("overlay")[0].childNodes[0]); 
          //       document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("body")[0].childNodes[0]); 
      });
    */
      window.location.href = "./signin.html";
    });  


    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
      if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
      }
    }
  
  