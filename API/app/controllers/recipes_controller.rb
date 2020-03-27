class RecipesController < ApplicationController
    
    def index
        @recipes = Recipe.all
        render json: @recipes
    end
    
    def def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe
    end
    
    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            render json: @recipe
        else
            flash[:error] = "Something went wrong"
        end

    end

    def update
        # byebug
        @recipe = Recipe.find(params[:id])
        if @recipe.update_attributes(recipe_params)
            render json: @recipe
        else
            flash[:error] = "Something went wrong"
            render 'edit'
        end
    end
    
    def destroy
        # byebug
        @recipe = Recipe.find(params[:id])
        if @recipe.destroy
            render json: @recipe
        else
            render json: @recipe
        end
    end
    
    private
    def recipe_params
        params.require(:recipe).permit(:name, :body)
    end
end
