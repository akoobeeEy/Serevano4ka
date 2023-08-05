


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
  disMidText.innerHTML = product.description
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
  discountBtn.innerHTML = product.btn;
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

discountLastProduct.forEach((product)=>{
  let card = getDiscountCard(product)
  discountRow.append(card);
})


  // new wrapper row


  
const neWrapperRow = document.querySelector("#new");


function getNewCard(product) {
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
  dsCardInfo.appendChild(discountPrText);
  
  // append footer item 
  dsCardFooterItem.appendChild(dsCardInfo);
  // dsCardFooterItem  end
  // disMidText start
  const disMidText = document.createElement("p");
  disMidText.className = "discount__midText";
  disMidText.innerHTML = product.description
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
  discountBtn.innerHTML = product.btn;
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
  // append discount row and discount card
  discountCard.append(discountCardBody, discountCardFooter, wrapperPos);
  neWrapperRow.appendChild(discountCard);
  // Discount card end here
  return discountCard;
}

const newProductLastItems = newProducts.slice(-4);
// console.log(newProductLastItems);

newProductLastItems.forEach((el) =>{
  let newCard = getNewCard(el);
  neWrapperRow.append(newCard);
})





// block wrapper row

const boughtRow = document.querySelector("#bought");


function getBoughtCard(product) {
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
  dsCardInfo.appendChild(discountPrText);
  
  // append footer item 
  dsCardFooterItem.appendChild(dsCardInfo);
  // dsCardFooterItem  end
  // disMidText start
  const disMidText = document.createElement("p");
  disMidText.className = "discount__midText";
  disMidText.innerHTML = product.description
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
  discountBtn.innerHTML = product.btn;
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
  // append discount row and discount card
  discountCard.append(discountCardBody, discountCardFooter, wrapperPos);
  boughtRow.appendChild(discountCard);
  // Discount card end here
  return discountCard;
}


const boughtRating = boughtProducts.toSorted((a, b) => a.rating - b.rating).slice(-4);

boughtRating.forEach((product)=>{
  let card = getBoughtCard(product)
  boughtRow.append(card);
})

