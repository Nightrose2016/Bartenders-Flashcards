class Ingrediant {
    constructor(ingrediantJSON) {
        this.id = ingrediantJSON.id ;
        this.recipeID = ingrediantJSON.recipe_id ;
        this.name = ingrediantJSON.name ;
    }

    renderLI() {
        return 'ingrediants will print here'
    }
}