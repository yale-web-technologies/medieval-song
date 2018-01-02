class RemoveAnnoJsonFromAnnotations < ActiveRecord::Migration[5.0]
  def change
    remove_column :annotations, :anno_json, :json
  end
end
