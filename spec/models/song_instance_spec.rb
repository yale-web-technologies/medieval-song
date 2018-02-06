require 'rails_helper'

RSpec.describe SongInstance, type: :model do
  describe "other_witnesses" do
    it "produces correct results" do
      manuscript_1 = Manuscript.create({ title: 'Manuscript 1' })
      manuscript_2 = Manuscript.create({ title: 'Manuscript 2' })
      song_1 = Song.create({ first_line: 'Song 1'})
      song_2 = Song.create({ first_line: 'Song 2'})
      si_11 = SongInstance.create({ label: 'Song 1 in Manuscirpt 1', song: song_1, manuscript: manuscript_1 })
      si_12 = SongInstance.create({ label: 'Song 1 in Manuscirpt 2', song: song_1, manuscript: manuscript_2 })
      si_12_1 = SongInstance.create({ label: 'Another Song 1 in Manuscirpt 2', song: song_1, manuscript: manuscript_2 })
      si_21 = SongInstance.create({ label: 'Song 2 in Manuscript 1', song: song_2, manuscript: manuscript_1 })

      expect(si_12.other_witnesses).to include(si_11, si_12_1)
      expect(si_12.other_witnesses).not_to include(si_21)
    end
  end
end
