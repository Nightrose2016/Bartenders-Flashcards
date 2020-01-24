class IngrediantsAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000/ingrediants';
    }
    getIngrediants(){
        return fetch(this.baseurl)
        .then(res => res.text())
        .then(text => console.log(text));
    }
}