class IngrediantsAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000/ingrediants';
    }
    getIngrediants(){
        return fetch(this.baseurl).then(res => res.json()) ;
        // .then(text => console.log(text));
    }

    createIngrediant(name_value) {
        const ingrediant = {
            name: name_value
            // parses the info from form then submits it
        };
 
        return fetch(this.baseurl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ingrediant }),
            // shows the submited data from above to the page
        }).then(res => res.json());
    }

}