let menu = document.querySelector("menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// scrollreveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-btn", {
  origin: "top",
});

ScrollReveal().reveal("", {
  origin: "bottom",
});

ScrollReveal().reveal("", {
  origin: "left",
});

ScrollReveal().reveal("", {
  origin: "right",
});
