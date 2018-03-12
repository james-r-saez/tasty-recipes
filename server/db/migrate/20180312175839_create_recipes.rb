class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :instructions
      t.integer :time_required

      t.timestamps
    end
  end
end
