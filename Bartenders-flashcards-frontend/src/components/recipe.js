class Recipe {
    constructor(recipeJSON) {
        this.id = recipeJSON.id ;
        this.name = recipeJSON.name ;
        this.body = recipeJSON.body ;
    }

    ingredients(){
        return app.ingredients.ingredients.filter(ingredient => ingredient.recipeID === this.id)
    }

    renderDIV() {
        console.log("recipes are being rendered") ;
        return `<div data-id=${this.id}>
                <h3 class='drinks' data-name=${this.name}>${this.name}</h3>
                    <div class="drink-ingredients" data-id=${this.id}> ${this.ingredients().map(ingredient => ingredient.renderLI()).join('')}</div>
                <p class="drink-instruction">${this.body}</p>
                <button class="delete-drink" data-id=${this.id}> delete ${this.name} </button>
                </div>`
    }
    renderrecipeselection() {
        console.log("recipes are being listed")
        return `<option value="${this.id}">${this.name}</option>`
    }
}