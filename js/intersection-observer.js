//HTML Elements
const fadeElements = document.querySelectorAll(".fade");
var slideDone = false;

//Web API: Intersection-Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      //Section is On Page
      if (entry.isIntersecting) {
        entry.target.classList.replace("fade-out", "fade-in");
      }
      //Section is Off Page
      else {
        entry.target.classList.replace("fade-in", "fade-out");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  }
);
//Observer Intiate
fadeElements.forEach((e) => observer.observe(e));
