class Ingrediants{
    constructor(){
        this.Ingrediants = [];
        this.adapter = new IngrediantsAdapter() ;
        this.bindEventListeners();
        this.fetchAndLoadIngrediants();
    }
    fetchAndLoadIngrediants(){
        this.adapter
        .getIngrediants()
        .then(Ingrediants => {
           return console.log(Ingrediants);
            })
            .then(() =>{
                this.render();
            });
    }

    render(){
        const drinksContainer = document.getElementById('drinks-container');
        drinksContainer.innerHTML = 'Drinks here';
    }
}