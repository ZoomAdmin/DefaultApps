require 'sinatra'
require 'rubygems'

set :port, 80
set :bind, '0.0.0.0'

get '/' do
    erb :'index.html'
end