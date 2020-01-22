class RecipesAdapter {
    constructor(){
        this.baseurl = 'https://localhost:3000'
    }
    getRecipes(){
        return fetch(this.baseurl).then(res => res.json()
        )
    }
}