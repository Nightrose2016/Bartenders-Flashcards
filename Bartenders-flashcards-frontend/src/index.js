const app = new App();

const body = document.querySelector('body')
const formsContainer = document.getElementById('forms-container')
const newRecipeForm = document.getElementById('new-recipe-form')
const editdrinks = document.getElementById('edit-drink')
const RecipeContainers = document.getElementById('recipes-container')

editdrinks.addEventListener('click', renderEditDrinks)


function renderEditDrinks() { 
    Recipe.renderEDIT()
}

app.ingredients.fetchAndLoadIngredients()
    .then(app.recipes.fetchAndLoadRecipes)

// console.log('am i alive?')