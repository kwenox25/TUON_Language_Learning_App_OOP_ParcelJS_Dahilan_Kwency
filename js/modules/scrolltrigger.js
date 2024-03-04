export function scrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const navLinks = document.querySelectorAll("#main-header nav ul li a");

  function scrollLink(e) {
    e.preventDefault();
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: `${selectedLink}`, offsetY: 100 },
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", scrollLink);
  });
  console.log("scroll to working");

  const imageAnimation = gsap.from("#why-tuon-con img", {
    opacity: 0,
    x: 100,
    stagger: 0.3,
    duration: 3,
    ease: "power4.out",
  });

  ScrollTrigger.create({
    trigger: "#why-tuon-con",
    animation: imageAnimation,
    start: "top 80%",
    once: true,
  });
}
