(function ($) {

  var setup = function () {
    if (jQuery('#song-list').size() > 0) {
      var listSelector = new $.ListSelector({
        $rootElem: jQuery('#song-list'),
        $formElem: jQuery('#manuscript-form'),
        addLabel: 'Add song',
        formFieldId: 'song_ids'
      });
    }
  };

  jQuery(document).ready(function () {
    setup();
  });

})(window.DAMS);
