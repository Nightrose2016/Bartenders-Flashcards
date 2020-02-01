class Recipe {
    constructor(recipeJSON) {
        this.id = recipeJSON.id ;
        this.name = recipeJSON.name ;
        this.body = recipeJSON.body ;
    }

    renderLI() {
        return `<li data-id=${this.id}>${this.name}</li>` ;
      }
}
