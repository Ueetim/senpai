/* *** EVENTS CAROUSEL *** */

const events = document.querySelector(".ud-events-section");

const eventsCon = events.querySelector(".ud-events-container");
const nextBtn = events.querySelector(".ud-angle-right");
const prevBtn = events.querySelector(".ud-angle-left");
const eventItemWidth = events.querySelector(".ud-events").clientWidth;
// const item = events.querySelectorAll(".service-con");

function scrollToNextItem() {
  eventsCon.scrollBy({ left: eventItemWidth, behavior: "smooth" });

  prevBtn.style.visibility = "visible";

  // hide nextBtn when scrollbar reaches end position (100%)
  scrollWidth =
    eventsCon.scrollLeft /
    (eventsCon.scrollWidth - eventsCon.clientWidth);

  if (scrollWidth === 1) {
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }
}

function scrollToPrevItem() {
  eventsCon.scrollBy({ left: -eventItemWidth, behavior: "smooth" });

  nextBtn.style.visibility = "visible";

  // get scroll position
  let scrollPtn = eventsCon.scrollLeft;

  if (scrollPtn <= eventItemWidth + 20) {
    //20px accounts for the padding
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }
}

// hide prevBtn on page load
window.addEventListener("DOMContentLoaded", function () {
  prevBtn.style.visibility = "hidden";
});

nextBtn.addEventListener("click", scrollToNextItem);
prevBtn.addEventListener("click", scrollToPrevItem);

/* *** EVENTS CAROUSEL ENDS *** */