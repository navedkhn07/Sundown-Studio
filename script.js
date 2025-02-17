function loader() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4000);
}
loader();
function scroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}
scroll();

function project() {
  var project = document.querySelector("#project");
  var fixed = document.querySelector("#fixed-image");

  project.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  project.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });
  var proj = document.querySelectorAll(".proj");
  proj.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      var image = elem.getAttribute("data-image");
      fixed.style.backgroundImage = `url('${image}')`;
    });
  });
}
project();

function blackscreen() {
  var head1 = document.querySelector("#head1");
  var head2 = document.querySelector("#head2");
  var head3 = document.querySelector("#head3");
  var img = document.querySelector("#screen #right");
  var para = document.getElementById("para");

  head1.addEventListener("click", function () {
    img.style.backgroundImage =
      "url('https://sundown-ivory.vercel.app/page4-1.webp')";
    head1.style.color = "#efeae3";
    head1.style.marginLeft = "0vw";
    head2.style.color = "#504A45";
    head2.style.marginLeft = "2vw";
    head3.style.color = "#504A45";
    head3.style.marginLeft = "2vw";
    para.innerHTML =
      "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
  });

  head2.addEventListener("click", function () {
    img.style.backgroundImage =
      "url('https://sundown-ivory.vercel.app/page4-2.webp')";
    head1.style.color = "#504A45";
    head1.style.marginLeft = "2vw";
    head2.style.marginLeft = "0vw";
    head2.style.color = "#efeae3";
    head3.style.color = "#504A45";
    head3.style.marginLeft = "2vw";
    para.innerHTML =
      "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
  });

  head3.addEventListener("click", function () {
    img.style.backgroundImage =
      "url('https://sundown-ivory.vercel.app/page4-3.webp')";
    head1.style.color = "#504A45";
    head1.style.marginLeft = "2vw";
    head3.style.marginLeft = "0vw";
    head3.style.color = "#efeae3";
    head2.style.color = "#504A45";
    head2.style.marginLeft = "2vw";
    para.innerHTML =
      "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
  });
}
blackscreen();

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      600: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 2
      }
    }
  });
}

swiper();

// var navimg = document.querySelector("#nav img");
// var menu = document.querySelector("#nav h3");
// var fullscreen = document.querySelector("#full-screen");
// var flag = 0;
// menu.addEventListener("click", function () {
//   if (flag == 0) {
//     fullscreen.style.top = 0;
//     navimg.style.opacity = 0;
//     flag = 1;
//   }  
//   else{
//     fullscreen.style.top = "-100%";
//     navimg.style.opacity = 1;
//     flag = 0;
//   }
// });
