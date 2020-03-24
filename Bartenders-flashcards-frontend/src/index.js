const app = new App();

app.ingredients.fetchAndLoadIngredients()
    .then(app.recipes.fetchAndLoadRecipes)

document.getElementById('edit-drink').addEventListener('click', function(e){
    formsContainer.innerHTML = Recipe.renderEDIT()
console.log('am i alive?');