module Mirador
  module Settings
    def self.default
      {
        id: 'mirador-container',
        buildPath: '/mirador/',
        mainMenuSettings: { show: true },
        windowSettings: {
          sidePanel: false,
          canvasControls: {
            annotations: {
              annotationLayer: true,
              annotationState: 'on',
              annotationCreation: true
            },
            imageManipulation: {
              manipulationLayer: false
            }
          },
          displayLayout: true,
          externalAnnotationWindowButton: false
        },
        annotationBodyEditor: {
          module: 'AnnotationEditor'
        },
        annotationEndpoint: {
          name: 'DAMS Endpoint',
          module: 'DamsEndpoint'
        }
      }
    end

    def self.config(options = {})
      manifest_url = options[:manifest_url]
      canvas_id = options[:canvas_id]
      other_manifests = options[:other_manifests] || []
      is_admin = options[:is_admin]

      settings = self.default.update({
        data: [{
          manifestUri: manifest_url
        }] + other_manifests,
        windowObjects: [{
          loadedManifest: manifest_url
        }]
      })

      if canvas_id
        settings[:windowObjects][0][:canvasID] = canvas_id
      end

      unless is_admin
        settings[:windowSettings][:canvasControls][:annotations][:annotationCreation] = false
      end

      settings
    end
  end
end
