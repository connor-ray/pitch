class Pitch < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :group_chat
  has_many :proposals

end
