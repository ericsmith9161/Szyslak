Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  mount ActionCable.server, at: '/cable'


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update] do 
      resources :channels, only: [:index]
      resources :direct_messages, only: [:index]
    end
    resources :channels, only: [:index, :show, :update, :create, :destroy] do
      resources :users, only: [:index]
      resources :messages, only: [:index]
    end
    resource :session, only: [:new, :create, :destroy]  

    resources :messages, only: [:index, :show]

    resources :direct_messages, only: [:show, :create, :index] do 
      resources :messages, only: [:index]
    end
  end
  
end
