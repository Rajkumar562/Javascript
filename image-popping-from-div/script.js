// to limit the total number of executions of a particular code is done through throttling.

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((details) => {
    let div = document.createElement("div");

    div.classList.add("imgdiv");
    // giving the class name to newly created div
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1592431698394-e5ed80f2c0a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    div.appendChild(img);

    document.body.appendChild(div);
    // appending div to body tag in html

    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.5,
    }); //translating the image from y-100% to 0, bringing the image upto the top

    gsap.to(img, {
      y: "100%",
      delay: 0.5,
      ease: Power2,
    });
    //ttanslating the image from y-0 to 100%, bringing the image back to its original position

    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 500)
);
