class Public::ManuscriptsController < ApplicationController
  def show
    @page_has_mirador = true
    @manuscript = Manuscript.find(params[:id])
    @title = @manuscript.title
    @performances = get_performances(@manuscript)

    @mirador_settings = Mirador::Settings.config({
      manifest_url: @manuscript.manifest_url,
      is_admin: @is_admin
    })
  end

  private

  def get_performances(manuscript)
    songs = manuscript.song_instances.collect { |si| si.song }.uniq
    songs.reduce([]) { |perfs, song|  perfs + song.performances }
  end
end
