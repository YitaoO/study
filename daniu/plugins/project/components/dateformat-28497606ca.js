/*! dateformat v0.0.1 ~ (c) 2012-2016 pzhang@ewaytec.cn ~ http://gitsrv01.ewaytec.cn/frontend-components-team/dateformat.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dateformat"] = factory();
	else
		root["dateformat"] = factory();
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
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, exports, require('./isDate'), require('./format'), require('./formatA'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, mod.exports, global.isDate, global.format, global.formatA);
	        global.index = mod.exports;
	    }
	})(this, function (module, exports, _isDate, _format, _formatA) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _isDate2 = _interopRequireDefault(_isDate);

	    var _format2 = _interopRequireDefault(_format);

	    var _formatA2 = _interopRequireDefault(_formatA);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var dateformat = {
	        isDate: _isDate2.default,
	        format: _format2.default,
	        formatA: _formatA2.default
	    };

	    exports.default = dateformat;
	    module.exports = exports['default'];
	});

/***/ },
/* 1 */
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
	        global.isDate = mod.exports;
	    }
	})(this, function (module, exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    function isDate(obj) {
	        return toString.call(obj) === '[object Date]';
	    }

	    exports.default = isDate;
	    module.exports = exports['default'];
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, exports, require('./isDate'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, mod.exports, global.isDate);
	        global.format = mod.exports;
	    }
	})(this, function (module, exports, _isDate) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _isDate2 = _interopRequireDefault(_isDate);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function format(odate, formatStr) {
	        if (!(0, _isDate2.default)(odate)) {
	            return odate;
	        }

	        var o = {
	            'M+': odate.getMonth() + 1, // 月份
	            'd+': odate.getDate(), // 日
	            'h+': odate.getHours(), // 小时
	            'm+': odate.getMinutes(), // 分
	            's+': odate.getSeconds(), // 秒
	            'q+': Math.floor((odate.getMonth() + 3) / 3), // 季度
	            'S': odate.getMilliseconds() // 毫秒
	        };

	        if (/(y+)/.test(formatStr)) {
	            formatStr = formatStr.replace(RegExp.$1, (odate.getFullYear() + '').substr(4 - RegExp.$1.length));
	        }

	        for (var k in o) {
	            if (new RegExp('(' + k + ')').test(formatStr)) {
	                formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
	            }
	        }

	        return formatStr;
	    }

	    exports.default = format;
	    module.exports = exports['default'];
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, exports, require('./isDate'), require('./format'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, mod.exports, global.isDate, global.format);
	        global.formatA = mod.exports;
	    }
	})(this, function (module, exports, _isDate, _format) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });

	    var _isDate2 = _interopRequireDefault(_isDate);

	    var _format2 = _interopRequireDefault(_format);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function formatA(odate) {
	        if (!(0, _isDate2.default)(odate)) {
	            return odate;
	        }

	        var oy = odate.getFullYear();
	        var om = odate.getMonth() + 1;
	        var od = odate.getDate();

	        var toDate = new Date();
	        var ty = toDate.getFullYear();
	        var tm = toDate.getMonth() + 1;
	        var td = toDate.getDate();

	        var difTimes = toDate.getTime() - odate.getTime();

	        if (oy != ty) {
	            return (0, _format2.default)(odate, 'yyyy-MM-dd');
	        }

	        if (om != tm) {
	            return (0, _format2.default)(odate, 'MM-dd');
	        }

	        if (od != td) {
	            if (td - od == 1) {
	                return '昨天' + (0, _format2.default)(odate, 'hh:mm');
	            }
	            if (td - od == 2) {
	                return '前天' + (0, _format2.default)(odate, 'hh:mm');
	            }
	            return (0, _format2.default)(odate, 'MM-dd');
	        }

	        if (difTimes > 3600000 && difTimes <= 24 * 3600000) {
	            return '今天' + (0, _format2.default)(odate, 'hh:mm');
	        }

	        if (difTimes > 0 && difTimes <= 3600000) {
	            // 计算出相差分钟数
	            var difMin = Math.floor(difTimes / (60 * 1000));
	            if (difMin === 0) {
	                return '刚刚';
	            }

	            return difMin + '分钟前';
	        }
	    }

	    exports.default = formatA;
	    module.exports = exports['default'];
	});

/***/ }
/******/ ])
});
;