class RecipesController < ApplicationController
    
    def index
        @recipes = Recipes.all
        render json: @recipes
    end
    
    def def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe
    end
    
end
