class ChangeDefaultChannelTopic < ActiveRecord::Migration[5.2]
  def change
    change_column_default :channels, :topic, from: "", to: "Set a channel topic"
  end
end
