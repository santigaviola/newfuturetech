class Nft < ApplicationRecord
  belongs_to :user
  has_one_attached :photo
  validates :name, uniqueness: true
end
