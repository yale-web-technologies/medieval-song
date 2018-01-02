class CreateSongInstances < ActiveRecord::Migration[5.0]
  def change
    create_table :song_instances do |t|
      t.string :label
      t.text :song_text
      t.string :verse_form
      t.string :folio
      t.timestamps
      t.references :song, foreign_key: true
      t.references :manuscript, foreign_key: true
    end
  end
end
