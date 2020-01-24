class Recipes{
    constructor(){
        this.recipes = [];
        this.adapter = new RecipesAdapter() ;
        this.bindingsEventListeners();
        this.fetchAndLoadRecipes();
    }
    initBindingsAndEventListeners() {
        this.recipesContainer = document.getElementById('recipes-container');
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