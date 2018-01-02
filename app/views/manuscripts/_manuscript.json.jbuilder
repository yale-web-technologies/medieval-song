json.extract! manuscript, :id, :title, :manifest_url, :long_desc, :created_at, :updated_at
json.url manuscript_url(manuscript, format: :json)
