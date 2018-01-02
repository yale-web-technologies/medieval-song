# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

romance = Manuscript.create(title: 'Romance and religion: a collection of romances and religious material, mostly in verse, written in the North Midlands by Richard Heeg, with some items by James Hawghton and additions in other hands',
  manifest_url: 'https://view.nls.uk/manifest/1336/8006/133680060/manifest.json',
  long_desc: 'Romance and religion: a collection of romances and religious material, mostly in verse, written in the North Midlands by Richard Heeg, with some items by James Hawghton and additions in other hands'
)

mandeville = Manuscript.create(title: "Mandeville's travels and other texts: includes 'Liber maundevyle', 'Sir Cleges' and 'De regimine principum' by Thomas Hoccleve.",
  manifest_url: 'https://view.nls.uk/manifest/1334/7515/133475158/manifest.json',
  long_desc: "Mandeville's travels and other texts: includes 'Liber maundevyle', 'Sir Cleges' and 'De regimine principum' by Thomas Hoccleve."
)

john = Manuscript.create(title: "John of Grimestone: the preaching-book of a Franciscan friar from Norfolk, written in 1372.",
  manifest_url: 'https://view.nls.uk/manifest/1336/8036/133680362/manifest.json',
  long_desc: "John of Grimestone: the preaching-book of a Franciscan friar from Norfolk, written in 1372."
)

bede = Author.create(name: 'Bede the Venerable')
grimestone = Author.create(name: 'Grimestone')
Author.create(name: 'Heege')
Author.create(name: 'Lydgate')
Author.create(name: 'Richard Maydestone')
Author.create(name: 'William Lichfield')

Song.create(first_line: 'Angelus ad virginem/Gabriel fram heven-king',
  nimev: '888', dimev: '1484', num_copies: 1,
  latin_tags: 'Angelus ad virginem (sequence)',
  theme: 'Annunciation'
)

Song.create(first_line: 'Holi gost þi miȝtte',
  nimev: '1229', dimev: '2042', num_copies: 1,
  author: bede,
  theme: 'Death'
)

i_will = Song.create(first_line: 'I wil […]',
  nimev: '1388.55', dimev: '2313', num_copies: 1,
  author: grimestone
)

Song.create(first_line: 'For þing þat is to askyn [ ]',
  nimev: '848.66', dimev: '1399', num_copies: 1,
  latin_tags: 'Pro debita circum…',
  author: grimestone,
  theme: 'Prayer'
)

heyle = Song.create(first_line: 'Heyle be þu mary þo moder of clryste',
  nimev: '1032', dimev: '1691', num_copies: 5,
  refs: 'Ave regina celorum',
  theme: 'Virgin Mary'
)

SongInstance.create(label: 'Hyele be in 19.3.1',
  song_text: %q(Heyle be þu mary þo moder of cryste
  heyle be þo bleste þat euer bare chylde
  heyle be þu conseyuyde all by lyste
  þi son ihu bothe meke and milde
  heyle meydon swete þat neuer was fylde
  heyle weyle and wytte of all wysdum
  heyle feyrer þen þo flowre vnfylde
    Ave Regina celorum

  heyle comly qwene comforth of care
  heyle godly lady bothe feyr and bryght
  heyle þo socur of all owre sare
  heyle þo lampe þat lenys hus lyght
  heyle godly lady in þe was plyght
  þo Ioy of mon bothe all and sum
  heyle tabarnabull hee on heyght
    Mater Regys angelorum

  heyle cumly qwene þo feyryst of all
  heyle in þe owre blys is bredde
  heyle on þe all wemen wyl call
  when þei with chylde ben by stedde
  heyle þat  all fyndes wyll drydde
  and schall do to þo dey of dom
  with meydyns mylke þi chylde þu fydde
    O Maria flos virginum

  heyle þo feyryste of all gud [...]
  heyle þat god schase to his borore
  heyle þo lampe þat euer is lyghtand
  To hye and lowe to ryche and pore
  heyle swetur þen ony savowr
  heyle þat all owre Ioy of come
  heyle of all wemen frute and flowre
    velud Rosa vel lillium

  heyle gudly grownder of all grace
  heyle blestefull starne of þo see
  heyle þo saluer of owre solase
  heyle þo chese of chastite
  heyle þo well of all mercy
  heyle þat bare god of heyvn
  heyle þo tempull of þo trinite
    funde preces ad filium

  heyle blestfull virgyn of all virgyns
  heyle meydyn moder and blestfull mey
  heyle þe norse of swete Ihu
  heyle gudly qwene as þu wele mey
  heyle he lady to þi son þu prey
  þat we mey cum to his kyngdome
  for hus and for all oder þu prey
  Et pro salute fidelium
  ),
  song: heyle,
  manuscript: romance,
  folio: 'ff. 65-65v',
  verse_form: 'eight-line stanzas (ababbcbc)'
)

SongInstance.create(label: 'Hyele be in Mendeville (fake)',
song_text: %q(A alligators all around
B bursting balloons
C catching cold
D doing dishes),
song: heyle,
manuscript: mandeville,
folio: 'ff. 1',
verse_form: 'ABCD'
)

ExternalWitness.create(
  label: 'BL Royal 12.E.I, ff. 193-194v',
  url: 'http://universalviewer.io/uv.html?manifest=https://view.nls.uk/manifest/1334/7515/133475158/manifest.json',
  song: heyle
)

ExternalWitness.create(
  label: 'BL Harley 2253 ff. 79rb',
  song: heyle
)

ExternalSongText.create(
  short_desc: 'Heyle 2 (fake)',
  text: %q(dodo mama dede teup
rot slinma plede kieu
mrav de tootou plam),
  song: heyle
)

Performance.create(
  media_type: 'video',
  short_desc: 'Heyle (fake - PLAINCHANT)',
  url: 'https://www.youtube.com/watch?v=Fi5CZ3lTXP8',
  song: heyle
)

Performance.create(
  media_type: 'video',
  short_desc: 'Heyle (fake - mittelalter musik)',
  url: 'https://www.youtube.com/watch?v=NF0sFOvUhd0',
  song: heyle
)
