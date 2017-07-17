/*! tabs v0.0.3 ~ (c) 2012-2017 zszhang@ewaytec.c ~ http://gitlab.ewaytec.cn/frontend-components-team/tabs.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tabs"] = factory();
	else
		root["tabs"] = factory();
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

	var _core = __webpack_require__(1);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _core2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _config = __webpack_require__(2);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                          	组件入口
	                                                                                                                                                          */


	var tabs = function tabs(options) {
		_classCallCheck(this, tabs);

		this.options = $.extend(true, {}, _config2.default, options);

		this.validate();

		this.init();
	};

	$.extend(tabs.prototype, {
		// 验证参数
		validate: function validate() {

			if (!this.options.container) {
				throw '缺少容器参数';
			}
		},

		// 初始化
		init: function init() {

			var me = this;

			if (this.options.active) {
				$(this.options.active).addClass('active').siblings().removeClass('active');
				me.options.callback && me.options.callback($(this.options.active));
			}

			$(this.options.container).each(function (index, value) {

				$(this).not('.onClick').addClass('onClick').click(function () {
					if (!$(this).hasClass('active')) {
						$(this).addClass('active').siblings().removeClass('active');
						me.options.callback && me.options.callback($(this));
					}
				});
			});

			if (!$(this.options.container).hasClass('active')) {
				$(this.options.container).eq(0).addClass('active');
				me.options.callback && me.options.callback($(this.options.container).eq(0));
			}
		},

		// 设置当前下标
		set: function set(ele, callback) {

			ele.addClass('active').siblings().removeClass('active');

			callback && callback();
		}
	});

	exports.default = tabs;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/*
		配置文件
	*/

	var options = {
		// 初始化active
		active: '',
		// tabs外部容器
		container: '',
		// 回调
		callback: function callback(ele) {}

	};

	exports.default = options;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;