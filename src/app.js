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
      "North swell is an application to save surf spots and have access to the forecast for each surf spot in real time. The motivation for creating this app was to have quick access to the forecast of some of my local surf beaches all in one place. ",
    image: "imgs/northswell3.jpg",
    languages: ["React", "TailwindCSS", "Storm Glass API"],
    gitHubLink: "https://github.com/WilliamThomsonNZ/north-swell",
    demoLink: "https://North-swell.netlify.app",
  },
  {
    name: "EasyView",
    description:
      "Easy View is an application that displays a github profile with a graph showing most used languages. It also allows you to sort repos based on size, forks and stars. The motivation for this application was to build a github profile that looks more like other modern social media platforms.",
    image: "imgs/easyview.jpg",
    languages: ["Javascript", "Chart.JS", "Github API"],
    gitHubLink: "https://github.com/WilliamThomsonNZ/EasyView",
    demoLink: "https://easyview.netlify.app/",
  },
];

const websites = [
  {
    name: "Mojo Gloves",
    description:
      "Mojo gloves is a teaching aid for those wanting to touch-type. This website is used to promote and allow customers to place an order",
      
    image: "imgs/mojo.jpg",
    languages: ["UI/UX", "AdobeXD", "Development"],
    gitHubLink: "https://github.com/WilliamThomsonNZ/mojogloves",
    demoLink: "https://mojogloves.netlify.app/",
  },
  {
    name: "Victoria Barendsen Psychology",
    description:
      "Victoria Barendsen recently made the switch to become an independent psychologist. She required an information based website that allowed prospective clients to easily contact her and book appointments.",
    image: "imgs/vb.jpg",
    languages: ["UI/UX", "AdobeXD", "Development"],
    gitHubLink: "https://github.com/WilliamThomsonNZ/VBPsych",
    demoLink: "https://www.victoriabarendsenpsychology.co.nz",
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
        <a href=${project.gitHubLink} rel = "noopener" target ="_blank">
          <i class="fas fa-code"></i>
          View code
        </a>
        <a href=${project.demoLink} rel = "noopener" target = "_blank">
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

//Changing between projects 
const projectSection = document.getElementById("projects");

const fade = () =>{
  projectSection.style.opacity = "0";
  setTimeout(() => {
    projectSection.style.opacity = "1";
  }, 400)
}

webAppsBtn.addEventListener("click", () => {
  
  if (websiteBtn.classList.contains("selected-project")) {
    fade();
    websiteBtn.classList.toggle("selected-project");
    webAppsBtn.classList.toggle("selected-project");
  }
  setTimeout(()=>{
    displayProjects(webApps);
  },300)
 
 
});
websiteBtn.addEventListener("click", () => {
  
  if (webAppsBtn.classList.contains("selected-project")) {
    fade();
    websiteBtn.classList.toggle("selected-project");
    webAppsBtn.classList.toggle("selected-project");
  }
  setTimeout(()=>{
    displayProjects(websites);
  },300)
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


// Contact Forn using Email.js
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  (async () => {
    const form = document.getElementById("contactBtn");
    form.innerHTML = "<img src='imgs/loading1.svg'/>";
    await emailjs.sendForm("WilliamThomson", "williamThomson", "#contact-form");
    form.innerHTML = "&#10003;";
    setTimeout(() => {
      form.innerHTML = " Send <i class='fas fa-long-arrow-alt-right'></i>"
      ;
    }, 2500);
  })()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  event.target.reset();
});

