const allProduct = document.querySelector(".all__product");


function getAllProducts({ id, description, price, name, image }) {
  let checkFavorite = favoritProducts.find(el => el.id === id);
  return `
  <div class="discount__card group"> 
    <div class="discount__cardBody">
      <img class="discount__img" src="${image}" alt="Cheese">
    </div>
    
    <div class="discount__cardFooter">
        <div class="dCard__footer__item ">
        <p class="text-base font-bold ">${name} </p>
            <p class="wrapper__priceText">${price} ₽</p>
        </div>
     <p class="discount__midText">
       <a href="product.html"> ${description}</a>
      </p>
        <div class="rating flex gap-1">
          <span> <i class="fa-regular fa-star"></i></span>
          <span><i class="fa-regular fa-star"></i></span>
          <span><i class="fa-regular fa-star"></i></span>
          <span><i class="fa-regular fa-star"></i></span>
          <span><i class="fa-regular fa-star"></i></span>
        </div>
        <div class="discount__footerButton">
            <button onClick="addToCart(${id})" class="discount__button">
            В корзину
            </button>
        </div>
      </div>

      <div class="wrapper__pos flex flex-col justify-center gap-2"
   
          <button onClick="addFavorit(${id})" class="btn
          
      ${checkFavorite ? 'bg-red-500' : 'text-black'}">
            <i class="fa-regular fa-heart wrapper__icon"></i>
          </button>
          <button>
            <i class="fa-regular fa-comment wrapper__icon"></i>
          </button>
          <button>
            <i class="fa-regular fa-eye wrapper__icon"></i> 
          </button>
     
        </div>
      

    </div>
`
};

products.map( (pr) => {
  allProduct.innerHTML += getAllProducts(pr);
});


function addToCart(id){
  let product = products.find((pr)=> pr.id === id);
  let check = cart.find((pr) => pr.id === id);
  if(check ){
    cart = cart.map((pr)=>{
      if(pr.id == id ){
        pr.quantity ++;
      }
      return pr;
    })
  }else{
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartTotal();
}



function addFavorit(id){
  allProduct.innerHTML = "";
  let check = favoritProducts.find((el) => el.id === id);
  let product = products.find( (pr) => pr.id === id);
  if(check){
    favoritProducts = favoritProducts.filter(el => el.id !== id);
  }else{
    favoritProducts.push(product);
  }
 
  
    localStorage.setItem("favoritProducts", JSON.stringify(favoritProducts));
    getFavouritTotal();
}