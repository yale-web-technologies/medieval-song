class FixColumnNameInPerfomances < ActiveRecord::Migration[5.0]
  def change
    rename_column :performances, :type, :media_type
  end
end
