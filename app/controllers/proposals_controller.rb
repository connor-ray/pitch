get '/proposals/new' do
  @pitch = Pitch.find(params[:pitch_id])
  @groupchat_id = @pitch.groupchat_id
  erb :'proposals/new'
end 

post '/proposals' do
  @proposal = Proposal.new(params[:proposal])
  # p "#" * 20
  # p params[:proposal]
  if @proposal.save
    # p @proposal
    redirect "/pitches/#{@proposal.pitch_id}"
  else
    erb :'proposals/new'
  end
end 

get '/proposals/:id' do
  p params
  @proposal = Proposal.find_by_id(params[:id])
    erb :'/pitches/show'
end

get '/proposals/:id/edit' do
  @proposal = Proposal.find(params[:id])
  erb :'proposals/edit'
end

put '/proposals/:id' do
  @proposal = Proposal.find(params[:id])
  @proposal.assign_attributes(params[:proposal])
  if @proposal.save
    redirect '/proposals'
  else
    erb :'proposals/edit'
  end
end

delete '/proposals/:id' do
  @proposal = Proposal.find(params[:id])
  @proposal.destroy
  redirect '/proposals'
end
