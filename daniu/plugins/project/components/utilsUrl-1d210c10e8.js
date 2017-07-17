/*! utilsUrl v0.0.1 ~ (c) 2012-2016 pzhang@ewaytec.cn ~ http://gitsrv01.ewaytec.cn/frontend-components-team/utils-url.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utilsUrl"] = factory();
	else
		root["utilsUrl"] = factory();
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

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, exports);
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, mod.exports);
	        global.index = mod.exports;
	    }
	})(this, function (module, exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    var inited = false;
	    var cache = {};

	    var url = {
	        prepare: function prepare() {
	            var href = window.location.href;

	            var queryString = '';
	            if (href.lastIndexOf('?') > -1) {
	                queryString = window.location.search.split('?')[1];
	            } else {
	                queryString = window.location.hash.split('#')[1];
	            }

	            if (queryString) {
	                var pairs = queryString.split('&');
	                for (var i = 0, len = pairs.length; i < len; i++) {
	                    var key = pairs[i].substring(0, pairs[i].indexOf('='));
	                    var value = pairs[i].substring(pairs[i].indexOf('=') + 1);
	                    cache[key] = value;
	                }
	            }

	            var pathname = window.location.pathname;
	            var strs = pathname.split('/');
	            this.name = strs[strs.length - 2];
	            this.pagename = strs[strs.length - 1].split('.')[0];

	            inited = true;
	        },

	        query: function query(name) {
	            if (!inited) {
	                url.prepare();
	            }

	            return cache[name];
	        }
	    };

	    exports.default = url;
	    module.exports = exports['default'];
	});

/***/ }
/******/ ])
});
;