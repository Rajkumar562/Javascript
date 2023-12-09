window.addEventListener("mousemove", function (details) {
  let rectangle = document.querySelector("#rect");
  let xvalue = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200 + rectangle.getBoundingClientRect().width / 2,
    window.innerWidth - (200 + rectangle.getBoundingClientRect().width / 2),
    details.clientX
  );
  // gsap.utils.mapRange is a function that maps a value from one range to another
  // getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and
  // its position relative to the viewport. Viewport = the browser window size.
  gsap.to("#rect", {
    left: xvalue + "px",
    ease: Power3,
  }); // gsap.to can be seen as applying an animation to the element with id rect
});
