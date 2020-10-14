Rails.application.routes.draw do
  root 'chat#index'
  devise_for :users
  get 'home/index' => 'home#index'
  resources :chat
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
