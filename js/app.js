const btn = document.querySelector(".btn");
const burguer = document.querySelector(".burguer");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener("scroll", () => {
  const windowTop = window.pageYOffset;
  if (windowTop >= 408) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  scroll({ top: 0, behavior: "smooth" });
});

burguer.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkLi .5s ease forwards ${index / 7 + 0.7}s`;
    }
  });
  burguer.classList.toggle("toggle");
  burguer.classList.toggle("left");
});

/* carrossel */
var i = 0;
const imgs = [];
var time = 3500;

imgs[0] = "img/capa1.jpg";
imgs[1] = "img/capa2.jpg";
imgs[2] = "img/capa4.jpg";

function change() {
  document.slide.src = imgs[i];
  if (i < imgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
setInterval("change()", time);
/*fim carrosel*/

const menuItems = document.querySelectorAll('.nav-links a[href^="#"]');
menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 88,
    behavior: "smooth",
  });
}
