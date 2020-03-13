class IngrediantsController < ApplicationController
    def index
        @ingrediants = Ingrediant.all
        render json: @ingrediants
    end
    
    def def show
        @ingrediant = Ingrediant.find(params[:id])
        render json: @ingrediant
    end
    
    def create
        @ingrediant = Ingrediant.new(ingrediants_params)
        if @ingrediant.save
            render json: @ingrediant
        else
            flash[:error] = "Something went wrong"
            render 'new'
        end

    end

    def update
        @ingrediant = Ingrediant.find(params[:id])
        if @ingrediant.update_attributes(ingrediants_params)
            render json: @ingrediants
        else
            flash[:error] = "Something went wrong"
            render 'edit'
        end
    end
    
    def destroy
        @ingrediant = Ingrediant.find(params[:id])
        if @ingrediant.destroy
            render json: {ingrediantId: @ingrediant.id}
        else
            render json: @ingrediant
        end
    end
    
    private
    def ingrediants_params
        params.require(:ingrediants).permit(:name, :recipe_id)
    end

end
