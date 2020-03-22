class Recipes{
    constructor(){
        this.recipes = []
        this.adapter = new RecipesAdapter() 
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners() {
        this.recipesContainer = document.getElementById('recipes-container')
        this.body = document.querySelector('body')
        this.newRecipeName = document.getElementById('new-recipe-name')
        this.newRecipeBody = document.getElementById('new-recipe-body')
        this.recipeForm = document.getElementById('new-recipe-form')
        this.recipeForm.addEventListener('submit', this.createRecipe.bind(this))
        this.recipesContainer.addEventListener('Edit' this.updateRecipe.bind(this))
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
            this.render() 
        }) ;     
        console.log('your drink is being made')
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

    updateRecipe(e) {

        this.adapter.updateRecipe(newNameValue, newBodyValue, id);
    }

    fetchAndLoadRecipes = () => {
        this.adapter.getRecipes()
        .then((resp) => {
            this.recipes = resp.map((obj) => new Recipe(obj))
            this.render()
        }) ;
    }

    render(){
        this.recipesContainer.innerHTML = this.recipes.map(recipe => recipe.renderDIV()).join('')
    }
}