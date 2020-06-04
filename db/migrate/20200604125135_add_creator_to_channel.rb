class AddCreatorToChannel < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :creator_id, :integer
    add_index :channels, :creator_id
  end
end
