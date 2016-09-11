get '/mapurl'do 
  url = params[:url]
  url.to_s
end 

get '?/map_url/?' do
  url = params[:url]
  url.to_s
end
