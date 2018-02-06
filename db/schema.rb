# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171228180759) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", id: :serial, force: :cascade do |t|
    t.text "text"
    t.string "canvas_id"
    t.integer "seq"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "song_instance_id"
    t.json "target_selector"
    t.string "manifest_url"
    t.index ["song_instance_id"], name: "index_annotations_on_song_instance_id"
  end

  create_table "authors", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "external_song_texts", id: :serial, force: :cascade do |t|
    t.string "short_desc"
    t.text "text"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "song_id"
    t.index ["song_id"], name: "index_external_song_texts_on_song_id"
  end

  create_table "external_witnesses", id: :serial, force: :cascade do |t|
    t.string "label"
    t.string "url"
    t.integer "song_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_external_witnesses_on_song_id"
  end

  create_table "manuscripts", id: :serial, force: :cascade do |t|
    t.string "title"
    t.string "manifest_url"
    t.text "long_desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "performances", id: :serial, force: :cascade do |t|
    t.string "media_type"
    t.string "short_desc"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "song_id"
    t.index ["song_id"], name: "index_performances_on_song_id"
  end

  create_table "song_instances", id: :serial, force: :cascade do |t|
    t.string "label"
    t.text "song_text"
    t.string "verse_form"
    t.string "folio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "song_id"
    t.integer "manuscript_id"
    t.index ["manuscript_id"], name: "index_song_instances_on_manuscript_id"
    t.index ["song_id"], name: "index_song_instances_on_song_id"
  end

  create_table "songs", id: :serial, force: :cascade do |t|
    t.string "first_line"
    t.string "dimev"
    t.string "nimev"
    t.integer "num_copies"
    t.string "theme"
    t.text "refs"
    t.text "refrains"
    t.text "latin_tags"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "author_id"
    t.index ["author_id"], name: "index_songs_on_author_id"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider"
    t.string "uid"
    t.string "role"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "annotations", "song_instances"
  add_foreign_key "external_song_texts", "songs"
  add_foreign_key "external_witnesses", "songs"
  add_foreign_key "performances", "songs"
  add_foreign_key "song_instances", "manuscripts"
  add_foreign_key "song_instances", "songs"
  add_foreign_key "songs", "authors"
end
