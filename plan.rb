class Plan
  attr_writer :autopay
  def initialize(attributes = {})
    @name = attributes([:name])
    @autopay = false
  end
end

