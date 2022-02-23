class TransactionsController < ApplicationController
  before_action :set_transaction, only: %i[show]
  def index
    @transactions = Transaction.all
  end

  def show
  end

  def new
    @transaction = Transaction.new
  end

  def create
    @transaction = Transaction.new(transaction_params)
    @transaction.user = current_user
    if @transaction.save
      redirect_to transactions_path
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
