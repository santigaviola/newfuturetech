class NftsController < ApplicationController
  before_action :set_nft, only:[:show, :update, :edit, :destroy]
  
    def index
      @nfts = Nft.all
    end
  
    def show
    end

    def new
      @nft = Nft.new
    end
  
    def create
      @nft = Nft.new(nft_params)
      @nft.user = current_user
      if @nft.save
        redirect_to nft_path(@nft)
      else
        render "new"
      end
    end
  
    def update
      @nft.update(nft_params)
      redirect_to nft_path(@nft)
    end
  
    def edit
    end
  
    def destroy
      @nft.destroy
      redirect_to nft_path(@nft)
    end

    private
    
    def set_nft
      @nft = nft.find(params[:id])
    end

    def nft_params
      params.require(:nft).permit(:name, :description, :image_url, :published, :price)
    end
end
