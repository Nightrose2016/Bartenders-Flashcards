class IngredientsController < ApplicationController
    def index
        @ingredients = Ingredient.all
        render json: @ingredients
    end
    
    def def show
        @ingredient = Ingredient.find(params[:id])
        render json: @ingredient
    end
    
    def create
        @ingredient = Ingredient.new(ingredients_params)
        if @ingredient.save
            render json: @ingredient
        else
            flash[:error] = "Something went wrong"
            render 'new'
        end

    end

    def update
        @ingredient = Ingredient.find(params[:id])
        if @ingredient.update_attributes(ingredients_params)
            render json: @ingredients
        else
            flash[:error] = "Something went wrong"
            render 'edit'
        end
    end
    
    def destroy
        @ingredient = Ingredient.find(params[:id])
        if @ingredient.destroy
            render json: {ingredientId: @ingredient.id}
        else
            render json: @ingredient
        end
    end
    
    private
    def ingredients_params
        params.require(:ingredients).permit(:name, :recipe_id)
    end

end
