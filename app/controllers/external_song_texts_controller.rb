class ExternalSongTextsController < ApplicationController
  layout 'admin'

  before_action :set_external_song_text, only: [:show, :edit, :update, :destroy]

  # GET /external_song_texts
  # GET /external_song_texts.json
  def index
    @external_song_texts = ExternalSongText.all
  end

  # GET /external_song_texts/1
  # GET /external_song_texts/1.json
  def show
  end

  # GET /external_song_texts/new
  def new
    @songs = Song.all
    @external_song_text = ExternalSongText.new
  end

  # GET /external_song_texts/1/edit
  def edit
    @songs = Song.all
  end

  # POST /external_song_texts
  # POST /external_song_texts.json
  def create
    @external_song_text = ExternalSongText.new(external_song_text_params)

    respond_to do |format|
      if @external_song_text.save
        format.html { redirect_to @external_song_text, notice: 'External song text was successfully created.' }
        format.json { render :show, status: :created, location: @external_song_text }
      else
        format.html { render :new }
        format.json { render json: @external_song_text.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /external_song_texts/1
  # PATCH/PUT /external_song_texts/1.json
  def update
    respond_to do |format|
      if @external_song_text.update(external_song_text_params)
        format.html { redirect_to @external_song_text, notice: 'External song text was successfully updated.' }
        format.json { render :show, status: :ok, location: @external_song_text }
      else
        format.html { render :edit }
        format.json { render json: @external_song_text.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /external_song_texts/1
  # DELETE /external_song_texts/1.json
  def destroy
    @external_song_text.destroy
    respond_to do |format|
      format.html { redirect_to external_song_texts_url, notice: 'External song text was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_external_song_text
      @external_song_text = ExternalSongText.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def external_song_text_params
      params.require(:external_song_text).permit(:short_desc, :text, :url, :song_id)
    end
end
