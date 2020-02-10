class Ingrediants{
    constructor(){
        this.Ingrediants = [];
        this.adapter = new IngrediantsAdapter() ;
        this.initBindingsAndEventListeners();
        this.fetchAndLoadIngrediants();
    }

    initBindingsAndEventListeners() {
        this.recipesContainer = document.getElementById('recipes-container');
        this.newRecipeName = document.getElementById('first-ingrediant-namee');
        this.newRecipeBody = document.getElementById('second-ingrediant-name');
        this.newRecipeName = document.getElementById('third-ingrediant-name');
        this.newRecipeBody = document.getElementById('fourth-ingrediant-name');
        this.newRecipeBody = document.getElementById('garnish-ingrediant-name');
    }

    fetchAndLoadIngrediants(){
        this.adapter
        .getIngrediants()
        .then(Ingrediants => {
           return console.log(Ingrediants);
            })
            .then(() =>{
                this.render();
            });
    }

    // render(){
    //     const drinksContainer = document.getElementById('drinks-container');
    //     drinksContainer.innerHTML = 'Drinks here';
    // }
}