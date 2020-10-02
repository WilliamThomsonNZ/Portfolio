const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".logo", { y: "0%", duration: 0.3, stagger: 0.1 });
tl.to(".nav-animation", { y: "0%", duration: 0.3, stagger: 0.1 });
tl.to(".text", { y: "0%", duration: 0.35, stagger: 0.2 });
tl.fromTo("#viewProjects", { opacity: 0 }, { opacity: 1, duration: 0.3 });
tl.fromTo(".icons", { opacity: 0 }, { opacity: 1, duration: 0.3 });

// const page1 = document.getElementById("page1");
// const page2 = document.getElementById("page2");
// const page3 = document.getElementById("page3");

//page indicator
// window.addEventListener("scroll", () => {
//   if (window.scrollY < 900) {
//     page1.classList.add("selected-page");
//     page2.classList.remove("selected-page");
//     page3.classList.remove("selected-page");
//   } else if (window.scrollY > 900 && window.scrollY < 2000) {
//     page1.classList.remove("selected-page");
//     page3.classList.remove("selected-page");
//     page2.classList.add("selected-page");
//   } else {
//     page1.classList.remove("selected-page");
//     page2.classList.remove("selected-page");
//     page3.classList.add("selected-page");
//   }
// });

//responsive to scroll header
// const navBar = document.getElementById("navBar");
// window.addEventListener("scroll", () => {
//   let lastScrollTop = 0;
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     navBar.style.top = "-15rem";
//   } else {
//     navBar.style.top = "0";
//   }
//   lastScrollTop = scrollTop;
// });

let prevScrollpos = window.pageYOffset;
let navBar = document.getElementById("navBar");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
    navBar.style.paddingBottom = "10px";
    navBar.backgroundColor = "#fff";
    navBar.style.zIndex = "5000";
    console.log("hello");
  } else {
    navBar.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
};
