
//get section in main
const Sections = document.querySelectorAll("main section");

for (let index = 0; index < Sections.length; index++) {
  Sections.forEach((element) => {
    console.log(index);
    element.style.animationDelay = index + "00" + "ms";
    index++;
  });
}
