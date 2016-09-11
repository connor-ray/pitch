get '/groupchats/new'  do 
	erb :'/groupchats/new'
end

post '/groupchats/new' do
  @user = User.find(session[:user_id]) 
  @groupchat = Groupchat.new(params)
  if @groupchat.save
    @user.groupchats << @groupchat
    redirect "/users/#{@user.id}"
  else
    @error = "Sorry, you entered in some wrong information - please try again."
    erb :'/groupchats/new'
  end
end

get '/groupchats/:id' do
	@groupchat = Groupchat.find(params[:id])
    erb :'/groupchats/show'
end


delete '/groupchats/:id' do
  @groupchat = Groupchat.find(params[:id]) 

  @groupchat.destroy 
  redirect '/'

end



put '/groupchats/:id' do

  @groupchat = Groupchat.find(params[:id]) 
  @groupchat.assignattributes(params[:groupchat])

  if @groupchat.save
    redirect '/groupchats' 
  else
  	@error = "Sorry, there was a problem - please try again."
    erb :'groupchats/edit' 
  end

end

