module Votable
  def upvote
    Vote.create(user_id: current_user.id, votable:self)
  end

  # def downvote
  #   Vote.create(user_id: current_user.id, votable:self, upvoted?:false)
  # end

  def count_votes
    self.votes.count
  end

  # def rating
  #   count_up_votes - count_down_votes
  # end

  # def count_up_votes
  #   all_votes = self.votes
  #   upvotes = all_votes.select do |vote|
  #     vote.upvoted? == true
  #   end
  #   upvotes.count
  # end

  # def count_down_votes
  #   all_votes = self.votes
  #   upvotes = all_votes.select do |vote|
  #     vote.upvoted? == false
  #   end
  #   upvotes.count
  # end

  def already_voted?(user)
    # Disable votes (return true) if no user logged in
    return true if !user
    # Return true if user has already voted
    if Vote.find_by(user_id: user.id, votable: self)
      return true
    end
    false
  end

end
