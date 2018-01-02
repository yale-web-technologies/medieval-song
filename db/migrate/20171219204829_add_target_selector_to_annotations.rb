class AddTargetSelectorToAnnotations < ActiveRecord::Migration[5.0]
  def change
    add_column :annotations, :target_selector, :json
  end
end
