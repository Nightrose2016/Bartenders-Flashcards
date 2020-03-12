class Ingrediants{
    constructor(){
        this.Ingrediants = [];
        this.adapter = new IngrediantsAdapter() ;
        this.initBindingsAndEventListeners();
        this.fetchAndLoadIngrediants();
    }

    initBindingsAndEventListeners() {
        this.ingrediantsContainer = document.getElementsByClassName('drink-ingrediants');
        this.newIngrediantName = document.getElementById('first-ingrediant-name');
        this.newIngrediantName = document.getElementById('second-ingrediant-name');
        this.newIngrediantName = document.getElementById('third-ingrediant-name');
        this.newIngrediantName = document.getElementById('fourth-ingrediant-name');
        this.newIngrediantName = document.getElementById('garnish-ingrediant-name');
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
    
    fetchAndLoadIngrediants(){
        this.adapter.getIngrediants()
        .then(Ingrediants => {
           return console.log(Ingrediants);
            })
        .then(() =>{
            this.render();
        });
    }

    render(){
        this.ingrediantsContainer.innerHTML = this.ingrediants.map(ingrediant => ingrediant.renderLI()).join('');
        debugger
    }
}