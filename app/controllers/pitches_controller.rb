get '/pitches/new'  do 
	erb :'/pitches/new'
end

post '/pitches/new' do
  @pitch = Pitch.new(params)
  if @pitch.save
    redirect "/pitch/#{@pitch.id}"
  else
    @error = "Sorry, you entered in some wrong information - please try again."

    erb :'/pitches/new'
  end
end

get '/pitches/:id' do
	@pitch = Pitch.find(params[:id])
    erb :'/pitches/show'
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
    redirect '/pitches' 
  else
  	@error = "Sorry, there was a problem - please try again."
    erb :'pitches/edit' 
  end

end

