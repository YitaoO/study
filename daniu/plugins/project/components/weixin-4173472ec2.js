/*! weixin v0.2.1 ~ (c) 2012-2016 pzhang@ewaytec.cn ~ http://gitlab.ewaytec.cn/cust-wicsg-frontend-team/weixin.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weixin"] = factory();
	else
		root["weixin"] = factory();
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

	var _weixin = __webpack_require__(1);

	var _weixin2 = _interopRequireDefault(_weixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var weixinInstance = function weixinInstance(options) {
	    options = options || {};

	    return new _weixin2.default({
	        dataHandler: function dataHandler(url) {
	            if (url) {
	                sessionStorage.setItem('share_url_' + user.id, url);
	            }
	        },

	        getSignature: function getSignature(callback) {
	            return customAjax.get(config.interfaceUrls[0] + '/wechat/get_jsapi_signature', {
	                accountId: user.accountId,
	                url: window.location.href.replace(/#.*/, '')
	            }).done(function (result) {
	                // 接口参数转换
	                callback && callback(result);
	            }).fail(function () {
	                console.log('获取签名信息接口失败');
	            });
	        },

	        jsApiList: options.jsApiList,

	        shareTitle: options.shareTitle,

	        shareIconUrl: options.shareIconUrl,

	        needOAuth2Url: options.needOAuth2Url ? options.needOAuth2Url : true,

	        getOAuth2Url: function getOAuth2Url(shareUrl, callback) {
	            return customAjax.get(config.interfaceUrls[0] + '/wechat/get_share_url', {
	                accountId: user.accountId,
	                url: shareUrl || window.location.href.replace(/#/, '?'), // 分享url
	                type: 'share'
	            }).done(function (result) {
	                // 接口参数转换
	                callback && callback(result);
	            }).fail(function () {
	                console.log('获取鉴权分享url接口失败');
	            });
	        }
	    });
	};

	// 注意，打包到全局变量时的变量名取决于打包工具，目前是weixin
	exports.default = weixinInstance;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! weixin v0.1.9 ~ (c) 2012-2016 pzhang@ewaytec.cn ~ http://gitlab.ewaytec.cn/cap-frontend-team/weixin.git */
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["weixin"] = factory();else root["weixin"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "components/";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _utils = __webpack_require__(1);

				var _utils2 = _interopRequireDefault(_utils);

				var _hideBar = __webpack_require__(2);

				var _hideBar2 = _interopRequireDefault(_hideBar);

				var _hideMenu = __webpack_require__(3);

				var _hideMenu2 = _interopRequireDefault(_hideMenu);

				var _loadJWeixin = __webpack_require__(4);

				var _loadJWeixin2 = _interopRequireDefault(_loadJWeixin);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				var weixin = function weixin(options) {
					this.options = options || {};
				};

				weixin.prototype = {
					hide: function hide() {
						if (!_utils2.default.isWeixin()) {
							return;
						}

						var me = this;

						(0, _hideBar2.default)(me.options.hideBar || true);
						(0, _hideMenu2.default)(me.options.hideMenu || true);
					},

					config: function config(options) {
						var me = this;

						this.options = _utils2.default.extend(me.options, options);

						if (!_utils2.default.isWeixin()) {
							return;
						}

						if (!me.options.getSignature) {
							return;
						}

						var cur_page = location.pathname.replace(/.html/, '').split('/');
						var session_config = 'wx_config_' + user.id + '_' + cur_page[cur_page.length - 1];
						var session_config_url = 'wx_authurl_' + cur_page[cur_page.length - 1] + '_' + user.id;
						var session_config_data = sessionStorage.getItem(session_config);

						try {
							session_config_data = JSON.parse(session_config_data);
						} catch (e) {
							session_config_data = {};
						}

						var session_config_url_data = sessionStorage.getItem(session_config_url);

						var config_data = {
							appId: '',
							timestamp: '',
							noncestr: '',
							signature: ''
						};
						var config_url = {
							authUrl: ''
						};
						//判断是否有缓存session微信配置
						if (session_config_data) {
							var oScript = (0, _loadJWeixin2.default)();
							oScript.onload = function () {
								// 微信api配置
								wx.config({
									debug: false, // 开启调试模式
									appId: session_config_data.appId, // 必填，公众号的唯一标识
									timestamp: session_config_data.timestamp, // 必填，生成签名的时间戳
									nonceStr: session_config_data.noncestr, // 必填，生成签名的随机串
									signature: session_config_data.signature, // 必填，签名，见附录1
									jsApiList: me.options.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
								});

								if (me.options.needOAuth2Url && me.options.getOAuth2Url) {
									//判断是否有缓存当前页面的授权地址
									if (session_config_url_data) {
										wx.ready(function () {
											// 分享朋友圈
											wx.onMenuShareTimeline({
												title: me.options.shareTitle, // 分享标题
												link: session_config_url_data.authUrl, // 分享链接
												imgUrl: me.options.shareIconUrl, // 分享图标
												success: function success() {
													// 用户确认分享后执行的回调函数
													me.options.onMenuShareTimeline && me.options.onMenuShareTimeline();
												},
												cancel: function cancel() {
													// 用户取消分享后执行的回调函数
												}
											});

											// 分享给朋友
											wx.onMenuShareAppMessage({
												title: me.options.shareTitle, // 分享标题
												link: session_config_url_data.authUrl, // 分享链接
												imgUrl: me.options.shareIconUrl, // 分享图标
												success: function success() {
													// 用户确认分享后执行的回调函数
													me.options.onMenuShareAppMessage && me.options.onMenuShareAppMessage();
												},
												cancel: function cancel() {
													// 用户取消分享后执行的回调函数
												}
											});
											// 打开微信菜单
											wx.showOptionMenu();
										});
									} else {
										me.options.getOAuth2Url(me.options.shareUrl, function (result2) {
											if (result2.errcode) {
												console.log('获取授权链接出错');
												return;
											}
											if (result2) {
												if (me.options.dataHandler) {
													me.options.dataHandler(result2.authUrl);
												}
												if (!session_config_url_data) {
													config_url.authUrl = result2.authUrl;
													sessionStorage.setItem(session_config_url, JSON.stringify(config_url));
												}
												wx.ready(function () {
													// 分享朋友圈
													wx.onMenuShareTimeline({
														title: me.options.shareTitle, // 分享标题
														link: result2.authUrl, // 分享链接
														imgUrl: me.options.shareIconUrl, // 分享图标
														success: function success() {
															// 用户确认分享后执行的回调函数
															me.options.onMenuShareTimeline && me.options.onMenuShareTimeline();
														},
														cancel: function cancel() {
															// 用户取消分享后执行的回调函数
														}
													});

													// 分享给朋友
													wx.onMenuShareAppMessage({
														title: me.options.shareTitle, // 分享标题
														link: result2.authUrl, // 分享链接
														imgUrl: me.options.shareIconUrl, // 分享图标
														success: function success() {
															// 用户确认分享后执行的回调函数
															me.options.onMenuShareAppMessage && me.options.onMenuShareAppMessage();
														},
														cancel: function cancel() {
															// 用户取消分享后执行的回调函数
														}
													});

													// 打开微信菜单
													wx.showOptionMenu();
												});
											}
										});
									}
								} else {
									wx.ready(function () {
										var link = void 0;

										if (me.options.shareUrl) {
											link = me.options.shareUrl.replace(/#/, '?');
										} else {
											window.location.href.replace(/#/, '?');
										}

										// 分享朋友圈
										wx.onMenuShareTimeline({
											title: me.options.shareTitle || document.title, // 分享标题
											link: link,
											imgUrl: me.options.shareIconUrl, // 分享图标
											success: function success() {
												// 用户确认分享后执行的回调函数
												me.options.onMenuShareTimeline && me.options.onMenuShareTimeline();
											},
											cancel: function cancel() {
												// 用户取消分享后执行的回调函数
											}
										});

										// 分享给朋友
										wx.onMenuShareAppMessage({
											title: me.options.shareTitle || document.title, // 分享标题
											link: link,
											imgUrl: me.options.shareIconUrl, // 分享图标
											success: function success() {
												// 用户确认分享后执行的回调函数
												me.options.onMenuShareAppMessage && me.options.onMenuShareAppMessage();
											},
											cancel: function cancel() {
												// 用户取消分享后执行的回调函数
											}
										});

										// 打开微信菜单
										wx.showOptionMenu();
									});
								}
							};
							oScript.onerror = function () {
								console.log('微信jssdk脚本加载失败');
							};
							return;
						}
						// 获取签名信息接口
						me.options.getSignature(function (result) {
							if (result.errcode) {
								console.log('获取签名信息接口');
								return;
							}
							// 加载jssdk
							var oScript = (0, _loadJWeixin2.default)();

							oScript.onload = function () {
								// 微信api配置
								wx.config({
									debug: false, // 开启调试模式
									appId: result.appId, // 必填，公众号的唯一标识
									timestamp: result.timestamp, // 必填，生成签名的时间戳
									nonceStr: result.noncestr, // 必填，生成签名的随机串
									signature: result.signature, // 必填，签名，见附录1
									jsApiList: me.options.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
								});
								//设置session
								config_data.appId = result.appId;
								config_data.timestamp = result.timestamp;
								config_data.noncestr = result.noncestr;
								config_data.signature = result.signature;
								sessionStorage.setItem(session_config, JSON.stringify(config_data));
								if (me.options.needOAuth2Url && me.options.getOAuth2Url) {
									me.options.getOAuth2Url(me.options.shareUrl, function (result2) {
										if (result2.errcode) {
											console.log('获取授权链接出错');
											return;
										}
										if (result2) {
											if (me.options.dataHandler) {
												me.options.dataHandler(result2.authUrl);
											}
											//设置当前页的授权链接缓存
											if (!session_config_url_data) {
												config_url.authUrl = result2.authUrl;
												sessionStorage.setItem(session_config_url, JSON.stringify(config_url));
											}
											wx.ready(function () {
												// 分享朋友圈
												wx.onMenuShareTimeline({
													title: me.options.shareTitle, // 分享标题
													link: result2.authUrl, // 分享链接
													imgUrl: me.options.shareIconUrl, // 分享图标
													success: function success() {
														// 用户确认分享后执行的回调函数
														me.options.onMenuShareTimeline && me.options.onMenuShareTimeline();
													},
													cancel: function cancel() {
														// 用户取消分享后执行的回调函数
													}
												});

												// 分享给朋友
												wx.onMenuShareAppMessage({
													title: me.options.shareTitle, // 分享标题
													link: result2.authUrl, // 分享链接
													imgUrl: me.options.shareIconUrl, // 分享图标
													success: function success() {
														// 用户确认分享后执行的回调函数
														me.options.onMenuShareAppMessage && me.options.onMenuShareAppMessage();
													},
													cancel: function cancel() {
														// 用户取消分享后执行的回调函数
													}
												});

												// 打开微信菜单
												wx.showOptionMenu();
											});
										}
									});
								} else {
									wx.ready(function () {
										var link = void 0;

										if (me.options.shareUrl) {
											link = me.options.shareUrl.replace(/#/, '?');
										} else {
											window.location.href.replace(/#/, '?');
										}

										// 分享朋友圈
										wx.onMenuShareTimeline({
											title: me.options.shareTitle || document.title, // 分享标题
											link: link,
											imgUrl: me.options.shareIconUrl, // 分享图标
											success: function success() {
												// 用户确认分享后执行的回调函数
												me.options.onMenuShareTimeline && me.options.onMenuShareTimeline();
											},
											cancel: function cancel() {
												// 用户取消分享后执行的回调函数
											}
										});

										// 分享给朋友
										wx.onMenuShareAppMessage({
											title: me.options.shareTitle || document.title, // 分享标题
											link: link,
											imgUrl: me.options.shareIconUrl, // 分享图标
											success: function success() {
												// 用户确认分享后执行的回调函数
												me.options.onMenuShareAppMessage && me.options.onMenuShareAppMessage();
											},
											cancel: function cancel() {
												// 用户取消分享后执行的回调函数
											}
										});

										// 打开微信菜单
										wx.showOptionMenu();
									});
								}
							};

							oScript.onerror = function () {
								console.log('微信jssdk脚本加载失败');
							};
						});
					}
				};

				exports.default = weixin;
				module.exports = exports['default'];

				/***/
			},
			/* 1 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var utils = {};

				utils.isWeixin = function () {
					var agent = window.navigator.userAgent.toLowerCase();

					if (agent.match('micromessenger')) {
						return true;
					} else {
						return false;
					}
				};

				/**
	    * name: extend
	    * description: 将参数二的每个第一级字段赋值给参数一，并返回一个新的对象，并不改变参数一
	    *
	    * @params [target] [json]
	    * @params [obj]    [json]
	    *
	    * @return [json]
	    */
				utils.extend = function (target, obj) {
					var result = target;

					for (var i in obj) {
						result[i] = obj[i];
					}

					return result;
				};

				exports.default = utils;
				module.exports = exports['default'];

				/***/
			},
			/* 2 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				function hideBar(hide) {
					if (typeof wx == 'undefined') {
						return;
					}
					if (hide) {
						wx.hideToolbar();
					}
				}

				exports.default = hideBar;
				module.exports = exports['default'];

				/***/
			},
			/* 3 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				function hideMenu(hide) {

					if (typeof wx == 'undefined') {
						return;
					}

					if (hide) {
						wx.hideOptionMenu();
					}
				}

				exports.default = hideMenu;
				module.exports = exports['default'];

				/***/
			},
			/* 4 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				function loadJWeixin() {
					// 插入微信api的js代码
					var oHead = document.getElementsByTagName('head').item(0);
					var oScript = document.createElement('script');
					oScript.type = 'text/javascript';
					oScript.src = 'components/jweixin-0081c76172.js';
					oHead.appendChild(oScript);

					return oScript;
				}

				exports.default = loadJWeixin;
				module.exports = exports['default'];

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;