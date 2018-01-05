class UsersController < ApplicationController
  layout 'admin'

  before_action :authenticate_user!
  before_action :do_authorize

  def index
    @users = User.all
  end

  def show
    puts "UsersController#whow params: #{params.inspect}, id: #{params[:id]}"
    @user = User.find(params[:id])
  end

  def edit
    puts "UsersController#edit params: #{params.inspect}, id: #{params[:id]}"
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

private

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:uid, :email, :provider, :role)
  end

  def do_authorize
    authorize Song, :any_access?
  end
end
