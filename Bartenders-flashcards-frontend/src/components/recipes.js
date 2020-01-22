class Recipes{
    constructor(){
        this.recipes = []
        this.adapter = new RecipesAdapter
        this.bindEventListeners()
        this.fetchAndLoadNotes()
    }
}