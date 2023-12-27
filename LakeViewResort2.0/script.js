let timeline = gsap.timeline();

timeline.to(".logo span", {
  fontStretch: "600%",
  repeat: -1,
  duration: 1,
  yoyo: true,
});

timeline.to(".landing-page h1", {
  transform: "translateX(-100%)",
  fontWeight: 100,
  scrollTrigger: {
    trigger: ".landing-page h1",
    scroller: "body",
    markers: false,
    start: "top 0%",
    end: "top -100%",
    scrub: 3,
    pin: true,
  },
});

timeline.from(".packeges h1, .tent, .cottege", {
  y: 200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".packegs",
    scroller: "body",
    start: "top 90%",
    end: "top 70%",
    scrub: 2,
  },
});

timeline.to(".page3, .page1, .page2", {
  backgroundColor: "#fff",
  color: "#000",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: ".page1 50%",
    end: ".page1 40%",
    scrub: 2,
    markers: false,
  },
});

timeline.from(".contact, .about h1, .about p", {
  opacity: 0,
  y: "150px",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".contact",
    start: "page3 73%",
    end: "page3 65%",
    scrub: 1.5,
    markers: false,
  },
});
