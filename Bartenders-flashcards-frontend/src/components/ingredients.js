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
        this.newIngredientNameClass = document.getElementsByClassName('new-ingredient')
        this.recipeID = document.getElementById(recipeID)
        this.ingredientsClass = document.getElementsByClassName('drink-ingredients');
        this.recipeForm.addEventListener('submit', this.createIngredient.bind(this))
    }

    createIngredient(e) {
        e.preventDefault();
        const newIngredients = this.newIngredientNameClass
        this.ingredients = Array.from(newIngredients).map(x => x.value)
        // ingredientsArray.map(value)

        debugger


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
