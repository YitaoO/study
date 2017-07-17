/*! emoji v0.1.4 ~ (c) 2012-2016 zqhe@ewaytec.cn ~ http://gitlab.ewaytec.cn/frontend-components-team/emoji.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["emoji"] = factory();
	else
		root["emoji"] = factory();
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

	var _emoji = __webpack_require__(1);

	var _emoji2 = _interopRequireDefault(_emoji);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _emoji2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dict = __webpack_require__(2);

	var _dict2 = _interopRequireDefault(_dict);

	var _util = __webpack_require__(3);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 1）[色] --> 含有@的字符，调用Emoji.translateEmoji()
	 * 2）含有@的字符 --> 真正的HTML标签，调用Emoji.toHTML()，需要在调用template()方法之后再调用
	 */
	var _pattern = /\[[\u4e00-\u9fa5a-zA-Z]+?\]/g;
	// import $ from 'jquery';
	// import IScroll from 'IScroll';


	var emojiATMap = {
	    '@l@': '<',
	    '@r@': '>',
	    '@2@': '"'
	};

	function replaceEmojiAT(str) {
	    return emojiATMap[str];
	}

	// 需要处理转义的情况
	var _translateTxt = ['@l@span class=@2@emoji-icon emojiId-', '@2@@r@@l@/span@r@'];
	//var _translateTxt = ['<i class="emoji-icon emojiId-', '"></i>'];


	// [文本] 转换 <表情标签/>
	function _translateEmoji(BQStr) {
	    var key;

	    return BQStr.replace(_pattern, function (match, offset, oldString) {
	        key = match.substring(1, match.length - 1);

	        if (key && _dict2.default[key]) {
	            return _translateTxt[0] + _dict2.default[key] + _translateTxt[1];
	        }

	        return match;
	    });
	}

	// 处理emoji文本的插入、删除
	function _operateEmoji(BQTitle, $inputEle, callback) {
	    var title = BQTitle,
	        $content = $inputEle,
	        maxLength = $inputEle.attr('maxlength') || $inputEle.attr('data-maxlength');

	    if ($content) {
	        var contentValue = $content.val(),
	            cursorPosition = _getCaretPos($content[0]),
	            newCursorPosition,
	            part1 = contentValue.substring(0, cursorPosition),
	            part2 = contentValue.substring(cursorPosition);

	        // title不存在，即为删除
	        if (!title) {

	            // 当前光标所在位置的前一个字符是否为“]”，即删除表情（此处仅仅做简单判断）
	            if (contentValue.charAt(cursorPosition - 1 >= 0 ? cursorPosition - 1 : 0) == ']') {
	                var leftIndex = part1.lastIndexOf('[');
	                contentValue = part1.substring(0, leftIndex) + part2;
	                newCursorPosition = leftIndex;
	            }

	            // 删除文字文本
	            else {
	                    contentValue = part1.substring(0, part1.length - 1) + part2;
	                    newCursorPosition = part1.length - 1;
	                }

	            // 插入表情文本
	        } else {
	            newCursorPosition = cursorPosition + title.length + 2;
	            contentValue = part1 + "[" + title + "]" + part2;

	            // textarea使用新交互，字数超过限制时仍然可以进行输入，但是会提示“超出字数限制”
	            // if (contentValue.length > maxLength) {
	            //     return;
	            // }
	        }

	        //判断输入框长度是否小于最大长度 一个表情4字符
	        if (contentValue.length < maxLength || contentValue.length == maxLength) {
	            $content.val(contentValue);
	        }

	        // 重新设置光标的位置，会导致键盘弹出
	        // 不重置光标，会导致连续输入的内容位置错位
	        // @TODO 重新设置光标位置，导致了ios7上的textarea宽度异常，无法修复
	        _setCaretPos($content[0], newCursorPosition);

	        $content.blur();

	        if (typeof callback == 'function') {
	            callback();
	        }
	    }
	}

	// 获取光标位置
	function _getCaretPos(ele) {
	    return ele.selectionStart;
	}

	// 设置光标位置
	function _setCaretPos(ele, pos) {
	    ele.setSelectionRange(pos, pos);
	}

	//过滤i标签
	function _xss(str) {
	    var str = filterXSS(str, { whiteList: { span: ["class"] } });
	    return str;
	}

	/**
	 * @options.$targetInput  {jquery DOM} 输入框DOM
	 * @options.operateCallback {function} 插入、删除emoji之后的回调
	 */
	function _init(options) {
	    $('#emojiScroller').width(100 * $('.emoji-slide').length + '%');
	    $('.emoji-slide').each(function (index, ele) {
	        $(ele).width($(window).width());
	    });

	    // 防止页面在加载过程中出现滑动；不能使用show()方法（transform:scale(1,1)会导致第一次侧滑效果无效）
	    $('#shouldHideAfterEmojiInit').css('display', 'block');

	    var emojiSrcoller = new IScroll('#emojiWrapper', {
	        scrollX: true,
	        scrollY: false,
	        momentum: false,
	        snap: true,
	        click: (0, _util.checkIScrollerFastclick)()
	    });

	    // 默认隐藏emoji
	    $('#emojiWrapper').hide();

	    $('#shouldHideAfterEmojiInit').css('display', 'none');

	    $('#showEmoji').click(function () {
	        $(this).toggleClass('show');
	        $('#emojiWrapper').toggle();
	    });

	    //遍历表情输入
	    $('.expreCon').on('click', 'span', function () {
	        _operateEmoji($(this).attr('title'), options.$targetInput, options.operateCallback);
	    });
	}

	exports.default = {
	    translate: _translateEmoji,
	    toHTML: function toHTML(str) {
	        return _xss(str.replace(/@l@|@r@|@2@/g, replaceEmojiAT));
	    },
	    init: _init
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dictionary = {

	    // -------------bg1
	    '微笑': 'weixiao',
	    '撇嘴': 'piezui',
	    '色': 'se',
	    '发呆': 'fadai',
	    '得意': 'deyi',
	    '流泪': 'liulei',
	    '害羞': 'haixiu',
	    '闭嘴': 'bizui',
	    '睡': 'shui',
	    '大哭': 'daku',
	    '尴尬': 'ganga',
	    '发怒': 'fanu',
	    '调皮': 'tiaopi',
	    '呲牙': 'ciya',
	    '惊讶': 'jingya',
	    '难过': 'nanguo',
	    '酷': 'ku',
	    '冷汗': 'lenghan',
	    '抓狂': 'zhuaikuang',
	    '吐': 'tu',

	    // -------------bg2
	    '偷笑': 'touxiao',
	    '可爱': 'keai',
	    '白眼': 'baiyan',
	    '傲慢': 'aoman',
	    '饥饿': 'jie',
	    '困': 'kun',
	    '惊恐': 'jingkong',
	    '流汗': 'liuhan',
	    '憨笑': 'hanxiao',
	    '大兵': 'dabing',
	    '奋斗': 'fendou',
	    '咒骂': 'zhouma',
	    '疑问': 'yiwen',
	    '嘘': 'xu',
	    '晕': 'yun',
	    '折磨': 'zhemo',
	    '衰': 'shuai',
	    '骷髅': 'kulou',
	    '敲打': 'qiaoda',
	    '再见': 'zaijian',

	    // -------------bg3
	    '擦汗': 'cahan',
	    '抠鼻': 'koubi',
	    '鼓掌': 'guzhang',
	    '糗大了': 'choudale',
	    '坏笑': 'huaixiao',
	    '左哼哼': 'zuohengheng',
	    '右哼哼': 'youhengheng',
	    '哈欠': 'haqian',
	    '鄙视': 'bishi',
	    '委屈': 'weiqu',
	    '快哭了': 'kuaikule',
	    '阴险': 'yinxian',
	    '亲亲': 'qinqin',
	    '吓': 'xia',
	    '可怜': 'kelian',
	    '菜刀': 'caidao',
	    '西瓜': 'xigua',
	    '啤酒': 'pijiu',
	    '篮球': 'lanqiu',
	    '乒乓': 'pingpang',

	    // -------------bg4
	    '咖啡': 'kafei',
	    '饭': 'fan',
	    '猪头': 'zhutou',
	    '玫瑰': 'meigui',
	    '凋谢': 'diaoxie',
	    '示爱': 'shiai',
	    '爱心': 'aixin',
	    '心碎': 'xinsui',
	    '蛋糕': 'dangao',
	    '闪电': 'shandian',
	    '炸弹': 'zhadan',
	    '刀': 'dao',
	    '足球': 'zuqiu',
	    '瓢虫': 'piaochong',
	    '便便': 'bianbian',
	    '月亮': 'yueliang',
	    '太阳': 'taiyang',
	    '礼物': 'liwu',
	    '拥抱': 'yongbao',
	    '强': 'qiang',

	    // -------------bg5
	    '弱': 'ruo',
	    '握手': 'woshou',
	    '胜利': 'shengli',
	    '抱拳': 'baoquan',
	    '勾引': 'gouyin',
	    '拳头': 'quantou',
	    '差劲': 'chajin',
	    '爱你': 'aini',
	    'NO': 'no',
	    'OK': 'ok',
	    '爱情': 'aiqing',
	    '飞吻': 'feiwen',
	    '跳跳': 'tiaotiao',
	    '发抖': 'fadou',
	    '怄火': 'ouhuo',
	    '转圈': 'zhuanquan',
	    '磕头': 'ketou',
	    '回头': 'huitou',
	    '跳绳': 'tiaosheng',
	    '挥手': 'huishou'
	};

	exports.default = dictionary;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Chrome on Android with user-scalable="no" doesn't need FastClick；
	 * Chrome 32 and above with width=device-width or less don't need FastClick；
	 * 所以，在引入了FastClick的页面中，建议将meta=viewport中的user-scalable="no"去掉，避免意外发生；
	 * Chrome 32以上的，需要将enableClick设置成false，否则点击会触发2次，如三星S5、魅族note等；
	 * 建议不要在iscroll中使用a标签，可能会导致某些点击失效的情况；
	 */
	function checkIScrollerFastclick() {
		var enableClick = true;

		// 如果引入了FastClick，关闭click事件
		if (typeof FastClick != 'undefined' && FastClick && !FastClick.notNeeded(document.body)) {
			// alert('如果引入了FastClick且通过notNeeded判断为false的，关闭iscroll的click属性');
			enableClick = false;
		}

		var chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
		if (chromeVersion && navigator.userAgent.indexOf('Android') > 0 && chromeVersion > 31) {
			// alert('chrome 32以上的关闭click属性');
			enableClick = false;
		}
		return enableClick;
	}

	exports.checkIScrollerFastclick = checkIScrollerFastclick;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!C:\\Users\\yanjinbo\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\Users\\yanjinbo\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!./emoji.css", function() {
				var newContent = require("!!C:\\Users\\yanjinbo\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\Users\\yanjinbo\\AppData\\Roaming\\npm\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!./emoji.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".form-row.noLh {\r\n    line-height: normal;\r\n}\r\n.form-row {\r\n    line-height: 2.25rem;\r\n    border-bottom: 1px solid #E7E7EA;\r\n    border-top: 1px solid #E7E7EA;\r\n    font-size: .7rem;\r\n    color: #999999;\r\n    background-color: #FFFFFF;\r\n    padding: 0 .45rem;\r\n    position: relative;\r\n    margin: -1px 0;\r\n    box-sizing: border-box;\r\n}\r\n.ui-textarea {\r\n    background-color: #FFFFFF;\r\n    font-size: .7rem;\r\n    border: 0 none;\r\n    outline: 0;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    line-height: 1rem;\r\n    height: 8.25rem;\r\n    resize: none;\r\n    padding-top: 10px;\r\n}\r\n.input-limit{\r\n    line-height: 2rem;\r\n    padding: 0 .4rem;\r\n    position: relative;\r\n    text-align: right;\r\n    font-size: .7rem;\r\n    color: #afb2bb;\r\n}\r\n.commentFooter-btn {\r\n    text-align:center\r\n}\r\n.commentFooter-btn .w130 {\r\n    width: 6.5rem;\r\n}\r\n.commentFooter-btn a {\r\n    display: inline-block;\r\n    line-height: 1.7rem;\r\n    width: 11.25rem;\r\n    border-radius: 1.7rem;\r\n    background-color: #17B0D4;\r\n    color: #FFFFFF;\r\n    font-size: .8rem;\r\n}\r\n.commentFooter-btn a.disabled-btn{\r\n   background:#999;\r\n   pointer-events:none\r\n}\r\n\r\n\r\n.emoji-btn {\r\n    display:inline-block;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: url(" + __webpack_require__(7) + ") no-repeat -32px -3px;\r\n\tbackground-size: 60px 30px;\r\n    vertical-align: middle;\r\n}\r\n    .emoji-btn.show {\r\n        background-position: -3px -3px;\r\n    }\r\n.emoji-btn-wrap {\r\n    position:absolute;\r\n    left: .45rem;\r\n    top: 0;\r\n    width: 40px;\r\n    height: 40px;\r\n    text-align: left;\r\n}\r\n    .emoji-btn-wrap.show .emoji-btn {\r\n        background-position: -3px -3px;\r\n    }\r\n\r\n.emoji-wrapper {\r\n    height: 117px;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.emoji-scroller {\r\n    position: absolute;\r\n    height: 100%;\r\n}\r\n\r\n.emoji-slide {\r\n    font-size: 0;\r\n    text-align: center;\r\n    float: left;\r\n}\r\n\r\n.expreCon {\r\n    width: 312px;\r\n    height: 117px;\r\n    background: url(" + __webpack_require__(8) + ") no-repeat;\r\n    background-size: 312px auto;\r\n    margin: 0 auto;\r\n}\r\n\r\n.expreCon.bg2 {\r\n    background-image: url(" + __webpack_require__(9) + ");\r\n}\r\n\r\n.expreCon.bg3 {\r\n    background-image: url(" + __webpack_require__(10) + ");\r\n}\r\n\r\n.expreCon.bg4 {\r\n    background-image: url(" + __webpack_require__(11) + ");\r\n}\r\n\r\n.expreCon.bg5 {\r\n    background-image: url(" + __webpack_require__(12) + ");\r\n}\r\n\r\n.expreCon span,.expreCon a{\r\n    width: 44px;\r\n    height: 39px;\r\n    display: inline-block;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.expreCon a.on {\r\n    background-color: #000;\r\n    opacity: 0.3;\r\n}\r\n\r\n/* emoji icon */\r\n.emoji-icon {\r\n    display: inline-block;    \r\n    width: 22px;\r\n    height: 22px;\r\n    vertical-align: top;\r\n}\r\n\r\n/* ------------bg1------------ */\r\n.emojiId-weixiao,\r\n.emojiId-piezui,\r\n.emojiId-se,\r\n.emojiId-fadai,\r\n.emojiId-deyi,\r\n.emojiId-liulei,\r\n.emojiId-haixiu,\r\n.emojiId-bizui,\r\n.emojiId-shui,\r\n.emojiId-daku,\r\n.emojiId-ganga,\r\n.emojiId-fanu,\r\n.emojiId-tiaopi,\r\n.emojiId-ciya,\r\n.emojiId-jingya,\r\n.emojiId-nanguo,\r\n.emojiId-ku,\r\n.emojiId-lenghan,\r\n.emojiId-zhuaikuang,\r\n.emojiId-tu{\r\n    background: url(" + __webpack_require__(8) + ") no-repeat;\r\n    background-size: 260px 97.5px;\r\n}\r\n\r\n/* ------------bg2------------ */\r\n.emojiId-touxiao,\r\n.emojiId-keai,\r\n.emojiId-baiyan,\r\n.emojiId-aoman,\r\n.emojiId-jie,\r\n.emojiId-kun,\r\n.emojiId-jingkong,\r\n.emojiId-liuhan,\r\n.emojiId-hanxiao,\r\n.emojiId-dabing,\r\n.emojiId-fendou,\r\n.emojiId-zhouma,\r\n.emojiId-yiwen,\r\n.emojiId-xu,\r\n.emojiId-yun,\r\n.emojiId-zhemo,\r\n.emojiId-shuai,\r\n.emojiId-kulou,\r\n.emojiId-qiaoda,\r\n.emojiId-zaijian{\r\n    background: url(" + __webpack_require__(9) + ") no-repeat;\r\n    background-size: 260px 97.5px;\r\n}\r\n\r\n/* ------------bg3------------ */\r\n.emojiId-cahan,\r\n.emojiId-koubi,\r\n.emojiId-guzhang,\r\n.emojiId-choudale,\r\n.emojiId-huaixiao,\r\n.emojiId-zuohengheng,\r\n.emojiId-youhengheng,\r\n.emojiId-haqian,\r\n.emojiId-bishi,\r\n.emojiId-weiqu,\r\n.emojiId-kuaikule,\r\n.emojiId-yinxian,\r\n.emojiId-qinqin,\r\n.emojiId-xia,\r\n.emojiId-kelian,\r\n.emojiId-caidao,\r\n.emojiId-xigua,\r\n.emojiId-pijiu,\r\n.emojiId-lanqiu,\r\n.emojiId-pingpang{\r\n    background: url(" + __webpack_require__(10) + ") no-repeat;\r\n    background-size: 260px 97.5px;\r\n}\r\n\r\n/* ------------bg4------------ */\r\n.emojiId-kafei,\r\n.emojiId-fan,\r\n.emojiId-zhutou,\r\n.emojiId-meigui,\r\n.emojiId-diaoxie,\r\n.emojiId-shiai,\r\n.emojiId-aixin,\r\n.emojiId-xinsui,\r\n.emojiId-dangao,\r\n.emojiId-shandian,\r\n.emojiId-zhadan,\r\n\r\n.emojiId-dao,\r\n.emojiId-zuqiu,\r\n.emojiId-piaochong,\r\n.emojiId-bianbian,\r\n.emojiId-yueliang,\r\n.emojiId-taiyang,\r\n.emojiId-liwu,\r\n.emojiId-yongbao,\r\n.emojiId-qiang {\r\n    background: url(" + __webpack_require__(11) + ") no-repeat;\r\n    background-size: 260px 97.5px;\r\n}\r\n\r\n/* ------------bg5------------ */\r\n.emojiId-ruo,\r\n.emojiId-woshou,\r\n.emojiId-shengli,\r\n.emojiId-baoquan,\r\n.emojiId-gouyin,\r\n.emojiId-quantou,\r\n.emojiId-chajin,\r\n.emojiId-aini,\r\n.emojiId-no,\r\n.emojiId-ok,\r\n.emojiId-aiqng,\r\n.emojiId-feiwen,\r\n.emojiId-tiaotiao,\r\n.emojiId-fadou,\r\n.emojiId-ouhuo,\r\n.emojiId-zhuanquan,\r\n.emojiId-ketou,\r\n.emojiId-huitou,\r\n.emojiId-tiaosheng,\r\n.emojiId-aiqing,\r\n.emojiId-huishou{\r\n    background: url(" + __webpack_require__(12) + ") no-repeat;\r\n    background-size: 260px 97.5px;\r\n}\r\n\r\n/* row1 */\r\n.emojiId-weixiao,\r\n.emojiId-touxiao,\r\n.emojiId-cahan,\r\n.emojiId-kafei,\r\n.emojiId-ruo{\r\n    background-position: -9.2px -5.8px;\r\n}\r\n.emojiId-piezui,\r\n.emojiId-keai,\r\n.emojiId-koubi,\r\n.emojiId-fan ,\r\n.emojiId-woshou{\r\n    background-position: -45.8px -5.8px;\r\n}\r\n.emojiId-se,\r\n.emojiId-baiyan,\r\n.emojiId-guzhang,\r\n.emojiId-zhutou ,\r\n.emojiId-shengli{\r\n    background-position: -82.5px -5.8px;\r\n}\r\n.emojiId-fadai,\r\n.emojiId-aoman,\r\n.emojiId-choudale,\r\n.emojiId-meigui,\r\n.emojiId-baoquan {\r\n    background-position: -118.3px -5.8px;\r\n}\r\n.emojiId-deyi,\r\n.emojiId-jie,\r\n.emojiId-huaixiao,\r\n.emojiId-diaoxie,\r\n.emojiId-gouyin {\r\n    background-position: -154.1px -5.8px;\r\n}\r\n.emojiId-liulei,\r\n.emojiId-kun,\r\n.emojiId-zuohengheng,\r\n.emojiId-shiai ,\r\n.emojiId-quantou{\r\n    background-position: -192.5px -5.8px;\r\n}\r\n.emojiId-haixiu,\r\n.emojiId-jingkong,\r\n.emojiId-youhengheng,\r\n.emojiId-aixin,\r\n.emojiId-chajin {\r\n    background-position: -228.3px -5.8px;\r\n}\r\n\r\n/* row2 */\r\n.emojiId-bizui,\r\n.emojiId-liuhan,\r\n.emojiId-haqian,\r\n.emojiId-xinsui,\r\n.emojiId-aini {\r\n    background-position: -9.2px -38.3px;\r\n}\r\n.emojiId-shui,\r\n.emojiId-hanxiao,\r\n.emojiId-bishi,\r\n.emojiId-dangao,\r\n.emojiId-no {\r\n    background-position: -45.8px -38.3px;\r\n}\r\n.emojiId-daku,\r\n.emojiId-dabing,\r\n.emojiId-weiqu,\r\n.emojiId-shandian,\r\n.emojiId-ok {\r\n    background-position: -82.5px -38.3px;\r\n}\r\n.emojiId-ganga,\r\n.emojiId-fendou,\r\n.emojiId-kuaikule,\r\n.emojiId-zhadan ,\r\n.emojiId-aiqing{\r\n    background-position: -118.3px -38.3px;\r\n}\r\n.emojiId-fanu,\r\n.emojiId-zhouma,\r\n.emojiId-yinxian,\r\n.emojiId-dao,\r\n.emojiId-feiwen {\r\n    background-position: -154.1px -38.3px;\r\n}\r\n.emojiId-tiaopi,\r\n.emojiId-yiwen,\r\n.emojiId-qinqin,\r\n.emojiId-zuqiu ,\r\n.emojiId-tiaotiao{\r\n    background-position: -192.5px -38.3px;\r\n}\r\n.emojiId-ciya,\r\n.emojiId-xu,\r\n.emojiId-xia,\r\n.emojiId-piaochong,\r\n.emojiId-fadou {\r\n    background-position: -228.3px -38.3px;\r\n}\r\n/* row3 */\r\n.emojiId-jingya,\r\n.emojiId-yun,\r\n.emojiId-kelian,\r\n.emojiId-bianbian,\r\n.emojiId-ouhuo {\r\n    background-position: -9.2px -70.8px;\r\n}\r\n.emojiId-nanguo,\r\n.emojiId-zhemo,\r\n.emojiId-caidao,\r\n.emojiId-yueliang,\r\n.emojiId-zhuanquan {\r\n    background-position: -45.8px -70.8px;\r\n}\r\n.emojiId-ku,\r\n.emojiId-shuai,\r\n.emojiId-xigua,\r\n.emojiId-taiyang,\r\n.emojiId-ketou {\r\n    background-position: -82.5px -70.8px;\r\n}\r\n.emojiId-lenghan,\r\n.emojiId-kulou,\r\n.emojiId-pijiu,\r\n.emojiId-liwu,\r\n.emojiId-huitou {\r\n    background-position: -118.3px -70.8px;\r\n}\r\n.emojiId-zhuaikuang,\r\n.emojiId-qiaoda,\r\n.emojiId-lanqiu,\r\n.emojiId-yongbao,\r\n.emojiId-tiaosheng {\r\n    background-position: -154.1px -70.8px;\r\n}\r\n.emojiId-tu,\r\n.emojiId-zaijian,\r\n.emojiId-pingpang ,\r\n.emojiId-qiang,\r\n.emojiId-huishou{\r\n    background-position: -192.5px -70.8px;\r\n}\r\n\r\n@media (device-width:375px) and (-webkit-min-device-pixel-ratio:2) { /* 兼容iphone 6 */\r\n   \r\n    .expreCon {width: 100%;background-size: 100% auto;}\r\n\r\n    .emoji-wrapper,.expreCon {\r\n        height:147px;\r\n    }\r\n        .expreCon span,.expreCon a {\r\n            width:13%;\r\n            height:45px;\r\n        }\r\n}\r\n\r\n@media (device-width:414px) and (-webkit-min-device-pixel-ratio:3.0) { /* 兼容iphone6 plus */\r\n\r\n    .expreCon {width: 100%;background-size: 100% auto;}\r\n\r\n     .emoji-wrapper,.expreCon {\r\n        height:157px;\r\n    }\r\n        .expreCon span,.expreCon a {\r\n            width:13%;\r\n            height:50px;\r\n        }\r\n}", ""]);

	// exports


/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA8CAYAAACtrX6oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkEzOEIyQkU3M0Q2MTFFNUE5RUFFOEI4ODFGRUY0RjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkEzOEIyQkY3M0Q2MTFFNUE5RUFFOEI4ODFGRUY0RjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQTM4QjJCQzczRDYxMUU1QTlFQUU4Qjg4MUZFRjRGNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQTM4QjJCRDczRDYxMUU1QTlFQUU4Qjg4MUZFRjRGNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgo90sQAAAg6SURBVHja7J17bBVF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"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "emoji-bg1-238c9b63a0c5c57bb8c6aa9d45a63529.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "emoji-bg2-63deb3ea4d879ad0d31dda5f4ae5f083.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "emoji-bg3-4394fe8ab15ec86e58ca41802789353e.png";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "emoji-bg4-6a6fb708e642ab643341aa551ee0a5b0.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "emoji-bg5-1eec13a08d8e9f40b4dfe378fef3197d.png";

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


/***/ }
/******/ ])
});
;