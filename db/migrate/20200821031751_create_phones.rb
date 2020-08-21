class CreatePhones < ActiveRecord::Migration[6.0]
  def change
    create_table :phones do |t|
      t.string :name
      t.string :brand
      t.integer :price
      t.integer :deposit, default: 0
      t.boolean :trade_in, default: false
      t.boolean :bogo, default: false
      t.string :image


      t.timestamps
    end
  end
end
