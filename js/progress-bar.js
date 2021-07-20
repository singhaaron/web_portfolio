//Elem
const boxOne = document.getElementById("box-three-scroll-arrow");
const boxTwo = document.getElementById("box-one-scroll-arrow");
const scrollElem = document.getElementById("scroll-bar");
const topLock = document.getElementById("top-lock");
const introSection = document.getElementById("intro-section");
//global-Var
var oneHeight = 500;
var lastScrollTop = 0;
//func scrollBar
const scrollBar = () => {
  var scrollLength =
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;
  scrollElem.style.width = scrollLength + "%";
  // introSection.style.opacity = scrollLength + "%";
  var st = document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // downscroll code
    oneHeight = oneHeight - 1.3;
    boxOne.style.top = oneHeight + "px";
    boxTwo.style.top = oneHeight + "px";
    topLock.style.margin = "8%";
  } else {
    // upscroll code
    oneHeight = oneHeight + 1.2;
    boxOne.style.top = oneHeight + "px";
    boxTwo.style.top = oneHeight + "px";
    topLock.style.margin = "0%";
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

window.onscroll = function () {
  scrollBar();
};
