class UsersController < ApplicationController
  layout 'admin'

  before_action :authenticate_user!
  before_action :do_authorize

  def index
    @users = User.all
  end

  def show
  end

private

  def do_authorize
    authorize Song, :any_access?
  end
end
