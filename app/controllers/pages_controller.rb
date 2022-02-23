class PagesController < ApplicationController
  def home
    @users = User.all
    @nfts = policy_scope(Nft).order(created_at: :desc)
  end
end
