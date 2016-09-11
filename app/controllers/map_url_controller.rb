get '/mapurl'do 
  url = params[:url]
  url.to_s
end 

get '/testchat' do 
  erb :"partials/_message"
end 
