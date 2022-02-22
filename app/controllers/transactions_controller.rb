class TransactionsController < ApplicationController

  before_action :set_transaction, only:[:show, :update, :edit, :destroy]

  def index
    @transactions = Transaction.all
  end

  def show
  end

  def new
    @transaction = transaction.new
  end

  def create
    @transaction = transaction.new(transaction_params)
    @transaction.user = current_user
    @nft = nft.find(params[:id])
    if user.money > nft.price

    if @transaction.save
      redirect_to transaction_path(@transaction)
    else
      render "new"
    end
  end

  private

  def set_transaction
    @transaction = transaction.find(params[:id])
  end

  def transaction_params
    params.require(:transaction).permit(:user, :nft)
  end

end
