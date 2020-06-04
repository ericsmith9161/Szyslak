class Subscription < ApplicationRecord
  validates :user_id, :subscribeable_id, :subscribeable_type, presence: true
  
  belongs_to :subscribeable, polymorphic: true 

  belongs_to :user,
    foreign_key: :user_id

  # channel creator added in as foreign key on channels?
  # both user and channel get subscribeable?

end
