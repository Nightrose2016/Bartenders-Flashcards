class Recipe {
    constructor(recipeJSON) {
        this.id = recipeJSON.id ;
        this.name = recipeJSON.name ;
        this.body = recipeJSON.body ;
    }

    renderLI() {
        console.log("recipes are being rendered") ;
        return `<div data-id=${this.id}>
              
                <h3 data-name=${this.name}>${this.name}</h3>

                    <div class="drink-ingredients" data-id=${this.id}> </div>

                <p class="drink-instruction">${this.body}</p>
        </div>` ;
        }
}
