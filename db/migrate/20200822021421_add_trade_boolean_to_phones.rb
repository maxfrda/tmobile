class AddTradeBooleanToPhones < ActiveRecord::Migration[6.0]
  def change
    add_column :phones, :trade_in?, :boolean, default: false
  end
end
