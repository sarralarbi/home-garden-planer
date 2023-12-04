//animating navigation bar, on scroll deseapear 
'use strict';

const nav = document.querySelector("#navbar");

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });




  
// try create infinit scrolling list
// add arrows - tommorow - 


/*
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {

  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.opacity = "1";
  } else if (prevScrollpos < currentScrollPos ){
    document.getElementById("navbar").style.top = "60%";
    document.getElementById("navbar").style.opacity = "0";
  }

  prevScrollpos = currentScrollPos;

}
*/
