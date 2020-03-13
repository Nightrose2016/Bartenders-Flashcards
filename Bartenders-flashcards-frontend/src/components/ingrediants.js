class Ingrediants{
    constructor(){
        this.Ingrediants = [];
        this.adapter = new IngrediantsAdapter() ;
        this.initBindingsAndEventListeners();
        this.fetchAndLoadIngrediants();
    }

    initBindingsAndEventListeners() {
        this.body = document.querySelector('body');
        this.recipesContainer = document.getElementById('recipes-container');
        this.recipeForm = document.getElementById('new-recipe-form');
        this.newIngrediantName = document.getElementById('first-ingrediant-name');
        this.newIngrediantName = document.getElementById('second-ingrediant-name');
        this.newIngrediantName = document.getElementById('third-ingrediant-name');
        this.newIngrediantName = document.getElementById('fourth-ingrediant-name');
        this.newIngrediantName = document.getElementById('garnish-ingrediant-name');
        this.recipeForm.addEventListener('submit', this.createIngrediant.bind(this));
        this.ingrediantsClass = document.getElementsByClassName('drink-ingrediants');
    }

    createIngrediant(e) {
        e.preventDefault();
        
        const name_value = this.newIngrediantName.value ;
        
        this.adapter.createIngrediant(name_value).then(Ingrediant => {
            this.ingrediant.push(new Ingrediant(ingrediant));
            this.newIngrediantName.value = '' ;
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
        this.ingrediantsClass.innerHTML = this.ingrediants.map(ingrediant => ingrediant.renderLI()).join('');
    }
}

// fix in·gre·di·ent dummy.  fix later