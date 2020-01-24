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
        @ingrediant = Ingrediant.new(params[:ingrediants])
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
            flash[:success] = 'ingrediants was successfully deleted.'
            render json: {ingrediantId: @ingrediant.id}
        else
            flash[:error] = 'Something went wrong'
            render json: @ingrediant
        end
    end
    
    private
    def ingrediants_params
        params.require(:ingrediants).permit(:name)
    end

end
