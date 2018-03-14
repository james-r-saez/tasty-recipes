class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :instructions
      t.string :time_required
      t.string :image_url

      t.timestamps
    end
  end
end
