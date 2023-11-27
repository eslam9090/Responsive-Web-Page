var links = document.querySelector(".links");
var menu = document.querySelector(".menu");
var nav_link = document.querySelectorAll(".nav_link");

links.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

nav_link.forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("hidden");
  })
);
