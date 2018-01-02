class CreateAnnotations < ActiveRecord::Migration[5.0]
  def change
    create_table :annotations do |t|
      t.text :text
      t.string :canvas_id
      t.json :anno_json
      t.integer :seq
      t.timestamps
      t.references :song_instance, foreign_key: true
    end
  end
end
