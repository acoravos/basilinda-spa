Rails.application.routes.draw do

  get 'single_page_app/show'

  ACCEPTS_JSON = lambda { |request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resource :users
  end


  get '/login', to: "session#login"
  post '/login', to: "session#create"
  get '/logout', to: "session#destroy"

  get '/signup', to: "users#new"
  post '/signup', to: "users#create"

  get '/getstarted', to: "session#login"

  get '/dashboard', to: "users#show"

  post '/generate', to: "challenges#create"

  get '/challenges/:id/accept', to: "challenges#accept", as: "accept"
  patch '/challenges/:id', to: "challenges#update", as: "update"


  get '/challenges/:id/reject', to: "challenges#reject", as: "reject"
  get '/unlock/:id', to: "challenges#unlock", as: "unlock"


  get '*path', to: "single_page_app#show"
  root "single_page_app#show"

end
