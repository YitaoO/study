/*! dialog v0.1.7 ~ (c) 2012-2016  ~ http://gitlab.ewaytec.cn/frontend-components-team/dialog.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dialog"] = factory();
	else
		root["dialog"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "components/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.submitLoading = exports.showImg = exports.showMsg = exports.reLoading = exports.hideLoading = exports.showLoading = exports.confirm = exports.alert = exports.dialog = undefined;

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _alert = __webpack_require__(8);

	var _alert2 = _interopRequireDefault(_alert);

	var _confirm = __webpack_require__(9);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _loading = __webpack_require__(12);

	var _message = __webpack_require__(13);

	var _message2 = _interopRequireDefault(_message);

	var _image = __webpack_require__(14);

	var _image2 = _interopRequireDefault(_image);

	var _submit = __webpack_require__(15);

	var _submit2 = _interopRequireDefault(_submit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.dialog = _dialog2.default;
	exports.alert = _alert2.default;
	exports.confirm = _confirm2.default;
	exports.showLoading = _loading.showLoading;
	exports.hideLoading = _loading.hideLoading;
	exports.reLoading = _loading.reLoading;
	exports.showMsg = _message2.default;
	exports.showImg = _image2.default;
	exports.submitLoading = _submit2.default; /**
	                                           * 工具 -- 弹出框
	                                           */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(2);

	var _config2 = _interopRequireDefault(_config);

	__webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 先算屏高，避免键盘出来时高度算错
	var _height = document.documentElement.clientHeight;

	function dialog(options) {
	    // 弹出框对象
	    var _dialog = {
	        $el: '',
	        open: function open() {},
	        close: function close() {},
	        destroy: function destroy() {}
	    };

	    _config2.default.container = $('body');
	    // 默认参数
	    var settings = $.extend({}, _config2.default, options);

	    // 创建弹出框元素
	    var _createDialog = function _createDialog() {
	        var _elDialog = $('<div class="dialog"></div>');
	        var _elTitle = $('<div class="dialog-title">' + (settings.title ? settings.title : '') + '</div>');
	        var _elContent = $('<div class="dialog-content"></div>').append(settings.content);
	        var _elControl = $('<ul class="dialog-control"></ul>');

	        _elDialog.append(_elTitle);
	        _elDialog.append(_elContent);

	        if (settings.closeBtn) {
	            _elTitle.append('<a href="#" class="iconClose"></a>');
	        }

	        if (settings.buttons) {
	            $.each(settings.buttons, function (key) {
	                _elControl.append('<li data-key=' + key + '>' + '<a data-key=' + key + '>' + key + '</a>' + '</li>');
	            });
	            _elDialog.append(_elControl);
	        }

	        if (settings.container) {
	            settings.container.append(_elDialog);
	        } else {
	            $('body').append(_elDialog);
	        }

	        _elDialog.css({
	            'width': settings.width,
	            'margin-left': -settings.width / 2,
	            'height': settings.height
	        }).addClass(settings.css);

	        if (settings.height !== 'auto') {
	            _elDialog.css({
	                'top': ($(window).height() - settings.height) / 2
	            });
	        }

	        // 覆盖层
	        var _elOverlay = $('.overlay');
	        var _temp = $('<div class="overlay"></div>');
	        if (_elOverlay.length <= 0) {
	            if (settings.container) {
	                settings.container.append(_temp);
	            } else {
	                $('body').append(_temp);
	            }
	            _elOverlay = $(".overlay");
	        }

	        $('.overlay').css({ width: document.documentElement.clientWidth, height: _height });

	        if (settings.maskOpacity >= 0) {
	            $('.overlay').css('opacity', settings.maskOpacity + ' !important');
	        }

	        if (settings.classFlag) {
	            $('.overlay').addClass(settings.classFlag);
	        }

	        // 关闭按钮
	        _elDialog.find('.iconClose').on('click', function () {
	            _dialog.destroy();
	        });

	        // 按钮点击事件
	        _elControl.on('click', function (e) {
	            var key = $(e.target).attr('data-key');

	            if (key) {
	                var fn = settings.buttons[key];
	                fn.apply(_dialog, arguments);
	                _dialog.destroy();
	            }
	        });

	        // 覆盖层点击事件
	        _elOverlay.on('click', function (e) {
	            if ($.isFunction(settings.maskClick)) {
	                settings.maskClick.apply(_dialog, arguments);
	                _dialog.destroy();
	            }
	        });

	        return _elDialog;
	    };

	    // 初始化
	    var _init = function _init() {
	        _dialog.$el = _createDialog();

	        if ($.isFunction(settings.onReady)) {
	            settings.onReady();
	        }

	        if (settings.autoOpen) {
	            _dialog.open();
	        }
	    };

	    // 弹出弹出框
	    _dialog.open = function () {
	        _dialog.$el.show();
	        if (settings.mask) {
	            $('.overlay').show();
	        }
	        if ($.isFunction(settings.onOpen)) {
	            settings.onOpen();
	        }
	    };

	    // 关闭弹出框
	    _dialog.close = function () {
	        if ($.isFunction(settings.onBeforeClose)) {
	            settings.onBeforeClose();
	        }
	        _dialog.$el.hide();
	        if ($.isFunction(settings.onClose)) {
	            settings.onClose();
	        }
	    };

	    // 销毁弹出框
	    _dialog.destroy = function (callback) {
	        _dialog.$el.find('.dialog-control').off('click');
	        _dialog.$el.find('.overlay').off('click');

	        if (settings.classFlag) {
	            $('.overlay').removeClass(settings.classFlag);
	        }

	        $('.overlay').hide();

	        _dialog.$el.remove();
	        if ($.isFunction(settings.onDestroy)) {
	            settings.onDestroy();
	        }
	        if ($.isFunction(callback)) {
	            callback();
	        }
	    };

	    _init();

	    return _dialog;
	}

	exports.default = dialog;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * 标识class
	   */
	  classFlag: '',
	  /**
	   * @css 样式表
	   * @namespace options
	   */
	  css: 'animated bounceIn',
	  /**
	   * @property {Boolean} [autoOpen=true] 初始化后是否自动弹出
	   * @namespace options
	   */
	  autoOpen: true,
	  /**
	   * @property {Array} [buttons=null] 弹出框上的按钮
	   * @namespace options
	   */
	  buttons: null,
	  /**
	   * @property {Boolean} [closeBtn=true] 是否显示关闭按钮
	   * @namespace options
	   */
	  closeBtn: false,
	  /**
	   * @property {Boolean} [mask=true] 是否有遮罩层
	   * @namespace options
	   */
	  mask: true,
	  /**
	   * @property {Number} [width=300] 弹出框宽度
	   * @namespace options
	   */
	  width: 260,
	  /**
	   * @property {Number|String} [height='auto'] 弹出框高度
	   * @namespace options
	   */
	  height: 'auto',
	  /**
	   * @property {String} [title=null] 弹出框标题
	   * @namespace options
	   */
	  title: null,
	  /**
	   * @property {String} [content=null] 弹出框内容
	   * @namespace options
	   */
	  content: "",
	  /**
	   * @property {Element} [container=null] 弹出框容器
	   * @namespace options
	   */
	  container: null,
	  /**
	   * @property {Function} [maskClick=null] 在遮罩上点击时触发的事件
	   * @namespace options
	   */
	  maskClick: null,
	  /**
	   * @property {Number} [maskOpacity=null] 遮罩的透明度
	   * @namespace options
	   */
	  maskOpacity: null,

	  /**
	   * 用来设置弹出框的位置，如果不另外设置，组件默认为上下左右居中对齐。位置参数接受，数值，百分比，带单位的数值，或者'center'。
	   * 如: 100， 100px, 100em, 10%, center暂时不支持 left, right, top, bottom.
	   */
	  // position: { of: options.container || window, at: 'center', my: 'center' },
	  /**
	   * @event ready
	   * @param {Event} e gmu.Event对象
	   * @description 当组件初始化完后触发。
	   */
	  onReady: null,
	  /**
	   * @event open
	   * @param {Event} e gmu.Event对象
	   * @description 当弹出框弹出后触发
	   */
	  onOpen: null,
	  /**
	   * @event beforeClose
	   * @param {Event} e gmu.Event对象
	   * @description 在弹出框关闭之前触发，可以通过e.preventDefault()来阻止
	   */
	  onBeforeClose: null,
	  /**
	   * @event close
	   * @param {Event} e gmu.Event对象
	   * @description 在弹出框关闭之后触发
	   */
	  onClose: null,
	  /**
	   * @event destroy
	   * @param {Event} e gmu.Event对象
	   * @description 组件在销毁的时候触发
	   */
	  onDestroy: null
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\sass-loader\\index.js!./dialog.scss", function() {
				var newContent = require("!!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\sass-loader\\index.js!./dialog.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.overlay {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6); }\n\n.dialog {\n  position: fixed;\n  z-index: 9999;\n  top: 35%;\n  left: 50%;\n  display: none;\n  overflow: hidden;\n  width: 13rem;\n  margin-left: -6.5rem;\n  border: 1px solid #666;\n  border-radius: 4px;\n  background: #fff; }\n\n.dialog .dialog-title {\n  font-size: .8rem;\n  padding: .4rem .25rem;\n  text-align: left; }\n\n.dialog .dialog-content {\n  font-size: .9rem;\n  font-weight: bold;\n  padding: .75rem .75rem;\n  text-align: left;\n  border-top: 1px solid #e3e3e3;\n  border-bottom: 1px solid #e3e3e3; }\n\n/*--小提示,数据提交加载------*/\n.tips {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 80%;\n  margin: auto;\n  padding: 10px 0;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.6); }\n\n.icon-tips-loading {\n  display: block;\n  width: 31px;\n  height: 31px;\n  margin: 0 auto 10px;\n  background: url(" + __webpack_require__(6) + ") no-repeat;\n  background-size: contain; }\n\n.tips h3 {\n  font-weight: normal;\n  text-align: center;\n  color: #fff;\n  font-size: .7rem; }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/gif;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 弹出框
	function alert(msg, callback) {
	    (0, _dialog2.default)({
	        title: '提示',
	        content: msg,
	        buttons: {
	            '确定': function _() {
	                if ($.isFunction(callback)) {
	                    callback();
	                }
	            }
	        }
	    });
	}

	exports.default = alert;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 弹出确认框
	function confirm(msg, callback) {
	    (0, _dialog2.default)({
	        title: '提示',
	        content: msg,
	        buttons: {
	            '确定': function _() {
	                if ($.isFunction(callback)) {
	                    callback(true);
	                }
	            },
	            '取消': function _() {
	                if ($.isFunction(callback)) {
	                    callback(false);
	                }
	            }
	        }
	    });
	}

	exports.default = confirm;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\sass-loader\\index.js!./confirm.scss", function() {
				var newContent = require("!!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!C:\\Users\\hsu\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\sass-loader\\index.js!./confirm.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".dialog .dialog-control {\n  display: table;\n  box-sizing: border-box;\n  width: 100%; }\n\n.dialog .dialog-control li {\n  display: table-cell;\n  width: 50%;\n  padding: .5rem 0;\n  vertical-align: middle; }\n\n.dialog .dialog-control li:first-child {\n  border-right: 1px solid #e3e3e3; }\n\n.dialog .dialog-control li a {\n  font-size: .9rem;\n  display: block;\n  text-align: center;\n  color: #30b1df; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reLoading = exports.hideLoading = exports.showLoading = undefined;

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isShowLoading = false;

	// 显示加载中
	function showLoading(msg, skin, time) {
	    msg = msg ? msg : '加载中';

	    isShowLoading = true;
	    setTimeout(function () {
	        if (isShowLoading) {
	            var _ela = '<div class="tips">' + '<span class="icon-tips-loading"></span>' + '<h3>' + msg + '</h3>' + '</div>';

	            var _elb = '<div class="loader">\n                    <span class="icon-circle"></span>\n                    <p class="loader-text-wrapper">\n                        <span class="loader-text">' + msg + '</span>\n                    </p>\n                </div>';

	            if (skin === 'a') {
	                $('body').append(_ela);
	                $('.tips').height(60);
	            } else if (document.getElementsByClassName('loader').length < 1) {
	                $('body').append(_elb);
	            }
	        }
	    }, time ? time : 100);
	}

	// 隐藏加载中
	function hideLoading() {
	    isShowLoading = false;
	    $('.loader, .tips').remove();
	}

	//重新加载
	function reLoading() {
	    setTimeout(function () {
	        var ele = '<div class="reload-wrapper font-bold color-dark-grey">' + '<p><i class="icon icon-reload"></i></p>' + '点击屏幕,重新加载' + '</div>';
	        $('body').append(ele);

	        $('.reload-wrapper').on('click', function () {
	            window.location.reload();
	        });
	    }, 0);
	}

	exports.showLoading = showLoading;
	exports.hideLoading = hideLoading;
	exports.reLoading = reLoading;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isShowMsg = false;

	// 显示消息
	function showMsg(msg, time, callback, options) {
	    var effectIn = 'fadeIn'; // 显示特效样式
	    var effectOut = ''; // 隐藏特效样式

	    if (options) {
	        effectIn = options.effectIn || effectIn;
	        effectOut = options.effectOut || effectOut;
	    }

	    // options.single单例模式
	    if (options && options.single && isShowMsg) {
	        return;
	    }

	    isShowMsg = true;

	    $('body').append('<div class="dialog-msg tips animated ' + effectIn + '">' + '<h3>' + msg + '</h3>' + '</div>');

	    $('.dialog-msg').height($('.dialog-msg h3').height());

	    var duration = 2000;

	    // 不管time传的多少，只要消息超过6个字，显示4秒
	    if (msg && msg.length > 6) {
	        time = duration = 4000;
	    }

	    setTimeout(function () {
	        function hide() {
	            $('.dialog-msg').remove();
	            isShowMsg = false;
	            if ($.isFunction(callback)) {
	                callback();
	            }
	        }

	        $('.dialog-msg').removeClass(effectIn);

	        if (effectOut) {
	            $('.dialog-msg').addClass(effectOut);

	            window.setTimeout(function () {
	                hide();
	            }, time ? time : duration);
	        } else {
	            hide();
	        }
	    }, time ? time : duration);
	}

	exports.default = showMsg;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _loading = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 显示大图
	function showImg(url, callback) {
	    (0, _loading.showLoading)('图片加载中', 'a', 500);

	    var $img = $('<img src="' + url + '" style="display:none"></img>');
	    $('body').append($img);

	    $img.on('load', function () {
	        $img.off('load');

	        $img.show();
	        (0, _loading.hideLoading)();

	        var d = (0, _dialog2.default)({
	            width: Math.min($img.width(), $(window).width() - 20),
	            height: Math.min($img.height(), $(window).height() - 20),
	            closeBtn: true,
	            content: $img,
	            css: 'imgView'
	        });

	        // 点击图片关闭
	        $img.on('click', function () {
	            d.destroy();
	        });

	        // 回调
	        if ($.isFunction(callback)) {
	            callback(true, d, '加载成功');
	        }
	    }).on('error', function () {
	        $img.off('load');
	        $img.off('error').remove();
	        $img = null;

	        (0, _loading.hideLoading)();

	        showMsg('图片加载失败', 3000, function () {
	            if ($.isFunction(callback)) {
	                callback(false, null, '加载图片失败');
	            }
	        });
	    });
	}

	exports.default = showImg;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(1);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 提交表单，loading提交中
	function submitLoading(msg) {
	    var submitLoadingDialog = (0, _dialog2.default)({
	        title: null,
	        content: '<div class="tips" id="tips-topic-save" style="position:absolute">' + '<span class="icon-tips-loading"></span>' + '<h3>' + (msg || '提交中') + '</h3>' + '</div>',
	        buttons: null
	    });

	    // 修复样式
	    $('.dialog').css('border', '0');
	    $('.dialog').css('background', 'transparent');
	    $('.dialog-title').css('border', '0');
	    $('.dialog-content').css('border', '0');

	    // 给高度让弹窗垂直居中
	    $('.tips').height(60).css("position", "initial");

	    var duration = 2000;

	    submitLoadingDialog.replaceMsg = function (msg) {
	        // 不管time传的多少，只要消息超过6个字，显示4秒
	        if (msg && msg.length > 6) {
	            duration = 4000;
	        }

	        var _this = this;

	        window.setTimeout(function () {
	            _this.$el.find('#tips-topic-save').html('<h3>' + msg + '</h3>');
	            $('.tips').height($('.tips h3').height());
	        }, 1000);
	    };

	    var oldDestroy = submitLoadingDialog.destroy;
	    submitLoadingDialog.destroy = function (callback) {
	        window.setTimeout(function () {
	            oldDestroy();

	            if ($.isFunction(callback)) {
	                callback();
	            }
	        }, duration);
	    };

	    return submitLoadingDialog;
	}

	exports.default = submitLoading;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;