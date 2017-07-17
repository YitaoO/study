/*! praise v0.0.7 ~ (c) 2012-2017 pzhang@waytec.cn ~ http://gitlab.ewaytec.cn/cap-frontend-team/praise.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["praise"] = factory();
	else
		root["praise"] = factory();
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
/***/ function(module, exports) {

	'use strict';

	// 验证参数
	function checkOptions(options) {
	    options = options || {};

	    if (options.customAjax && typeof options.customAjax.post !== 'function') {
	        throw '没有自定义的ajax方法：options.customAjax ';
	    }

	    if (!options.url) {
	        throw '没有url地址：options.url';
	    }

	    if (!options.errTips) {
	        options.errTips = '点赞失败，请重试';
	    }

	    return options;
	}

	// 更新列表和详情数据
	function updateDate(settings, id) {
	    var result = void 0;

	    if (settings.list && ls.has(settings.list)) {
	        ls.getFirst(settings.list, 'id=' + Number(id), function (stauts, data) {
	            result = data;
	        });

	        if (result) {
	            result.praiseStatus = 1;

	            ls.partsave(settings.list, 'id', [{
	                id: Number(id),
	                praiseStatus: result.praiseStatus,
	                praiseNum: Number(result.praiseNum) + 1
	            }], function () {
	                result = null;
	            });
	        }
	    }

	    if (settings.detail && ls.has(settings.detail)) {
	        result = ls.get(settings.detail);

	        if (result) {
	            result.praiseStatus = 1;
	            result.praiseNum = Number(result.praiseNum) + 1;
	            ls.set(settings.detail, result);
	        }
	    }
	}

	// 更新ui
	function updateUI(ele) {
	    $(this).addClass('active');

	    var num = Number($(ele).find('.praise-num').html());

	    $(ele).find('.praise-num').html(num + 1);
	}

	$.fn.praise = function (options) {
	    var settings = checkOptions(options);

	    this.each(function (index, ele) {
	        ele.onclick = function () {
	            // TODO 是否能取消点赞

	            if (this.className.indexOf('active') > -1) {
	                this.lock = true;
	                return;
	            }

	            // 锁定
	            if (this.lock) {
	                return;
	            }

	            this.lock = true;
	            $(this).addClass('active');

	            var me = this;
	            var id = this.getAttribute('data-id');

	            if (!id) {
	                console.error('没有id');
	            } else {
	                (function () {
	                    var unLock = function unLock() {
	                        dialog.showMsg(settings.errTips, null, function () {
	                            me.lock = false;
	                            $(me).removeClass('active');
	                        });
	                    };

	                    var data = settings.data && settings.data(me) || {
	                        id: id
	                    };

	                    settings.customAjax.post(settings.url, data).done(function (result) {
	                        // 点赞不成功解锁
	                        if (!result || result.errcode != 0) {
	                            unLock();

	                            return;
	                        }

	                        // 点赞成功，更新列表数据和详情数据
	                        updateDate(settings, id);

	                        // 更新UI
	                        updateUI(me);
	                    }).fail(function () {
	                        unLock();
	                    });
	                })();
	            }
	        };
	    });
	};

/***/ }
/******/ ])
});
;