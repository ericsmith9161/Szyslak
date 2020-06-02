class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :what_i_do, :string
    add_column :users, :display_name, :string
  end
end
