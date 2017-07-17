/*! audio v0.0.9 ~ (c) 2012-2017 jbyan@ewaytec.cn ~ http://gitlab.ewaytec.cn/frontend-components-team/audio.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
	exports.audio = undefined;

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _audioCore = __webpack_require__(2);

	var _audioCore2 = _interopRequireDefault(_audioCore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function audio(option) {
	    var isMoveState = false,
	        movePlaySec = 0;

	    var settings = $.extend(_index2.default, option);

	    $(settings.content).append(settings.queueTemplate);
	    var audioInstance = new _audioCore2.default(settings);
	    $(audioInstance.audio).on('onMetaData', function (e, totalTime) {
	        $(settings.totalTime).text(totalTime);
	    });

	    // 播放推进
	    $(audioInstance.audio).on('onTimeUpdate', function (e, playedPercent, formatTimeText, totalTimeText, formatTime, totalTime) {
	        if (!isMoveState) {
	            $(settings.speed).css('width', playedPercent + '%');
	            $(settings.currentTime).text(formatTimeText);
	            $(settings.totalTime).text(totalTimeText);
	            if (settings.loop && settings.loop == false || !settings.loop) {
	                if (totalTime - 1 < formatTime) {
	                    $(settings.btnId).addClass('icon-stop').removeClass('icon-play');
	                    audioInstance.audio.pause();
	                }
	            } else {
	                if (totalTime - 1 < formatTime) {
	                    audioInstance.audio.play();
	                }
	            }
	        }
	    });

	    // 加载进度
	    $(audioInstance.audio).on('onProgress', function (e, percent) {
	        if (percent > 100) {
	            percent = 100;
	        }
	        $(settings.persent).css('width', percent + '%');
	    });

	    // 暂停/播放
	    $(settings.btnId).on('click', function () {
	        function loadPlay() {
	            if (audioInstance.audio && audioInstance.audio.readyState === 0) {
	                audioInstance.audio.load();

	                setTimeout(function () {
	                    loadPlay();
	                }, 200);
	            } else if (audioInstance.audio && audioInstance.audio.readyState != 0) {
	                if (audioInstance.audio.currentTime > audioInstance.audio.duration - 1) {
	                    audioInstance.audio.currentTime = 0;
	                }
	                if (audioInstance.status == 'play') {
	                    $(settings.btnId).addClass('icon-stop').removeClass('icon-play');
	                    $(audioInstance.audio).trigger('audioPlay', audioInstance.audio);
	                    audioInstance.audio.pause();
	                } else {
	                    $(settings.btnId).addClass('icon-play').removeClass('icon-stop');
	                    audioInstance.audio.play();
	                    $(audioInstance.audio).trigger('audioStop');
	                }
	            }
	        }

	        loadPlay();
	    });

	    // 拖动
	    $(settings.drag).on('touchmove', function (e) {
	        if (audioInstance.audio && audioInstance.audio.readyState != 0) {
	            e.preventDefault();
	            isMoveState = true;
	            var left = e.changedTouches[0].clientX - $(settings.wrap).offset().left;
	            var movePercent = (left / $(settings.wrap).width() * 100).toFixed(6);
	            if (left >= $(settings.wrap).width()) {
	                movePercent = 99.99;
	            } else if (left <= 0) {
	                movePercent = 0.01;
	            }
	            movePlaySec = audioInstance.audio.duration * movePercent / 100;
	            $(settings.speed).css('width', movePercent + '%');
	            $(settings.currentTime).text(audioInstance.formatSec(movePlaySec));

	            $(audioInstance.audio).trigger('moveOn');
	        }
	    }).on('touchend', function () {
	        if (audioInstance.audio && audioInstance.audio.readyState != 0) {
	            isMoveState = false;
	            audioInstance.progress(movePlaySec);
	            if (audioInstance.status == 'play') {
	                setTimeout(function () {
	                    audioInstance.audio.play();
	                }, 50);
	            }
	            $(audioInstance.audio).trigger('moveEnd');
	        }
	    });

	    this.core = audioInstance;
	}

	exports.audio = audio;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"btnId": "#control",
		"id": "audio",
		"drag": "#drag",
		"speed": "#speed",
		"totalTime": "#totalTime",
		"currentTime": "#currentTime",
		"wrap": "#progress-bar-wrap",
		"persent": "#load-persent-bar",
		"content": "#audio-content",
		"autoplay": false
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! audioCore v0.0.4 ~ (c) 2012-2016 jbyan@ewaytec.cn ~ http://gitsrv01.ewaytec.cn/frontend-components-team/audio-core.git */
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["audioCore"] = factory();else root["audioCore"] = factory();
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
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var audioCore = function audioCore(settings) {
					this.audio = null;
					this.list = null; //播放列表
					this.index = 0;
					this.timeFormat = 0; //时间格式
					this.loadPercent = 0;
					this.status = 'pause'; //播放状态

					this.init(settings);

					if (this.audio) {
						this.loadIndex(this.index);
					}

					return this;
				};

				audioCore.prototype = {
					//初始化
					init: function init(settings) {
						this.audio = document.getElementById(settings.id);
						this.timeFormat = settings.timeFormat || 0;
						this.list = settings.list || [];
						this.loop = settings.loop || false;
						this.autoplay = settings.autoplay || false;
						this.bindEvents();
					},
					bindEvents: function bindEvents() {
						if (this.audio) {
							this.audio.addEventListener('timeupdate', this.onTimeUpdate.bind(this), false);
							this.audio.addEventListener('play', this.onPlay.bind(this), false);
							this.audio.addEventListener('pause', this.onPause.bind(this), false);
							this.audio.addEventListener('canplay', this.onCanPlay.bind(this), false);
							this.audio.addEventListener('loadedmetadata', this.onMetaData.bind(this), false);
						}
					},
					onMetaData: function onMetaData() {
						var totalTime = this.formatSec(this.audio.duration);
						$(this.audio).trigger('onMetaData', totalTime);
					},
					onPlay: function onPlay() {
						this.status = 'play';
					},
					onPause: function onPause() {
						this.status = 'pause';
					},
					onCanPlay: function onCanPlay() {
						this.seekable = this.audio.seekable && this.audio.seekable.length > 0;
						if (this.seekable) {
							this.timer = setInterval(this.onProgress.bind(this), 500);
						}
					},
					onProgress: function onProgress() {
						if (this.audio && this.audio.buffered !== null && this.audio.buffered.length) {
							this.loadPercent = (this.audio.buffered.end(this.audio.buffered.length - 1) / this.audio.duration * 100).toFixed(4);
							if (isNaN(this.loadPercent)) {
								this.loadPercent = 0;
							}
							if (this.loadPercent >= 100) {
								this.clearLoadProgress();
							}
							$(this.audio).trigger('onProgress', this.loadPercent);
						}
					},
					//进度条
					progress: function progress(sec) {
						if (sec) {
							this.audio.pause();
							this.audio.currentTime = sec;
							//this.audio.play();
						} else {
							return this.audio.currentTime;
						}
					},
					//清除进度条
					clearLoadProgress: function clearLoadProgress() {
						if (this.timer !== undefined) {
							clearInterval(this.timer);
						}
					},
					loadIndex: function loadIndex(index) {
						if (this.list[index]) {
							this.load(this.list[index].url);
							this.index = index;
						}
					},
					formatSec: function formatSec(second) {
						var _min, _sec;
						_min = parseInt(second / 60);
						_sec = parseInt(second % 60);
						return (_min >= 10 ? _min : '0' + _min) + ':' + (_sec >= 10 ? _sec : '0' + _sec);
					},
					reset: function reset() {
						this.clearLoadProgress();
					},
					//播放推进
					onTimeUpdate: function onTimeUpdate() {
						var formatTime, playedPercent;
						if (this.timeFormat == 0) {
							formatTime = this.audio.currentTime;
						} else {
							formatTime = this.audio.duration - this.audio.currentTime;
						}
						playedPercent = (this.audio.currentTime / this.audio.duration * 100).toFixed(6);
						$(this.audio).trigger('onTimeUpdate', [playedPercent, this.formatSec(formatTime), this.formatSec(this.audio.duration), formatTime, this.audio.duration]);
					},
					load: function load(url) {
						this.reset();
						this.audio.src = url;
						if (this.loop) {
							this.audio.loop = 'loop';
						}
						if (this.autoplay) {
							this.audio.autoplay = 'autoplay';
							this.status = 'play';
						}

						this.audio.load();
					}
				};

				exports.default = audioCore;
				module.exports = exports['default'];

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
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