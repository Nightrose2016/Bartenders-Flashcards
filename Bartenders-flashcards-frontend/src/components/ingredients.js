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
        this.newIngredientArray = Array.from(document.getElementsByClassName('ingredient-name'))
        // this.newIngredientNameGlass = document.getElementById('glass-type') ;
        // this.newIngredientNameOne = document.getElementById('first-ingredient-name');
        // this.newIngredientNameTwo = document.getElementById('second-ingredient-name');
        // this.newIngredientNameThree = document.getElementById('third-ingredient-name');
        // this.newIngredientNameFour = document.getElementById('fourth-ingredient-name');
        // this.newIngredientNameGarnish = document.getElementById('garnish-ingredient-name');
        this.recipeID = document.getElementById(recipeID)
        this.ingredientsClass = document.getElementsByClassName('drink-ingredients');
        this.recipeForm.addEventListener('submit', this.createIngredient.bind(this))
    }

    createIngredient(e) {
        e.preventDefault();

        // add the above or switch to an array? array would be better as not having all ingrediands would work
        // const name_value = this.newIngredientName.value ;
        
        this.adapter.createIngredient(name_value, recipeID)
        .then(Ingredient => {
            let something = {...ingredient.data.attributes, id: ingredient.data.id}
            let newIngrediant = new Ingredient (something)
            this.ingredient.push(new Ingredient(newIngredient));
            this.newIngredientName.value = '' ;
            return newIngrediant
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
