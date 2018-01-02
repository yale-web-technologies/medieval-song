class Public::AnnotationsController < ApplicationController
  def show
    annotation = Annotation.find(params[:id])
    song_instance_id = annotation.song_instance_id
    canvas_id = annotation.canvas_id

    redirect_to "/song_instances/#{song_instance_id}?canvas_id=#{canvas_id}"
  end
end
