class Phone
  def initialize(attributes = {})
    @price = attributes[:price]
    @name = attributes[:name]
    @trade_in = attributes[:trade_in] || false
    @bogo = attributes[:bogo] || false
    @aal = attributes[:aal] || false
    @image = attributes[:image] || nil
  end

  def eip
    (@price + 0.09) / 24
  end

end



iphone11 = Phone.new(name: 'iPhone 11', price: 699.99, bogo: true)

puts iphone11.eip
