get '/group_chats/new'  do 
	erb :'/group_chats/new'
end

post '/group_chats/new' do
  @group_chat = Group_Chat.new(params)
  if @group_chat.save
    redirect "/group_chat/#{@group_chat.id}"
  else
    @error = "Sorry, you entered in some wrong information - please try again."
    erb :'/group_chats/new'
  end
end

get '/group_chats/:id' do
	@group_chat = Group_Chat.find(params[:id])
    erb :'/group_chats/show'
end


delete '/group_chats/:id' do
  @group_chat = Group_Chat.find(params[:id]) 

  @group_chat.destroy 
  redirect '/'

end



put '/group_chats/:id' do

  @group_chat = Group_Chat.find(params[:id]) 
  @group_chat.assign_attributes(params[:group_chat])

  if @group_chat.save
    redirect '/group_chats' 
  else
  	@error = "Sorry, there was a problem - please try again."
    erb :'group_chats/edit' 
  end

end

