const FoodData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
    name: "Onion Pizza",
    price: 150,
    desc: "A delicious pizza topped with fresh onions for a delightful flavor combination.",
    category: "Lunch",
    rating: 4.5,
    avail:3
  },
  {
    id: 2,
    img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
    name: "Margherita Pizza",
    price: 130,
    desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil.",
    category: "Lunch",
    rating: 5,
    avail: 10
  },
  {
    id: 3,
    img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
    name: "Pepperoni Pizza",
    price: 160,
    desc: "Indulge in the savory delight of this Pizza, loaded with pepperoni, melted cheese, and a tangy tomato sauce.",
    category: "Lunch",
    rating: 3.5,avail: 6
  },
  {
    id: 4,
    img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
    name: "Mushroom Pizza",
    price: 140,
    desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach.",
    category: "Lunch",
    rating: 4.5,avail: 5
  },
  {
    id: 5,
    img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
    name: "BBQ Chicken Pizza",
    price: 170,
    desc: "Smoky goodness of this BBQ Chicken Pizza with tender pieces of chicken marinated in barbecue sauce.",
    category: "Lunch",
    rating: 4.5,avail: 3
  },
  {
    id: 6,
    img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
    name: "Classic Pancakes",
    price: 80,
    desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter.",
    category: "Breakfast",
    rating: 4.5, avail: 6
  },
  {
    id: 7,
    img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
    name: "Egg-Bacon Croissant",
    price: 110,
    desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese.",
    category: "Breakfast",
    rating: 5, avail: 10
  },
  {
    id: 8,
    img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
    name: "Yogurt Parfait",
    price: 95,
    desc: "Enjoy a healthy breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola.",
    category: "Breakfast",
    rating: 4, avail: 2
  },
  {
    id: 9,
    img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
    name: "Avocado Toast",
    price: 120,
    desc: "Savor the creaminess of mashed avocado on toasted whole grain bread with red pepper flakes.",
    category: "Breakfast",
    rating: 4.5, avail: 7
  },
  {
    id: 10,
    img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
    name: "Fruit and Nut Oatmeal",
    price: 85,
    desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey.",
    category: "Breakfast",
    rating: 4.5, avail: 3
  },
  {
    id: 11,
    img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
    name: "Grilled Salmon",
    price: 190,
    desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables.",
    category: "Dinner",
    rating: 4.5, avail: 8
  },
  {
    id: 12,
    img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
    name: "Chicken Alfredo Pasta",
    price: 160,
    desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken.",
    category: "Dinner",
    rating: 5, avail: 5
  },
  {
    id: 13,
    img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
    name: "Vegetable Stir-Fry",
    price: 130,
    desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice.",
    category: "Dinner",
    rating: 5, avail: 4
  },
  {
    id: 14,
    img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
    name: "Grilled Chicken",
    price: 160,
    desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans and rice",
    category: "Dinner",
    rating: 4.5, avail: 3
  },
  {
    id: 15,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Mushroom Risotto",
    price: 175,
    desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice.",
    category: "Dinner",
    rating: 4.5, avail: 7
  },
  {
    id: 16,
    img: "https://th.bing.com/th/id/OIP.7l1cAwzf65F1XV_yX53zrwHaHa?rs=1&pid=ImgDetMain",
    name: "Cheese-Crackers Platter",
    price: 120,
    desc: "Enjoy a variety of artisan cheeses, crispy crackers and complemented by fresh fruits and nuts.",
    category: "Snacks",
    rating: 3.5, avail: 5
  },
  {
    id: 17,
    img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
    name: "Chicken Wings",
    price: 130,
    desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection.",
    category: "Snacks",
    rating: 4.5, avail: 8
  },
  {
    id: 18,
    img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
    name: "Paneer Tikka",
    price: 130,
    desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection.",
    category: "Snacks",
    rating: 5, avail: 2
  },
  {
    id: 19,
    img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
    name: "Hummus Platter",
    price: 90,
    desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread.",
    category: "Snacks",
    rating: 4.5, avail: 7
  },
  {
    id: 20,
    img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
    name: "Fruit Skewers",
    price: 70,
    desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more.",
    category: "Snacks",
    rating: 4.5, avail: 10
  },
];
export default FoodData;