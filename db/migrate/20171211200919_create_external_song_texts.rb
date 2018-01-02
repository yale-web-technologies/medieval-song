class CreateExternalSongTexts < ActiveRecord::Migration[5.0]
  def change
    create_table :external_song_texts do |t|
      t.string :short_desc
      t.text :text
      t.string :url
      t.timestamps
      t.references :song, foreign_key: true
    end
  end
end
