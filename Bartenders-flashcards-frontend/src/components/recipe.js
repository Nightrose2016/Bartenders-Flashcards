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
                <h3 data-name=${this.name}>${this.name}</h3>
                    <div class="drink-ingredients" data-id=${this.id}> ${this.ingredients().map(ingredient => ingredient.renderLI()).join('')}</div>
                <p class="drink-instruction">${this.body}</p>
                </div>` ;
    }

    renderEDIT() {
        return `Edit drink
            <form class="edit-recipe-form">
            Drink Name:<input type="text" name="recipe-name" id="edit-recipe-name">

            <label for="glass">choose a glass:</label>
            <select id="glass" >
                <option value="Highball Glass">Highball Glass</option>
                <option value="Lowball Glass">Lowball Glass</option>
                <option value="Irish Coffee Glass">Irish Coffee Glass</option>
                <option value="Cocktail Class">Cocktail Glass</option>
                <option value="Flute Glass">Flute Glass</option>
                <option value="Snifter Glass">Sifter Glass</option>
                <option value=" Hurricane Glass"> Hurricane Glass</option>
                <option value="Martini Glass">Martini Glass</option>
                <option value="Margarita Glass">Margarita Glass</option>
                <option value="The Glencairn Whisky Glass">Glencairn Whisky Glass</option>
                <option value="Red Wine Glass">Red Wine Glass</option>
                <option value="White Wine Glass">White Wine Glass</option>
                <option value="Weizen Glass">Weizen/Wheat Beer Glass</option>
                <option value="Tulip glass">Tulip glass</option>
                <option value="Goblet/Chalice Glass">Goblet/Chalice Glass</option>
                <option value="Pint Glass">Pint Glass</option>
                <option value="Tumbler Glass">Tumbler Glass</option>
            </select><br>
            <input type="text" placeholder="ingredient and measurment" id="first-ingredient" class="new-ingredient">
            <input type="text" placeholder="ingredient and measurment" id="second-ingredient" class="new-ingredient">
            <input type="text" placeholder="ingredient and measurment" id="third-ingredient" class="new-ingredient">
            <input type="text" placeholder="ingredient and measurment" id="fourth-ingredient"class="new-ingredient">
            <input type="text" placeholder="ingredient and measurment" id="fifth-ingredient" class="new-ingredient"></input>
            <input type="hidden" name="recipeID" id="recipeID">
            Recipe Body:<input type="text" name="recipe-body" placeholder="Instructions" id="edit-recipe-body"><br>
            <input type="submit" value="edit recipe" id="submit-update">
            </form>`
    }
}
