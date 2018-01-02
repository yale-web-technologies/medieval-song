class CreateExternalWitnesses < ActiveRecord::Migration[5.0]
  def change
    create_table :external_witnesses do |t|
      t.string :label
      t.string :url
      t.references :song, foreign_key: true

      t.timestamps
    end
  end
end
