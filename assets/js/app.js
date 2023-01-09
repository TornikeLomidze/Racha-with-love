
/* Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
  

$(document).ready(function(){
  /*  Burger menu  */
    $("button.btn-menu").click(function(){
      $("nav.burger-menu").toggleClass("open");
      $("button.btn-menu").toggleClass("open");
    });
});


/*  modal  */
$(document).ready(function(){
  $("button.btn-modal").click(function(){
    $("div.modal").toggleClass("open");
  });
});
