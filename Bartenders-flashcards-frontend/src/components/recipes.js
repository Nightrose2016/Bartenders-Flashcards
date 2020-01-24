class Recipes{
    constructor(){
        this.recipes = [];
        this.adapter = new RecipesAdapter() ;
        // this.bindEventListeners();
        this.fetchAndLoadRecipes();
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
        const drinksContainer = document.getElementById('drinks-container');
        drinksContainer.innerHTML = 'Drinks here';
    }
}