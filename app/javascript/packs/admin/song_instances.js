(function ($) {
  var setup = function () {
    if (jQuery('#verse-form').size() > 0) {
      var verseFormSelector = new $.Selector({
        $selectElem: jQuery('#verse-form')
      });
    }
  };

  jQuery(document).ready(function () {
    console.log('song_instances.js');
    setup();
  });

})(window.DAMS);
