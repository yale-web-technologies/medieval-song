class Public::SongInstancesController < ApplicationController
  def show
    puts "Public::SongInstanceController#show params: #{params.inspect}"
    @page_has_mirador = true
    @song_instance = SongInstance.find(params[:id])
    @title = @song_instance.label
    @manuscript = @song_instance.manuscript
    @song = @song_instance.song

    annotations = @song_instance.annotations.order(:seq)
    if annotations.size > 0
      canvas_id = annotations[0].canvas_id
    else
      canvas_id = nil
    end

    if current_user && current_user.role == 'admin'
      @is_admin = true
    else
      @is_admin = false
    end

    @mirador_settings = Mirador::Settings.config({
      manifest_url: @manuscript.manifest_url,
      canvas_id: canvas_id,
      is_admin: @is_admin
    })
  end
end
