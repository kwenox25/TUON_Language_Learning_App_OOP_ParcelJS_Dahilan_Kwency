// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/modules/burgermenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.burgerMenu = burgerMenu;
function burgerMenu() {
  var button = document.querySelector("#button");
  var burgerCon = document.querySelector("#burger-con");
  function hamburgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
  }
  button.addEventListener("click", hamburgerMenu, false);
}
},{}],"js/modules/scrolltrigger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTrigger = scrollTrigger;
function scrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  var navLinks = document.querySelectorAll("#main-header nav ul li a");
  function scrollLink(e) {
    e.preventDefault();
    console.log(e.currentTarget.hash);
    var selectedLink = e.currentTarget.hash;
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: "".concat(selectedLink),
        offsetY: 100
      }
    });
  }
  navLinks.forEach(function (link) {
    link.addEventListener("click", scrollLink);
  });
  console.log("scroll to working");
  var imageAnimation = gsap.from("#why-tuon-con img", {
    opacity: 0,
    x: 100,
    stagger: 0.3,
    duration: 3,
    ease: "power4.out"
  });
  ScrollTrigger.create({
    trigger: "#why-tuon-con",
    animation: imageAnimation,
    start: "top 80%",
    once: true
  });
}
},{}],"js/modules/language.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tagalog = exports.Spanish = exports.Nihongo = exports.Italian = exports.Hangul = exports.French = void 0;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Spanish = exports.Spanish = /*#__PURE__*/function () {
  function Spanish() {
    _classCallCheck(this, Spanish);
    this.translations = {
      hi: "Hola",
      goodMorning: "Buenos días",
      goodNight: "Buenas noches",
      iLoveYou: "Te quiero",
      sorry: "Lo siento",
      thankyou: "Gracias",
      excuseMe: "Perdón"
    };
  }
  _createClass(Spanish, [{
    key: "translate",
    value: function translate(key) {
      if (this.translations[key]) {
        return this.translations[key];
      } else {
        return "Translation not available for \"".concat(key, "\" in Spanish");
      }
    }
  }]);
  return Spanish;
}();
var French = exports.French = /*#__PURE__*/function (_Spanish) {
  _inherits(French, _Spanish);
  function French() {
    var _this;
    _classCallCheck(this, French);
    _this = _callSuper(this, French);
    _this.translations = {
      hi: "Bonjour",
      goodMorning: "Bonjour",
      goodNight: "Bonne nuit",
      iLoveYou: "Je t'aime",
      sorry: "Désolé",
      thankyou: "Merci",
      excuseMe: "Excusez-moi"
    };
    return _this;
  }
  return _createClass(French);
}(Spanish);
var Tagalog = exports.Tagalog = /*#__PURE__*/function (_Spanish2) {
  _inherits(Tagalog, _Spanish2);
  function Tagalog() {
    var _this2;
    _classCallCheck(this, Tagalog);
    _this2 = _callSuper(this, Tagalog);
    _this2.translations = {
      hi: "Kamusta",
      goodMorning: "Magandang umaga",
      goodNight: "Magandang gabi",
      iLoveYou: "Mahal kita",
      sorry: "Pasensya na",
      thankyou: "Salamat",
      excuseMe: "Paumanhin"
    };
    return _this2;
  }
  return _createClass(Tagalog);
}(Spanish);
var Nihongo = exports.Nihongo = /*#__PURE__*/function (_Spanish3) {
  _inherits(Nihongo, _Spanish3);
  function Nihongo() {
    var _this3;
    _classCallCheck(this, Nihongo);
    _this3 = _callSuper(this, Nihongo);
    _this3.translations = {
      hi: "Konnichiwa",
      goodMorning: "Ohayou gozaimasu",
      goodNight: "Oyasumi nasai",
      iLoveYou: "Aishiteru",
      sorry: "Sumimasen",
      thankyou: "Arigatou gozaimasu",
      excuseMe: "Gomen nasai"
    };
    return _this3;
  }
  return _createClass(Nihongo);
}(Spanish);
var Hangul = exports.Hangul = /*#__PURE__*/function (_Spanish4) {
  _inherits(Hangul, _Spanish4);
  function Hangul() {
    var _this4;
    _classCallCheck(this, Hangul);
    _this4 = _callSuper(this, Hangul);
    _this4.translations = {
      hi: "Annyeonghaseyo",
      goodMorning: "Annyeonghaseyo",
      goodNight: "Annyeonghi jumuseyo",
      iLoveYou: "Saranghae",
      sorry: "Mianhamnida",
      thankyou: "Gamsahamnida",
      excuseMe: "Silryehabnida"
    };
    return _this4;
  }
  return _createClass(Hangul);
}(Spanish);
var Italian = exports.Italian = /*#__PURE__*/function (_Spanish5) {
  _inherits(Italian, _Spanish5);
  function Italian() {
    var _this5;
    _classCallCheck(this, Italian);
    _this5 = _callSuper(this, Italian);
    _this5.translations = {
      hi: "Ciao",
      goodMorning: "Buongiorno",
      goodNight: "Buona notte",
      iLoveYou: "Ti amo",
      sorry: "Mi dispiace",
      thankyou: "Grazie",
      excuseMe: "Scusi"
    };
    return _this5;
  }
  return _createClass(Italian);
}(Spanish);
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _burgermenu = require("./modules/burgermenu.js");
var _scrolltrigger = require("./modules/scrolltrigger.js");
var _language = require("./modules/language.js");
if (document.body.getAttribute("data-page") === "home") {
  (0, _burgermenu.burgerMenu)();
  (0, _scrolltrigger.scrollTrigger)();
} else if (document.body.getAttribute("data-page") === "languageSelection") {
  var languageSelection = new _language.Spanish();
  var languageList = document.querySelector("#languageList");
  var greetingsList = document.querySelector("#greetingsList");
  languageList.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG" || e.target.tagName === "P") {
      var selectedLanguage = e.target.closest("li").querySelector("p").textContent.toLowerCase();
      if (selectedLanguage === "french") {
        languageSelection = new _language.French();
      } else if (selectedLanguage === "tagalog") {
        languageSelection = new _language.Tagalog();
      } else if (selectedLanguage === "nihongo") {
        languageSelection = new _language.Nihongo();
      } else if (selectedLanguage === "hangul") {
        languageSelection = new _language.Hangul();
      } else if (selectedLanguage === "italian") {
        languageSelection = new _language.Italian();
      } else {
        languageSelection = new _language.Spanish();
      }
      renderGreetings();
    }
  });
  function renderGreetings() {
    greetingsList.innerHTML = "";
    var translations = languageSelection.translations;
    for (var key in translations) {
      if (Object.hasOwnProperty.call(translations, key)) {
        var li = document.createElement("li");
        li.textContent = "".concat(key, ": \"").concat(translations[key], "\"");
        greetingsList.appendChild(li);
      }
    }
  }
  console.log("OOP working");
  renderGreetings();
}
},{"./modules/burgermenu.js":"js/modules/burgermenu.js","./modules/scrolltrigger.js":"js/modules/scrolltrigger.js","./modules/language.js":"js/modules/language.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52311" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map