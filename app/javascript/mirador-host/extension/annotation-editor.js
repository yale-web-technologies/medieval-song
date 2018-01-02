import { getLogger } from 'util/logger';

const logger = getLogger();

const template = Handlebars.compile(`
<div class="dams-anno-editor">
  <div class="row my-2">
    <div class="col col-7 label">Song instance ID</div>
    <div class="col col-5">
      <input class="song-instance-id" type="text" size="8" value="{{songInstanceId}}"></input>
    </div>
  </div>
  <div class="row my-2">
    <div class="col col-7 label">Sequnece #</div>
    <div class="col col-5">
      <input class="sequence" type="text" size="8" value="{{sequence}}"></input>
    </div>
  </div>
  <div class="row mt-2 mb-3">
    <div class="col col-12">Text</div>
    <div class="col col-12">
      <textarea class="text form-control" rows="2">{{text}}</textarea>
    </div>
  </div>
</div>`)

export default class AnnotationEditor {

  constructor(options) {
    logger.debug('AnnotationEditor#constructor options:', options);
    this._anno = options.annotation;
    this._mode = options.mode; // "create" or "update"
    this._element = this._createElement(this._anno);
  }

  // Called by Mirador core
  show(selector) {
    logger.debug('AnnotationEditor#show', selector);
    if (selector) {
      const parent = jQuery(selector);
      parent.prepend(this._element);
    }
    this._element.show();
  }

  // Called by Mirador core
  getMode() {
    return this._mode;
  }

  // Called by Mirador core
  createAnnotation() {
    const motivation = ['describing'];
    const songInstanceId = this._element.find('.song-instance-id').val();
    const sequence = this._element.find('.sequence').val();
    const text = this._element.find('.text').val().trim();
    const resource = [{
      '@type': 'dctypes:Text',
      format: 'text/html',
      chars: text,
      metadata: {
        songInstanceId: songInstanceId,
        sequence: sequence
      }
    }];

    var annotation = {
      '@context': 'http://iiif.io/api/presentation/2/context.json',
      '@type': 'Annotation',
      motivation: motivation,
      resource: resource
    };

    logger.debug('AnnotationEditor#createAnnotation creating annotation:', annotation);
    return annotation;
  }

  // Called by Mirador core
  updateAnnotation(annotation) {
    logger.debug('AnnotationEditor#updateAnnotation annotation:', annotation);
    const songInstanceId = this._element.find('.song-instance-id').val();
    const sequence = this._element.find('.sequence').val();
    const text = this._element.find('.text').val();
    const resource = annotation.resource[0];
    const metadata = resource.metadata;

    resource.chars = text.trim();
    metadata.songInstanceId = parseInt(songInstanceId, 10);
    metadata.sequence = parseInt(sequence, 10);

    return annotation;
  }

  isDirty() {
    return true;
  }

  _createElement(annotation) {
    console.log('_createElement annotation:', annotation);
    let songInstanceId = '', sequence = '', text = '';

    if (annotation && annotation.resource) {
      const metadata = annotation.resource[0].metadata;
      songInstanceId = metadata.songInstanceId;
      sequence = metadata.sequence;
      text = annotation.resource[0].chars;
    }
    return jQuery(template({ songInstanceId, sequence, text }));
  }
}
