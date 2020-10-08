//gsap Animations
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".logo", { y: "0%", duration: 0.3, stagger: 0.1 });
tl.to(".nav-animation", { y: "0%", duration: 0.3, stagger: 0.1 });
tl.to(".text", { y: "0%", duration: 0.35, stagger: 0.2 });
tl.fromTo("#viewProjects", { opacity: 0 }, { opacity: 1, duration: 0.3 });
tl.fromTo(".icons", { opacity: 0 }, { opacity: 1, duration: 0.3 });

//Sticky Scroll bar
let prevScrollpos = window.pageYOffset;
let navBar = document.getElementById("navBar");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
    navBar.style.backgroundColor = "#fff";
    navBar.style.boxShadow = "grey 2px 0px 5px";
    // navBar.style.paddingBottom = "30px";
    // mobileMenu.style.zIndex = "1999";
    // sideMenu.style.zIndex = "5000";
  } else {
    navBar.style.top = "-200px";
  }
  if (window.pageYOffset < 150) {
    navBar.style.boxShadow = "grey 0px 0px 0px";
  }
  prevScrollpos = currentScrollPos;
};

// Change between Websites and web apps
const webApps = [
  {
    name: "North Swell",
    description:
      "Hi my name is william thomson, I am studying to be a front end developer. I am moving to auckland next year to try and find a job",
    image: "imgs/northswell3.jpg",
    languages: ["Javascript", "Chart.JS", "Github API"],
    gitHubLink: "https://Githubwhaterever",
    demoLink: "https://North-swell.netlify.app",
  },
  {
    name: "EasyView",
    description:
      "Hi my name is william thomson, I am studying to be a front end developer. I am moving to auckland next year to try and find a job",
    image: "imgs/easyview.jpg",
    languages: ["Javascript", "Chart.JS", "Github API"],
    gitHubLink: "https://Githubwhaterever",
    demoLink: "https://North-swell.netlify.app",
  },
];

const websites = [
  {
    name: "North Swell website",
    description:
      "Hi my name is william thomson, I am studying to be a front end developer. I am moving to auckland next year to try and find a job",
    image: "imgs/northswell3.jpg",
    languages: ["Javascript", "Chart.JS", "Github API"],
    gitHubLink: "https://Githubwhaterever",
    demoLink: "https://North-swell.netlify.app",
  },
  {
    name: "North Swell weby",
    description:
      "Hi my name is william thomson, I am studying to be a front end developer. I am moving to auckland next year to try and find a job",
    image: "imgs/northswell3.jpg",
    languages: ["Javascript", "Chart.JS", "Github API"],
    gitHubLink: "https://Githubwhaterever",
    demoLink: "https://North-swell.netlify.app",
  },
];

const websiteBtn = document.getElementById("websites");
const webAppsBtn = document.getElementById("webApps");

const displayProjects = (array) => {
  array.forEach((project, index) => {
    let projectDisplay = document.getElementById(`project${index + 1}`);
    projectDisplay.innerHTML = "";
    let content = document.createElement("div");
    content.innerHTML = ` <div class="work-showcase">
  <a href = "${project.demoLink} class = "overlay">
  <img src=${project.image} alt=${project.imgageAlt} />
  </a>
  <div class="text-content">
    <div class="description-text">
      <h3 id="title">${project.name}</h3>
      <p id="description">
      ${project.description}
      </p>
      <span class="language">${project.languages[0]}</span>
      <span class="language centerLang">${project.languages[1]}</span>
      <span class="language">${project.languages[2]}</span>
      <div class="project-display-links">
        <a href=${project.gitHubLink}>
          <i class="fas fa-code"></i>
          View code
        </a>
        <a href=${project.demoLink}>
          <i class="fas fa-external-link-alt"></i>
          View demo
        </a>
      </div>
    </div>
  </div>
  </div>`;
    projectDisplay.appendChild(content);
  });
};
displayProjects(webApps);

webAppsBtn.addEventListener("click", () => {
  if (websiteBtn.classList.contains("selected-project")) {
    websiteBtn.classList.toggle("selected-project");
    webAppsBtn.classList.toggle("selected-project");
  }
  tl.to(".work-showcase", { y: "-600%", duration: 0.3, stagger: 0.1 });
  displayProjects(webApps);
});
websiteBtn.addEventListener("click", () => {
  if (webAppsBtn.classList.contains("selected-project")) {
    websiteBtn.classList.toggle("selected-project");
    webAppsBtn.classList.toggle("selected-project");
  }

  displayProjects(websites);
});

//Side Menu
const sideMenu = document.getElementById("side-menu");
const mobileMenu = document.getElementById("mobileMenu");
const html = document.querySelector("html");
const body = document.querySelector("body");
const menuLine = document.querySelector(".line");
const menuLine2 = document.querySelector(".line2");

sideMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  //sideMenu.classList.toggle("dark");
  html.classList.toggle("hidden");
  menuLine.classList.toggle("closeBtn");
  menuLine2.classList.toggle("closeBtn2");
  menuLine.classList.toggle("white");
  menuLine2.classList.toggle("white");
});
