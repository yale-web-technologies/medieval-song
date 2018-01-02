class SongInstance < ApplicationRecord
  belongs_to :song
  belongs_to :manuscript
  has_many :annotations
end

