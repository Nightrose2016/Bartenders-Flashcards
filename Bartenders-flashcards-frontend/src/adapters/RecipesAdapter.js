class RecipesAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000/recipes';
    }
    getRecipes(){
        return fetch(this.baseurl).then(res => res.text());
    }

    createRecipe(name_value, body_value) {
        const recipe = {
            name: name_value ,
            body: body_value ,
        };
 
    return fetch(`${this.baseUrl}/${id}`, {
        method: 'PATCH',
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
    
        return fetch(`${this.baseUrl}/${id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ note }),
        }).then(res => res.json()) ;
    }
}