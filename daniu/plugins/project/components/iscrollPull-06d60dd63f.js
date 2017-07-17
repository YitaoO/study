/*! iscrollPull v0.2.1 ~ (c) 2012-2017 pzhang@ewaytec.cn ~ http://gitlab.ewaytec.cn/frontend-components-team/iscroll-pull.git */
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
	exports.iscrollPull = undefined;

	var _factory = __webpack_require__(1);

	var _factory2 = _interopRequireDefault(_factory);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function iscrollPull(selector, options) {
	    this.factory = new _factory2.default();
	    return this.factory.create(selector, options);
	}

	exports.iscrollPull = iscrollPull;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(8);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var factory = function () {
	    function factory() {
	        _classCallCheck(this, factory);
	    }

	    _createClass(factory, [{
	        key: 'create',
	        value: function create(selector, options) {
	            var result = void 0;

	            switch (options.probeType) {
	                case 3:
	                    result = new _index4.default(selector, options);
	                    break;
	                case 2:
	                    result = new _index2.default(selector, options);
	                    break;
	                default:

	            }

	            return result;
	        }
	    }]);

	    return factory;
	}();

	exports.default = factory;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(3);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _core2.default; // 核心模块

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _probe2 = __webpack_require__(4);

	var _probe3 = _interopRequireDefault(_probe2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var probe2 = function (_probe) {
	    _inherits(probe2, _probe);

	    function probe2(selector, options) {
	        _classCallCheck(this, probe2);

	        return _possibleConstructorReturn(this, (probe2.__proto__ || Object.getPrototypeOf(probe2)).call(this, selector, options));
	    }

	    return probe2;
	}(_probe3.default);

	$.extend(probe2.prototype, {
	    bindEvent: function bindEvent() {
	        var me = this;

	        me.lastY = 0;

	        this.myScroll.on('beforeScrollStart', function () {
	            this.refresh();
	        });

	        this.myScroll.on('refresh', function () {
	            this.lock = true;

	            // 滚动到pull-down-bar下边缘
	            this.minScrollY = me.enableDown ? -me.downEle.offsetHeight : 0;

	            // 当pull-down-bar处于加载中
	            if (me.downEle && me.downEle.className.match('loading')) {
	                me.downEle.className = 'pullDown';
	                me.downEle.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
	            }

	            // 当pull-up-bar处于加载中
	            if (me.upEle && me.upEle.className.match('loading')) {
	                me.upEle.className = 'pullUp';
	                me.upEle.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
	            }

	            this.lock = false;
	        });

	        this.myScroll.on('scrollStart', function () {
	            // 更新时间
	            if (me.options.updateTimeKey) {
	                var time = localStorage.getItem(me.options.updateTimeKey);
	                me.updateTime(time);
	            }
	        });

	        // 因为每秒调用一次，所以要格外注意性能
	        this.myScroll.on('scroll', function () {
	            if (this.lock) return false;

	            if (me.downEle) {
	                if (this.y > me.options.pullThreshold && !me.downEle.className.match('flip')) {
	                    // 下拉超过门槛，添加标志类flip
	                    this.minScrollY = 0; // 重置minScrollY=0，避免加载中时滚动条被隐藏
	                    me.downEle.className = 'pullDown flip';
	                    me.downEle.querySelector('.pullDownLabel').innerHTML = '释放刷新';
	                } else if (this.y < me.options.pullThreshold && me.downEle.className.match('flip')) {
	                    // 下拉未超过门槛，删除标志类flip
	                    me.downEle.className = 'pullDown';
	                    me.downEle.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
	                }
	            }

	            if (me.upEle) {
	                var uplimit = Math.abs(this.maxScrollY) < window.innerHeight ? this.maxScrollY - me.options.pullThreshold : this.maxScrollY + window.innerHeight * 2;

	                if (this.y < uplimit && !me.upEle.className.match('flip')) {
	                    // 上拉超过门槛，添加标志类flip
	                    me.upEle.className = 'pullUp flip';
	                    me.upEle.querySelector('.pullUpLabel').innerHTML = '释放加载更多';
	                } else if (this.y > this.maxScrollY && me.upEle.className.match('flip')) {
	                    // 取消上拉刷新，删除标志类flip
	                    me.upEle.className = 'pullUp';
	                    me.upEle.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
	                }
	            }
	        });

	        this.myScroll.on('scrollEnd', function () {
	            if (this.lock) return false;

	            // 下拉超过门槛(有标志类flip)，添加加载中标志类loading，调用onDownAction方法
	            if (me.downEle && me.downEle.className.match('flip')) {
	                me.downEle.className = 'pullDown loading';
	                me.downEle.querySelector('.pullDownLabel').innerHTML = '加载中...';
	                if (me.enableDown) {
	                    me.options.onDownAction.call(me);
	                }
	            }

	            // 上拉超过门槛(有标志类flip)，添加加载中标志类loading，调用onUpAction方法
	            if (me.upEle && me.upEle.className.match('flip')) {
	                me.upEle.className = 'pullUp loading';
	                me.upEle.querySelector('.pullUpLabel').innerHTML = '加载中...';
	                if (me.enableUp) {
	                    this.lock = true;
	                    setTimeout(function () {
	                        me.options.onUpAction.call(me);
	                    }, 0); //  添加setTimeout，才会显示'加载中...'
	                }
	            }
	        });

	        this.myScroll.touchmovePreventDefault = function (e) {
	            e.preventDefault();
	        };

	        // 当触屏滑动时，阻止其他事件
	        document.addEventListener('touchmove', this.myScroll.touchmovePreventDefault, false);
	    }

	});

	exports.default = probe2;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(5);

	var _core2 = _interopRequireDefault(_core);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 核心模块
	exports.default = _core2.default;
	// 事件模块

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 滚动条模式，基类
	var probe =
	// 构造函数
	function probe(selector, options) {
	        _classCallCheck(this, probe);

	        this.options = $.extend(true, {}, _config2.default, options);

	        this.init(selector);
	};

	$.extend(probe.prototype, {
	        init: function init(selector) {
	                if (!selector) {
	                        throw 'no selector';
	                }

	                var me = this;

	                // 获取容器
	                this.wrapperEle = document.querySelector(selector);

	                if (!this.wrapperEle) {
	                        throw 'no wrapper element';
	                }

	                this.scrollerEle = this.wrapperEle.children[0];

	                if (!this.scrollerEle) {
	                        throw 'no scroller element';
	                }

	                this.downHtmlClass = 'pullDown';
	                this.upHtmlClass = 'pullUp';

	                // 清理当前滚动区域的下拉
	                $(selector).find('.' + this.downHtmlClass).remove();

	                // 添加上拉下拉元素
	                if (this.options.onDownAction && me.options.downHtml) {
	                        $(this.scrollerEle).prepend($(me.options.downHtml)[0]);
	                        this.downEle = $(this.wrapperEle).find('.' + this.downHtmlClass)[0];
	                }

	                // 清理当前滚动区域的上拉
	                $(selector).find('.' + this.upHtmlClass).remove();

	                if (this.options.onUpAction && me.options.upHtml) {
	                        this.scrollerEle.appendChild($(me.options.upHtml)[0]);
	                        this.upEle = $(this.wrapperEle).find('.' + this.upHtmlClass)[0];
	                }

	                // 清理当前滚动区域的滚动指示器
	                $('.iScrollVerticalScrollbar').remove();

	                this.downHeight = $('.' + this.downHtmlClass).height();
	                this.upHeight = $('.' + this.upHtmlClass).height();

	                // 给容器添加自定义类
	                $(this.wrapperEle).addClass(this.options.custom);

	                // 初始化IScroll
	                this.myScroll = new IScroll(this.wrapperEle, this.options);
	                // 绑定IScroll事件
	                this.bindEvent && this.bindEvent();

	                this.wrapperTop = $(selector).offset().top;
	                this.wrapperBottom = this.wrapperTop + $(selector).height();

	                // 回调加载事件
	                setTimeout(function () {
	                        me.options.onLoaded.call(me);
	                }, 0);
	        },

	        /**
	         * 更新刷新时间
	         *
	         * @param date 时间，秒或毫秒
	         */
	        updateTime: function updateTime(date) {
	                if (!date || typeof dateformat === 'undefined' || !parseInt(date)) {
	                        return;
	                }

	                var me = this;

	                var dateString = dateformat.formatA(new Date(parseInt(date)));

	                if (dateString) {
	                        $('.pullDownTime', me.downEle).html('最近更新时间: ' + dateString);
	                }
	        },

	        set: function set(options) {
	                this.options = $.extend(true, {}, _config2.default, options);
	        }
	});

	exports.default = probe;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    // 拉动刷新门槛：下拉超过pull-down-bar的距离，或者上拉超过pull-up-bar的距离，才会触发刷新
	    pullThreshold: 10,

	    // 下拉元素
	    downHtml:
	    // 约定类名必须是pullDown
	    '<div class="pullDown">' + '<span class="pullDownIcon"></span>' + '<span class="pullDownLabel">下拉刷新</span>' + '<span class="pullDownTime">最近更新时间: 刚刚</span>' + '</div>',
	    // 下拉元素
	    upHtml:
	    // 约定类名必须是pullUp
	    '<div class="pullUp">' + '<span class="pullUpIcon"></span>' + '<span class="pullUpLabel">上拉加载更多</span>' + '</div>',

	    // IScroll配置
	    probeType: 2,
	    bounceTime: 500,
	    bounceEasing: '',
	    mouseWheel: false,
	    // 激活滚动条，自定义样式
	    scrollbars: 'custom',
	    // 滚动条淡入淡出
	    fadeScrollbars: true,
	    // 滚动条是否可交互
	    interactiveScrollbars: false,
	    // 滚动条尺寸基于容器和滚动区域的宽/高的比例改变
	    resizeScrollbars: true,
	    // 到达容器的外面时，滚动条缩小尺寸
	    shrinkScrollbars: 'clip',
	    // 开启click事件
	    click: false,

	    // 自定义类
	    custom: 'scrollerWrapper'
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _core = __webpack_require__(5);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$.extend(_core2.default.prototype, {
	    // 停止上拉
	    stopUp: function stopUp() {
	        this.enableUp = false; // 禁止上拉

	        if (this.upEle) {
	            this.upEle.style.display = 'none';
	        }

	        return this;
	    },

	    // 重启上拉
	    restUp: function restUp() {
	        this.enableUp = true;

	        if (this.upEle) {
	            this.upEle.style.display = 'block';
	        }

	        return this;
	    },

	    // 停止下拉
	    stopDown: function stopDown() {
	        this.enableDown = false;

	        if (this.downEle) {
	            this.downEle.style.display = 'none';
	        }

	        return this;
	    },

	    // 重启下拉
	    restDown: function restDown() {
	        this.enableDown = true;

	        if (this.downEle) {
	            this.downEle.style.display = 'block';
	        }

	        return this;
	    },

	    // 隐藏wrapper
	    hideWrapper: function hideWrapper() {
	        // 使用修改left的方法，避免bug
	        this.wrapperEle.style.left = '9000px';

	        return this;
	    },

	    // 显示wrapper
	    showWrapper: function showWrapper() {
	        // 使用修改left的方法，避免bug
	        this.wrapperEle.style.left = '0px';

	        return this;
	    },

	    // 更新数据，pull-down-bar显示加载中
	    beginUpdate: function beginUpdate() {
	        if (this.downEle) {
	            this.downEle.className = 'pullDown loading';
	            this.downEle.querySelector('.pullDownLabel').innerHTML = '加载中...';
	        }
	    },

	    // 完成更新数据，pull-down-bar隐藏加载中
	    endUpdate: function endUpdate() {
	        if (this.downEle) {
	            this.downEle.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
	        }
	    }
	}); /**
	     * 事件模块
	     */

	// 引入核心模块

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(9);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _core2.default; // 核心模块

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _probe2 = __webpack_require__(4);

	var _probe3 = _interopRequireDefault(_probe2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var probe3 = function (_probe) {
	    _inherits(probe3, _probe);

	    function probe3(selector, options) {
	        _classCallCheck(this, probe3);

	        var _this = _possibleConstructorReturn(this, (probe3.__proto__ || Object.getPrototypeOf(probe3)).call(this, selector, options));

	        _this.cacheList = {};

	        if (!options.pagename) {
	            options.pagename = 'temp';
	        }

	        _this.cacheList[options.pagename] = [];
	        return _this;
	    }

	    return probe3;
	}(_probe3.default);

	$.extend(probe3.prototype, {
	    bindEvent: function bindEvent() {
	        var me = this;

	        // 上次y轴位置
	        me.lastY = 0;

	        this.myScroll.on('refresh', function () {
	            this.lock = true;

	            // 滚动到pull-down-bar下边缘
	            this.minScrollY = me.enableDown ? -me.downEle.offsetHeight : 0;

	            if (me.downEle && me.downEle.className.match('loading')) {
	                $(me.downEle).removeClass('loading').find('.pullDownLabel').html('下拉刷新');
	            }

	            if (me.upEle && me.upEle.className.match('loading')) {
	                $(me.upEle).removeClass('loading').find('.pullUpLabel').html('上拉加载更多');
	            }

	            this.lock = false;
	        });

	        this.myScroll.on('scrollStart', function () {
	            // 更新时间
	            if (me.options.updateTimeKey) {
	                var time = localStorage.getItem(me.options.updateTimeKey);
	                me.updateTime(time);
	            }

	            // 上次y轴位置
	            me.lastY = this.y;
	        });

	        // 因为每秒调用一次，所以要格外注意性能
	        this.myScroll.on('scroll', function (touch) {
	            me.currentY = this.y;

	            if (this.y < -me.downHeight) {
	                // 隐藏不在屏幕范围内的元素
	                me.hideEle(me.currentY - me.lastY);
	            }

	            me.lastY = me.currentY;

	            if (this.lock) return false;

	            if (this.directionY == -1) {
	                // 下拉刷新

	                if (this.y > me.options.pullThreshold) {
	                    // 重置minScrollY=0，避免加载中时滚动条被隐藏
	                    this.minScrollY = 0;
	                    $(me.downEle).addClass('flip').find('.pullDownLabel').html('释放刷新');
	                }

	                // 取消上拉刷新
	                if (typeof touch === 'undefined' && this.y < this.maxScrollY && me.upEle.className.match('flip')) {
	                    $(me.upEle).removeClass('flip').find('.pullUpLabel').html('上拉加载更多');
	                }
	            } else if (this.directionY == 1) {
	                // 上拉刷新
	                var uplimit = this.maxScrollY - me.options.pullThreshold;

	                if (this.y < uplimit) {
	                    $(me.upEle).addClass('flip').find('.pullUpLabel').html('释放加载更多');
	                }

	                // 取消下拉刷新
	                if (typeof touch === 'undefined' && this.y < me.options.pullThreshold && me.downEle.className.match('flip')) {
	                    $(me.downEle).removeClass('flip').find('.pullDownLabel').html('下拉刷新');
	                }
	            }
	        });

	        this.myScroll.on('scrollEnd', function () {
	            if (this.lock) return false;

	            if (me.downEle && me.downEle.className.match('flip')) {
	                $(me.downEle).removeClass('flip').addClass('loading').find('.pullDownLabel').html('加载中...');

	                if (me.enableDown) {
	                    // 锁定，避免执行多次
	                    this.lock = true;
	                    me.options.onDownAction.call(me);
	                }
	            }

	            if (me.upEle && me.upEle.className.match('flip')) {
	                $(me.upEle).removeClass('flip').addClass('loading').find('.pullUpLabel').html('加载中...');

	                if (me.enableUp) {
	                    // 锁定，避免执行多次
	                    this.lock = true;
	                    me.options.onUpAction.call(me);
	                }
	            }
	        });

	        this.myScroll.touchmovePreventDefault = function (e) {
	            e.preventDefault();
	        };

	        // 当触屏滑动时，阻止其他事件
	        document.addEventListener('touchmove', this.myScroll.touchmovePreventDefault, false);
	    },

	    hideEle: function hideEle(moveY) {
	        var me = this;

	        if (!me.cacheList[me.options.pagename]) {
	            return;
	        }

	        // 计算元素top和bottom
	        for (var i = 0; i < me.cacheList[me.options.pagename].length; i++) {
	            var item = me.cacheList[me.options.pagename][i];

	            // 上一次状态：1-应该隐藏，0-应该显示
	            var lastStatus = item.bottom < me.wrapperTop || item.top > me.wrapperBottom ? 1 : 0;

	            // 计算变动前状态
	            item.top += moveY;
	            item.bottom += moveY;

	            // 下一次状态：1-应该隐藏，0-应该显示
	            var status = item.bottom < me.wrapperTop || item.top > me.wrapperBottom ? 1 : 0;

	            if (lastStatus == 0 && status == 1) {
	                // 上一次显示的元素，这一次应该隐藏
	                $(this.scrollerEle).find('#content div.pre').eq(item.index).css('visibility', 'hidden');
	            } else if (lastStatus == 1 && status == 0) {
	                // 上一次隐藏的元素，这一次应该显示
	                $(this.scrollerEle).find('#content div.pre').eq(item.index).css('visibility', 'visible');
	            }
	        }
	    },

	    showEle: function showEle() {
	        var me = this;

	        $('.pre').each(function (index, ele) {
	            var top = $(ele).offset().top;
	            var height = $(ele).outerHeight(true);
	            var bottom = top + height;

	            // 下一次状态：1-应该隐藏，0-应该显示
	            var status = bottom < me.wrapperTop || top > me.wrapperBottom ? 1 : 0;

	            if (status == 0) {
	                $(ele).css('visibility', 'visible');
	            }
	        });
	    },

	    // 存储列表元素的位置信息
	    cache: function cache(offset) {
	        var me = this;

	        me.cacheList[me.options.pagename] = [];

	        $(this.scrollerEle).find('#content div.pre').each(function (index, ele) {
	            var top = $(ele).offset().top;
	            var height = $(ele).outerHeight(true);

	            if (offset) {
	                top -= offset;
	            }

	            me.cacheList[me.options.pagename].push({
	                index: index,
	                top: top,
	                bottom: top + height
	            });
	        });
	    },

	    appendCache: function appendCache() {
	        var me = this;

	        if (!me.cacheList[me.options.pagename]) {
	            return;
	        }

	        var cacheLen = me.cacheList[me.options.pagename].length;

	        var index = cacheLen;

	        var $ele = $(me.scrollerEle).find('#content div.pre').eq(index);

	        if ($ele && $ele.length > 0) {
	            var top = $ele.offset().top;
	            var height = $ele.outerHeight(true);

	            me.cacheList[me.options.pagename].push({
	                index: index,
	                top: top,
	                bottom: top + height
	            });
	        }
	    },

	    scrollToTop: function scrollToTop() {
	        var me = this;

	        me.myScroll.scrollTo(0, -me.downHeight, 0);
	        me.cache();
	        me.showEle();
	    }
	});

	exports.default = probe3;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../1-frontend-framework-team/fis/node_modules/css-loader/index.js!../../../1-frontend-framework-team/fis/node_modules/postcss-loader/index.js!../../../1-frontend-framework-team/fis/node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../../1-frontend-framework-team/fis/node_modules/css-loader/index.js!../../../1-frontend-framework-team/fis/node_modules/postcss-loader/index.js!../../../1-frontend-framework-team/fis/node_modules/sass-loader/index.js!./index.scss");
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

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/************************************************************\n    滚动条容器样式\n ************************************************************/\n.scrollerWrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -9999px;\n  overflow: hidden;\n  width: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000;\n  perspective: 1000;\n  -ms-touch-action: none;\n      touch-action: none; }\n\n.scrollerWrapper ul,\n.scrollerWrapper li {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\n/************************************************************\n    滚动条滑动条样式\n ************************************************************/\n.iScrollVerticalScrollbar {\n  position: absolute;\n  z-index: 9999;\n  top: 2px;\n  right: 3px;\n  bottom: 2px;\n  overflow: hidden;\n  width: 3px;\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n  -webkit-transform: translateZ(0px);\n  transform: translateZ(0px);\n  pointer-events: none;\n  opacity: 0; }\n\n.iScrollVerticalScrollbar div {\n  position: absolute;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 106px;\n  -webkit-transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);\n  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n  -webkit-transform: translate(0px, 0px) translateZ(0px);\n  transform: translate(0px, 0px) translateZ(0px);\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.2); }\n\n/************************************************************\n    上拉下拉样式\n ************************************************************/\n.pullDown,\n.pullUp {\n  font-size: 14px;\n  padding: 5px 10px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  color: #888;\n  border-bottom: 1px solid #c4c4c4;\n  background: transparent; }\n\n.pullDown .pullDownIcon,\n.pullUp .pullUpIcon {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  margin-right: 10px;\n  -webkit-transition-duration: 250ms;\n  transition-duration: 250ms;\n  transition-property: -webkit-transform;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAWlBMVEUAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAFNJZ5AAAAHXRSTlMAB/GTDtvP/FSomfct7bxwIQPATrGEF544Xce348thqiYAAAI8SURBVEjHrZbp0qsgDIZB2USsitrPpd7/bR4hZSvadqaHH+1UeZrkDUlA+SJC3hjfd85uUhD0cd3bje/R4lt7fwuoaj9Zlbq28LdfrL8LS6LwWx6skrJiD/+gECcALp9v63G5e7vLWD8flziT6QZvmvblFW4beHMjL8QKFiZyIvoEltbkHQYbrDuPsmNgJ3ZAgpj4SksM4stIK1AyDkAzpuOwQH/hnW2s2T6Wr+G8iUXqreuN09JapSR2RNaHFhLHIlDrO/xQViuVJqk40pemorOZVsHIhD4haPJmOm6cJG+REDLvHNyizwhqnTsmTQX+BsEmGnb4BSn5hITkdGgxX8N3yGD2Lqg0MZHvEGKUKtFm0uhSTPoMiR8jk87Nfo6u9CeFcwSryeV5tP9fhOjVWKxzjqi1GFWIv0C2SEF2U7R6fkVmbYobEmeLPUKgOeg5RWaovodHalT40qmoYwLiCFp5x5oo/LtgjukB6T0huih8HYk8UG4Z5RClbZOlIhJZJ6nEA7Vb9Fw2hwflrDnYwHEq0wNDgKlXbazotbbEQNIDE44l2GHWTs3h41hM4JdjiWhy+HtgYAHRJ4efnpSYYCmRl1go5MCkRF7IebsQ1BFUZO0iNKXC0l5r/swHzptS3vqC1qBu3vpCg91AmaA1G+IGu4UGG9q4RNGOhbGlz2aDeDcsVFmqfFj8MJK+H3y/jVcYKSdDnIQhLs+m4hKuChSuCjRcFZafLyRhzeMZMM7/93IVrnBm+8UV7h9k/WCwo46I8AAAAABJRU5ErkJggg==) no-repeat;\n  background-size: contain; }\n\n.pullDown {\n  height: 55px; }\n\n.pullDown .pullDownIcon {\n  margin-top: 20px; }\n\n.pullDown .pullDownLabel {\n  display: inline-block;\n  width: 150px;\n  margin-top: 10px;\n  text-align: left;\n  vertical-align: top; }\n\n.pullDown .pullDownTime {\n  font-size: 12px;\n  font-weight: normal;\n  display: block;\n  width: 150px;\n  margin: -15px auto;\n  padding-left: 32px;\n  text-align: left;\n  color: #999; }\n\n.pullUp .pullUpLabel {\n  display: inline-block;\n  width: 155px;\n  padding-top: 2px;\n  text-align: left;\n  vertical-align: top; }\n\n.pullUp .pullUpIcon {\n  -webkit-transform: rotate(-180deg) translateZ(0);\n  transform: rotate(-180deg) translateZ(0); }\n\n.pullDown.flip .pullDownIcon {\n  -webkit-transform: rotate(-180deg) translateZ(0);\n  transform: rotate(-180deg) translateZ(0); }\n\n.pullUp.flip .pullUpIcon {\n  -webkit-transform: rotate(0deg) translateZ(0);\n  transform: rotate(0deg) translateZ(0); }\n\n@-webkit-keyframes iScrollloading {\n  from {\n    -webkit-transform: rotate(0deg) translateZ(0);\n    transform: rotate(0deg) translateZ(0); }\n  to {\n    -webkit-transform: rotate(360deg) translateZ(0);\n    transform: rotate(360deg) translateZ(0); } }\n\n@keyframes iScrollloading {\n  from {\n    -webkit-transform: rotate(0deg) translateZ(0);\n    transform: rotate(0deg) translateZ(0); }\n  to {\n    -webkit-transform: rotate(360deg) translateZ(0);\n    transform: rotate(360deg) translateZ(0); } }\n\n.pullDown.loading .pullDownIcon,\n.pullUp.loading .pullUpIcon {\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n  -webkit-transform: rotate(0deg) translateZ(0);\n  transform: rotate(0deg) translateZ(0);\n  -webkit-animation-name: iScrollloading;\n  animation-name: iScrollloading;\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  background-position: 0 100%;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards; }\n\n.loading .pullDownIcon,\n.loading .pullUpIcon {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  margin-right: 10px;\n  -webkit-transition-duration: 250ms;\n  transition-duration: 250ms;\n  transition-property: -webkit-transform;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAS1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkI0+mmAAAAGHRSTlMAB/KyRt5g+c+8eiSUWaiLGVFvLp3tPICDFBY0AAABb0lEQVRIx7WW3XKEIAyFCSAKoqio9f2ftM1hOtNaVxpn9rtaZY/5IYSov9C+RN9sbbs1Pi47qTo2dccvumTvFeTMcYFxN+ZmSC5l8wtJn/QBmjHMeSKa8hzGprzTqb8MxpTV0U0/X09u1MXYRWgD4m/XiyW7tsjIcF5wcMMP6pLBw213egtN7NUL+ghV+SYpYNk3HW4SS0Gzh1ap7Kl8x7BmUbcsrDI5tV6BxLaDqhCQ3O8/zprjqdYYxQNkPBjOW6+qBGR+K9nm/Rmqkt4fYMQTG1qrvn2wGcYh3RyerdpZ1q6IJqQOJv9FdrHrYLeDSRk7l8ckFC3wTkhEMQjh7M9SUYPCELIh9UJ4o+mp6P3uIRFvTrl8c+Vl9LxgiZT8aNgPKzqEYNSNyafjXjWkv3rQfmosNVZusoIWxgwt4hc1S3Q+Q0rcljWqR3gBJPwUXjWIQn6pya/P5xe1fCSQDx/yMefpQPV8dHs+JMrH0U/1QzBgwwWDFgAAAABJRU5ErkJggg==) no-repeat;\n  background-size: contain; }\n", ""]);

	// exports


/***/ },
/* 12 */
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
/* 13 */
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
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
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


/***/ }
/******/ ])
});
;