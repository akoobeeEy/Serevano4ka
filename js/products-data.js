const products = [
  {
    id: 1,
    name: "Apple",
    description: "Г/Ц Блинчики с мясом вес, Россия цельное отборное... ",
    price: "44,50",
    priceRight: "50,50",
    rating: 5,
    discount: 0,
    btn: "В корзину",
    prInfo: "С картой",
    image: "./assets/gr1.png",
  },
  {
    id: 2,
    name: "Banana",
    prRightInfo: "Обычная",
    description:
      "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "71,50",
    priceRight: "50,50",
    rating: 5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr2.png",
  },
  {
    id: 3,
    name: "Bread",
    prRightInfo: "Обычная",
    description:
      "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "88,32",
    priceRight: "50,50",
    rating: 5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr3.png",
  },
  {
    id: 4,
    name: "Broccoli",
    prRightInfo: "Обычная",
    description:
      "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "94,10",
    priceRight: "50,50",
    rating: 4.5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr4.png",

  },
  {
    id: 5,
    name: "Carrot",
    prRightInfo: "Обычная",
    description:
      "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: " 82,5",
    priceRight: "50,50",
    rating: 5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr1.png",
  },
  {
    id: 6,
    name: "Cheese",
    prRightInfo: "Обычная",
    description:
      "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "91,5",
    priceRight: "50,50",
    rating: 3.5,
    prInfo: "С картой",
    discount: 50,
    btn: "В корзину",
    image: "./assets/gr2.png",
  },
  {
    id: 7,
    name: "Chicken",
    prRightInfo: "Обычная",
    description:
      "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "68,8",
    priceRight: "50,50",
    rating: 3.5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr3.png",
  },
  {
    id: 8,
    name: "Chocolate",
    prRightInfo: "Обычная",
    description:
      "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "61,05",
    priceRight: "50,50",
    rating: 4.5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr4.png",
  },
  {
    id: 9,
    name: "Coffee",
    prRightInfo: "Обычная",
    description:
      "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "98,8",
    priceRight: "50,50",
    rating: 5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr5.png",
  },
  {
    id: 10,
    name: "Egg",
    prRightInfo: "Обычная",
    description:
      "A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.",
    price: 79,
    priceRight: "50,50",
    rating: 4.5,
    prInfo: "С картой",
    discount: 0,
    btn: "В корзину",
    image: "./assets/gr5.png",
  },
  {
    id: 11,
    name: "Egg",
    prRightInfo: "Обычная",
    description:
      "A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.",
    price: 79,
    priceRight: "50,50",
    rating: 4.5,
    prInfo: "С картой",
    discount: 0,
    btn: "В корзину",
    image: "./assets/gr6.png",
  },
  {
    id: 12,
    name: "Egg",
    prRightInfo: "Обычная",
    description:
      "A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.",
    price: 79,
    priceRight: "50,50",
    rating: 4.5,
    prInfo: "С картой",
    discount: 0,
    btn: "В корзину",
    image: "./assets/gr6.png",
  },

];


const newProducts = [
  {
    id: 1,
    name: "Apple",
    description: "Г/Ц Блинчики с мясом вес, Россия цельное отборное... ",
    price: "44,50",
    rating: 5,
    discount: 0,
    btn: "В корзину",
    image: "./assets/gr1.png",
    ratImg1: "./assets/free-star.svg",
  },
  {
    id: 2,
    name: "Banana",
    description:
      "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "71,50",

    rating: 5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr2.png",
  },
  {
    id: 3,
    name: "Bread",
    description:
      "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "88,32",

    rating: 5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr3.png",
  },
  {
    id: 4,
    name: "Broccoli",
    description:
      "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "94,10",

    rating: 4.5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr4.png",

  },
  {
    id: 5,
    name: "Carrot",
    description:
      "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: " 82,5",

    rating: 5,
    prInfo: "С картой",
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr1.png",
  },
  {
    id: 6,
    name: "Cheese",
    description:
      "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "91,5",
    rating: 3.5,
    discount: 50,
    btn: "В корзину",
    image: "./assets/gr2.png",
  },
  {
    id: 7,
    name: "Chicken",
    description:
      "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "68,8",
    rating: 3.5,
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr3.png",
  },
  {
    id: 8,
    name: "Chocolate",
    description:
      "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "61,05",
    rating: 4.5,
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr4.png",
  },
  {
    id: 9,
    name: "Coffee",
    description:
      "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "98,8",
    rating: 5,
    discount: 20,
    btn: "В корзину",
    image: "./assets/gr5.png",
  },
  {
    id: 10,
    name: "Egg",
    description:
      "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: 79,
    rating: 4.5,
    prInfo: "С картой",
    discount: 0,
    btn: "В корзину",
    image: "./assets/gr3.png",
  },
  {
    id: 11,
    name: "Egg",
    description:
      "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: 79,
    rating: 4.5,
    discount: 0,
    btn: "В корзину",
    image: "./assets/gr4.png",
  },
  {
    id: 12,
    name: "Egg",
    description:
      "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: 79,
    rating: 4.5,
    discount: 0,
    btn: "В корзину",
    image: "./assets/gr2.png",
  },
];

const special = [
{
  id: 1,
  title: "Оформите карту «Северяночка»",
  info: "И получайте бонусы при покупке в магазинах и на сайте",
  img: "./assets/specialLeft.png"

},
{
  id: 2,
  title: "Покупайте акционные товары",
  info: "И получайте вдвое больше бонусов",
  img: "./assets/specialRightImg.png",

},
];

const stati = [
  {
    id: 1,
    image:"./assets/st1.png",
    data: "05.03.2021",
    title: "Режим использования масок и перчаток на территории магазинов",
    desc: `Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.`,

  },
  {
    id: 2,
    image: "./assets/st2.png",
    data: "05.03.2021",
    title: "Весеннее настроение для каждой",
    desc: `8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.`,
    
  },
  {
    id: 3,
    image: "./assets/st3.png",
    data: "22.02.2020",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    desc: `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!`,
    
  }
];