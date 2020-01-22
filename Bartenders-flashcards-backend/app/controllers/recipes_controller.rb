class RecipesController < ApplicationController
    
    def index
        @recipes = Recipes.all
        render json: @recipes
    end
    
    def def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe
    end
    
    def create
        @recipe = Recipe.new(params[:recipe])
        if @recipe.save
            render json: @recipe
        else
            flash[:error] = "Something went wrong"
            render 'new'
        end

    end
    

    def update
        @recipe = Recipe.find(params[:id])
        if @recipe.update_attributes(recipe_params)
            render json: @recipe
        else
            flash[:error] = "Something went wrong"
            render 'edit'
        end
    end
    
    
    private
    def recipe_params
        params.require(:recipe).permit(:body)
    end
end
