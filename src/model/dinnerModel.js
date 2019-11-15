//DinnerModel class
/*GET_DISH_URI1 = "http://sunset.nada.kth.se:8080/iprog2/group/40/recipes/";
GET_DISH_URI2 = "/information";
GET_ALL_DISHES_URI1 = "http://sunset.nada.kth.se:8080/iprog2/group/40/recipes/search?type=";
GET_ALL_DISHES_URI2 = "&query=";*/

class DinnerModel {


  constructor() {
    this.guests = 0;
    this.menu = [];
    //this.dishes = dishesConst;
  }

  setNumberOfGuests(num) {
    if(num <= 0) {
      this.guests = 1;
    }
    else
      this.guests = num;
  }

  getNumberOfGuests() {
    return this.guests;
  }

  //Returns the dish that is on the menu for selected type
  getSelectedDishes(type) {
    return this.menu.filter(dish => dish.dishTypes.includes(type));
  }

  //Returns all the dishes on the menu.
  getFullMenu() {
    return this.menu;
  }

  //Returns all ingredients for all the dishes on the menu.
  getAllIngredients() {
    let ingredients = this.menu.map(dish => dish.extendedIngredients.map(name => name.name)).flat();
    let filteredIngredients = Array.from(new Set(ingredients));
    return filteredIngredients;
  }

  //Returns the total price of the menu (price per serving of each dish multiplied by number of guests).
  getTotalMenuPrice() {
    let prices = this.menu.map(dish => dish.pricePerServing);
    let guests = this.getNumberOfGuests();
    let sum = prices.reduce((total, amount) => total + amount);
    return sum*guests;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  addDishToMenu(dish) {
    this.menu.push(dish);
  }

  //Removes dish from menu
  removeDishFromMenu(id) {
    let dish = this.getDish(id);
    this.menu.pop(dish);
  }

  getAllDishes(type, filter) {
    let API_URL;

    if(type != null){
      API_URL  = "http://sunset.nada.kth.se:8080/iprog2/group/40/recipes/search?type="+type;
    }
    if(filter != null && type != null){

      API_URL  = "http://sunset.nada.kth.se:8080/iprog2/group/40/recipes/search?type="+
          type+"&query="+filter;
    }

    return fetch(API_URL,{
      headers:{
        method: "GET",
        'X-Mashape-Key': API_KEY
      }}).then(response => response.json()).then(data => data.results);
  }

  /*getAllDishes(type, query) {
    return this.dishes.filter(function (dish) {
      let found = true;
      if (query) {
        found = false;
        dish.extendedIngredients.forEach(function (ingredient) {
          if (ingredient.name.indexOf(query) !== -1) {
            found = true;
          }
        });
        if (dish.name.indexOf(query) !== -1) {
          found = true;
        }
      }
      return (dish.dishTypes.includes(type) || !type) && found;
    });
  }*/

  //Returns a dish of specific ID
  /*getDish(id) {
    /
    return this.dishes.find(function(obj) { return obj.id === id; }); return undefined;

  }*/

  getDish(id) {
    let API_URL = "http://sunset.nada.kth.se:8080/iprog2/group/40/recipes/"+id+"/information";

    return fetch(API_URL,{
      headers:{
        method: "GET",
        'X-Mashape-Key': API_KEY
      }
    }).then(response => response.json()).then(data => data);

  }

  /*getDish(id) {
    let dishInList = this.dishes.filter(dish => dish.id === id);
    if(dishInList.length > 0)
      return dishInList[0];
    else
      return undefined;
  }*/
}

/*const dishesConst = [{
  'id': 1,
  'name': 'French toast',
  'dishTypes': ['starter', 'breakfast'],
  'image': 'toast.jpg',
  'instructions': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
  'pricePerServing': 32.5,
  'extendedIngredients': [{
    'name': 'eggs',
    'amount': 0.5,
    'unit': '',
  }, {
    'name': 'milk',
    'amount': 30,
    'unit': 'ml',
  }, {
    'name': 'brown sugar',
    'amount': 7,
    'unit': 'g',
  }, {
    'name': 'ground nutmeg',
    'amount': 0.5,
    'unit': 'g',
  }, {
    'name': 'white bread',
    'amount': 2,
    'unit': 'slices',
  }]
}, {
  'id': 2,
  'name': 'Sourdough Starter',
  'dishTypes': ['starter'],
  'image': 'sourdough.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 43.2,
  'extendedIngredients': [{
    'name': 'active dry yeast',
    'amount': 0.5,
    'unit': 'g',
  }, {
    'name': 'warm water',
    'amount': 30,
    'unit': 'ml',
  }, {
    'name': 'all-purpose flour',
    'amount': 15,
    'unit': 'g',
  }]
}, {
  'id': 3,
  'name': 'Baked Brie with Peaches',
  'dishTypes': ['starter', 'lunch'],
  'image': 'bakedbrie.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 52.8,
  'extendedIngredients': [{
    'name': 'round Brie cheese',
    'amount': 10,
    'unit': 'g',
  }, {
    'name': 'raspberry preserves',
    'amount': 15,
    'unit': 'g',
  }, {
    'name': 'peaches',
    'amount': 1,
    'unit': '',
  }]
}, {
  'id': 100,
  'name': 'Meat balls',
  'dishTypes': ['main dish'],
  'image': 'meatballs.jpg',
  'instructions': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
  'pricePerServing': 33.5,
  'extendedIngredients': [{
    'name': 'extra lean ground beef',
    'amount': 115,
    'unit': 'g',
  }, {
    'name': 'sea salt',
    'amount': 0.7,
    'unit': 'g',
  }, {
    'name': 'small onion, diced',
    'amount': 0.25,
    'unit': '',
  }, {
    'name': 'garlic salt',
    'amount': 0.7,
    'unit': 'g',
  }, {
    'name': 'Italian seasoning',
    'amount': 0.6,
    'unit': 'g',
  }, {
    'name': 'dried oregano',
    'amount': 0.3,
    'unit': 'g',
  }, {
    'name': 'crushed red pepper flakes',
    'amount': 0.6,
    'unit': 'g',
  }, {
    'name': 'Worcestershire sauce',
    'amount': 6,
    'unit': 'ml',
  }, {
    'name': 'milk',
    'amount': 20,
    'unit': 'ml',
  }, {
    'name': 'grated Parmesan cheese',
    'amount': 5,
    'unit': 'g',
  }, {
    'name': 'seasoned bread crumbs',
    'amount': 15,
    'unit': 'g',
  }]
}, {
  'id': 101,
  'name': 'MD 2',
  'dishTypes': ['main dish'],
  'image': 'bakedbrie.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 43.2,
  'extendedIngredients': [{
    'name': 'ingredient 1',
    'amount': 1,
    'unit': 'pieces',
  }, {
    'name': 'ingredient 2',
    'amount': 15,
    'unit': 'g',
  }, {
    'name': 'ingredient 3',
    'amount': 10,
    'unit': 'ml',
  }]
}, {
  'id': 102,
  'name': 'MD 3',
  'dishTypes': ['main dish'],
  'image': 'meatballs.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 25.2,
  'extendedIngredients': [{
    'name': 'ingredient 1',
    'amount': 2,
    'unit': 'pieces',
  }, {
    'name': 'ingredient 2',
    'amount': 10,
    'unit': 'g',
  }, {
    'name': 'ingredient 3',
    'amount': 5,
    'unit': 'ml',
  }]
}, {
  'id': 103,
  'name': 'MD 4',
  'dishTypes': ['main dish'],
  'image': 'meatballs.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 52.0,
  'extendedIngredients': [{
    'name': 'ingredient 1',
    'amount': 1,
    'unit': 'pieces',
  }, {
    'name': 'ingredient 2',
    'amount': 12,
    'unit': 'g',
  }, {
    'name': 'ingredient 3',
    'amount': 6,
    'unit': 'ml',
  }]
}, {
  'id': 200,
  'name': 'Chocolat Ice cream',
  'dishTypes': ['dessert'],
  'image': 'icecream.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 12.2,
  'extendedIngredients': [{
    'name': 'ice cream',
    'amount': 100,
    'unit': 'ml',
  }]
}, {
  'id': 201,
  'name': 'Vanilla Ice cream',
  'dishTypes': ['dessert'],
  'image': 'icecream.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 21.2,
  'extendedIngredients': [{
    'name': 'ice cream',
    'amount': 100,
    'unit': 'ml',
  }]
}, {
  'id': 202,
  'name': 'Strawberry',
  'dishTypes': ['dessert'],
  'image': 'icecream.jpg',
  'instructions': "Here is how you make it... Lore ipsum...",
  'pricePerServing': 15.0,
  'extendedIngredients': [{
    'name': 'ice cream',
    'amount': 100,
    'unit': 'ml',
  }]
}
];*/