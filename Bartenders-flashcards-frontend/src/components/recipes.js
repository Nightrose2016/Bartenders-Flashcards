class Recipes{
    constructor(){
        this.recipes = [];
        this.adapter = new RecipesAdapter() ;
        this.bindingsEventListeners();
        this.fetchAndLoadRecipes();
    }
    initBindingsAndEventListeners() {
        this.recipesContainer = document.getElementById('recipes-container');
        this.recipeForm = document.getElementById('new-recipe-form')
        this.recipeForm.addEventListener('submit', this.createRecipe)
    }

    createRecipe(e) {
        e.preventDefault
        console.log('your drink is being made')
    }
    
    fetchAndLoadRecipes(){
        this.adapter
        .getRecipes()
        .then(recipes => {
            recipe.forEach(recipe => this.recipes.push(new Recipe(recipe)));
           return console.log(recipes);
            })
            .then(() =>{
                this.render();
            });
    }

    render(){
        recipesContainer.innerHTML = {this.recipes.map(recipe => recipe.renderLI()).join};
    }
}