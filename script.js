function loader() {
    let loading = document.querySelector(".loader");
    let h1 = loading.querySelector("h2");
    function textChange() {
    
      setTimeout(function () {
        h1.innerText = "EXPERIENCES";
      }, 1000);
      setTimeout(function () {
        h1.innerText = "CONTENTS";
      }, 2000);
    }
    textChange();
    setTimeout(function () {
      loading.style.top = "-100%";
    }, 3000);
  }
  loader();
  
  function section3Img() {
    var projectFeature = document.querySelector(".project-feature");
    var imageSection = a.getAttribute(".imageSection3");
  
    projectFeature.addEventListener("mouseenter", function () {
      imageSection.style.display = "block";
    });
  
    projectFeature.addEventListener("mouseleave", function () {
      imageSection.style.display = "none";
    });
  
    var projects = document.querySelector("#project1");
    projects.forEach(function (p) {
      p.addEventListener("mouseenter", function () {
        var image = p.getAttribute(".project-img > img");
        imageSection.style.backgroundImage = `url(${image})`;
      });
    });
  }
  
  section3Img();
  
  function swiper() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
    });
  }
  swiper();
  
var menu = document.querySelector("nav h3")
var full=document.querySelector(".full-scr")
var navimg=document.querySelector("nav.logo")
var flag=0
menu.addEventListener("click",function(){
 if(flag==0){
 
  full.style.top=0
  navimg.style.opacity=0
  flag=1
}else{
  full.style.top="-100%"
  navimg.style.opacity=1
  flag=0
}
})
