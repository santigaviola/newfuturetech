class RemoveImageUrlFromNfts < ActiveRecord::Migration[6.1]
  def change
    remove_column :nfts, :image_url, :string
  end
end
