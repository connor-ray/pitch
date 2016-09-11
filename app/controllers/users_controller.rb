get '/users/new' do
  erb :'/users/new'
end

post '/users/new' do
  @user = User.new(params[:user])
  if @user.save
    login(@user)

    redirect "/users/#{@user.id}"
  else
    @error = "Sorry, you entered in some wrong information - please try again."

    erb :'/users/new'
  end
end

get '/users/:id' do
  if session[:user_id]
    @user = User.find(session[:user_id])
    @groupchats = Groupchat.joins(:users).where("users.id = ?", @user.id)
    p @groupchats
  end

  erb :'/users/show'
end


get '/users/delete' do
  User.find(session[:user_id]).destroy
  session[:user_id] = nil

  redirect '/'
end
