const nav = document.getElementById("nav");
const article = document.querySelector("article");
const stickyPoint = article.offsetTop - 32;
function checkScroll() {
  const curr = window.scrollY;
  if (curr > stickyPoint) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
window.addEventListener("scroll", checkScroll);
checkScroll();
