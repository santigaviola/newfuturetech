class TransactionsController < ApplicationController
  before_action :set_transaction, only: :show
  def index
    @transactions = policy_scope(Transaction).order(created_at: :desc)
  end

  def show
    @transactions = policy_scope(Transaction).order(created_at: :desc)
  end

  def create
    @transaction = Transaction.new
    authorize @transaction
    @nft = Nft.find(params[:nft_id])
    @transaction.nft = @nft
    @transaction.user = current_user
    if @transaction.user.tokens >= @nft.price
      @transaction.user.tokens -= @nft.price
      @nft.user.tokens += @nft.price
      @nft.user.save
      @nft.user = @transaction.user
      @nft.save
      @transaction.save
      @transaction.user.save
      redirect_to nft_path(@nft)
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
