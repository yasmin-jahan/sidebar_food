 document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
     slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    
    //   cssMode: true,
      navigation: {
        nextEl: ".food_next_btn",
        prevEl: ".food_prev_btn",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  breakpoints: {
    320: {    // <=575px
      slidesPerView: 1,
      spaceBetween: 20,
    },
    //  575: {    // <=575px
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
     767: {    // <=991px
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1400: {   // <=1600px
      slidesPerView: 3,
      spaceBetween: 30,
    },
   
   
  },
    //   mousewheel: true,
    //   keyboard: true,
    });


    });

 $(document).on("mousemove", function (e) {
      let vw = $(window).width();
      let vh = $(window).height();

      // convert mouse pos to svw/svh values
      let x = ((e.clientX / vw) * 100 - 50).toFixed(2); 
      let y = ((e.clientY / vh) * 100 - 50).toFixed(2);

      // apply full style dynamically
      $(".cursor").css({
        "will-change": "transform",
        "transform": `translate3d(${x}svw, ${y}svh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        "transform-style": "preserve-3d",
        "width": "2rem",
        "height": "2rem",
        "border-color": "rgba(0, 0, 0, 0)",
        "background-color": "rgb(255, 255, 255)",
        "opacity": "1"
      });
    });

    $(".menu_btn").click( function (){
$(".sidebar").addClass("active");
$(".black_overlay").fadeIn();
    });

    $(".close_btn").click (function (){
      $(".sidebar").removeClass("active");
      $(".black_overlay").fadeOut();
    });

     $(".black_overlay").click (function (){
      $(".sidebar").removeClass("active");
      $(".black_overlay").fadeOut();
    });