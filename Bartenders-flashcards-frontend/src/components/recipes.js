class Recipes{
    constructor(){
        this.recipes = []
        this.adapter = new RecipesAdapter() 
        this.initBindingsAndEventListeners()
        // this.recipesContainer = RecipeContainers
        // this.
    }

    initBindingsAndEventListeners() {
        this.body = document.querySelector('body')
        this.recipesContainer = document.getElementById('recipes-container') //try making variable declaration in index
        this.newRecipeName = document.getElementById('new-recipe-name')
        this.newRecipeBody = document.getElementById('new-recipe-body')
        this.updateRecipeForm = document.getElementById('edit-recipe-form')
        this.newrecipeForm = document.getElementById('new-recipe-form')
        this.newrecipeForm.addEventListener('submit', this.createRecipe.bind(this))
        this.editdrink = document.getElementsByClassName('edit-drink')
        this.recipesContainer.addEventListener('click')
        
        // var recipeID = this.recipesContainer.queryselector('data-id')
        this.recipesContainer.addEventListener('click', this.deleteRecipe)
    }

    
    createRecipe(e) {
        e.preventDefault()
        
        const name_value = this.newRecipeName.value
        const body_value = this.newRecipeBody.value
        
        this.adapter.createRecipe(name_value, body_value)
        .then(recipe => {
            this.recipes.push(new Recipe(recipe))
            this.newRecipeName.value = '' 
            this.newRecipeBody.value = '' 
            this.renderfull() 
        }) ;     
        console.log('your drink is being made')
    }

    updateRecipe() {
        // var recipeID = document.queryselector('edit-drink') // dataset by query selector

        // this.dataset.innerHTML = test?
        // console.log(recipeID)
        // const newname = 
        // this.adapter.updateRecipe(newNameValue, newBodyValue, id);
    }
    
    deleteRecipe = (e)  => {
        if (e.target.className == "delete-drink") {
            let id = e.target.dataset.id
            this.adapter.deleteRecipe(id)
        }
    }

    fetchAndLoadRecipes = () => {
        this.adapter.getRecipes()
        .then((resp) => {
            this.recipes = resp.map((obj) => new Recipe(obj))
            this.renderfull()
        }) ;
    }

    renderfull() {
        this.recipesContainer.innerHTML = this.recipes.map(recipe => recipe.renderDIV()).join('')
    }

    // renderedit() {
    //     // e.preventDefault()
    //     // debugger
    //     this.formsContainer.innerHTML = recipe.renderEDIT()
    // }
}
