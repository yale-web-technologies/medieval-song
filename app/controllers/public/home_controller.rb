class Public::HomeController < ApplicationController
  def index
    @manuscripts = Manuscript.all
  end
end
