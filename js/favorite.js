const favoritRow = document.querySelector(".favourites__row");


favoritProducts.forEach((pr) =>{
  favoritRow.innerHTML += getAllProducts(pr);
})