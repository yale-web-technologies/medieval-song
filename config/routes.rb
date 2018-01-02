Rails.application.routes.draw do
  resources :manuscripts, path: '/data/manuscripts'
  resources :song_instances, path: '/data/song_instances'
  resources :songs, path: '/data/songs'
  resources :authors, path: '/data/authors'
  resources :performances, path: '/data/performances'
  resources :annotations, path: '/data/annotations'
  resources :external_song_texts, path: '/data/external_song_texts'
  resources :external_witnesses, path: '/data/external_witnesses'

  get '/annotations/:id', to: 'public/annotations#show'
  get '/manuscripts/:id', to: 'public/manuscripts#show'
  get '/song_instances/:id', to: 'public/song_instances#show'
  get '/songs/:id', to: 'public/songs#show'
  get '/search', to: 'public/search#index'
  post '/search', to: 'public/search#search'
  get '/browse', to: 'public/browse#index'
  get '/about/project', to: 'public/about#project'
  get '/about/mirador', to: 'public/about#mirador'
  get '/about/iiif', to: 'public/about#iiif'
  get '/login', to: 'application#login'
  get '/admin', to: 'admin#index'

  root to: 'public/home#index'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  resources :users, only: [:index, :show, :edit, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
