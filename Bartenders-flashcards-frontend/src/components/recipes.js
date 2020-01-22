class Recipes{
    constructor(){
        this.recipes = []
        this.adapter = new RecipesAdapter
        this.bindEventListeners()
        this.fetchAndLoadRecipes()
    }
    fetchAndLoadRecipes(){
        this.adapter.getRecipes().then(recipes => {
            console.log(recipes)
        })
    }
}