const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".logo", { y: "0%", duration: 0.3, stagger: 0.1 });
tl.to(".nav-animation", { y: "0%", duration: 0.3, stagger: 0.1 });
tl.to(".text", { y: "0%", duration: 0.35, stagger: 0.2 });
tl.fromTo("#viewProjects", { opacity: 0 }, { opacity: 1, duration: 0.3 });
tl.fromTo(".icons", { opacity: 0 }, { opacity: 1, duration: 0.3 });
