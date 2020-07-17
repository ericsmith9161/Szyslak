class Message < ApplicationRecord
  validates :body, :user_id, :messageable_id, :messageable_type, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    dependent: :destroy

  belongs_to :messageable, polymorphic: true
end
