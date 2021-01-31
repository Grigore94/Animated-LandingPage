const scroll_indicator = document.getElementById("scroll-indicator");

window.addEventListener("scroll", function () {
  const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

  const currentScrollHeight = (window.scrollY / maxScrollHeight) * 100;
  scroll_indicator.style.width = `${currentScrollHeight}%`;
});

/* scroll reveal */

window.sr = ScrollReveal({
  reset: true,
});

sr.reveal(".hero .intro", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});
sr.reveal(".hero .intro .btn", {
  duration: 2000,
  origin: "left",
  distance: "200px",
  delay: 200,
});

sr.reveal(".hero .image", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

// about
sr.reveal(".cherry .intro", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

sr.reveal(".cherry .img", {
  duration: 2000,
  origin: "left",
  distance: "200px",
  rotate: {
    x: 60,
    y: 45,
  },
});

/* services */
sr.reveal(".pears .intro", {
  duration: 2000,
  origin: "top",
  distance: "200px",
});

sr.reveal(".pears .img", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});

// portfolio
sr.reveal(".plums .intro", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});

sr.reveal(".plums .img", {
  duration: 2000,
  origin: "top",
  distance: "200px",
});

sr.reveal(".apricot .intro", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});

sr.reveal(".apricot .img", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

sr.reveal(".grapes .intro", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

sr.reveal(".grapes .img", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});