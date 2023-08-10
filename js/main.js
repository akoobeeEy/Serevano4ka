const dropdownMenu = document.querySelector(".menu__dropdown");
const dropdownBlock = document.querySelector(".dropdown__content");
const categoryMenu = document.querySelector(".category__menu");
const cartTotal = document.querySelector(".cart");

dropdownMenu.addEventListener('click', () => {
  dropdownBlock.classList.toggle("block")
})


categories.map((category) =>{
  categoryMenu.innerHTML +=
   `
   <ul class="flex flex-col gap-3">
            <li><a class="category__link" href="category.html"> ${category.name} </a></li>
          </ul>
   ` ;
});


let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getCartTotal(){
  cartTotal.textContent = cart.length;
}

getCartTotal();

