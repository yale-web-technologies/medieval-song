import { getLogger } from 'util/logger';

const logger = getLogger();

const template = Handlebars.compile(`<div class="dams-anno-editor">
  <div class="row my-2">
    <div class="col col-12 label">Song instance</div>
    <div class="col col-12">
      <select class="song-instance-selector"></select>
    </div>
  </div>
  <div class="row my-2">
    <div class="col">
      Sequnece #
      <input class="sequence" type="text" size="4" value="{{sequence}}"></input>
    </div>
  </div>
</div>`);

const selectorTemplate = Handlebars.compile(`<select class="song-instance-selector">
  {{#each songInstances}}
    <option value="{{this.id}}">{{this.label}}</option>
  {{/each}}
</select>`);

export default class AnnotationEditor {
  constructor(options) {
    logger.debug('AnnotationEditor#constructor options:', options);
    this._windowId = options.windowId;
    this._anno = options.annotation;
    this._mode = options.mode; // "create" or "update"
    this._miradorProxy = window.DAMS.app.miradorProxy;
    this._element = this._createElement(this._anno);

    // Async call to update the song instance selector
    this._retrieveSongInstances().done(songInstances => {
      this._loadSelector(songInstances);
    });
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
    const songInstanceId = this._getSelectedSongInstanceId();
    const sequence = this._element.find('.sequence').val();
    const resource = [{
      '@type': 'dctypes:Text',
      format: 'text/html',
      // XXX As of 2/5/18 annotation text is not being used in the backend,
      // so no need to update chars here.
      // For display on Mirador, SongInstance.label will be used to populate chars.
      chars: '',
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
    const songInstanceId = this._getSelectedSongInstanceId();
    const sequence = this._element.find('.sequence').val();
    const text = this._element.find('.text').val();
    const resource = annotation.resource[0];
    const metadata = resource.metadata;

    resource.chars = '';
    metadata.songInstanceId = parseInt(songInstanceId, 10);
    metadata.sequence = parseInt(sequence, 10);

    return annotation;
  }

  isDirty() {
    // TODO: If idDirty is ever true, a confirmation dialog should pop up
    // saying "Do you want to cancel this annotation?", but somehow
    // the "fade" class of the ".boobox.modal" element gets toggled incorrectly
    // so the dialog is not shown.
    return false;
  }

  _createElement(annotation) {
    logger.debug('AnnotationEditor#_createElement annotation:', annotation);
    let sequence = '';

    if (annotation && annotation.resource) {
      const metadata = annotation.resource[0].metadata;
      sequence = metadata.sequence;
    }
    return jQuery(template({ sequence }));
  }

  _retrieveSongInstances() {
    const windowProxy = this._miradorProxy.getWindowProxyById(this._windowId);
    const manifestUri = windowProxy.getManifestUri();
    const url = '/song_instances.json?manifest_uri=' + encodeURIComponent(manifestUri);

    return jQuery.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    });
  }

  /**
   * @param {[object]} songInstances - List of Song Instance objects with keys "id" and "label"
   */
  _loadSelector(songInstances) {
    logger.debug('AnnotationEditor#_loadSelector songInstances:',  songInstances);
    const $selector = jQuery(selectorTemplate({ songInstances }));
    const annotation = this._anno;
    let preSelected = false;
    this._element.find('.song-instance-selector').replaceWith($selector);

    if (annotation && annotation.resource) {
      const metadata = annotation.resource[0].metadata;
      const songInstanceId = metadata.songInstanceId;

      $selector.find('option').each((index, option) => {
        const $option = jQuery(option);
        if (parseInt($option.val(), 10) === songInstanceId) {
          preSelected = true;
          $option.attr('selected', 'selected');
        }
      });
    }

    if (!preSelected) {
      // If none is selected, select the first option.
      jQuery($selector.find('option')[0]).attr('selected', 'selected');
    }
  }

  _getSelectedSongInstanceId() {
    const idStr = this._element.find('.song-instance-selector').val();
    console.log(idStr, typeof idStr);
    return parseInt(idStr, 10);
  }
}
