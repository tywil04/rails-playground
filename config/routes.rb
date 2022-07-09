Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/turbo", to: "pages#turbo-frame-test"
  get "/", to: "pages#index"
end
