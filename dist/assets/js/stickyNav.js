"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //-------------------------------sticky nav
  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.querySelector("nav");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});