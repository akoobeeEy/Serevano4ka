const dropdownMenu = document.querySelector(".menu__dropdown");
const dropdownBlock = document.querySelector("#dropdown__content");


dropdownMenu.addEventListener('click', () => {
  dropdownBlock.classList.toggle("dropdown_box");
})
