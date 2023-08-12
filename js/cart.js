const cartRow = document.querySelector(".cart__row");


function getCartCard({ id, image, name, description, price, quantity }) {
  return `
  <div class="flex flex-col gap-6">
             
  <div class="cart-grid mb-4">
    <div class="flex col-span-8 gap-10 cart-card">
      <div class="card-img">
        <img src="${image}" alt="">
      </div>
      <div class="flex items-center justify-between w-full p-4 card-content">
        <div class="">
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
  
      <div class="flex items-center gap-10 text-white">
     <button  class="flex gap-6 px-4 py-2 bg-secondary">
      <span onClick="decraseQuantitiy(${id})">-</span>
      <span>${quantity}</span>
      <span onClick="increaseQuantitiy(${id})">+</span>
     </button>
        <p>${price}</p>
      </div>
      </div>
  </div>

  <div class="col-span-4 bg-red-700">
    asdasdd
  </div>
  
     </div>
  
 </div>
  `
}


function getCardProducts() {
  cartRow.innerHTML = "";
  cart.map((pr) => {
    cartRow.innerHTML += getCartCard(pr);
  })
}
getCardProducts();

function increaseQuantitiy(id) {
  cart = cart.map((pr) => {
    if (pr.id === id) {
      pr.quantity++
    }
    return pr;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  getCardProducts();
}
function decraseQuantitiy(id) {
  let product = cart.find((pr) => pr.id === id);
  if (product.quantity === 1) {
    cart = cart.filter(pr => pr.id !== id)
  } else {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity--
      }
      return pr;
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getCardProducts();
}