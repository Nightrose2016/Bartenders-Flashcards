class Recipes{
    constructor(){
        this.recipes = [];
        this.adapter = new RecipesAdapter() ;
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
    }
    initBindingsAndEventListeners() {
        this.recipesContainer = document.getElementById('recipes-container');
        this.body = document.querySelector('body');
        this.newRecipeName = document.getElementById('new-recipe-name');
        this.newRecipeBody = document.getElementById('new-recipe-body');
        this.recipeForm = document.getElementById('new-recipe-form');
        this.recipeForm.addEventListener('submit', this.createRecipe.bind(this));
    }

    createRecipe(e) {
        e.preventDefault();
        
        const name_value = this.newRecipeName.value ;
        const body_value = this.newRecipeBody.value ;
        
        this.adapter.createRecipe(name_value, body_value).then(recipe => {
            this.recipes.push(new Recipe(recipe));
            this.newRecipeName.value = '' ;
            this.newRecipeBody.value = '' ;
            this.render() ;
        }) ;     
        console.log('your drink is being made');
    }

    fetchAndLoadRecipes() {
        this.adapter.getRecipes()
        // .then(recipes => {
        //     recipes.sort((a, b) => a.id - b.id).forEach(recipe => this.recipes.push(new Recipe(recipe))) ;
        // }) 
        .then(() => {
            this.render() ;
        }) ;
    }

    render(){
        this.recipesContainer.innerHTML = this.recipes.map(recipe => recipe.renderLI()).join('');
    }
}