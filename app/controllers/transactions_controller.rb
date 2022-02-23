class TransactionsController < ApplicationController
  before_action :set_transaction, only: :show
  def index
    @transactions = Transaction.all
  end

  def show
  end

  def new
    @nft = Nft.find(params[:nft_id])
    @transaction = Transaction.new
  end

  def create
    @transaction = Transaction.new(transaction_params)
    @nft = Nft.find(params[:nft_id])
    @transaction.nft = @nft
    @transaction.user = current_user
    @user = @transaction.user
    if @user.money >= @nft.price
      @user.money -= @nft.price
      if @transaction.save
        redirect_to transactions_path(@nft)
      else
        render "new"
      end
    else
      render "new"
    end
  end

  private

  def set_transaction
    @transaction = Transaction.find(params[:id])
  end

  def nft_params
    params.require(:transaction).permit(:user, :nft)
  end
end
