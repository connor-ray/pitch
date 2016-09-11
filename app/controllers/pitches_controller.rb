get '/pitches/new'  do
	erb :'/pitches/new'
end

# no route for displaying all pitches -
# it's a feature
# of the chat function

get '/pitches/:id' do
  @pitch = Pitch.find(params[:id])
  @proposals = Proposal.where(pitch_id: @pitch.id)
    erb :'/pitches/show'
end

get '/pitches/new' do
  erb :'pitches/new'
end

post '/pitches/new' do
  @pitch = Pitch.new(params)
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

