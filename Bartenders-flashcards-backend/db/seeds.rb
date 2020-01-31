# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.delete_all
Recipe.create([{
    name: "Shirley Temple",
    body: "1) Fill the glass with ice, then pour in about 1 ounce of grenadine over the ice. 2) Top the glass off with the lemon lime soda or ginger ale. 3) Don’t forget the cherries! The more, the cherrier."
},
{
    name: "Rum and Coke",
    body: "4 oz of cola and 1 2/3 of white rum in a highball glass"
}
])

Ingrediant.delete_all
Ingrediant.create([{
    name: "vodka"
},
{
    name: "Tonic Water"
},
{
    name: "Lime Juice"
},
{
    name: "Grenadine"
},
{
    name: "Orange Juice"
},
{
    name: "Ginger Ale"
},
{
    name: "Lemon Juice"
},
{
    name: "Cranberry Juice"
},
{
    name: "Ice"
},
{
    name: "Salt (cocktail)"
},
{
    name: "Club Soda"
},
{
    name: "Sparkling Water"
},
{
    name: "Tobasco Sauce"
},
{
    name: "Maraschino Cherries"
},
{
    name: "Pearl Onions"
},
{
    name: "Whiskey"
},
{
    name: "Tequila"
},
{
    name: "Scotch"
},
{
    name: "Rum"
},
{
    name: "Gin"
},
{
    name: "Cointreau"
},
{
    name: "Brandy"
},
{
    name: "Ameretto"
},
{
    name: "Grand Marnier"
},
{
    name: "Cola"
},
{
    name: "Lemon Lime Soda"
}])