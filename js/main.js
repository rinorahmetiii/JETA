$(document).ready(function() {
  let images = ["img/lapki.jpg", "img/varit.jpg", "img/architect.jpg"];
  let nextimg = 0;
  slideShow();
// Backround img slide
  function slideShow() {
    if (nextimg >= images.length) {
      nextimg = 0;
    }
    $("#home-section")
      .css("background", `url(${images[nextimg++]})`)
      .fadeIn(500, function() {
        setTimeout(slideShow, 8000);
      });
  }
  document.getElementById("profibuild").style.backgroundPosition = "center top";
//   // Scrool down 
//   $('.shkoPosht').click(function(e) {
//     // Preventing default action of the event
//     e.preventDefault();
//     // Getting the height of the document
//     let n = $(document).height();
//     $('html, body').animate({ scrollTop: n }, 1500);
// //                                       |    |
// //                                       |    --- duration (milliseconds) 
// //                                       ---- distance from the top
// });


// Remove light-overlay class when on small devices
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('.container').removeClass("light-overlay");
 };

});

// $(function () {
//     let homeSection = $('#home-section');
//     let imges = [
//       'url(img/lapki.jpg)',
//       'url(img/varit.jpg)',
//       'url(img/architect.jpg)'
//     ];
//     let current = 0;

//     function nextBackground() {
//         homeSection.css(
//             'background', imges[current = ++current % imges.length]);

//         setTimeout(nextBackground, 5000);
//     }
//     setTimeout(nextBackground, 5000);
//     homeSection.css('background', imges[0]);
// });
