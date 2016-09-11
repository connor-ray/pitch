get '/proposals' do
  @proposals = Proposal.all
  erb :'proposals/index'
end

get '/proposals/new' do
  erb :'proposals/new'
end 

post '/proposals' do
  @proposal = Proposal.new(params[:proposal])
  if @proposal.save
    redirect '/proposals'
  else
    erb :'proposals/new'
  end
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
