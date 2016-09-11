class Vote < ActiveRecord::Base
  belongs_to :proposal
  belongs_to :user
  # Remember to create a migration!
end
