//  Recipe ingredients are organized in triplets as
//  [Item, Quantity, Metric]

//  Metrics should default to abbreviations, or to plurals
//  When the metric is not defined, "to taste" is the catch-all term


export default [
  {
    name:"Chicken and Rice Casserole",
    rec:[
      ["Chicken",2,"breasts"],
      ["Rice",2,"c"],
      ["Onion",1/2,"c"],
      ["Mayo",1/2,"c"],
      ["Cream of Chicken Soup",1,"cans"],
      ["Milk",1/2,"c"],
      ["Salt",1,"t"],
      ["Corn Flakes",2,"c"],
      ["French Onion",1,"c"],
      ["Butter",2,"T"]
    ]
  },
  {
    name:"Burritos",
    rec:[
      ["Ground Beef",1,"lbs"],
      ["Refried Beans",1,"can"],
      ["Taco Seasoning",1/2,"pkgs"],
      ["Tortillas",1/2,"pkgs"],
      ["Cheese",1,"to taste"]
    ]
  },
  {
    name:"a new recipe from the D&D book",
    rec:[ ["(New Recipe from D&D book)",1,"new recipes"] ]
  },
  {
    name: "White Wine Orzo",
    rec: [
      ["Olive Oil",1,"T"],
      ["Oregano",1,"t"],
      ["Paprika",1,"t"],
      ["Red Pepper Flakes",1/4,"t"],
      ["Chicken",2,"breasts"],
      ["Butter",2,"T"],
      ["Shallot",1,"shallots"],
      ["Garlic",2,"cloves"],
      ["Orzo Pasta",1,"c"],
      ["White Wine",1/3,"c"],
      ["Heavy Cream",1,"c"],
      ["Dijon Mustard",2,"t"],
      ["Parmesean Cheese",1/3,"c"],
      ["Spinach",2,"c"],
      ["Oil-packed, Sun-dried Tomatoes",1/2,"c"],
      ["Lemon Juice",1,"to taste"],
      ["Rosemary",1,"to taste"]
    ]
  },
  {
    name:"Lemon Butter Chicken",
    rec:[
      //  Lemon butter suace
      ["White Wine",1/4,"c"],
      ["Lemon Juice",5,"T"],
      ["Heavy Cream",5,"T"],
      ["Butter",1,"c"],
      //  Chicken and Pasta
      ["Farfalle Pasta",1/2,"lbs"],
      ["Chicken",2,"breasts"],
      ["Olive Oil",1,"T"],
      ["Butter",1,"T"],
      ["Flour",1/4,"c"],
      ["Bacon",4,"oz"],
      ["Artichoke Hearts",6,"oz"],
      ["Capers",2,"t"],
      ["Parsley",1,"to taste"]
    ]
  },
  {
    name:"Ranch Breakfast",
    rec:[
      ["Hashbrowns",1/2,"pkgs"],
      ["Eggs",6,"eggs"],
      ["Bacon",6,"oz"],
      ["Cheese",1,"to taste"]
    ]
  },
  {
    name: "Beef Stroganoff",
    rec: [
      ["Stew Meat",2,"lbs"],
      ["Ketchup",1/3,"c"],
      ["Lipton Onion Soup Mix",1,"pkgs"],
      ["Beef Bullion Cubes",3,"cubes"],
      ["Flour",1/2,"c"],
      ["Sour Cream",1,"c"]
    ]
  },
  {
    name:"Teriyaki Chicken",
    rec: [
      ["Soy Sauce",1,"c"],
      ["Sugar",1,"c"],
      ["Garlic",2,"cloves"],
      ["Ginger",1,"t"],
      ["Chicken OR Beef Bullion Cube",1,"cubes"],
      ["Chicken", 2, "breasts"]
    ]
  },
  {
    name:"Candy Chicken",
    rec:[
      ["Chicken",2,"breasts"],
      ["Eggs",1,"eggs"],
      ["Cornstarch",1/4,"c"],
      ["Garlic Powder",1,"t"],
      ["Sugar",1+1/8,"c"],
      ["Vinegar",1/2,"c"],
      ["Ketchup",1/3,"c"],
      ["Soy Sauce",2,"T"],
      //  For frying
      ["Oil",2,"c"]
    ]
  },
  {
    name:"Honey Sesame Chicken",
    rec:[
      ["Chicken",2,"breasts"],
      ["Flour",1/2,"c"],
      ["Cornstarch",1/4,"c"],
      ["Baking Powder",1/2,"t"],
      ["Eggs",1,"eggs"],
      ["Sesame Oil",1,"T"],
      ["Salt",1/4,"t"],
      ["Soy Sauce",3,"T"],
      ["Rice Wine Vinegar",2,"T"],
      ["Sugar",2,"T"],
      ["Honey",4,"T"],
      ["Cornstarch",4,"t"],
      //  For frying
      ["Oil",2,"c"]
    ]
  },
  {
    name:"Chicken Stroganoff",
    rec:[
      ["Chicken",2,"breasts"],
      ["Butter",1/4,"c"],
      ["Italian Seasoning",2,"t"],
      ["Chicken Broth",1,"cans"],
      ["Cream of Chicken",1,"cans"],
      ["Cream Cheese",1,"blocks"]
    ]
  },
  {
    name:"Minestrone Soup & Blueberry Muffins",
    rec:[
      ["Onion",1/2,"c"],
      ["Garlic",4,"cloves"],
      ["Crushed Tomato",1,"cans"],
      ["Pearl Barley",1/2,"c"],
      ["Broth (Chicken, Beef, or Vegitable)",3,"quarts"],
      ["Carrots",1,"c"],
      ["Spinach",1,"pkgs"],
      ["Kidney Beans",1,"cans"],
      ["Garbanzo Beans",1,"cans"],
      ["Small Shell Pasta",1,"c"],
      ["Good Seasons Italian Dressing",1,"envelopes"],
      ["Italian Seasoning",1,"to taste"],
      ["Parmesean Cheese",1,"to taste"],

      //  Blueberry Muffins
      ["Flour",1+1/4,"c"],
      ["Sugar",1/2,"c"],
      ["Baking Powder",1,"T"],
      ["Salt",1/4,"t"],
      ["All-Bran Cereal",2,"c"],
      ["Milk",1+1/4,"c"],
      ["Eggs",1,"eggs"],
      ["Oil",1/4,"c"],
      ["Blueberries",1+1/2,"c"],
      ["Cinnamon + Sugar",1,"to taste"]
    ]
  },
  {
    name:"Baked Potato Soup",
    rec: [
      ["Potatoes",3,"potatoes"],
      ["Onion",1,"small onions"],
      ["Chicken Broth",2,"cans"],
      ["Butter",4,"T"],
      ["Flour",1/4,"c"],
      ["Sour Cream",1/4,"c"],
      ["Heavy Cream OR Half-and-Half",1+1/2,"c"],
      ["Bread Bowls (Optional)",2,"bowls"]
    ]
  },
  {
    name:"Chicken Gnocchi Soup",
    rec:[
      ["Butter",3,"T"],
      ["Olive Oil",2,"T"],
      ["Onion",3/4,"c"],
      ["Carrots",1/2,"c"],
      ["Celery",1/2,"c"],
      ["Garlic",4,"cloves"],
      ["Flour",1/3,"c"],
      ["Chicken Broth",4,"c"],
      ["Half-and-Half",1+1/2,"c"],
      ["Chicken",2,"c"],
      ["Potato Gnocchi",1,"pkgs"],
      ["Spinach",3,"c"],
      ["Basil",1,"T"],
      ["Parmesean Chesse",1,"to taste"]
    ]
  },
  {
    name: "White Chicken Chili",
    rec:[
      ["Oil",1,"T"],
      ["Chicken",2,"breasts"],
      ["Onion",1/2,"c"],
      ["Garlic Powder",1+1/2,"t"],
      ["Great Northern Beans",2,"cans"],
      ["Chicken Broth",1,"cans"],
      ["Chopped Green Chilis",2,"cans"],
      ["Cumin",1,"t"],
      ["Oregano",1,"t"],
      ["Cayenne Pepper",1/4,"t"],
      ["Sour Cream",1,"c"],
      ["Whipping Cream",1/2,"c"],
      ["Cilantro",1,"to taste"],
      ["Cheese",1,"to taste"],
      ["Tortilla Chips",1,"to taste"]
    ]
  },
  {
    name:"Frozen Pizza",
    rec:[["Frozen Pizza",1,"pizzas"]]
  },
  {
    name:"Stuffed Shells",
    rec:[
      ["Jumbo Pasta Shells",1,"pkgs"],
      ["Cottage Cheese",4,"c"],
      ["Mozzarella Cheese",12,"oz"],
      ["Parmesean Cheese",1/2,"c"],
      ["Eggs",2,"eggs"],
      ["Garlic Powder",1,"to taste"],
      ["Oregano",1,"t"],
      ["Parsley",1,"t"],
      ["Spaghetti Sauce",1,"jars"],
      ["Parmesean Cheese",1/4,"c"]
    ]
  },
  {
    name:"Chicken Rollups",
    rec:[
      ["Canned Chicken",1,"cans"],
      ["Chive and Onion Cream Cheese",8,"oz"],
      ["Butter",1/4,"c"],
      ["Crescent Rolls",1,"pkgs"],
      ["Potatoes",2,"potatoes"],
      ["Milk",1/2,"c"]
    ]
  },
  {
    name:"Enchilada Casserole",
    rec:[
      ["Tortillas",1/2,"pkgs"],
      ["Chicken",2,"breasts"],
      ["Cheese",2,"c"],
      ["Sour Cream",1,"c"],
      ["Green Chili Enchilada Sauce",1,"cans"]
    ]
  },
  {
    name:"Rustic Chicken",
    rec:[
      ["Chicken",2,"breasts"],
      ["Paprika",2,"t"],
      ["Cumin",2,"t"],
      ["Olive Oil",2,"t"],
      ["Potatoes",2,"potatoes"],
      ["Carrots",1/2,"c"],
      ["Onion",1/2,"c"],
      ["Asparagus",1,"bunches"],
      ["Lemon",1,"lemons"]
    ]
  }
]
