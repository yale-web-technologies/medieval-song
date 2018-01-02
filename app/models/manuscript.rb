class Manuscript < ApplicationRecord
  has_many :song_instances
  has_many :songs, through: :song_instances
  has_many :annotatitions, through: :song_instances
end
