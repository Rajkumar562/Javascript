var rectangle = document.querySelector("#rect");

rectangle.addEventListener("mousemove", function (details) {
  var rectLocation = rectangle.getBoundingClientRect();
  var rectValue = details.clientX - rectLocation.left;

  if (rectValue < rectLocation.width / 2) {
    var red = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, rectValue);
    gsap.to(rectangle, {
      backgroundColor: `rgb(${red},0,0)`,
      ease: Power4,
    });
  } else {
    var blue = gsap.utils.mapRange(
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255,
      rectValue
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(0,0,${blue})`,
      ease: Power4,
    });
  }
});

rectangle.addEventListener("mouseleave", function () {
  gsap.to(rectangle, { backgroundColor: "white" });
});
