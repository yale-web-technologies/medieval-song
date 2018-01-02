class DataAdminPolicy < ApplicationPolicy
  def any_access?
    @user.role == 'admin'
  end
end
