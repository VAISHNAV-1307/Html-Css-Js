// gsap.to("h1", {
//     x: 300,
//     color: "yellow",
//     duration: 2,
//     delay: 1,
//     stagger: 0.5,
//     repeat: -1,
//     yoyo: true
// })

// gsap.to("h2", {
//   x: 600,
//   color: "salmon",
//   duration: 2,
//   delay: 3,
// });

// gsap.to("h3", {
//   x: 600,
//   color: "black",
//   duration: 2,
//   delay: 3,
// });


let timeline = gsap.timeline();

timeline.to("h1", {
  x: 600,
  color: "salmon",
  duration: 2
})

timeline.to("h2", {
  x: 700,
  color: "salmon",
  duration: 2
});

timeline.to("h3", {
  x: 800,
  color: "salmon",
  duration: 2
});