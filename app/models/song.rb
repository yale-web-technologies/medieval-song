class Song < ApplicationRecord
  belongs_to :author, optional: true
  has_many :song_instances
  has_many :manuscripts, through: :song_instances
  has_many :external_witnesses
  has_many :external_song_texts
  has_many :performances
end
