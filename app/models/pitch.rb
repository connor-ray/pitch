class Pitch < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :groupchat
  has_many :proposals

end