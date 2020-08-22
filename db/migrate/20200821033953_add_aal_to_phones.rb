class AddAalToPhones < ActiveRecord::Migration[6.0]
  def change
    add_column :phones, :aal, :integer, default: false
  end
end
