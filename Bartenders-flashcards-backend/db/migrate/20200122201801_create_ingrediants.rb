class CreateIngrediants < ActiveRecord::Migration[6.0]
  def change
    create_table :ingrediants do |t|
      t.string :name
      t.timestamps
    end
  end
end
