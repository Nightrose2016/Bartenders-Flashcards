class Recipes{
    constructor(){
        this.recipes = [];
        this.adapter = new RecipesAdapter() ;
        this.bindingsEventListeners();
        this.fetchAndLoadRecipes();
    }
    initBindingsAndEventListeners() {
        this.recipesContainer = document.getElementById('recipes-container');
        this.recipesContainer = document.getElementById('new-recipe-name');
        this.newRecipeBody = document.getElementById('new-recipe-body');
        this.recipeForm = document.getElementById('new-recipe-form');
        this.recipeForm.addEventListener('submit', this.createRecipe.bind(this));
    }

    createRecipe(e) {
        e.preventDefault;
        const name_value = this.newRecipename.value
        const body_value = this.newRecipeBody.value
        
        this.adapter.createRecipe(name_value)
        this.adapter.createRecipe(body_value)
        console.log('your drink is being made');
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