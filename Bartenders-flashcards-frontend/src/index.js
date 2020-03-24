const app = new App();

app.ingredients.fetchAndLoadIngredients()
    .then(app.recipes.fetchAndLoadRecipes)

const body = document.querySelector('body')
const formsContainer = document.getElementById('forms-container')
const newRecipeForm = document.getElementById('new-recipe-form')
const editdrinks = document.getElementById('edit-drink')
this.recipesContainer = document.getElementById('recipes-container')

editdrinks.addEventListener('click', renderEditDrinks)


funtion renderEditDrinks(){
    formsContainer.innerHTML = Recipe.renderEDIT()
}

console.log('am i alive?')