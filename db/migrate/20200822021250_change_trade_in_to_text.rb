class ChangeTradeInToText < ActiveRecord::Migration[6.0]
   def change
    change_table :phones do |t|
      t.change :trade_in, :text, default: nil
    end
  end
end
