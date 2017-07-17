/*! customAjax v0.1.6 ~ (c) 2012-2016 pzhang@ewaytec.cn ~ http://gitlab.ewaytec.cn/cap-frontend-team/custom-ajax.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["customAjax"] = factory();
	else
		root["customAjax"] = factory();
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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _config = __webpack_require__(1);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var customAjax = function customAjax(options) {
	    options = options || {};

	    this.options = $.extend({}, _config2.default, options);
	};

	customAjax.prototype = {
	    promise: null,

	    get: function get(url, params, callback, options) {
	        this.clear();

	        this.type = 'get';
	        this.url = url;

	        if (options && options.ajaxType == 'greed' && this.promise && this.promise.readyState !== 4) {
	            this.promise.abort();
	        }

	        var opts = this.prepare(params, callback, options);

	        if (options && options.ajaxType == 'greed') {
	            this.promise = $.ajax(opts);
	            return this.promise;
	        } else {
	            return $.ajax(opts);
	        }
	    },

	    post: function post(url, params, callback, options) {
	        this.clear();

	        this.type = 'post';
	        this.url = url;

	        if (options && options.ajaxType == 'singleton' && this.promise && this.promise.state() === 'pending') {
	            return;
	        }

	        var opts = this.prepare(params, callback, options);

	        if (options && options.ajaxType == 'singleton') {
	            this.promise = $.ajax(opts);
	            return this.promise;
	        } else {
	            return $.ajax(opts);
	        }
	    },

	    prepare: function prepare(params, callback, options) {
	        var me = this;

	        // callback为json时赋值给options
	        if ((typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) == "object" && Object.prototype.toString.call(callback).toLowerCase() == "[object object]" && !callback.length) {
	            options = callback;
	        }

	        if (me.options && me.options.prefix) {
	            me.url = me.options.prefix(me.url);
	        }

	        me.async = options && options.async == false ? false : true;

	        // 请求参数xss过滤
	        var paramsStr = this.filterXSS(JSON.stringify(params));
	        params = JSON.parse(paramsStr);

	        var maxError = this.maxError(options);

	        var currentIndex = 0;

	        var opts = {
	            type: me.type,
	            url: me.url,
	            data: me.type === 'get' ? params : paramsStr,
	            dataType: 'json',
	            async: me.async,
	            contentType: 'application/json',
	            timeout: me.options.timeout,
	            cache: false,
	            context: $('body'),
	            success: function success(data) {
	                if (data) {
	                    var dataStr = JSON.stringify(data);
	                    data = JSON.parse(dataStr);
	                }

	                if (typeof callback === 'function') {
	                    callback(true, data, '调用成功');
	                }
	            },
	            error: function error(context, xhr, type, _error) {
	                var data = context.response || '';

	                if (data.indexOf(me.refreshKey) > 0) {
	                    var token = data.substr(data.indexOf('>') + 1, data.lastIndexOf('<') - data.indexOf('>') - 1);
	                    if (token) {
	                        options.refreshToken && options.refreshToken(token);

	                        if (typeof callback === 'function') {
	                            window.setTimeout(function () {
	                                return $.ajax(opts);
	                            }, 2000);
	                        }
	                    }
	                } else {
	                    if (typeof callback === 'function') {
	                        currentIndex++;
	                        if (currentIndex < maxError) {
	                            window.setTimeout(function () {
	                                return $.ajax(opts);
	                            }, 2000);
	                        } else {
	                            callback(false, '调用出错', xhr);
	                        }
	                    }
	                }
	            }
	        };

	        $.extend(opts, options);

	        return opts;
	    },

	    filterXSS: function (_filterXSS) {
	        function filterXSS(_x) {
	            return _filterXSS.apply(this, arguments);
	        }

	        filterXSS.toString = function () {
	            return _filterXSS.toString();
	        };

	        return filterXSS;
	    }(function (str) {
	        if (typeof filterXSS !== 'function') {
	            console.warn('filterXSS is not a function');
	            return str;
	        } else {
	            return filterXSS(str);
	        }
	    }),

	    maxError: function maxError(options) {
	        var maxError = options && options.maxError ? options.maxError : this.type == 'get' ? this.options.maxError : 1;
	        if (maxError == this.options.maxError && options && options.ajaxType == 'greed') {
	            maxError = 1;
	        }

	        return maxError;
	    },

	    clear: function clear() {
	        this.type = '', this.url = '', this.params = {}, this.callback = null;
	    }
	};

	exports.default = customAjax;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"maxError": 5,
		"timeout": 30000,
		"refreshKey": "RefreshToken"
	};

/***/ }
/******/ ])
});
;