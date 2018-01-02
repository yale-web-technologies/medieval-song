json.extract! song_instance, :id, :title, :canvas_id, :song_text, :folio, :song_id, :manuscript_id, :verse_form_id, :created_at, :updated_at
json.url song_instance_url(song_instance, format: :json)
