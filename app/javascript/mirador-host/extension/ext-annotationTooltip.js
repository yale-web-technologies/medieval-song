import { getLogger } from 'util/logger';
import util from 'mirador-host/util';

(function ($) {

  const viewerTemplate = $.Handlebars.compile(`
<div class="all-annotations" id="annotation-viewer-{{windowId}}">
  {{#each annotations}}
    <div class="annotation-display annotation-tooltip" data-anno-id="{{id}}">
      <div class="button-container">
        {{#if showUpdate}}<a href="#edit" class="edit"><i class="fa fa-pencil-square-o fa-fw"></i>{{t "edit"}}</a>{{/if}}
        {{#if showDelete}}<a href="#delete" class="delete"><i class="fa fa-trash-o fa-fw"></i>{{t "delete"}}</a>{{/if}}
      </div>
      <div class="text-viewer">
        <p>{{{annoText}}}</p>
      </div>
    </div>
  {{/each}}
</div>`)

  const _addViewerEvents = $.AnnotationTooltip.prototype.addViewerEvents;

  $.AnnotationTooltip.prototype.getViewerContent = function (annotations) {
    const annotationParams = [];
    let showUpdate = false;
    let showDelete = false;

    for (let annotation of annotations) {
      const annoText = util.truncate(annotation.resource[0].chars, 25);

      if (annotation.endpoint !== 'manifest') {
        showUpdate = annotation.endpoint.userAuthorize('update', annotation);
        showDelete = annotation.endpoint.userAuthorize('delete', annotation);
      }

      annotationParams.push({
        id : annotation['@id'],
        annoText: annoText,
        showUpdate: showUpdate,
        showDelete: showDelete
      });
    }

    const template = viewerTemplate({
      annotations: annotationParams,
      windowId: this.windowId
    });
    return template;
  };

  $.AnnotationTooltip.prototype.addViewerEvents = function (api, viewerParams) {
    _addViewerEvents.call(this, api, viewerParams);
    const _this = this;
    const selector = '#annotation-viewer-' + this.windowId;
    const $tooltip = jQuery(selector);

    $tooltip.find('.text-viewer p').on('click', function (event) {
      event.preventDefault();
      const $elem = jQuery(this);
      const annoId = $elem.closest('.annotation-display').data('anno-id');

      window.location = `/annotations/${annoId}`
    });
  };

})(Mirador);