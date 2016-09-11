# These are the controllers for the votes 
# Voting on a proposal 
post '/proposals/:id/votes' do
  # @user = User.find(session[:user_id]) 
  @proposal = Proposal.find(params[:id])
  @vote = current_user.votes.new(proposal_id: @proposal.id)

  if @vote.save
    if request.xhr?
      @votes_count = Vote.where(proposal_id: @proposal.id).length
      content_type :json
      {post_id: params[:id], likes: @votes_count}.to_json
    else
      redirect "/pitches/#{@proposal.pitch_id}"
    end
  else
     @errors = "Something went wrong - please try again"
     erb :'pitches/show'
  end
end

# Vote on Answer
# post '/proposals/:id/answers/:answer_id/votes' do
#   @question = Question.find(params[:id])
#   @answer = Answer.find(params[:answer_id]) # answer_id is in URL
#   # Is it an upvote? is the upVote true?
#   upvote = (params[:upVote] == "true")
#   # p [upvote, params[:upVote]]

#   # Create new vote with user input
#   @vote = Vote.new(user_id: current_user.id, upvoted?: upvote)

#   # if vote saves
#   if @vote.save
#     p "*"*100
#     p @answer
#     p @answer.votes
#     @answer.votes << @vote # @answer.votes has a bunch of methods. .vote is from association
#     p @answer.votes
#     if request.xhr?
#       @answer.rating.to_s
#     else
#       redirect "/questions/#{@question.id}"
#     end
#   else
#   # if vote doesn't save
#     @errors = @vote.errors.full_messages
#     erb :"questions/#{@question.id}"
#   end
# end
