let instances = [];

class Logger {
  constructor(logLevel) {
    console.log('Creating Logger instance #' + (instances.length + 1));
    this.DEBUG = 0;
    this.INFO = 1;
    this.WARNING = 2;
    this.ERROR = 3;

    this._logLevel = logLevel || this.DEBUG;
  }

  setLogLevel(logLevel) {
    this._logLevel = logLevel;
  }

  error() {
    const args = ['ERROR'].concat(Array.prototype.slice.call(arguments));
    console.error.apply(console, args);
  }

  warn() {
    const args = ['WARNING'].concat(Array.prototype.slice.call(arguments));
    if (this._logLevel <= this.WARNING) {
      console.warn.apply(console, args);
    }
  }

  info() {
    const args = ['INFO'].concat(Array.prototype.slice.call(arguments));
    if (this._logLevel <= this.INFO) {
      console.info.apply(console, args);
    }
  }

  debug() {
    const args = ['DEBUG'].concat(Array.prototype.slice.call(arguments));
    if (this._logLevel <= this.DEBUG) {
      console.log.apply(console, args);
    }
  }
}

const getLogger = () => {
  if (instances.length === 0) {
    instances.push(new Logger());
  }
  return instances[0];
};

export { getLogger, Logger };
