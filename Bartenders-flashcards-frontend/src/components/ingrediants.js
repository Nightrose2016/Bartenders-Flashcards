class Ingrediants{
    constructor(){
        this.Ingrediants = [];
        this.adapter = new IngrediantsAdapter() ;
        this.initBindingsAndEventListeners();
        this.fetchAndLoadIngrediants();
    }

    initBindingsAndEventListeners() {
        this.recipesContainer = document.getElementById('recipes-container');
        this.newIngrediantName = document.getElementById('first-ingrediant-name');
        this.newIngrediantName = document.getElementById('second-ingrediant-name');
        this.newIngrediantName = document.getElementById('third-ingrediant-name');
        this.newIngrediantName = document.getElementById('fourth-ingrediant-name');
        this.newIngrediantName = document.getElementById('garnish-ingrediant-name');
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
    createingrediant(e) {
        e.preventDefault();
        
        const name_value = this.newIngrediantName.value ;
        
        this.adapter.createingrediant(name_value).then(Ingrediant => {
            this.ingrediant.push(new Ingrediant(ingrediant));
            this.newingrediantName.value = '' ;
            this.render() ;
        }) ;
        console.log('ingrediants are being shaken not shtired');
    }

    render(){
        const ingrediantsContainer = document.getElementById('ingrediants-container');
        ingrediantsContainer.innerHTML = 'ingrediants here';
    }
}