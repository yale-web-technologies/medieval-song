import App from 'app';

window.DAMS = {
  state: {}
};

($ => {
  jQuery(document).ready(() => {
    $.app = new App({
      state: window.DAMS.state
    });
  });
})(window.DAMS);
