module ApplicationHelper
  def collapse_button(target_id:, collapsed:)
    collapsed = if collapsed then ' collapsed' else '' end

    %{<a class="dams-collapse#{collapsed}" data-toggle="collapse" href="##{target_id}">
    <i class="to-expand fa fa-plus-square-o"></i>
    <i class="to-collapse fa fa-minus-square-o"></i>
    </a>}.html_safe
  end

  def form_song_selector(songs:, model_name:)
    html = %{<div class="form-group">
      <label for="song">Song</label>
      <select class="form-control" id="song" name="#{model_name}[song_id]">}

    songs.each do |song|
      selected = if @song_id == song.id then 'selected' else '' end

      html.concat(%{<option value="#{song.id}" #{selected}>#{song.first_line}</option>})
    end
    html.concat('</select></div>')
    html.html_safe
  end

  def display_witness(witness)
    if witness.url && witness.url.strip != ''
      %{<a target="_blank" href="#{witness.url}">#{witness.label}</a>}.html_safe
    else
      witness.label
    end
  end
end
