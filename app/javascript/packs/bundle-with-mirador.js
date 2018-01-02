import App from 'app';

window.DAMS = {
  state: {}
};

($ => {
  jQuery(document).ready(() => {
    $.app = new App();
  });
})(window.DAMS);
