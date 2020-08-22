class ChangeColumnValues < ActiveRecord::Migration[6.0]
  def change
    change_table :phones do |t|
      t.change :aal, :boolean
    end
  end
end
