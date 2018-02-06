class SongInstance < ApplicationRecord
  belongs_to :song
  belongs_to :manuscript
  has_many :annotations

  # Returns other SongInstance's that belong to the same song as self.
  def other_witnesses
    song.song_instances.select do |si|
      si.id != id
    end
  end
end

