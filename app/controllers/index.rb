get '/' do
	# redirect '/sessions/new'
  	erb :'groupchats/show'
end

get '/homepage' do
  erb :'homepage/index'
end
