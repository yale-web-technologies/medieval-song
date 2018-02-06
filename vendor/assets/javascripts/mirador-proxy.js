// mirador-proxy v0.1.1-0-g7ce76c2 built Tue Feb 06 2018 14:27:14 GMT-0500 (EST)


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getLogger;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getLogger() {
  if (!instance) {
    instance = new Logger();
  }
  return instance;
}

var instance = null;

var Logger = function () {
  function Logger(logLevel) {
    _classCallCheck(this, Logger);

    this.DEBUG = 0;
    this.INFO = 1;
    this.WARNING = 2;
    this.ERROR = 3;

    this._logLevel = logLevel || this.INFO;
  }

  _createClass(Logger, [{
    key: 'setLogLevel',
    value: function setLogLevel(logLevel) {
      this._logLevel = logLevel;
    }
  }, {
    key: 'error',
    value: function error() {
      var _console;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).error.apply(_console, ['ERROR'].concat(args));
    }
  }, {
    key: 'warning',
    value: function warning() {
      if (this._logLevel <= this.WARNING) {
        var _console2;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_console2 = console).warn.apply(_console2, ['WARNING'].concat(args));
      }
    }
  }, {
    key: 'info',
    value: function info() {
      if (this._logLevel <= this.INFO) {
        var _console3;

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        (_console3 = console).info.apply(_console3, ['INFO'].concat(args));
      }
    }
  }, {
    key: 'debug',
    value: function debug() {
      if (this._logLevel <= this.DEBUG) {
        var _console4;

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        (_console4 = console).log.apply(_console4, ['DEBUG'].concat(args));
      }
    }
  }]);

  return Logger;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var WindowProxy = function () {
  function WindowProxy(window) {
    _classCallCheck(this, WindowProxy);

    //logger.debug('WindowProxy#constructor window:', window);
    this.window = window;
  }

  /**
   * ID of the window
   */


  _createClass(WindowProxy, [{
    key: 'getWindowId',
    value: function getWindowId() {
      return this.window.id;
    }
  }, {
    key: 'getManifest',
    value: function getManifest() {
      return this.window.manifest;
    }
  }, {
    key: 'getManifestUri',
    value: function getManifestUri() {
      return this.window.manifest.uri;
    }
  }, {
    key: 'getCurrentCanvasId',
    value: function getCurrentCanvasId() {
      return this.window.canvasID;
    }
  }, {
    key: 'getCurrentCanvas',
    value: function getCurrentCanvas() {
      var canvases = this.getCanvases();
      var canvasId = this.getCurrentCanvasId();
      var matches = canvases.filter(function (canvas) {
        return canvas['@id'] === canvasId;
      });
      return matches[0];
    }
  }, {
    key: 'setCurrentCanvasId',
    value: function setCurrentCanvasId(canvasId, options) {
      //logger.debug('WindowProxy#setCurrentCanvasId canvasId:', canvasId, 'options', options);
      this.window.setCurrentCanvasID(canvasId, options);
    }
  }, {
    key: 'getImageView',
    value: function getImageView() {
      return this.window.focusModules.ImageView;
    }

    /**
     * Annotation endpoint
     */

  }, {
    key: 'getEndPoint',
    value: function getEndPoint() {
      return this.window.endpoint;
    }
  }, {
    key: 'getCanvases',
    value: function getCanvases() {
      return this.window.manifest.getCanvases();
    }
  }, {
    key: 'getAnnotationsList',
    value: function getAnnotationsList() {
      return this.window.annotationsList;
    }
  }, {
    key: 'getSvgOverlay',
    value: function getSvgOverlay() {
      var drawTool = this.getDrawTool();
      return drawTool ? drawTool.svgOverlay : null;
    }
  }, {
    key: 'getDrawTool',
    value: function getDrawTool() {
      var imageView = this.getImageView();
      return imageView ? imageView.annotationsLayer.drawTool : null;
    }
  }, {
    key: 'getSidePanel',
    value: function getSidePanel() {
      return this.window.sidePanel;
    }

    /**
     * @param {*} klass CSS class for the root element of sidebar content (child of .tabContentArea)
     */

  }, {
    key: 'getSidePanelTabContentElement',
    value: function getSidePanelTabContentElement(klass) {
      return this.getSidePanel().element.find('.tabContentArea > .' + klass);
    }
  }]);

  return WindowProxy;
}();

exports.default = WindowProxy;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _workspaceProxy = __webpack_require__(3);

var _workspaceProxy2 = _interopRequireDefault(_workspaceProxy);

var _windowProxy = __webpack_require__(1);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var MiradorProxy = function () {
  function MiradorProxy(mirador, id) {
    _classCallCheck(this, MiradorProxy);

    this._mirador = mirador;
    this._workspaceProxy = null;
    this._id = id;
    this._ignoredEvents = new Set();
  }

  // Proxy ID. Mirador instance currently doesn't have an ID.


  _createClass(MiradorProxy, [{
    key: 'getId',
    value: function getId() {
      return this._id;
    }

    // Lazy call because workspace is set up asynchronously.

  }, {
    key: 'getWorkspaceProxy',
    value: function getWorkspaceProxy() {
      if (!this._workspaceProxy) {
        this._workspaceProxy = new _workspaceProxy2.default(this._mirador.viewer.workspace);
      }
      return this._workspaceProxy;
    }
  }, {
    key: 'getWindowProxies',
    value: function getWindowProxies() {
      return this.getWorkspaceProxy().getWindowProxies();
    }
  }, {
    key: 'getWindowProxyById',
    value: function getWindowProxyById(windowId) {
      return new _windowProxy2.default(this.getWindowById(windowId));
    }
  }, {
    key: 'getWindowById',
    value: function getWindowById(windowId) {
      //logger.debug('MiradorProxy#getWindowById windowId:', windowId);
      return this.getWorkspaceProxy().getWindowById(windowId);
    }
  }, {
    key: 'publish',
    value: function publish() {
      var eventEmitter = this._mirador.eventEmitter;
      var args = Array.from(arguments);
      eventEmitter.publish.apply(eventEmitter, args);
    }
  }, {
    key: 'subscribe',
    value: function subscribe(eventName, handler) {
      //logger.debug('MiradorProxy#subscribe', eventName, handler);
      this._mirador.eventEmitter.subscribe(eventName, handler);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(eventName, handler) {
      //logger.debug('MiradorProxy#unsubscribe', eventName, handler);
      this._mirador.eventEmitter.unsubscribe(eventName, handler);
    }
  }, {
    key: 'shouldIgnoreEvent',
    value: function shouldIgnoreEvent(eventName) {
      return this._ignoredEvents.has(eventName);
    }
  }, {
    key: 'markEventToBeIgnored',
    value: function markEventToBeIgnored(eventName) {
      this._ignoredEvents.add(eventName);
    }
  }, {
    key: 'unmarkEventToBeIgnored',
    value: function unmarkEventToBeIgnored(eventName) {
      this._ignoredEvents.delete(eventName);
    }
  }, {
    key: 'addWindow',
    value: function addWindow(params) {
      var workspace = this.getWorkspaceProxy().getWorkspace();
      var emptySlot = workspace.getAvailableSlot();

      if (!emptySlot) {
        var slots = workspace.slots;
        var baseSlot = slots[slots.length - 1];
        this.publish('SPLIT_RIGHT', baseSlot);
      }

      var windowConfig = {
        loadedManifest: params.manifestId,
        canvasID: params.canvasId
      };
      this.publish('ADD_WINDOW', windowConfig);
    }
  }]);

  return MiradorProxy;
}();

exports.default = MiradorProxy;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _windowProxy = __webpack_require__(1);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WorkspaceProxy = function () {
  function WorkspaceProxy(workspace) {
    _classCallCheck(this, WorkspaceProxy);

    this.logger = (0, _logger2.default)();
    this.workspace = workspace;
  }

  _createClass(WorkspaceProxy, [{
    key: 'getWorkspace',
    value: function getWorkspace() {
      return this.workspace;
    }
  }, {
    key: 'getWindowProxies',
    value: function getWindowProxies() {
      return this.workspace.windows.map(function (window) {
        return new _windowProxy2.default(window);
      });
    }
  }, {
    key: 'getWindowById',
    value: function getWindowById(windowId) {
      var _this = this;
      var windows = this.workspace.windows.filter(function (window) {
        //_this.logger.debug('WorkspaceProxy#getWindowById current window:', window);
        return window.id === windowId;
      });
      var numWindows = windows.length;
      if (numWindows > 1) {
        this.logger.error('MiradorProxy#getWindowById: more than one (' + numWindows + ') found for id: ' + windowId);
      }
      return numWindows > 0 ? windows[0] : null;
    }
  }]);

  return WorkspaceProxy;
}();

exports.default = WorkspaceProxy;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _miradorProxyManager = __webpack_require__(5);

var _miradorProxyManager2 = _interopRequireDefault(_miradorProxyManager);

var _miradorProxy = __webpack_require__(2);

var _miradorProxy2 = _interopRequireDefault(_miradorProxy);

var _windowProxy = __webpack_require__(1);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

var _workspaceProxy = __webpack_require__(3);

var _workspaceProxy2 = _interopRequireDefault(_workspaceProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.MiradorProxy = {
  getMiradorProxyManager: _miradorProxyManager2.default,
  MiradorProxy: _miradorProxy2.default,
  WindowProxy: _windowProxy2.default,
  WorkspaceProxy: _workspaceProxy2.default
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _miradorProxy = __webpack_require__(2);

var _miradorProxy2 = _interopRequireDefault(_miradorProxy);

var _windowProxy = __webpack_require__(1);

var _windowProxy2 = _interopRequireDefault(_windowProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = (0, _logger2.default)();

var MiradorProxyManager = function () {
  function MiradorProxyManager() {
    _classCallCheck(this, MiradorProxyManager);

    // Mirador instance doesn't have an ID. The ID here is conferred by
    // the MiradorProxyManager.
    this._miradorProxiesMap = {}; // Mirador instances { id: miradorInstance }
  }

  _createClass(MiradorProxyManager, [{
    key: 'addMirador',
    value: function addMirador(miradorId, mirador) {
      //logger.debug('MiradorProxyManager#addMirador', mirador);
      var miradorProxy = this._miradorProxiesMap[miradorId];
      if (miradorProxy) {
        throw 'MiradorProxyManager#addMirador duplicate ID ' + miradorId;
      } else {
        miradorProxy = new _miradorProxy2.default(mirador, miradorId);
        this._miradorProxiesMap[miradorId] = miradorProxy;
      }
      return miradorProxy;
    }
  }, {
    key: 'getMiradorProxies',
    value: function getMiradorProxies() {
      return Object.values(this._miradorProxiesMap);
    }
  }, {
    key: 'getMiradorProxy',
    value: function getMiradorProxy(miradorId) {
      //logger.debug('MiradorProxyManager#getMiradorProxy miradorId:', miradorId, 'proxies:', this._miradorProxiesMap);
      return this._miradorProxiesMap[miradorId] || null;
    }
  }, {
    key: 'getMiradorProxyByWindowId',
    value: function getMiradorProxyByWindowId(windowId) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(this._miradorProxiesMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var miradorProxy = _step.value;

          var window = miradorProxy.getWindowById(windowId);
          if (window) {
            return miradorProxy;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }

    /**
     * @returns {WindowProxy[]} a list of window proxies for all windows in all Mirador instances
     */

  }, {
    key: 'getAllWindowProxies',
    value: function getAllWindowProxies() {
      var windowProxies = [];

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.values(this._miradorProxiesMap)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var miradorProxy = _step2.value;

          windowProxies = windowProxies.concat(miradorProxy.getWindowProxies());
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return windowProxies;
    }
  }, {
    key: 'getWindowProxyById',
    value: function getWindowProxyById(windowId) {
      //logger.debug('MiradorProxyManager#getWindowProxyById windowId:', windowId);
      var window = this.getWindowById(windowId);
      return window ? new _windowProxy2.default(window) : null;
    }
  }, {
    key: 'getWindowById',
    value: function getWindowById(windowId) {
      //logger.debug('MiradorProxyManager#getWindowById windowId:', windowId);
      var window = null;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.values(this._miradorProxiesMap)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var miradorProxy = _step3.value;

          window = miradorProxy.getWindowById(windowId);
          if (window) {
            return window;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return null;
    }
  }, {
    key: 'getCurrentCanvasIdByWindowId',
    value: function getCurrentCanvasIdByWindowId(windowId) {
      var windowProxy = this.getWindowProxyById(windowId);
      if (windowProxy) {
        return windowProxy.getCurrentCanvasId();
      } else {
        return null;
      }
    }

    // XXX This works because only one Mirador window is assumed.
    // It should be refactored later.

  }, {
    key: 'anyId',
    value: function anyId() {
      return Object.keys(this._miradorProxies)[0];
    }

    // Subscribe to the same event from all Mirador instances

  }, {
    key: 'subscribe',
    value: function subscribe(eventName, callback) {
      //logger.debug('MiradorProxyManager#subscribe ', eventName, callback);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.values(this._miradorProxiesMap)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var miradorProxy = _step4.value;

          miradorProxy.subscribe(eventName, callback);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }]);

  return MiradorProxyManager;
}();

var instance = null;

function getMiradorProxyManager(destroyOld) {
  if (!instance || destroyOld) {
    instance = new MiradorProxyManager();
  }
  return instance;
};

exports.default = getMiradorProxyManager;


Mirador.getMiradorProxyManager = getMiradorProxyManager; // to be called from Mirador core.

/***/ })
/******/ ]);