/**
 * Overrides the same-named file in Mirador core to prevent
 * Bootstrap or Bootbox code being called, which collides with Semantic UI.
 */

(function ($) {

  var template = Handlebars.compile([
    '<div class="modal" tabindex="-1" role="dialog">',
    '  <div class="modal-dialog" role="document">',
    '    <div class="modal-content">',
    '      <div class="modal-body">',
    '        <p>{{message}}</p>',
    '      </div>',
    '      <div class="modal-footer">',
    '        <button class="yes" type="button" class="btn btn-primary" data-dismiss="modal">{{yesLabel}}</button>',
    '        <button class="no" type="button" class="btn btn-secondary" data-dismiss="modal">{{noLabel}}</button>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join(''));

  $.DialogBuilder = function (container) {
    this._$elem = jQuery('<div/>').appendTo(jQuery('body'));
  };

  $.DialogBuilder.prototype = {

    confirm: function (message, callback) {
      var result = window.confirm(message);
      callback(result);
    },

    dialog: function (opts) {
      var yes = opts.buttons.yes;
      var no = opts.buttons.no;
      var $newElem = jQuery(template({
        message: opts.message,
        yesLabel: yes.label,
        noLabel: no.label
      }));

      $newElem.find('.yes').click(function () {
        if (typeof yes.callback === 'function') {
          yes.callback();
        }
      });

      $newElem.find('.no').click(function () {
        if (typeof no.callback === 'function') {
          no.callback();
        }
      });

      this._$elem.replaceWith($newElem);
      this._$elem = $newElem;
      this._$elem.modal('show');
    }
  };

})(Mirador);
