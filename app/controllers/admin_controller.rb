class AdminController < ApplicationController
  layout 'admin'

  before_action :authenticate_user!
  before_action :do_authorize

private

  def do_authorize
    authorize Song, :any_access?
  end
end
