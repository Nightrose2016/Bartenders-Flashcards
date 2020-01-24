class RecipesAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000/recipes';
    }
    getRecipes(){
        return fetch(this.baseurl)
        .then(res => res.text())
        .then(text => console.log(text));
    }

    createRecipe(name_value, body_value) {
        const recipe = {
            name: name_value ;
            body: body_value ;
        }
        return fetch(this.baseurl), {
            method: 'post',
            body: JSON.stringify({ recipe }),
        })
    }
}