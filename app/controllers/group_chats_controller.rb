get '/groupchats/new'  do
  if current_user
    @users = User.all
	  erb :'/groupchats/new'
  else
    redirect '/sessions/new'
  end
end

post '/groupchats/new' do
  @user = User.find(session[:user_id])
  @groupchat = Groupchat.new(params[:groupchat])
  @member = User.where(params[:user])
  if @groupchat.save
    @user.groupchats << @groupchat
    redirect "/users/#{@user.id}"
  else
    @error = "Sorry, you entered in some wrong information - please try again."
    erb :'/groupchats/new'
  end
end

# get '/groupchats/:id' do
#   if current_user
#     @groupchat = Groupchat.find(params[:id])
#     erb :'/groupchats/show'
#   else
#     redirect '/sessions/new'
#   end
# end


# Not in use currently
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

get '/groupchats/test' do
  erb :'groupchats/map'
end
