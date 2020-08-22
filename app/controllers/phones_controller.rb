class PhonesController < ApplicationController

  def create
    @phone = Phone.new(phone_params)
  end

  private

  def phone_params
    params.require(:phone).permit(:brand, :name, :price, :image, :aal, :deposit,
      :bogo, :trade_in)
  end

end
