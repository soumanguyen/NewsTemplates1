jQuery(document).ready(function($){
  /*=========MENU SCROLL=========*/
  window.addEventListener("scroll", function(){
    var hMenu = document.querySelector("nav");
    hMenu.classList.toggle("sticky", window.scrollY > 70);
  });
     /*=========SLIDE JS=========*/
    $('.slide-banner').slick({
        slidesToShow: 3,
        // infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
      $('.cate-slide').slick({
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right' ></i></button>"
      });
    /*=========SEARCH FORM JS=========*/
    $('.search-icon').click(function(){
        $('.div-form').slideDown();
    });
    $('.close').click(function(){
        $('.div-form').slideUp();
    });
    $('.icon-menu').click(function(){
        $('.nav-menu').addClass('show-menu');
    });
    $('.close-circle').click(function(){
        $('.nav-menu').removeClass('show-menu');
    });
  });