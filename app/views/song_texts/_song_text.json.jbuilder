json.extract! song_text, :id, :text, :is_primary_version, :created_at, :updated_at
json.url song_text_url(song_text, format: :json)
