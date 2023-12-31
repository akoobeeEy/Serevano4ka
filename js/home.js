


// Discount card start here
const discountRow = document.querySelector("#discount");

function getDiscountCard(product) {
  const discountCard = document.createElement("div");
  discountCard.className = "discount__card group";
  // discountCardBody start here
  const discountCardBody = document.createElement("div");
  discountCardBody.className = 'discount__cardBody';
  const discountImg = document.createElement("img");
  discountImg.className = "discount__img";
  discountImg.src = product.image;
  discountImg.alt = product.name;
  discountCardBody.appendChild(discountImg);
  // discountCardBody end here
  // discountCardFooter start here
  const discountCardFooter = document.createElement("div");
  discountCardFooter.className = "discount__cardFooter";
  //  dsCardFooterItem start
  const dsCardFooterItem = document.createElement("div");
  dsCardFooterItem.className = "dCard__footer__item";
  const dsCardInfo = document.createElement("div");
  dsCardInfo.className = "dCard__info";
  const discountPrText = document.createElement("p");
  discountPrText.className = "wrapper__priceText";
  discountPrText.innerHTML = `${product.price}  ₽`;
  const discountSmText = document.createElement("span");
  discountSmText.className = "wrapper__smText";
  discountSmText.innerHTML = product.prInfo
  dsCardInfo.append(discountPrText, discountSmText);
  const disCardInfoRight = document.createElement("div");
  disCardInfoRight.className = "dsCard__infoRight"
  disCardInfoRight.innerHTML = `${product.priceRight} ₽`
  const disRightText = document.createElement("p");
  disRightText.className = "wrapper__rightText";
  disRightText.innerHTML = product.prRightInfo
  const wrSmText = document.createElement("span");
  wrSmText.className = "wrapper__smText";
  disCardInfoRight.append(disRightText, wrSmText)
  // append footer item 
  dsCardFooterItem.append(dsCardInfo, disCardInfoRight);
  // dsCardFooterItem  end
  // disMidText start
  const disMidText = document.createElement("p");
  disMidText.className = "discount__midText";
  disMidText.innerHTML = `<a href="product.html">${product.description}</a>`
  // disMidText end
  // disRating start
  const disRating = document.createElement("span");
  disRating.className = "discount__rating";
  disRating.innerHTML = product.rating
  //  disRating enD
  // discountBtn start
  const discountFooterButton = document.createElement("div");
  discountFooterButton.className = "discount__footerButton";
  const discountBtn = document.createElement("button");
  discountBtn.className = "discount__button";
  discountBtn.innerHTML = "В корзину";
  discountFooterButton.append(discountBtn);
  // discountBtn end
  // Append discount card footer 
  discountCardFooter.append(dsCardFooterItem, disMidText, disRating, discountFooterButton);
  // discountCardFooter end here
  // wraperPos start
  const wrapperPos = document.createElement("div");
  wrapperPos.className = "wrapper__pos";
  const wrapperPosItem = document.createElement("div");
  wrapperPosItem.className = "wrapper__posItem";
  const wrHeartIcon = document.createElement("i");
  wrHeartIcon.className = "fa-regular fa-heart wrapper__icon";
  const wrCommentIcon = document.createElement("i");
  wrCommentIcon.className = "fa-regular fa-comment wrapper__icon"
  const wrEyeIcon = document.createElement("i");
  wrEyeIcon.className = "fa-regular fa-eye wrapper__icon";
  wrapperPosItem.append(wrHeartIcon, wrCommentIcon, wrEyeIcon);
  wrapperPos.appendChild(wrapperPosItem);
  // wraperPos  end
  const wrPosBtn = document.createElement("div");
  wrPosBtn.className = "wrapper__posBtn";
  const wrapperButton = document.createElement("button");
  wrapperButton.className = "wrapper__button";
  wrapperButton.innerHTML = `${product.discount}%`;
  wrPosBtn.appendChild(wrapperButton);
  // append discount row and discount card
  discountCard.append(discountCardBody, discountCardFooter, wrapperPos, wrPosBtn);
  discountRow.appendChild(discountCard);
  // Discount card end here
  return discountCard;
}



const discountLastProduct = products.filter((product) => product.discount).slice(-4);

discountLastProduct.forEach((product) => {
  let card = getDiscountCard(product)
  discountRow.append(card);
})


// new wrapper row



const neWrapperRow = document.querySelector("#new");
neWrapperRow.className = ("new__wrapperRow")

function getNewCard({id, name, description, price,  image}) {

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
   
          <button>
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
}

const newProductLastItems = products.slice(-4);
newProductLastItems.map((newPr)=>{
  neWrapperRow.innerHTML += getNewCard(newPr);

})


// block wrapper row
const boughtRow = document.querySelector("#bought");

const boughtRating = products.toSorted((a, b) => a.rating - b.rating).slice(-4);

boughtRating.map((pr) => {
  boughtRow.innerHTML += getNewCard(pr);
})

// special

const specialRow = document.querySelector(".special__row");

const specialSec = [
  ...new Set(
    special.map((spec) => {
      return spec;
    })
  ),
];

specialRow.innerHTML = specialSec
  .map((spec) => {

    if (spec.id === 1) {
      return `<div class="special__left">
                <div class="flex flex-col gap-3">
                  <h4 class="flex flex-col text-sm font-bold lg:text-2xl">${spec.title}</h4>
                  <p class="flex flex-col text-xs font-normal lg:text-base">
                   ${spec.info}</p>
                </div>
                <div class="">
                  <img src="${spec.img}" alt="specialLeft" class="special__leftImg">
                </div>
              </div>
  `;
    } else if (spec.id === 2) {
      return `<div class="special__right">
                <div class="flex flex-col gap-3">
                  <h4 class="flex flex-col text-sm font-bold lg:text-2xl">${spec.title}</h4>
                  <p class="flex flex-col text-xs font-normal lg:text-base">
                   ${spec.info}</p>
                </div>
                <div class="">
                  <img src="${spec.img}" alt="specialLeft" class="special__leftImg">
                </div>
              </div>
  `;
    }
  })
  .join("");





// stati 
const statiRow = document.querySelector(".stati__row");
stati.map((stati) => {
  statiRow.innerHTML += `
  <div class="duration-200 stati__card group hover:bg-black hover:shadow-green-600">
              <div class="duration-500 translate-y-28 group-hover:translate-y-0">
                <img src="${stati.image}"
                class="w-full duration-500 delay-100 stati__img hover:scale-105">
              </div>
              <div class="duration-500 translate-y-[500px] stati__cardItem group-hover:translate-y-0">
                <p class="text-[10px] md:text-xs text-gray-500 group-hover:text-green-500 duration-0">${stati.data}</p>
                <h4 class="flex flex-col text-sm md:text-[18px] text-textColor font-bold group-hover:text-green-500">
                  ${stati.title}
                </h4>
                <p class="text-xs font-normal group-hover:text-green-500 md:text-base text-textColor">
                  ${stati.desc}
                </p>
                <div class="">
                  <button class="stati__button">Подробнее</button>
                </div>
              </div>
            </div>
  `
})



