class ChangeMoreColumnValues < ActiveRecord::Migration[6.0]
  def change
    change_table :phones do |t|
      t.change :aal, :integer, default: false
      t.change :trade_in, :integer, default: false
      t.change :bogo, :integer, default: false
    end
  end
end
