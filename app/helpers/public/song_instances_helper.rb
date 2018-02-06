module Public::SongInstancesHelper
  @@witness_link_template = %{<a class="dams-song-instance-link" href="#"
data-manifest-id="%{manifest_id}" data-canvas-id="%{canvas_id}"
title="Add to the viewer">
  <i class="fa fa-hand-o-left"></i>
</a>}

  # Show an external witness
  # Clicking on the link (if present) will create a browser window or tab
  def display_external_witness(witness)
    if witness.url && witness.url.strip != ''
      link = %{<a target="_blank" href="#" title="Open in another window"><i class="fa fa-external-link"></i></a>}
      "#{witness.label} #{link}".html_safe
    else
      witness.label
    end
  end

  # Show an internal witness.
  # Clicking on the link will create a window inside Mirador
  def display_instance(instance)
    manuscript = instance.manuscript
    annotation = instance.annotations.first
    canvas_id = annotation ? annotation.canvas_id : nil
    manifest_id = manuscript ? manuscript.manifest_url : nil

    link = if manifest_id
      @@witness_link_template % {manifest_id: manifest_id, canvas_id: canvas_id}
    else
      ''
    end

    "#{instance.label} #{link}".html_safe
  end
end
