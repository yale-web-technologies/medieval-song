import MiradorController from './mirador-controller';
export default class App {
  constructor(options) {
    this._state = options.state;
    this._miradorController = new MiradorController({
      state: this._state
    });
  }

  get miradorProxy() {
    return this._miradorController.miradorProxy;
  }
}