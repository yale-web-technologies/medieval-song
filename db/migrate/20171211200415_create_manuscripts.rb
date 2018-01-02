class CreateManuscripts < ActiveRecord::Migration[5.0]
  def change
    create_table :manuscripts do |t|
      t.string :title
      t.string :manifest_url
      t.text :long_desc
      t.timestamps
    end
  end
end
