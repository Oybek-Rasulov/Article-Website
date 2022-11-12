const open = document.querySelector(".open");
const close = document.querySelector(".close");
const circle = document.querySelector(".circle");
const menu = document.querySelector(".menu");

open.addEventListener("click", function () {
  circle.classList.add("circle_move");
  menu.classList.add("menu_move");
});
close.addEventListener("click", function () {
  circle.classList.remove("circle_move");
  menu.classList.remove("menu_move");
});
