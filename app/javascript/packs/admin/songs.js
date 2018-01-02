(function ($) {
    var setup = function () {
      if (jQuery('#author').size() > 0) {
        var authorSelector = new $.Selector({
          $selectElem: jQuery('#author')
        });
      }
    };

    jQuery(document).ready(function () {
      setup();
    });

  })(window.DAMS);
