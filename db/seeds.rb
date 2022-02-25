require 'faker'

User.destroy_all
Nft.destroy_all

crealo = User.new(email: "crealo@hotmail.com", password: "123456", username: "Crealo")
random_number = rand(1...1000)

3.times do
  nft = Nft.new(name: Faker::FunnyName.name, description: Faker::Lorem.paragraph, published: true, price: rand(1...1000))
  nft.photo.key = "http://source.unsplash.com/1600x900/?#{random_number}"
  nft.user = crealo
  nft.save
end

4.times do
  user = User.new(email: Faker::Internet.email, password: Faker::Internet.password, username: Faker::Internet.username)
  user.save
  3.times do
    nft = Nft.new(name: Faker::FunnyName.name, description: Faker::Lorem.paragraph, published: true, price: rand(1...1000))
    nft.photo.key = "http://source.unsplash.com/1600x900/?#{random_number}"
    nft.user = user
    nft.save
  end
end
