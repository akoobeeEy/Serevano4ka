const products = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    description: "A round fruit with a red, green, or yellow ",
    price: 89,
    rating: 5,
    discount: 0,
    image: "./assets/gr1.png",
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruit",
    description:
      "A long, curved fruit with a yellow skin and sweet, creamy white flesh.",
    price: 71,
    rating: 5,
    discount: 20,
    image: "./assets/gr2.png",
  },
  {
    id: 3,
    name: "Bread",
    category: "Bakery",
    description:
      "A staple food made from flour, water, and yeast, baked into a loaf.",
    price: 88,
    rating: 5,
    discount: 20,
    image: "./assets/gr3.png",
  },
  {
    id: 4,
    name: "Broccoli",
    category: "Vegetable",
    description:
      "A green vegetable with a tree-like appearance, known for its high nutrient content.",
    price: 94,
    rating: 4.5,
    discount: 20,
    image: "./assets/gr4.png",
   
  },
  {
    id: 5,
    name: "Carrot",
    category: "Vegetable",
    description:
      "A root vegetable with a crunchy texture and a sweet, earthy flavor.",
    price: 82,
    rating: 5,
    discount: 20,
    image: "./assets/gr5.png",
  },
  {
    id: 6,
    name: "Cheese",
    category: "Dairy",
    description:
      "A dairy product made from milk, with a variety of textures and flavors.",
    price: 91,
    rating: 3.5,
    discount: 50,
    image: "./assets/gr6.png",
  },
  {
    id: 7,
    name: "Chicken",
    category: "Meat",
    description:
      "A type of poultry, often used as a source of protein in meals.",
    price: 68,
    rating: 3.5,
    discount: 20,
    image: "./assets/gr7.png",
  },
  {
    id: 8,
    name: "Chocolate",
    category: "Dessert",
    description:
      "A sweet food made from cacao beans, used in a variety of desserts and confections.",
    price: 61,
    rating: 4.5,
    discount: 20,
    image: "./assets/gr8.png",
  },
  {
    id: 9,
    name: "Coffee",
    category: "Dessert",
    description:
      "A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.",
    price: 98,
    rating: 5,
    discount: 20,
    image: "./assets/gr9.png",
  },
  {
    id: 10,
    name: "Egg",
    category: "Dairy",
    description:
      "A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.",
    price: 79,
    rating: 4.5,
    discount: 0,
    image: "./assets/gr10.png",
  },
  {
    id: 11,
    name: "Fish",
    category: "Meat",
    description:
      "A type of seafood, known for its omega-3 fatty acids and high protein content.",
    price: 89,
    rating: 3.5,
    discount: 50,
    image: "./assets/gr11.png",
  },
  {
    id: 12,
    name: "Grapes",
    category: "Fruit",
    description:
      "A small, sweet fruit that grows in clusters, often used in wine-making.",
    price: 61,
    rating: 4,
    discount: 20,
    image: "./assets/gr1.png",
  },
  {
    id: 13,
    name: "Hamburger",
    category: "Fast food",
    description:
      "A sandwich made with a patty of ground beef, served on a bun with various toppings.",
    price: 87,
    rating: 5,
    discount: 0,
    image: "./assets/gr2.png",
  },
  {
    id: 14,
    name: "Hot dog",
    category: "Fast food",
    description:
      "A type of sausage served in a long roll, often used as a quick and convenient food.",
    price: 84,
    rating: 4.5,
    discount: 50,
    image: "./assets/gr3.png",
  },
  {
    id: 15,
    name: "Ice cream",
    category: "Dessert",
    description:
      "A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.",
    price: 68,
    rating: 4.5,
    discount: 0,
    image: "./assets/gr11.png",
  },
  {
    id: 16,
    name: "Lemon",
    category: "Fruit",
    description:
      "A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.",
    price: 74,
    rating: 3.5,
    discount: 0,
    image: "./assets/gr10.png",
  },
  {
    id: 17,
    name: "Eggs",
    category: "Dairy",
    description:
      "Eggs are oval-shaped reproductive structures produced by female birds and some reptiles.",
    price: 70,
    rating: 4.5,
    discount: 50,
    image: "./assets/gr8.png",
  },
  {
    id: 18,
    name: "Honey",
    category: "Dairy",
    description:
      "Honey is a sweet, sticky liquid made by bees from the nectar of flowers.",
    price: 87,
    rating: 4,
    discount: 0,
    image: "./assets/gr9.png",
  },
  {
    id: 19,
    name: "Ice Cream",
    category: "Dessert",
    description:
      "Ice cream is a frozen dessert made from cream, sugar, and flavorings.",
    price: 83,
    rating: 4.5,
    discount: 0,
    image: "./assets/gr7.png",
  },
  {
    id: 20,
    name: "Jelly",
    category: "Fruit",
    description:
      "Jelly is a sweet spread made from fruit juice and sugar, often used as a topping for toast or pastries.",
    price: 76,
    rating: 5,
    discount: 0,
    image: "./assets/gr6.png",
  },
  {
    id: 21,
    name: "Ketchup",
    category: "Dairy",
    description:
      "Ketchup is a tangy sauce made from tomatoes, vinegar, sugar, and spices.",
    price: 77,
    rating: 5,
    discount: 0,
    image: "./assets/gr5.png",
  },
  {
    id: 22,
    name: "Mango",
    category: "Fruit",
    description:
      "Mangoes are juicy, sweet tropical fruits with a fleshy interior and a large, oblong seed in the center.",
    price: 80,
    rating: 5,
    discount: 20,
    image: "./assets/gr4.png",
  },
  {
    id: 23,
    name: "Noodles",
    category: "Meat",
    description:
      "Noodles are a type of pasta made from wheat flour and water, often used in Asian cuisine.",
    price: 93,
    rating: 3.5,
    discount: 20,
    image: "./assets/gr3.png",
  },
  {
    id: 24,
    name: "Oatmeal",
    category: "Breakfast",
    description:
      "Oatmeal is a type of porridge made from oats that is often served for breakfast.",
    price: 94,
    rating: 4.5,
    discount: 0,
    image: "./assets/gr2.png",
  },
  {
    id: 25,
    name: "Bacon",
    category: "Breakfast",
    description:
      "Bacon is a popular breakfast food made from cured pork belly, it is newly delivered.",
    price: 71,
    rating: 3.5,
    discount: 20,
    image: "./assets/gr1.png",
  },
  {
    id: 26,
    name: "Pancakes",
    category: "Breakfast",
    description:
      "Pancakes are a popular breakfast food made from flour, eggs, and milk.",
    price: 63,
    rating: 4,
    discount: 0,
    image: "./assets/gr11.png",
  },
  {
    id: 27,
    name: "Waffles",
    category: "Breakfast",
    description:
      "Waffles are a type of breakfast food made from batter cooked in a waffle iron.",
    price: 97,
    rating: 4.5,
    discount: 20,
    image: "./assets/gr7.png",
  },
  {
    id: 28,
    name: "Fried Rice",
    category: "Lunch",
    description:
      "Fried Rice is a type of rice dish that is stir-fried in a pan with oil and other ingredients.",
    price: 81,
    rating: 4,
    discount: 20,
    image: "./assets/gr4.png",
  },
  {
    id: 29,
    name: "Spaghetti",
    category: "Lunch",
    description:
      "Spaghetti is a type of pasta made from wheat flour and water, usually served with sauce.",
    price: 96,
    rating: 3,
    discount: 50,
    image: "./assets/gr2.png",
  },
  {
    id: 30,
    name: "Pizza",
    category: "Lunch",
    description:
      "Pizza is a popular dish made from dough, sauce, cheese, and toppings.",
    price: 95,
    rating: 4,
    discount: 0,
    image: "./assets/gr3.png",
  },
  {
    id: 31,
    name: "Grilled Cheese",
    category: "Lunch",
    description:
      "A grilled cheese sandwich is a hot sandwich made from cheese and bread.",
    price: 100,
    rating: 5,
    discount: 50,
    image: "./assets/gr8.png",
  },
  {
    id: 32,
    name: "Steak",
    category: "Dinner",
    description:
      "Steak is a popular dinner dish made from a cut of beef that is usually grilled or pan-fried.",
    price: 63,
    rating: 4.5,
    discount: 20,
    image: "./assets/gr10.png",
  },
  {
    id: 33,
    name: "Salmon",
    category: "Dinner",
    description:
      "Salmon is a type of fish that is often grilled or baked and served as a main course.",
    price: 82,
    rating: 4.5,
    discount: 20,
    image: "./assets/gr4.png",
  },
  {
    id: 34,
    name: "Chicken Alfredo",
    category: "Dinner",
    description:
      "Chicken Alfredo is a pasta dish made with chicken, alsjfkdlkasdfhlkjh.",
    price: 94,
    rating: 4,
    discount: 20,
    image: "./assets/gr3.png",
  },
  {
    id: 35,
    name: "Lasagna",
    category: "Dinner",
    description:
      "Lasagna is a type of pasta dish made with layers of pasta, sauce, cheese, and meat or vegetables.",
    price: 70,
    rating: 1,
    discount: 0,
    image: "./assets/gr2.png",
  },
  {
    id: 36,
    name: "Chocolate Chip Cookies",
    category: "Dessert",
    description:
      "Chocolate Chip Cookies are a type of cookie made from flour, sugar, butter, and chocolate chips.",
    price: 98,
    rating: 3.5,
    discount: 0,
    image: "./assets/gr1.png",
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