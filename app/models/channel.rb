class Channel < ApplicationRecord

  has_many :subscriptions, as: :subscribeable

  has_many :subscribed_users,
    through: :subscriptions,
    source: :user

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: 'User'

end
