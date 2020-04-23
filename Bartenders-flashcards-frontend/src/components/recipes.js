class Recipes{
    constructor(){
        this.recipes = []
        this.adapter = new RecipesAdapter() 
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners() {
        this.body = document.querySelector('body')
        this.recipesContainer = document.getElementById('recipes-container') //try making variable declaration in index
        this.newRecipeName = document.getElementById('new-recipe-name')
        this.newRecipeBody = document.getElementById('new-recipe-body')
        this.updateRecipeForm = document.getElementById('editrecipeform')
        this.newrecipeForm = document.getElementById('newrecipeform')
        this.newrecipeForm.addEventListener('submit', this.createRecipe.bind(this))
        this.editdrink = document.getElementsByClassName('edit-drink')
        this.body.addEventListener('click', this.sortRecipes)
        this.updateRecipeName = document.getElementById("edit-recipe-name")
        this.updateRecipeBody = document.getElementById("edit-recipe-body")
        this.updateRecipeForm.addEventListener('submit', this.updateRecipe.bind(this))
        this.recipesContainer.addEventListener('click', this.deleteRecipe)
        this.recipesContainer.addEventListener('click', this.updateRecipe)
    }

    sortRecipes = (e) =>{
        if (e.target.id == "sort-recipes") {
            this.recipes = this.recipes.sort(function(a, b) {
                // debugger
                
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
            })
            this.renderfull()
        }
    }

    deleteRecipe = (e)  => {
        if (e.target.className == "delete-drink") {
            let id = e.target.dataset.id
            this.adapter.deleteRecipe(id)
        }
    }
    
    updateRecipe(e) {
        e,preventDefault()
        // const id = "this will be added later"
        const updateName = this.updateRecipeName
        const updateBody = this.updateRecipeBody
        this.adapter.updateRecipe(id, updateName, updateBody)
        .then(recipe => {
            this.recipes.push()
            this.updateRecipeName = ''
            this.updateRecipeBody = ''
            this.renderfull()
        })
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
}