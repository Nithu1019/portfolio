
//get section in main
const Sections = document.querySelectorAll("section");

for (let index = 0; index < Sections.length; index++) {
  Sections.forEach((element) => {
    console.log(index);
    element.style.animationDelay = index + "00" + "ms";
    index++;
  });
}


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
