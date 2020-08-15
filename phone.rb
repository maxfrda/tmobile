class Phone
  def initialize(attributes = {})
    @price = attributes[:price]
    @name = attributes[:name]
    @trade_in = false
    @bogo = false
  end

  def bogo
    @bogo = true
  end

  def trade_in(value)
    @trade_in = value
  end

end

