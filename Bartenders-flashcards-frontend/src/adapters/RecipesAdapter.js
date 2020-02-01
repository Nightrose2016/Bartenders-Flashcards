class RecipesAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000/recipes';
    }
    getRecipes(){
        return fetch(this.baseurl).then(res => res.json());
    }

    createRecipe(name_value, body_value) {
        const recipe = {
            name: name_value ,
            body: body_value ,
        };
 
        return fetch(this.baseurl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ recipe }),
        }).then(res => res.json());
    }

    updateRecipe(name_value, body_value, id) {
        const recipe = {
            name: name_value,
            body: body_value,
        } ;
    
    
        return fetch(`${this.baseurl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ recipe }),
        }).then(res => res.json()) ;
    }
}