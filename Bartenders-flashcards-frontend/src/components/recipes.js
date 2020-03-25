class Recipes{
    constructor(){
        this.recipes = []
        this.adapter = new RecipesAdapter() 
        this.initBindingsAndEventListeners()
        // this.recipesContainer = RecipeContainers
        // this.
    }

    initBindingsAndEventListeners() {
        this.recipesContainer = document.getElementById('recipes-container') //try making variable declaration in index
        this.newRecipeName = document.getElementById('new-recipe-name')
        this.newRecipeBody = document.getElementById('new-recipe-body')
        this.updateRecipeForm = document.getElementById('edit-recipe-form')
        // this.body = document.querySelector('body')
        // const formsContainer = document.getElementById('forms-container')
        this.newrecipeForm = document.getElementById('new-recipe-form')
        this.newrecipeForm.addEventListener('submit', this.createRecipe.bind(this))
        // document.getElementById('add') // not yet implemented
        document.getElementById('edit-drink').addEventListener('click', this.updateRecipe)
        // document.getElementById('delete-drink') // not yet implemented

        // this.updateRecipeForm.addEventListener('submit', this.updateRecipe.bind(this))
        // this.recipesContainer.addEventListener('dblclick', this.handleRecipeClick.bind(this))
        // this.body.addEventListener('blur', this.updateRecipe.bind(this), true)
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

    updateRecipe(e) {
        cons recipeID = [...] // dataset by query selector
        this.dataset.innerHTML = test?

        // this.adapter.updateRecipe(newNameValue, newBodyValue, id);
    }
    
    deleteRecipe(e) {
        // e.preventDefault()
    }
    // handleRecipeClick(e) {
    //     this.toggleRecipe(e) 
    // }
    
    // toggleRecipe(e) {
    //     const li = e.target
    //     li.contentEditable = true 
    //     li.focus()
    //     li.classList.add('editable') 
    // }


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