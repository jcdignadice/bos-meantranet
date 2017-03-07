var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function() {
  newscroll = mywindow.scrollTop();
  var navbarColor = "0, 42, 67";
  var navOpacity = 0;
  var navBackColor;
  if (newscroll > 0 && !up) {
    navOpacity = 1;
    navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';

    $('.navbar').css({
      "background-color": navBackColor
    });
    $(".navbar").animate({
      padding: '0px'
    });
    $(".small-logo-container").fadeTo(500, 1);
    up = !up;

  } else if (newscroll == 0 && up) {
    navOpacity = 0.5;
    navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
    $('.navbar').css({
      "background-color": navBackColor
    });
    $(".navbar").animate({
      padding: '10px'
    });
    $(".small-logo-container").fadeTo(500, 0);
    up = !up;
  }

  mypos = newscroll;
  console.log(mypos);
});


// $(window).on('DOMMouseScroll mousewheel', function(e) {
//     var navbarColor = "0, 42, 67"; //color attr for rgba
//     var smallLogoHeight = $('.small-logo').height();
//     var bigLogoHeight = $('.big-logo').height();
//     var navbarHeight = $('.navbar').height();
//
//     var smallLogoEndPos = 0;
//     var smallSpeed = (smallLogoHeight / bigLogoHeight);
//
//     var ySmall = ($(window).scrollTop() * smallSpeed);
//
//     var smallPadding = navbarHeight - ySmall;
//     if (smallPadding > navbarHeight) {
//         smallPadding = navbarHeight;
//     }
//     if (smallPadding < smallLogoEndPos) {
//         smallPadding = smallLogoEndPos;
//     }
//     if (smallPadding < 0) {
//         smallPadding = smallLogoEndPos;
//     }
//
//     $('.small-logo-container ').css({
//         "padding-top": smallPadding
//     });
//     var navOpacity = ySmall / smallLogoHeight;
//     if (navOpacity > 1) {
//         navOpacity = 1;
//     }
//     if (navOpacity < 0) {
//         navOpacity = 0;
//     }
//
//     var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
//     $('.navbar').css({
//         "background-color": navBackColor
//     });
//
//     var shadowOpacity = navOpacity * 0.4;
//     if (ySmall > 1) {
//         $('.navbar').css({
//             "box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"
//         });
//     } else {
//         $('.navbar').css({
//             "box-shadow": "none"
//         });
//     }
//
//     var bigLogo = $('.big-logo-row');
//     var smallLogo = $('.small-logo-container');
//     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
//         //Need code here//
//         bigLogo.fadeOut("slow");
//         smallLogo.show();
//
//     } else {
//         bigLogo.show();
//         smallLogo.fadeOut('slow');
//     }
// });
