$(document).ready(function(){
  var $body = $('body');
  var $navbar = $('.navbar');
  var $offsetY = $navbar.offset().top + 10;

  // scroll navbar fixed
  function scroll() {
    if ($(window).scrollTop() >= $offsetY) {
      $navbar.addClass('fixed-top').css('background-color', 'rgba(255, 254, 253, 0.97');
        // console.log('eko');
    } else {
      $navbar.removeClass('fixed-top').css('background-color', 'transparent');
        // console.log('oke');
    }
  }

  document.onscroll = scroll;
});

// smooth scroll
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

// window scroll animation
$(window).scroll(function(e){
  e.preventDefault();
  var wScroll = $(this).scrollTop();

  console.log(wScroll);

  if (wScroll > $('#about').offset().top - 200) {
    $('#about .content').addClass('show');
    $('#about .text-center').addClass('animated fadeInDown').css('animation-delay', '0.6s');
    $('#about .skill').addClass('animated fadeInUp').css('animation-delay', '0.6s');
    $('.skill-bar').each(function(){
      $(this).find('.skill-bar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },2500);
    });
  }

  if (wScroll > $('#portfolio').offset().top - 200) {
    $('#portfolio .container').addClass('show');
    $('#portfolio .text-center').addClass('animated fadeInDown').css('animation-duration', '2s');
    $('#portfolio .box').addClass('animated bounceInDown').css('animation-duration', '2s');
  }

  if (wScroll > $('#contact').offset().top - 200) {
    $('#contact .container').addClass('show');
    $('#contact .text-center').addClass('animated fadeInDown').css('animation-duration', '2s');
    $('#contact .row').addClass('animated flipInX').css('animation-duration', '2s');
  }

});




