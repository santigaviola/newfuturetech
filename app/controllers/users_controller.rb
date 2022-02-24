class UsersController < ApplicationController

  def index
  @user = current_user
  if params[:query].present?
      sql_query = "username ILIKE :query OR email ILIKE :query"
      @users = policy_scope(User).where(sql_query, query: "%#{params[:query]}%")
    else
      @users = policy_scope(User).order(created_at: :desc)
    end
  end


  def show
    @us = current_user
    @user = User.find(params[:id])
    authorize @user
  end

end
