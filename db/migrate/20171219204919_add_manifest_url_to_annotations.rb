class AddManifestUrlToAnnotations < ActiveRecord::Migration[5.0]
  def change
    add_column :annotations, :manifest_url, :string
  end
end
