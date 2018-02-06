/**
 * Code for the column on the right side of Mirador in a "Song Instance" view.
 */
export default class SideColumn {
  constructor(options) {
    const _this = this;
    this._notifyWitnessSelect = options.onWitnessSelect;

    const links = jQuery('a.dams-song-instance-link');

    links.click(function (event) {
      event.preventDefault();
      const $link = jQuery(this);
      _this._notifyWitnessSelect($link.data('manifest-id'), $link.data('canvas-id'));
    });
  }
}
