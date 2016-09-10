class UsersGroup < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :user
  belongs_to :group_chat
end
