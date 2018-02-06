class Public::SongInstancesController < ApplicationController
  def index
    song_instances = []
    manifest_uri = params['manifest_uri']

    if manifest_uri
      manuscript = Manuscript.where(manifest_url: manifest_uri).first
      if manuscript
        song_instances = manuscript.song_instances
      end
    end

    results = song_instances.collect { |si|  si.slice(:id, :label) }

    respond_to do |format|
      format.json { render json: results }
    end
  end

  def show
    puts "Public::SongInstanceController#show params: #{params.inspect}"
    @page_has_mirador = true
    @song_instance = SongInstance.find(params[:id])
    @title = @song_instance.label
    @manuscript = @song_instance.manuscript
    @song = @song_instance.song
    @other_instances = @song.song_instances.select do |si|
      si.manuscript == @manuscript && si.id != @song_instance.id
    end

    if current_user && current_user.role == 'admin'
      @is_admin = true
    else
      @is_admin = false
    end

    @mirador_settings = get_mirador_settings
  end

  private

  def get_mirador_settings
    annotations = @song_instance.annotations.order(:seq)
    if annotations.size > 0
      canvas_id = annotations[0].canvas_id
    else
      canvas_id = nil
    end

    other_manifests_config = []
    @other_instances.each do |si|
      other_manifests_config << {
        manifestUri: si.manuscript.manifest_url
      }
    end

    Mirador::Settings.config({
      manifest_url: @manuscript.manifest_url,
      canvas_id: canvas_id,
      other_manifests: other_manifests_config,
      is_admin: @is_admin
    })
  end
end
