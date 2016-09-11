# These are the controllers for the votes 
# Voting on a proposal 
post '/proposals/:id/votes' do
 @proposal = Proposal.find(params[:id])
 upvote = (params[:upVote] == "true")
 # p [upvote, params[:upVote]]
 @vote = Vote.new(user_id: current_user.id, upvoted?: upvote)
 # @vote.user_id = current_user.id
  if @vote.save
    @proposal.votes << @vote
    if request.xhr?
      p @proposal.rating.to_s
    else
     redirect "/proposals/#{@proposal.id}"
    end
  else
    @errors = @vote.errors.full_messages
    # erb :"proposal/#{@question.id}"
    erb :"chat/chat_layout"
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
