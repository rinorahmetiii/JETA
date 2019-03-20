
let images = ['img/lapki.jpg' , 'img/varit.jpg' , 'img/architect.jpg'];
let nextimg = 0;
slideShow();

function slideShow() {
    if(nextimg >= images.length) {
        nextimg = 0;
    }
    $('#home-section').css("background" , `url(${images[nextimg++]})`).fadeIn(500,function(){
        setTimeout(slideShow , 8000);
    });
}


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