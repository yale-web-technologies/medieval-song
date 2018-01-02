class CreatePerformances < ActiveRecord::Migration[5.0]
  def change
    create_table :performances do |t|
      t.string :type
      t.string :short_desc
      t.string :url
      t.timestamps
      t.references :song, foreign_key: true
    end
  end
end
