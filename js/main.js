$(document).ready(function() {

  let images = ["img/lapki.jpg", "img/varit.jpg", "img/architect.jpg"];
  let nextimg = 0;
  let projects = [
    {
      id: 1,
      date: "DECEMBER, 2018",
      img: "img/portfolio1.png",
      title: "Pure Bedroom Architecture",
      description: "If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 2,
      date: "DECEMBER, 2018",
      img: "img/portfolio2.png",
      title: "Pure Bedroom Architecture",
      description: "If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
    }
  ];

  getProjects();

  slideShow();

  removeLightOverlay();


  // Get Projects
  function getProjects() {
    projects.forEach(function(project) {
      if(project.id % 2 != 0) {
        $('.innerProjects').append(`
          <div class="row align-items-end pb-md-5 mb-4">
            <div class="col-md-7 mb-4 mb-md-0">
              <div class="portfolio__img">
              <img class="img-fluid" src="${project.img}" alt="">
            </div>
          </div>
          <div class="col-md-5 mb-5 pl-xl-5">
            <h4 class="section-intro__title left-border">${project.date}</h4>
            <h2 class="section-intro__subtitle small">
            ${project.title}
            </h2>
            <p>
            ${project.description}
            </p>

            <a class="btn btn--rightBorder mt-3 btnkostum" href="#/">Read More</a>
          </div>
        </div>
        `);
      } else {
        $('.innerProjects').append(`
          <div class="row align-items-end pb-md-5 mb-4">
            <div class="col-md-5 mb-5 pl-xl-5">
              <h4 class="section-intro__title left-border">${project.date}</h4>
              <h2 class="section-intro__subtitle small">
              ${project.title}
              </h2>
              <p>
              ${project.description}
              </p>
              <a class="btn btn--rightBorder mt-3 btnkostum" href="#/">Read More</a>
            </div>

            <div class="col-md-7 mb-4 mb-md-0">
              <div class="portfolio__img">
                <img class="img-fluid" src="${project.img}" alt="">
              </div>
            </div>
        </div>
        `);
      }
    });
  }
  
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
