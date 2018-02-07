class ApplicationController < ActionController::Base
  include Pundit
  protect_from_forgery with: :exception, prepend: true
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  before_action :check_admin

  def login
    authenticate_user!
    redirect_to root_path
  end

  # Devise: run after successful sign-in.
  def after_sign_in_path_for(resource)
    request.env['omniauth.origin'] || stored_location_for(resource) || root_path
  end

  private

  def user_not_authorized
    flash[:alert] = "You are not authorized for administrative functions."
    redirect_to(request.referrer || root_path)
  end

  def check_admin
    if current_user && current_user.role == 'admin'
      @is_admin = true
    else
      @is_admin = false
    end
  end
end
