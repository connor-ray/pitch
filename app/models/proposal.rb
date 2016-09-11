require_relative 'votable_module'

class Proposal < ActiveRecord::Base
  # Remember to create a migration!
  include Votable

  has_many :votes
  belongs_to :pitch
end
