class Subscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null:false
      t.references :subscribeable, polymorphic: true
      t.timestamps
    end


    add_index :subscriptions, :user_id
  end
end
