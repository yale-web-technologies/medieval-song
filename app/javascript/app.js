window.DAMS = {};

import 'mirador-host/extension/main';

export default class App {
  constructor(options) {
    this._state = window.DAMS.state;
    this._miradorSettings = this._state.miradorSettings;
    this._isAdmin = this._state.isAdmin;

    if (this._miradorSettings) {
      this._mirador = this._createMirador(this._miradorSettings);
    }
  }

  _createMirador(settings) {
    return Mirador(settings);
  }
}
