class GroupChat < ActiveRecord::Base
  # Remember to create a migration!
  has_many :users_groups
  has_many :users, through: :users_groups
  has_many :pitches

end
