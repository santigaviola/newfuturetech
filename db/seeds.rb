require 'faker'

User.destroy_all
Nft.destroy_all

crealo = User.new(email: "crealo@hotmail.com", password: "123456", username: "Crealo")
3.times do
      nft = Nft.new(name: Faker::FunnyName.name, description: Faker::Lorem.paragraph, image_url: "http://source.unsplash.com/1600x900/?nft",published: true, price: rand(1...1000))
      nft.user = crealo
      nft.save
end

  10.times do
    user = User.new(email: Faker::Internet.email, password: Faker::Internet.password, username: Faker::Internet.username)
    user.save
    3.times do
      nft = Nft.new(name: Faker::FunnyName.name, description: Faker::Lorem.paragraph, image_url: "http://source.unsplash.com/1600x900/?nft",published: true, price: rand(1...1000))
      nft.user = user
      nft.save
    end
  end


