(function ($) {

    $.Selector = function (options) {
      this._$select = options.$selectElem;
      this._$options = this._$select.find('option');
      this._selectDefault();
    };

    $.Selector.prototype = {

      select: function (value) {
        var _this = this;

        this._$options.each(function (index, option) {
          var $option = jQuery(option);
          if ($option.val() === value) {
            $option.toggleClass('selected', true);
          } else {
            $option.toggleClass('selected', false);
          }
        });
      },

      _selectDefault: function () {
        var $selected = this._$select.find('option:selected');
        if ($selected.size() === 0) {
          jQuery(this._$options[0]).attr('selected', 'selected'); // select first item
        }
      }
    };

  })(window.DAMS);
