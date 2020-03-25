const app = new App();


app.ingredients.fetchAndLoadIngredients()
    .then(app.recipes.fetchAndLoadRecipes)

// console.log('am i alive?')