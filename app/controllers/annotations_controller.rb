class AnnotationsController < ApplicationController
  layout 'admin'

  def index
    logger.debug("AnnotationsController#index params: #{params.inspect}")
    @annotations = Annotation.all

    if params['canvas_id']
      @annotations = @annotations.select do |anno|
        anno.canvas_id == params['canvas_id']
      end
    end

    respond_to do |format|
      format.html
      format.json  do
        results = []
        @annotations.each do |anno|
          results << anno.to_iiif
        end
        render json: results
      end
    end
  end

  def show
    @annotation = Annotation.find(params[:id])
  end

  def edit
    @annotation = Annotation.find(params[:id])
  end

  def create
    logger.debug("AnnotationController#create params: #{params.inspect}")

    @annotation = annotationFromParams(params)

    respond_to do |format|
      if @annotation.save
        format.html { redirect_to @annotation, notice: 'Annotation was successfully created.' }
        format.json do
          render :show, status: :created, json: @annotation.to_iiif
        end
      else
        format.html { render :new }
        format.json { render json: @annotation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH
  def update
    attributes = attributes_from_params(params)
    @annotation = Annotation.find(attributes[:id])

    respond_to do |format|
      if @annotation.update(attributes)
        format.html { redirect_to @song_instance, notice: 'Annotation was successfully updated.' }
        format.json { render :show, status: :ok, location: @annotation }
      else
        format.html { render :edit }
        format.json { render json: @annotation.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  # Takes POST request params and returns an Annotation model object
  def annotationFromParams(params)
    anno = params['annotation'] # JSON object from Mirador
    resource = anno['resource'][0]
    text = resource['chars']
    target = anno['on'][0]
    metadata = resource['metadata']

    Annotation.new(
      song_instance_id: metadata['songInstanceId'],
      seq: metadata['sequence'],
      text: text,
      canvas_id: target['full'],
      target_selector: target['selector'],
      manifest_url: target['within']['@id']
    )
  end

  # Parses POST/PATCH params and
  # returns attributes for the Annotation object
  def attributes_from_params(params)
    anno = params['annotation'] # JSON object from Mirador
    resource = anno['resource'][0]
    text = resource['chars']
    target = anno['on'][0]
    metadata = resource['metadata']

    attributes = {
      song_instance_id: metadata['songInstanceId'],
      seq: metadata['sequence'],
      text: text,
      canvas_id: target['full'],
      target_selector: target['selector'],
      manifest_url: target['within']['@id']
    }
    attributes[:id] = anno['@id'].to_i if anno['@id']
    attributes
  end
end
