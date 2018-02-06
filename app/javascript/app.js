window.DAMS = {};

import 'mirador-host/extension/main';
import SideColumn from 'widgets/side-column';

export default class App {
  constructor(options) {
    this._state = window.DAMS.state;
    this._miradorSettings = this._state.miradorSettings;
    this._miradorProxyManager =
    this._isAdmin = this._state.isAdmin;

    if (this._miradorSettings) {
      this._miradorProxy = this._createMirador(this._miradorSettings);
      if (this._witnessLinksPresent()) {
        this._songInstanceSideColumn = this._setupSideColumn();
      }
    }
  }

  get miradorProxy() {
    console.log('GET ', this._miradorProxy);
    return this._miradorProxy;
  }

  _createMirador(settings) {
    const mirador = Mirador(settings);
    const miradorProxy = window.MiradorProxy.getMiradorProxyManager().addMirador(1, mirador);
    return miradorProxy;
  }

  _setupSideColumn() {
    const col = new SideColumn({ onWitnessSelect: (manifestId, canvasId) => {
      this._miradorProxy.addWindow({ manifestId, canvasId });
    }});
  }

  _witnessLinksPresent() {
    return jQuery('a.dams-song-instance-link').size() > 0;
  }
}
