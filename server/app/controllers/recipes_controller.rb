class RecipesController < ApplicationController
  def index
		recipes = Recipe.all
		render json: recipes
	end

	def show
		recipe = Recipe.find(params[:id])
		render json: recipe
	end

	def create
		recipe = Recipe.create!(recipe_params)
		render json: recipe
	end

	def update
		recipe = Recipe.find(params[:id])
		recipe.update!(recipe_params)
		render json: recipe
	end

	def destroy
		recipe = Recipe.find(params[:id])
		recipe.destroy!
		render plain: "Recipe deleted!"
	end

	private

	def recipe_params
		params.require(:recipe).permit(:name, :instructions, :time_required)
	end

end
