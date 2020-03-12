class RecipesAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000/recipes';
    }
    
    getRecipes(){
        return fetch(this.baseurl).then(res => res.json());
        // looks up the base URL
    }

    createRecipe(name_value, body_value) {
        const recipe = {
            name: name_value ,
            body: body_value ,
            // parses the info from form then submits it
        };
 
        return fetch(this.baseurl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ recipe }),
            // shows the submited data from above to the page
        }).then(res => res.json());

    }

    updateRecipe(newNameValue, newBodyValue, id) {
        const recipe = {
            name: newNameValue,
            body: newBodyValue,
            // parses new data for recipe being edited
        } ;
    
        return fetch(`${this.baseurl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ recipe }),
        }).then(res => res.json()) ;
        // shows edited data
    } 

    // deleteRecipe(id) {
    //     const recipe = {
    //         id: id
    //     } ;
            
    //     return fetch(`${this.baseurl}/${id}` , {
    //         method: 'DELETE'    
    //     }).then(res => res.json());
    // }
}
