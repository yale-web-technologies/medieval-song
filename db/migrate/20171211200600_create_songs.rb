class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :first_line
      t.string :dimev
      t.string :nimev
      t.integer :num_copies
      t.string :theme
      t.text :refs
      t.text :refrains
      t.text :latin_tags
      t.timestamps
      t.references :author, foreign_key: true
    end
  end
end
