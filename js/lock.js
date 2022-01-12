//Elem
const boxOne = document.getElementById("lhs-scroll-arrow");
const boxTwo = document.getElementById("rhs-scroll-arrow");
const topLock = document.getElementById("top-lock");
const scrollElem = document.getElementById("scroll-bar");

var oneHeight = 5;
var twoHeight = 500;
var lastScrollTop = 0;

const active_lock = () => {
  var scrollLength = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;

  scrollElem.style.width = scrollLength + "%";
  var st = document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // downscroll code
    oneHeight = oneHeight - 1.3;
    twoHeight = twoHeight - 1.3;

    boxOne.style.top = twoHeight + "px";
    boxTwo.style.top = twoHeight + "px";

    topLock.style.margin = "2%";
  } else {
    // upscroll code
    oneHeight = oneHeight + 1.2;
    twoHeight = twoHeight + 1.2;

    boxOne.style.top = twoHeight + "px";
    boxTwo.style.top = twoHeight + "px";

    topLock.style.margin = "0%";
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  console.log(st);
};

window.onscroll = () => {
  active_lock();
};
