class DirectMessage < ApplicationRecord

  has_many :subscriptions, as: :subscribeable

  has_many :messages, as: :messageable

  has_many :subscribed_users,
  through: :subscriptions,
  source: :user
  
end
