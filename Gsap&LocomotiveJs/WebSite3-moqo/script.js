let tl = gsap.timeline();

function time() {
  let a = 0;
  setInterval(function () {
    a = a + Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector(".loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector(".loader h1").innerHTML = a + "%";
    }
  }, 100);
}

tl.to(".loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: time(),
});

tl.to(".loader", {
  top: "-100vh",
  delay: 0.5,
});

tl.to(".page1 h1", {
    transform: "translateX(-100%)",
    fontWeight : 100,
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -250%",
        scrub: 3,
        pin: true
    }
})
