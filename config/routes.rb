Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: %i[show index]
  resources :nfts do
    resources :transactions, only: %i[new create]
  end
  resources :transactions, only: %i[show index]
end
