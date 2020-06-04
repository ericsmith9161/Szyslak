class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :email, :session_token, :username, uniqueness: true

  attr_reader :password 
  after_initialize :ensure_session_token

  has_many :subscriptions,
    foreign_key: :user_id,
    class_name: Subscription 

  has_many :subscribed_channels,
    through: :subscriptions,
    source: :subscribeable

  has_many :created_channels,
    foreign_key: :creator_id,
    class_name: Channel
    

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    if @user && @user.is_password?(password)
      return @user
    end

    return nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
end
