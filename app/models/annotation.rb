class Annotation < ApplicationRecord
  belongs_to :song_instance

  def to_iiif
    {
      '@context' => 'http://iiif.io/api/presentation/2/context.json',
      '@id' => id.to_s,
      '@type' => 'oa:Annotation',
      'motivation' => [ 'describing' ],
      'resource' => [{
        '@type' => 'dctypes:Text',
        'format' => 'text/html',
        'chars' => song_instance.label,
        'metadata' => {
          'songInstanceId' => song_instance_id,
          'sequence' => seq
        }
      }],
      'on' => [{
        '@type' => 'oa:SpecificResource',
        'full' => canvas_id,
        'selector' => target_selector,
        'within' => {
          '@type' => 'sc:Manifest',
          '@id' => manifest_url
        }
      }]
    }
  end
end
