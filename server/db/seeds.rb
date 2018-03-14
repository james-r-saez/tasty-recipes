# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

recipe1 = Recipe.create({name: 'Mac & Cheese', instructions: "Making a nice cheese sauce takes a little time and patience. You don’t want to walk away while it’s cooking as it can easily stick and begin to burn, and if it catches, believe me, it’s hard to get rid of the taste or disguise it. To start, melt the butter in a medium saucepan over a low heat. Stir in the flour with a wooden spoon and mix until you have a smooth paste (a roux). Stir in the salt, Cajun seasoning and mustard. Continue to cook the roux for at least 1 minute; you need to make sure that the flour is cooked. Slowly add the milk, stirring while you bring it to simmering point. Once you have added all the milk, simmer for at least 5 minutes. When the sauce begins to thicken, stir in the cheeses, reserving half the English Cheddar to use as a topping. Remove from the heat. Bring a large pan of water to the boil, then add some salt and the olive oil. Add the macaroni to the boiling water and cook according to the directions on the packet, or until the pasta is soft but not mushy and overdone. Drain into a colander, and transfer to a casserole or ovenproof dish. Pour the cheese sauce over the pasta and stir it in. Sprinkle the remaining grated cheese on top and bake in an oven preheated to 180C/Gas Mark 4 for 20 minutes or until the top begins to brown. Whatever you do, do not allow the pasta to dry out. If it’s too dry, simply add a little milk to the dish and gently stir it in, being careful not to disturb the crusty top...", time_required: "50 min", image_url: "https://i.imgur.com/i2UAUNK.jpg", user_id: 1})

recipe2 = Recipe.create({name: 'Crab Cakes', instructions: "Whisk the egg with the spring onion and coriander and add the Worcestershire sauce, hot sauce, mustard and mayonnaise, mix well. Add the Celery salt & pepper. Add the crab claw to the beaten egg and seasonings and mix well. Then add the breadcrumbs and gently fold them in. Make into patties and shallow fry until golden brown and cooked through.", time_required: "25 min", image_url: "https://i.imgur.com/XYcdDGm.jpg", user_id: 1})

recipe3 = Recipe.create({name: 'Japanese style Cheesecake', instructions: "Preheat oven to 350°F. Line bottom of 8 inch cake pan with parchment paper. Cut a 21x5 inch strip of parchment, butter or oil parchment, and line sides of pan. Center the pan on a large piece of foil and fold foil up over the sides to prevent water from entering pan.
Place white chocolate in a medium heatproof bowl and heat in microwave in 20-second intervals (or set bowl over a saucepan of barely simmering water), stirring occasionally, until melted. Transfer to a large bowl and stir in cream cheese. Let cool slightly, then add yolks and stir to combine. Using an electric mixer on high speed, whip egg whites in another large bowl until stiff peaks form. Add a small portion of egg whites to chocolate mixture and stir just until lightened. Gently fold in remaining egg whites in 2 additions until just combined. Pour batter into prepared pan. Place pan in a baking dish or roasting pan and add warm water to reach halfway up sides of cake pan. Bake cheesecake until set, 40–45 minutes. Turn oven off and leave pan in oven 15 minutes, then transfer to a wire rack and let cool completely. Remove cheesecake from pan, transfer to a platter, and chill until cold, at least 4 hours or up to overnight.", time_required: "5 1/2 hours", image_url: "https://i.imgur.com/mmVio6X.jpg", user_id: 2})

[
  {name: "cooked macaroni, dried", quantity: "500g", recipe_id: 1},
  {name: "olive oil", quantity: "1 teaspoon", recipe_id: 1},
  {name: "salt", quantity: "2 teaspoons", recipe_id: 1},
  {name: "butter", quantity: "75g", recipe_id: 1},
  {name: "cajun seasoning", quantity: "1 teaspoon", recipe_id: 1},
  {name: "mild American mustard", quantity: "1 tablespoon", recipe_id: 1},
  {name: "whole milk", quantity: "1 liter", recipe_id: 1},
  {name: "Stilton cheese, crumbled", quantity: "100g", recipe_id: 1},
  {name: "mature Red Leicester cheese, grated", quantity: "100g", recipe_id: 1},
  {name: "mature English Cheddar cheese, grated", quantity: "150g", recipe_id: 1},
  {name: "mature Wexford Irish Cheddar cheese, grated", quantity: "100g", recipe_id: 1}
].each do |ingredient|
    Ingredient.create!(ingredient)
  end

[
  {name: "spring onion, chopped", quantity: "1", recipe_id: 2},
  {name: "coriander", quantity: "30g", recipe_id: 2},
  {name: "juice from lemon", quantity: "1", recipe_id: 2},
  {name: "juice from lime", quantity: "1/2", recipe_id: 2},
  {name: "egg", quantity: "1", recipe_id: 2},
  {name: "hot sauce", quantity: "to taste", recipe_id: 2},
  {name: "Worcestershire sauce", quantity: "4 tablespoons", recipe_id: 2},
  {name: "mustard", quantity: "1 tablespoon", recipe_id: 2},
  {name: "cajun seasoning", quantity: "1 tablespoon", recipe_id: 2},
  {name: "celery salt", quantity: "2 teaspoons", recipe_id: 2},
  {name: "pepper", quantity: "to taste", recipe_id: 2},
  {name: "crab claw", quantity: "300g", recipe_id: 2},
  {name: "breadcrumbs", quantity: "2/3 cup", recipe_id: 2},
  {name: "frying oil", quantity: "as needed", recipe_id: 2}
].each do |ingredient|
    Ingredient.create!(ingredient)
  end

[
  {name: "white chocolate", quantity: "9 ounces", recipe_id: 3},
  {name: "cream cheese", quantity: "3 ounces", recipe_id: 3},
  {name: "large eggs, seperated", quantity: "6", recipe_id: 3},
].each do |ingredient|
    Ingredient.create!(ingredient)
  end
