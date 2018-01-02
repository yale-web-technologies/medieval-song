class SongsController < ApplicationController
  layout 'admin'

  before_action :authenticate_user!
  before_action :do_authorize
  before_action :set_song, only: [:show, :edit, :update, :destroy]

  def self.policy_class
    DataAdminPolicy
  end

  # GET /songs
  # GET /songs.json
  def index
    @songs = Song.all
  end

  # GET /songs/1
  # GET /songs/1.json
  def show
    @author = @song.author
  end

  # GET /songs/new
  def new
    @authors = Author.all
    @song = Song.new
  end

  # GET /songs/1/edit
  def edit
    @authors = Author.all
    @author_id = @song.author_id || ''
  end

  # POST /songs
  # POST /songs.json
  def create
    logger.debug("Song#create song_params: #{song_params.inspect}")
    @song = Song.new(song_params)
    author_id = params['song']['author']
    if author_id.empty?
      @song.author_id = nil
    else
      @song.author_id = author_id
    end

    respond_to do |format|
      if @song.save
        format.html { redirect_to @song, notice: 'Song was successfully created.' }
        format.json { render :show, status: :created, location: @song }
      else
        format.html { render :new }
        format.json { render json: @song.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /songs/1
  # PATCH/PUT /songs/1.json
  def update
    logger.debug("Song#update params: #{params.inspect}")
    author_id = song_params['author_id']
    song_params['author_id'] = nil if author_id.nil? || author_id.empty?

    @authors = Author.all
    @author_id = song_params['author_id']

    respond_to do |format|
      if @song.update(song_params)
        format.html { redirect_to @song, notice: 'Song was successfully updated.' }
        format.json { render :show, status: :ok, location: @song }
      else
        format.html { render :edit }
        format.json { render json: @song.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /songs/1
  # DELETE /songs/1.json
  def destroy
    @song.destroy
    respond_to do |format|
      format.html { redirect_to songs_url, notice: 'Song was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def song_params
      params.require(:song).permit(:first_line, :nimev, :dimev, :num_copies,
        :theme, :refs, :refrains, :latin_tags, :author_id)
    end

    def do_authorize
      authorize Song, :any_access?
    end
end
