class Phone
  attr_reader :image
  def initialize(attributes = {})
    @price = attributes[:price]
    @name = attributes[:name]
    @down = attributes[:down] || 0
    @trade_in = attributes[:trade_in] || false
    @bogo = attributes[:bogo] || false
    @aal = attributes[:aal] || false
    @image = attributes[:image] || nil
  end

  def eip
    (@price + 0.09) / 24
  end

end



iphone11 = Phone.new(name: 'iPhone 11', price: 699.99, bogo: true,
 image: "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/OnePlus/OnePlus-8-5G/Interstellar-Glow/OnePlus-8-5G-Interstellar-Glow-frontimage.png")

puts iphone11.image
