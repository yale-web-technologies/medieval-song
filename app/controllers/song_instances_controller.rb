class SongInstancesController < ApplicationController
  layout 'admin'
  before_action :set_song_instance, only: [:show, :edit, :update, :destroy]

  # GET /song_instances
  # GET /song_instances.json
  def index
    logger.debug("SongInstanceController#index params: #{params.inspect}")
    @song_instances = SongInstance.all
  end

  # GET /song_instances/1
  # GET /song_instances/1.json
  def show
    @manuscript = @song_instance.manuscript
    @song = @song_instance.song
  end

  # GET /song_instances/new
  def new
    @manuscripts = Manuscript.all
    @songs = Song.all
    @song_instance = SongInstance.new
  end

  # GET /song_instances/1/edit
  def edit
    @manuscripts = Manuscript.all
    @songs = Song.all
  end

  # POST /song_instances
  # POST /song_instances.json
  def create
    logger.debug("SongInstanceController#create params: #{params.inspect}")
    @song_instance = SongInstance.new(song_instance_params)

    respond_to do |format|
      if @song_instance.save
        format.html { redirect_to @song_instance, notice: 'Song instance was successfully created.' }
        format.json { render :show, status: :created, location: @song_instance }
      else
        @manuscripts = Manuscript.all
        @songs = Song.all

        format.html { render :new }
        format.json { render json: @song_instance.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /song_instances/1
  # PATCH/PUT /song_instances/1.json
  def update
    respond_to do |format|
      if @song_instance.update(song_instance_params)
        format.html { redirect_to @song_instance, notice: 'Song instance was successfully updated.' }
        format.json { render :show, status: :ok, location: @song_instance }
      else
        format.html { render :edit }
        format.json { render json: @song_instance.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH
  def attach
    logger.debug("SongInstanceController#attach params: #{params.inspect}")
    song_instance_id = params['songInstanceId']
    manuscript_id = params['manuscriptId']
    target = params['target']
    canvas_id = target[0]['full']

    si = SongInstance.find(song_instance_id)
    if si.manuscript_id == manuscript_id
      si.target = target.to_json
      si.canvas_id = canvas_id
      si.save
      render json: {
        id: si.id,
        target: JSON.parse(si.target)
      }
    else
      render json: { errorMsg: "Song instance doesn't belong to the manuscript" },
        status: :precondition_failed
    end
  end

  # PATCH
  def detach
    logger.debug("SongInstanceController#detach params: #{params.inspect}")
    song_instance_id = params['songInstanceId']

    si = SongInstance.find(song_instance_id)
    si.target = ''
    si.canvas_id = ''
    si.save
    render json: {
      errorCode: 0,
      songInstanceId: song_instance_id
    }
  end

  # DELETE /song_instances/1
  # DELETE /song_instances/1.json
  def destroy
    @song_instance.destroy
    respond_to do |format|
      format.html { redirect_to song_instances_url, notice: 'Song instance was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song_instance
      @song_instance = SongInstance.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def song_instance_params
      params.require(:song_instance).permit(:label, :song_text, :verse_form, :folio, :song_id, :manuscript_id)
    end
end
