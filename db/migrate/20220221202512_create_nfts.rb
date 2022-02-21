class CreateNfts < ActiveRecord::Migration[6.1]
  def change
    create_table :nfts do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.boolean :published, null: false
      t.integer :price, null: false
      t.integer :likes, default: 0
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
