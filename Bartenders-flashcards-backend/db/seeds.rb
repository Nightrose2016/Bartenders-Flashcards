# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all
Recipe.create([{
    name: "Shirley Temple",
    body: "1) Fill the glass with ice, then pour in about 1 ounce of grenadine over the ice. 2) Top the glass off with the lemon lime soda. 3) Don’t forget the cherries! The more, the cherrier."
},
{
    name: "Rum and Coke",
    body: "4 oz of cola and 2oz of white rum in a highball glass"
}
])

Ingrediant.destroy_all
Ingrediant.create([{
    recipe_id: 1,
    name: "1oz. Grenadine"
},
{
    recipe_id: 1,
    name: "8oz. Lemon-Lime Soda"
},
{
    recipe_id: 1,
    name: "Maraschino cherries"
},
{
    recipe_id: 1,
    name: "Highball glass"
},
{
    recipe_id: 2,
    name: "highball glass"
},
{
    recipe_id: 2,
    name: "2oz. rum"
},
{
    recipe_id: 2,
    name: "4-6oz Coca-Cola"
},
{
    recipe_id: 2,
    name: "Lime Wedge"
},
])