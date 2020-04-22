class Ingredients{
    constructor(){
        this.ingredients = [];
        this.adapter = new IngredientsAdapter() ;
        this.initBindingsAndEventListeners();
    }

    initBindingsAndEventListeners() {
        this.newIngredientNameClass = document.getElementsByClassName('new-ingredient')
        this.ingredientsClass = document.getElementsByClassName('drink-ingredients');
    }

    createIngredient(e) {
        e.preventDefault();
        const newIngredients = this.newIngredientNameClass
        this.ingredients = Array.from(newIngredients).map(x => x.value)

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
