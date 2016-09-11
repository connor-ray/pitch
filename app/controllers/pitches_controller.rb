# no route for displaying all pitches -
# it's a feature
# of the chat function

get '/pitches/:id' do
  @pitch = Pitch.find(params[:id])
  @proposals = Proposal.where(pitch_id: @pitch.id)
    erb :'pitches/show'
    # shows all proposals of a given pitch
end

get '/pitches/new' do
  @groupchat_id = Groupchat.find_by_id(params[:groupchat_id])
  erb :'pitches/new'
end

post '/pitches/new' do
  @pitch = Pitch.new(params[:pitch])
  if @pitch.save
    # redirect to chat screen
  else
    @error = "Sorry, you entered in some wrong information - please try again."

    erb :'/pitches/new'
  end
end

delete '/pitches/:id' do
  @pitch = Pitch.find(params[:id])

  @pitch.destroy
  # GET GROUP_CHAT ID
  redirect '/group_chats/#{@group_chat.id}'

end

put '/pitches/:id' do
  @pitch = Pitch.find(params[:id])
  @pitch.assign_attributes(params[:pitch])
  if @pitch.save
    # redirect to chat screen
  else
  	@error = "Sorry, there was a problem - please try again."
    erb :'pitches/edit'
  end

end

