class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body
      t.integer :user_id
      t.references :messageable, polymorphic: true

      t.timestamps
    end
    add_index :messages, :user_id
  end
end
