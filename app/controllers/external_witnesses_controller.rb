class ExternalWitnessesController < ApplicationController
  layout 'admin'

  before_action :set_external_witness, only: [:show, :edit, :update, :destroy]

  # GET /external_witnesses
  # GET /external_witnesses.json
  def index
    @external_witnesses = ExternalWitness.all
  end

  # GET /external_witnesses/1
  # GET /external_witnesses/1.json
  def show
    @songs = Song.all
  end

  # GET /external_witnesses/new
  def new
    @songs = Song.all
    @external_witness = ExternalWitness.new
  end

  # GET /external_witnesses/1/edit
  def edit
    @songs = Song.all
  end

  # POST /external_witnesses
  # POST /external_witnesses.json
  def create
    @songs = Song.all
    @external_witness = ExternalWitness.new(external_witness_params)
    respond_to do |format|
      if @external_witness.save
        format.html do
          redirect_to @external_witness, notice: 'External witness was successfully created.'
        end
        format.json { render :show, status: :created, location: @external_witness }
      else
        format.html { render :new }
        format.json { render json: @external_witness.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /external_witnesses/1
  # PATCH/PUT /external_witnesses/1.json
  def update
    respond_to do |format|
      if @external_witness.update(external_witness_params)
        format.html { redirect_to @external_witness, notice: 'External witness was successfully updated.' }
        format.json { render :show, status: :ok, location: @external_witness }
      else
        format.html { render :edit }
        format.json { render json: @external_witness.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /external_witnesses/1
  # DELETE /external_witnesses/1.json
  def destroy
    @external_witness.destroy
    respond_to do |format|
      format.html { redirect_to external_witnesses_url, notice: 'External witness was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_external_witness
      @external_witness = ExternalWitness.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def external_witness_params
      params.require(:external_witness).permit(:label, :url, :song_id)
    end
end
