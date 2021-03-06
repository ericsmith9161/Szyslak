class Api::SessionsController < ApplicationController

      def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user && login!(@user)
          redirect_to api_user_url(@user)
        else
            render json: ["⚠️ Sorry, you entered an incorrect email address or password"], status: 422
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
           render json: ["No user currently logged in"], status: 404
        end
        
    end

end
