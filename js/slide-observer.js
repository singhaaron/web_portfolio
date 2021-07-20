const sections = document.querySelectorAll(".goose"); //Node-List
const options = {
  root: null, //viewport
  threshold: 0.5, //default
  rootMargin: "-150px",
};
const observerer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    //Not-Intersection
    if (!entry.isIntersecting) {
      entry.target.classList.toggle("hide");
    }
    //Intersection
    if (entry.isIntersecting) {
      entry.target.classList.toggle("unhide");
      entry.target.classList.toggle("slide-content-target");
      observer.unobserve(entry.target);
    }
  });
}, options);

//observer.observe(sections);
sections.forEach((section) => {
  observerer.observe(section);
});
