module Api
  module V1
    class PlansController < ApplicationController
      def index
        @plans = Plan.order('created_at DESC');
        render json: {status: 'SUCCESS', message: 'Loaded Plans', data: @plans}, status: :ok
      end
      def show
        @plan = Plan.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded plan', data: @plan}, status: :ok
      end
    end
  end
end
