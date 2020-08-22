class AddFloats < ActiveRecord::Migration[6.0]
  def change
    change_table :phones do |t|
      t.change :aal, :float, default: false
      t.change :deposit, :float, default: false
      t.change :bogo, :float, default: false
      t.change :price, :float, default: 0
    end
  end
end
