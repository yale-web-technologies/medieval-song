import { getLogger } from 'util/logger';

const logger = getLogger();
const instances = [];
const textTemplate = Handlebars.compile([
  '<p data-song-instance-id="{{songInstanceId}} data-sequence="{{sequence}}>',
  '{{content}}',
  '</p>'
].join(''));

export default class DamsEndpoint {

  constructor(options) {
    this.dfd = options.dfd; // set also by Mirador using set(), so cannot change name
    this.annotationsList = []; // used by Mirador, thus public
    this._state = window.DAMS.state;
    instances.push(this);
  }

  search(options) {
    logger.debug('DamsEndpoint#search options:', options);
    var url = '/data/annotations.json/?canvas_id=' + encodeURIComponent(options.uri);
    logger.debug('DamsEndpoint#search url:', url);

    jQuery.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: (data, textStatus, jqXHR) => {
        logger.debug('DamsEndpoint#search success data:', data);
        this.annotationsList = [];
        for (let item of data) {
          this.annotationsList.push(this._toMiradorAnnotation(item));
        }
        logger.debug('DamsEndpoint#search success annotations:', this.annotationsList);
        if (typeof successCallback === 'function') {
          successCallback(this.annotationsList);
        } else {
          this.dfd.resolve(true);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        var msg = 'DamsEndpoint#search error status code: ' +
          jqXHR.status + ', textStatus: ' + textStatus +
          ', errorThrown: ' + errorThrown + ', URL: ' + url;

        logger.error(msg);
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      }
    });
  }

  create(annotation, successCallback, errorCallback) {
    logger.debug('DamsEndpoint#create annotation:', annotation);
    const url = '/data/annotations'
    const request = {
      annotation: this._toBackendAnnotation(annotation)
    };

    jQuery.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify(request),
      contentType: 'application/json; charset=utf-8',
      success: data => {
        logger.debug('DamsEndpoint#create success data:', data);
        const newAnnotation = this._toMiradorAnnotation(data);
        if (typeof successCallback === 'function') {
          successCallback(newAnnotation);
        }
      },
      error: function (jqXHR, textStatus, errorThrown)  {
        logger.error('DamsEndpoint#create failed textStatus:', textStatus, 'jqXHR.status:', jqXHR.status, 'errorThrown:', errorThrown, 'annotation:', annotation);
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      }
    });
  }

  update(annotation, successCallback, errorCallback) {
    logger.debug('DamsEndpoint#create annotation:', annotation);
    var _this = this;
    var url = '/data/annotations/update'
    var request = {
      songInstanceId: annotation.songInstanceId,
      sequence: annotation.sequence,
      annotation: this._toBackendAnnotation(annotation)
    };

    jQuery.ajax({
      url: url,
      type: 'PATCH',
      dataType: 'json',
      data: JSON.stringify(request),
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        logger.debug('DamsEndpoint#create success data:', data);
        var newAnnotation = _this._toMiradorAnnotation(data);
        if (typeof successCallback === 'function') {
          successCallback(newAnnotation);
        }
      },
      error: function (jqXHR, textStatus, errorThrown)  {
        logger.error('DamsEndpoint#create failed textStatus:', textStatus, 'jqXHR.status:', jqXHR.status, 'errorThrown:', errorThrown, 'annotation:', annotation);
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      }
    });
  }

  deleteAnnotation(annotationId, successCallback, errorCallback) {
    logger.debug('DamsEndpoint#deleteAnnotation, annotationId:', annotationId);

    var _this = this;
    var url = '/data/song_instances/detach'
    var request = {
      songInstanceId: parseInt(annotationId, 10)
    };

    jQuery.ajax({
      url: url,
      type: 'PATCH',
      dataType: 'json',
      data: JSON.stringify(request),
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        logger.debug('DamsEndpoint#deleteAnnotation success data:', data);
        if (typeof successCallback === 'function') {
          successCallback();
        }
      },
      error: function (jqXHR, textStatus, errorThrown)  {
        logger.error('DamsEndpoint#deleteAnnotation failed textStatus:', textStatus, 'jqXHR.status:', jqXHR.status, 'errorThrown:', errorThrown, 'annotationId:', annotationId);
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      }
    });
  }

  userAuthorize(action, annotation) {
    logger.debug('DamsEndpoint#userAuthorize');

    if (action === 'create' || action === 'update' || action === 'delete') {
      return this._state.isAdmin;
    }
    return true;
  }

  set(prop, value, options) {
    logger.debug('DamsEndpoint#set prop:', prop, ', value:', value, ', options:', options);
    if (options) {
      this[options.parent][prop] = value;
    } else {
      this[prop] = value;
    }
  }

  _toMiradorAnnotation(data) {
    return Object.assign(data, {
      endpoint: this
    });
  }

  _toBackendAnnotation(annotation) {
    const data = Object.assign({}, annotation);
    delete data.endpoint;
    return data;
  }
}
