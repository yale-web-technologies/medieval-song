class Public::BrowseController < ApplicationController
  def index
    @manuscripts = Manuscript.all
    @songs = Song.all
  end
end
