// $('.owl-carousel').addClass('owl-rtl')
// $('html').attr('dir', 'rtl');
// $('html').attr('lang', 'ar');
// $('link[href="css/bootstrap.min.css"]').attr('href', 'css/bootstrap.rtl.min.css');

// dir
var bodyDir = $('body').css('direction')
console.log(bodyDir)
var dirAr
if (bodyDir == "rtl") {
  dirAr = true
  console.log('dir' + dirAr)
  $('.owl-carousel').addClass('owl-rtl')
}
else {
  dirAr = false
  console.log('dir' + dirAr)
}

// loader
$('#loading').fadeOut(3000);

// owl carousel
$(document).ready(function () {
  $("header .owl-carousel").owlCarousel({
    nav: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    items: 1,
    rtl: dirAr,
    animateIn: 'fadeInLeft',
    dots: true,
    margin: 20
  });

  $('.blogs .owl-carousel').owlCarousel({
    margin: 20,
    responsiveClass: true,
    rtl: dirAr,
    nav: true,
    animateIn: 'fadeInLeft',
    navText: [`<i class="fa-solid fa-chevron-left"></i>`, `<i class="fa-solid fa-chevron-right"></i>`],
    stagePadding: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  var vidHeight = $('#vid .video-wrap').outerHeight(true)
  $('.transparent').css('height', vidHeight);

});

// scroll to top page
var btn_top = $('#scrollUp');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn_top.show();
  } else {
    btn_top.hide();
  }
});

new WOW().init();
