class IngredientsAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000/ingredients';
    }
    getIngredients(){
        return fetch(this.baseurl).then(res => res.json()) ;
        // .then(text => console.log(text));
    }

    createIngredient(name_value, recipe_id) {
        const ingredient = {
            name: name_value,
            recipeID: recipe_id
        // parses the info from form then submits it
        };
 
        return fetch(this.baseurl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ingredient }),
            // shows the submited data from above to the page
        }).then(res => res.json());
    }

}