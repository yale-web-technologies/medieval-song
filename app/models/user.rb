class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable,
         omniauth_providers: [:cas, :google_oauth2]

  def self.from_omniauth(auth)
    if ENV['SUPERUSERS']
      superusers = ENV['SUPERUSERS'].split(',')
    else
      superusers = []
    end
    puts "User.from_omniauth auth: #{auth.inspect}, superusers: #{superusers.inspect}"

    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      puts "User.from_omniauth provider: #{auth.provider}, uid: #{auth.uid}, user: #{user.inspect}"
      if auth.provider == :cas
        user.email = "#{auth.uid}@yale.edu"
      else
        user.email = auth.info.email
      end
      user.password = Devise.friendly_token[0,20]
      puts "baba 0"
      user.role = 'default' unless user.role?  # set default role
      puts "baba 1"
      user.role = 'admin' if superusers.include?(user.email)
      puts "baba 2"
      puts "user: #{user}"
    end
  end
end
