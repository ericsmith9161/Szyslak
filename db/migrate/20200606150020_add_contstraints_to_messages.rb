class AddContstraintsToMessages < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :body, :text, null:false
    change_column :messages, :user_id, :integer, null:false
  end
end
