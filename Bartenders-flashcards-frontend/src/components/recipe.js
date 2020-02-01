class Recipe {
    constructor(recipeJSON) {
        this.id = recipeJSON.id ;
        this.name = recipeJSON.name ;
        this.body = recipeJSON.body ;
    }

    renderLI() {
        return `<div data-id=${this.id}>
            <h4>${this.name}</h4>
            <p>${this.body}</p></div>` ;
        }
}
