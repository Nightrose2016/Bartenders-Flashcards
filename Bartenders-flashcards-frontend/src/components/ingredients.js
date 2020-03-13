class Ingredients{
    constructor(){
        this.Ingredients = [];
        this.adapter = new IngredientsAdapter() ;
        this.initBindingsAndEventListeners();
        this.fetchAndLoadIngredients();
    }

    initBindingsAndEventListeners() {
        this.body = document.querySelector('body');
        this.recipesContainer = document.getElementById('recipes-container');
        this.recipeForm = document.getElementById('new-recipe-form');
        this.newIngredientNameGlass = document.getElementById('glass-type') ;
        this.newIngredientNameOne = document.getElementById('first-ingredient-name');
        this.newIngredientNameTwo = document.getElementById('second-ingredient-name');
        this.newIngredientNameThree = document.getElementById('third-ingredient-name');
        this.newIngredientNameFour = document.getElementById('fourth-ingredient-name');
        this.newIngredientNameGarnish = document.getElementById('garnish-ingredient-name');
        this.recipeForm.addEventListener('submit', this.createIngredient.bind(this));
        this.ingredientsClass = document.getElementsByClassName('drink-ingredients');
    }

    createIngredient(e) {
        e.preventDefault();
        // add the above or switch to an array?
        const name_value = this.newIngredientName.value ;
        
        this.adapter.createIngredient(name_value).then(Ingredient => {
            this.ingredient.push(new Ingredient(ingredient));
            this.newIngredientName.value = '' ;
            this.render() ;
        }) ;
        console.log('ingredients are being shaken not shtired');
    }
    
    fetchAndLoadIngredients(){
        this.adapter.getIngredients() //getting ingredients from dackend
        .then(Ingredients => {
            Ingredients.data.forEach(ingredient => {
                // let something = {...ingredient.attributes, id: ingredient.id} 
                //     Ingredient.all.push(new Ingredient(something))
            })
           return console.log(Ingredients);
            })
        .then(() =>{
            this.render();
        });
        debugger
    }

    render(){
        
        this.ingredientsClass = this.ingredients.map(ingredient => ingredient.renderLI()).join('');
    }
}
