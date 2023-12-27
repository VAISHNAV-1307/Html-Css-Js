let timeline = gsap.timeline();

timeline.from("#nav img, #nav h3, #nav h4 , #nav button", {
  y: -100,
  duration: 1,
  delay: 0.2,
  opacity: 0,
  stagger: 0.2,
});

timeline.from("#main h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});

timeline.from("#main > img", {
  opacity: 0,
  scale: 0,
  stagger: 0.3,
});

timeline.from("#main > h5", {
  scale: 0,
  opacity: 0,
});

timeline.to("#main > h5", {
  y: 20,
  repeat: -1,
  duration: 0.6,
  yoyo: true,
});
