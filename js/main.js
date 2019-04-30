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
      .css("background", `url(${images[nextimg++]})`).fadeIn(500, function() {
        setTimeout(slideShow, 8000);
      });
  }

  // Retrieve Projects data from JSON
  $.getJSON( "projects.json", function( data ) {
    let items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    console.log(items);
  });

  // $.ajax({
  //   method: "GET",
  //   dataType : 'json',
  //   url: "projects.json",
  // }).done(function(data) {
  //   for(i = 0 ; i < data.length ; i++) {
  //     console.log(data[i]);
  //   }
  // });
  
  // Remove light-overlay class when on small devices
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.container').removeClass("light-overlay");
  };
});
