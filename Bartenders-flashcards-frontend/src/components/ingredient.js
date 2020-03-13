class Ingredient {
    constructor(ingredientJSON) {
        this.id = ingredientJSON.id ;
        this.recipeID = ingredientJSON.recipe_id ;
        this.name = ingredientJSON.name ;
    }

    renderLI() {
        console.log('ingredients are being mixed');
        return 'ingredients will print here'
    }
}