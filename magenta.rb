require_relative 'plan'

class Magenta < Plan

  def get_prices(lines)
    if lines == 1
      @price = 75
    elsif lines == 2
      @price = 130
    elsif lines > 2
      extra = lines - 2
      product = extra * 25
      @price = product + 130
    else
      @price = 0
    end

    if @autopay
      @price = @price - (5 * lines)
    end
  end
end

plan1 = Magenta.new(name: 'Magenta')

puts plan1.get_prices(5)

plan1.autopay(true)

puts plan1.get_prices(5)
