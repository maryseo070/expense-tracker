class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render template: 'api/users/show'
    else
      render json: ["Invalid credentials"], status: 403
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
    else
      render json: ["Not signed in"], status: 404
    end
  end
end
