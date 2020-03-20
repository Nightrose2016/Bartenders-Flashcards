class Ingredient {
    constructor(ingredientJSON) {
        this.id = ingredientJSON.id ;
        this.recipeID = ingredientJSON.recipe_id ;
        this.name = ingredientJSON.name ;
    }

    renderLI() {
        return `<li>${this.name}</li>`
    }
}