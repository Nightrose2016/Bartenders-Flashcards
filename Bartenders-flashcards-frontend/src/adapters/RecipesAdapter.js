class RecipesAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000';
    }
    getRecipes(){
        return fetch(this.baseurl)
        .then(res => res.text())
        .then(text => console.log(text));
    }
}