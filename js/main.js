$(document).ready(function() {
  let images = ["img/lapki.jpg", "img/varit.jpg", "img/architect.jpg"];
  let nextimg = 0;

  slideShow();

  removeLightOverlay();

  
  // Backround img slide
  function slideShow() {
    if (nextimg >= images.length) {
      nextimg = 0;
    }
    $("#home-section")
      .css("background", `url(${images[nextimg++]})`).fadeIn(500, function() {
        setTimeout(slideShow, 8000);
      });
  }

  // Remove light-overlay class when on small devices
  function removeLightOverlay() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.container').removeClass("light-overlay");
    }
  }
});
