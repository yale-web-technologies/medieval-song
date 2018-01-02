(function ($) {

  var listItemTemplate = Handlebars.compile([
    '<li class="list-group-item" data-id="{{id}}">',
    '  <span class="label">{{label}}</span><i class="delete fa fa-remove"></i>',
    '</li>'
   ].join(''));

  var dropdownTemplate = Handlebars.compile([
    '<div class="dropdown">',
    '  <button class="btn btn-secondary dropdown-toggle"',
    '    type="button" data-toggle="dropdown"',
    '    aria-haspopup="true" aria-expanded="false">',
    '    {{buttonText}}',
    '  </button>',
    '  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">',
    '    {{#each items}}',
    '      <a class="dropdown-item" href="javascript:void(0)" data-id="{{this.id}}">{{this.label}}></a>',
    '    {{/each}}',
    '  </div>',
    '</div>'
  ].join(''));

  $.ListSelector = function (options) {
    this._addLabel = options.addLabel,
    this._$rootElem = options.$rootElem;
    this._$formElem = options.$formElem;

    this._$listElem = jQuery('<ul/>');
    this._initList();
    this._$dropdown = this._createDropdown();
    this._$formField = this._createField(options.formFieldId);

    this._$rootElem.append(this._$listElem);
    this._$rootElem.append(this._$dropdown);
    this._$formElem.append(this._$formField);

    this._bindEvents();

    console.log('ListSelector rootElem:', this._$rootElem, 'listElem:', this._$listElem);
  };

  $.ListSelector.prototype = {

    _initList: function () {
      console.log('ListSelector#_initList');
      var _this = this;

      var $dataItems = this._$rootElem.find('.initial-items .item');
      console.log('dataItems:', $dataItems);

      $dataItems.each(function (index, value) {
        var $dataItem = jQuery(value);
        _this._addItem($dataItem.data('id'), $dataItem.data('label'));
      });
    },

    _createDropdown: function () {
      var items = [];
      this._$rootElem.find('.all-items .item').each(function (index, value) {
        $item = jQuery(value);
        items.push({ id: $item.data('id'), label: $item.data('label') });
      });

      var $dropdown = jQuery(dropdownTemplate({
        buttonText: this._addLabel,
        items: items
      }));

      return $dropdown;
    },

    /**
     * Create hidden field for the list
     */
    _createField: function (fieldId) {
      return jQuery('<input/>')
        .val('[]')
        .attr('type', 'hidden')
        .attr('name', 'song_ids');
    },

    _listHasItem: function (id) {
      var found = false;
      this._$listElem.find('.list-group-item').each(function (index, value) {
        $item = jQuery(value);
        if ($item.data('id') === id) {
          found = true;
          return false;
        }
      });
      return found;
    },

    _addItem: function (id, label) {
      console.log('ListSelector#_addItem', id, label);
      if (!this._listHasItem(id)) {
        var itemHtml = listItemTemplate({ id: id, label: label });
        var $item = jQuery(itemHtml);

        $item.find('.delete').click(function (event) {
          $item.remove();
        });
        this._$listElem.append($item);
      }
    },

    _bindEvents: function () {
      var _this = this;

      this._$dropdown.find('.dropdown-item').click(function (event) {
        var $ddItem = jQuery(this);
        var id = $ddItem.data('id');
        var label = $ddItem.text();

        event.preventDefault();
        _this._addItem(id, label);
      });

      this._$formElem.submit(function (event) {
        var songIds = [];
        _this._$listElem.find('.list-group-item').each(function (index, value) {
          $item = jQuery(value);
          songIds.push($item.data('id'));
        });
        _this._$formField.val(JSON.stringify(songIds));
      });
    }
  };

})(window.DAMS);
