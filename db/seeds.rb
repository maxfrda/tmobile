# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Phone.destroy_all
iphone11 = Phone.create(brand: 'Apple', name: 'iPhone11', trade_in?: true,
  bogo: 29.17, price: 699.99,
  image: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-SE/PRODUCT-RED/Apple-iPhone-SE-PRODUCT-RED-thumbnail.png')
