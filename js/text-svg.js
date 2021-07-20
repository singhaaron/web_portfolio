//Text Path ID
const textPath = document.querySelector("#text-path");
//const secondPath = document.querySelector("#text-path-two");
//Text Path Positioning
const updateTextPath = (offset) => {
  textPath.setAttribute("startOffset", offset);
  //secondPath.setAttribute("startOffset", offset);
};
const rightCurve = (offset) => {
  curvePath.setAttribute("startOffset", offset);
};
//Scroll Effect
const onScroll = () => {
  requestAnimationFrame(() => {
    updateTextPath(window.scrollY * 0.2);
  });
};
//Event Listener
window.addEventListener("scroll", onScroll);
