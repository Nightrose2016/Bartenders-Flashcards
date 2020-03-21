class Ingredients{
    constructor(){
        this.ingredients = [];
        this.adapter = new IngredientsAdapter() ;
        this.initBindingsAndEventListeners();
    }

    initBindingsAndEventListeners() {
        this.body = document.querySelector('body');
        this.recipesContainer = document.getElementById('recipes-container');
        this.recipeForm = document.getElementById('new-recipe-form');
        // this.newIngredientArray = Array.from(document.getElementsByClassName('ingredient-name'))
        this.newIngredientNameGlass = document.getElementById('glass-type') ;
        this.newIngredientNameOne = document.getElementById('first-ingredient');
        this.newIngredientNameTwo = document.getElementById('second-ingredient');
        this.newIngredientNameThree = document.getElementById('third-ingredient');  // refactor for classes to pass into an array
        this.newIngredientNameFour = document.getElementById('fourth-ingredient');
        this.newIngredientNameFifth = document.getElementById('fifth-ingredient');
        this.recipeID = document.getElementById(recipeID)
        this.ingredientsClass = document.getElementsByClassName('drink-ingredients');
        this.recipeForm.addEventListener('submit', this.createIngredient.bind(this))
    }

    createIngredient(e) {
        e.preventDefault();

        IngredientArray =[]
        IngredientArray.push(newIngredientNameGlass.value, newIngredientNameOne.value, newIngredientNameTwo.value, newIngredientNameThree.value, newIngredientNameFour.value, newIngredientNameFifth.value) // refactor to moove away from the IDs
        // needo convert an array to individual ingredients
        debugger
        console.log(IngredientArray)

        // add the above or switch to an array? array would be better as not having all ingrediands would work
        // const name_value = this.newIngredientName.value ;

        this.adapter.createIngredient()
        .then(Ingredient => {
        }) ;
    }
    
    fetchAndLoadIngredients(){
       return this.adapter.getIngredients() //getting ingredients from backend
        .then(ingredients => {
            return ingredients.forEach(ingredient => {
                let something = {...ingredient.attributes, id: ingredient.id, recipe_id: ingredient.recipe_id, name: ingredient.name}
                    this.ingredients.push(new Ingredient(something))
            })
        })
    }
}
