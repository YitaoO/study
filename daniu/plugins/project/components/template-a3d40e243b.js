/*! template v0.0.5 ~ (c) 2012-2017 pzhang@ewaytec.cn ~ http://gitlab.ewaytec.cn/frontend-components-team/template.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["template"] = factory();
	else
		root["template"] = factory();
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

	var _artTemplate = __webpack_require__(1);

	var _artTemplate2 = _interopRequireDefault(_artTemplate);

	__webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _artTemplate2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*
	 * artTemplate - Template Engine
	 * https://github.com/aui/artTemplate
	 * Released under the MIT, BSD, and GPL Licenses
	 */

	/**
	 * 模板引擎
	 * @name    template
	 * @param   {String}            模板名
	 * @param   {Object, String}    数据。如果为字符串则编译并缓存编译结果
	 * @return  {String, Function}  渲染好的HTML字符串或者渲染方法
	 */
	var template = function template(filename, content) {
	    return typeof content === 'string' ? compile(content, {
	        filename: filename
	    }) : renderFile(filename, content);
	};

	template.version = '3.0.0';

	/**
	 * 设置全局配置
	 * @name    template.config
	 * @param   {String}    名称
	 * @param   {Any}       值
	 */
	template.config = function (name, value) {
	    defaults[name] = value;
	};

	var defaults = template.defaults = {
	    openTag: '<%', // 逻辑语法开始标签
	    closeTag: '%>', // 逻辑语法结束标签
	    escape: true, // 是否编码输出变量的 HTML 字符
	    cache: true, // 是否开启缓存（依赖 options 的 filename 字段）
	    compress: false, // 是否压缩输出
	    parser: null // 自定义语法格式器 @see: template-syntax.js
	};

	var cacheStore = template.cache = {};

	/**
	 * 渲染模板
	 * @name    template.render
	 * @param   {String}    模板
	 * @param   {Object}    数据
	 * @return  {String}    渲染好的字符串
	 */
	template.render = function (source, options) {
	    return compile(source, options);
	};

	/**
	 * 渲染模板(根据模板名)
	 * @name    template.render
	 * @param   {String}    模板名
	 * @param   {Object}    数据
	 * @return  {String}    渲染好的字符串
	 */
	var renderFile = template.renderFile = function (filename, data) {
	    var fn = template.get(filename) || showDebugInfo({
	        filename: filename,
	        name: 'Render Error',
	        message: 'Template not found'
	    });
	    return data ? fn(data) : fn;
	};

	/**
	 * 获取编译缓存（可由外部重写此方法）
	 * @param   {String}    模板名
	 * @param   {Function}  编译好的函数
	 */
	template.get = function (filename) {
	    var cache;

	    if (cacheStore[filename]) {
	        // 使用内存缓存
	        cache = cacheStore[filename];
	    } else if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object') {
	        // 加载模板并编译
	        //var elem = document.getElementById(filename);
	        var elem;
	        var reg = new RegExp('<([^>]*)>');
	        if (reg.test(filename)) elem = filename;else elem = document.getElementById(filename);

	        if (elem) {
	            var source = (elem.value || elem.innerHTML || elem).replace(/^\s*|\s*$/g, '');
	            cache = compile(source, {
	                filename: filename
	            });
	        }
	    }

	    return cache;
	};

	var toString = function toString(value, type) {
	    if (typeof value !== 'string') {
	        type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	        if (type === 'number') {
	            value += '';
	        } else if (type === 'function') {
	            value = toString(value.call(value));
	        } else {
	            value = '';
	        }
	    }

	    return value;
	};

	var escapeMap = {
	    "<": "&#60;",
	    ">": "&#62;",
	    '"': "&#34;",
	    "'": "&#39;",
	    "&": "&#38;"
	};

	var escapeFn = function escapeFn(s) {
	    return escapeMap[s];
	};

	var escapeHTML = function escapeHTML(content) {
	    return toString(content).replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
	};

	var isArray = Array.isArray || function (obj) {
	    return {}.toString.call(obj) === '[object Array]';
	};

	var each = function each(data, callback) {
	    var i, len;
	    if (isArray(data)) {
	        for (i = 0, len = data.length; i < len; i++) {
	            callback.call(data, data[i], i, data);
	        }
	    } else {
	        for (i in data) {
	            callback.call(data, data[i], i);
	        }
	    }
	};

	var utils = template.utils = {
	    $helpers: {},

	    $include: renderFile,

	    $string: toString,

	    $escape: escapeHTML,

	    $each: each
	};
	/**
	 * 添加模板辅助方法
	 * @name    template.helper
	 * @param   {String}    名称
	 * @param   {Function}  方法
	 */
	template.helper = function (name, helper) {
	    helpers[name] = helper;
	};

	var helpers = template.helpers = utils.$helpers;

	/**
	 * 模板错误事件（可由外部重写此方法）
	 * @name    template.onerror
	 * @event
	 */
	template.onerror = function (e) {
	    var message = 'Template Error\n\n';
	    for (var name in e) {
	        message += '<' + name + '>\n' + e[name] + '\n\n';
	    }

	    if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object') {
	        console.error(message);
	    }
	};

	// 模板调试器
	var showDebugInfo = function showDebugInfo(e) {
	    template.onerror(e);

	    return function () {
	        return '{Template Error}';
	    };
	};

	/**
	 * 编译模板
	 * 2012-6-6 @TooBug: define 方法名改为 compile，与 Node Express 保持一致
	 * @name    template.compile
	 * @param   {String}    模板字符串
	 * @param   {Object}    编译选项
	 *
	 *      - openTag       {String}
	 *      - closeTag      {String}
	 *      - filename      {String}
	 *      - escape        {Boolean}
	 *      - compress      {Boolean}
	 *      - debug         {Boolean}
	 *      - cache         {Boolean}
	 *      - parser        {Function}
	 *
	 * @return  {Function}  渲染方法
	 */
	var compile = template.compile = function (source, options) {
	    // 合并默认配置
	    options = options || {};
	    for (var name in defaults) {
	        if (options[name] === undefined) {
	            options[name] = defaults[name];
	        }
	    }

	    var filename = options.filename;

	    var Render;

	    try {
	        Render = compiler(source, options);
	    } catch (e) {
	        e.filename = filename || 'anonymous';
	        e.name = 'Syntax Error';

	        return showDebugInfo(e);
	    }

	    // 对编译结果进行一次包装

	    function render(data) {
	        try {
	            return new Render(data, filename) + '';
	        } catch (e) {
	            // 运行时出错后自动开启调试模式重新编译
	            if (!options.debug) {
	                options.debug = true;
	                return compile(source, options)(data);
	            }

	            return showDebugInfo(e)();
	        }
	    }

	    render.prototype = Render.prototype;
	    render.toString = function () {
	        return Render.toString();
	    };

	    if (filename && options.cache) {
	        cacheStore[filename] = render;
	    }

	    return render;
	};

	// 数组迭代
	var forEach = utils.$each;

	// 静态分析模板变量
	var KEYWORDS =
	// 关键字
	'break,case,catch,continue,debugger,default,delete,do,else,false' + ',finally,for,function,if,in,instanceof,new,null,return,switch,this' + ',throw,true,try,typeof,var,void,while,with' +
	// 保留字
	',abstract,boolean,byte,char,class,const,double,enum,export,extends' + ',final,float,goto,implements,import,int,interface,long,native' + ',package,private,protected,public,short,static,super,synchronized' + ',throws,transient,volatile' +
	// ECMA 5 - use strict
	',arguments,let,yield' + ',undefined';

	var REMOVE_RE = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g;
	var SPLIT_RE = /[^\w$]+/g;
	var KEYWORDS_RE = new RegExp(["\\b" + KEYWORDS.replace(/,/g, '\\b|\\b') + "\\b"].join('|'), 'g');
	var NUMBER_RE = /^\d[^,]*|,\d[^,]*/g;
	var BOUNDARY_RE = /^,+|,+$/g;
	var SPLIT2_RE = /^$|,+/;

	// 获取变量
	function getVariable(code) {
	    return code.replace(REMOVE_RE, '').replace(SPLIT_RE, ',').replace(KEYWORDS_RE, '').replace(NUMBER_RE, '').replace(BOUNDARY_RE, '').split(SPLIT2_RE);
	}

	// 字符串转义
	function stringify(code) {
	    return "'" + code
	    // 单引号与反斜杠转义
	    .replace(/('|\\)/g, '\\$1')
	    // 换行符转义(windows + linux)
	    .replace(/\r/g, '\\r').replace(/\n/g, '\\n') + "'";
	}

	function compiler(source, options) {
	    var debug = options.debug;
	    var openTag = options.openTag;
	    var closeTag = options.closeTag;
	    var parser = options.parser;
	    var compress = options.compress;
	    var escape = options.escape;

	    var line = 1;
	    var uniq = {
	        $data: 1,
	        $filename: 1,
	        $utils: 1,
	        $helpers: 1,
	        $out: 1,
	        $line: 1
	    };

	    var isNewEngine = ''.trim; // '__proto__' in {}
	    var replaces = isNewEngine ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"];

	    var concat = isNewEngine ? "$out+=text;return $out;" : "$out.push(text);";

	    var print = "function(){" + "var text=''.concat.apply('',arguments);" + concat + "}";

	    var include = "function(filename,data){" + "data=data||$data;" + "var text=$utils.$include(filename,data,$filename);" + concat + "}";

	    var headerCode = "'use strict';" + "var $utils=this,$helpers=$utils.$helpers," + (debug ? "$line=0," : "");

	    var mainCode = replaces[0];

	    var footerCode = "return new String(" + replaces[3] + ");";

	    // html与逻辑语法分离
	    forEach(source.split(openTag), function (code) {
	        code = code.split(closeTag);

	        var $0 = code[0];
	        var $1 = code[1];

	        // code: [html]
	        if (code.length === 1) {
	            mainCode += html($0);

	            // code: [logic, html]
	        } else {
	            mainCode += logic($0);

	            if ($1) {
	                mainCode += html($1);
	            }
	        }
	    });

	    var code = headerCode + mainCode + footerCode;

	    // 调试语句
	    if (debug) {
	        code = "try{" + code + "}catch(e){" + "throw {" + "filename:$filename," + "name:'Render Error'," + "message:e.message," + "line:$line," + "source:" + stringify(source) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')" + "};" + "}";
	    }

	    try {
	        var Render = new Function("$data", "$filename", code);
	        Render.prototype = utils;

	        return Render;
	    } catch (e) {
	        e.temp = "function anonymous($data,$filename) {" + code + "}";
	        throw e;
	    }

	    // 处理 HTML 语句
	    function html(code) {
	        // 记录行号
	        line += code.split(/\n/).length - 1;

	        // 压缩多余空白与注释
	        if (compress) {
	            code = code.replace(/\s+/g, ' ').replace(/<!--[\w\W]*?-->/g, '');
	        }

	        if (code) {
	            code = replaces[1] + stringify(code) + replaces[2] + "\n";
	        }

	        return code;
	    }

	    // 处理逻辑语句
	    function logic(code) {
	        var thisLine = line;

	        if (parser) {
	            // 语法转换插件钩子
	            code = parser(code, options);
	        } else if (debug) {
	            // 记录行号
	            code = code.replace(/\n/g, function () {
	                line++;
	                return "$line=" + line + ";";
	            });
	        }

	        // 输出语句. 编码: <%=value%> 不编码:<%=#value%>
	        // <%=#value%> 等同 v2.0.3 之前的 <%==value%>
	        if (code.indexOf('=') === 0) {
	            var escapeSyntax = escape && !/^=[=#]/.test(code);

	            code = code.replace(/^=[=#]?|[\s;]*$/g, '');

	            // 对内容编码
	            if (escapeSyntax) {
	                var name = code.replace(/\s*\([^\)]+\)/, '');

	                // 排除 utils.* | include | print

	                if (!utils[name] && !/^(include|print)$/.test(name)) {
	                    code = "$escape(" + code + ")";
	                }

	                // 不编码
	            } else {
	                code = "$string(" + code + ")";
	            }

	            code = replaces[1] + code + replaces[2];
	        }

	        if (debug) {
	            code = "$line=" + thisLine + ";" + code;
	        }

	        // 提取模板中的变量名
	        forEach(getVariable(code), function (name) {
	            // name 值可能为空，在安卓低版本浏览器下
	            if (!name || uniq[name]) {
	                return;
	            }

	            var value;

	            // 声明模板变量
	            // 赋值优先级:
	            // [include, print] > utils > helpers > data
	            if (name === 'print') {
	                value = print;
	            } else if (name === 'include') {
	                value = include;
	            } else if (utils[name]) {
	                value = "$utils." + name;
	            } else if (helpers[name]) {
	                value = "$helpers." + name;
	            } else {
	                value = "$data." + name;
	            }

	            headerCode += name + "=" + value + ",";
	            uniq[name] = true;
	        });

	        return code + "\n";
	    }
	}

	// 定义模板引擎的语法

	defaults.openTag = '{{';
	defaults.closeTag = '}}';

	var filtered = function filtered(js, filter) {
	    var parts = filter.split(':');
	    var name = parts.shift();
	    var args = parts.join(':') || '';

	    if (args) {
	        args = ', ' + args;
	    }

	    return '$helpers.' + name + '(' + js + args + ')';
	};

	defaults.parser = function (code, options) {
	    // var match = code.match(/([\w\$]*)(\b.*)/);
	    // var key = match[1];
	    // var args = match[2];
	    // var split = args.split(' ');
	    // split.shift();

	    code = code.replace(/^\s/, '');

	    var split = code.split(' ');
	    var key = split.shift();
	    var args = split.join(' ');

	    switch (key) {
	        case 'if':

	            code = 'if(' + args + '){';
	            break;

	        case 'else':

	            if (split.shift() === 'if') {
	                split = ' if(' + split.join(' ') + ')';
	            } else {
	                split = '';
	            }

	            code = '}else' + split + '{';
	            break;

	        case '/if':

	            code = '}';
	            break;

	        case 'each':

	            var object = split[0] || '$data';
	            var as = split[1] || 'as';
	            var value = split[2] || '$value';
	            var index = split[3] || '$index';

	            var param = value + ',' + index;

	            if (as !== 'as') {
	                object = '[]';
	            }

	            code = '$each(' + object + ',function(' + param + '){';
	            break;

	        case '/each':

	            code = '});';
	            break;

	        case 'echo':

	            code = 'print(' + args + ');';
	            break;

	        case 'print':
	        case 'include':

	            code = key + '(' + split.join(',') + ');';
	            break;

	        default:

	            // 过滤器（辅助方法）
	            // {{value | filterA:'abcd' | filterB}}
	            // >>> $helpers.filterB($helpers.filterA(value, 'abcd'))
	            // TODO: {{ddd||aaa}} 不包含空格
	            if (/^\s*\|\s*[\w\$]/.test(args)) {
	                var escape = true;

	                // {{#value | link}}
	                if (code.indexOf('#') === 0) {
	                    code = code.substr(1);
	                    escape = false;
	                }

	                var i = 0;
	                var array = code.split('|');
	                var len = array.length;
	                var val = array[i++];

	                for (; i < len; i++) {
	                    val = filtered(val, array[i]);
	                }

	                code = (escape ? '=' : '=#') + val;

	                // 即将弃用 {{helperName value}}
	            } else if (template.helpers[key]) {
	                code = '=#' + key + '(' + split.join(',') + ');';

	                // 内容直接输出 {{value}}
	            } else {
	                code = '=' + code;
	            }

	            break;
	    }

	    return code;
	};

	module.exports = template;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _artTemplate = __webpack_require__(1);

	var _artTemplate2 = _interopRequireDefault(_artTemplate);

	var _utils = __webpack_require__(3);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 自定义特定形式
	 * 例如'yyyy-MM-dd hh:mm', 'MM-dd hh:mm', 'MM-dd'
	 *
	 */
	_artTemplate2.default.helper('dateFormat', function (date, format) {
	    if (!date) {
	        return '';
	    }

	    date = _utils2.default.stringToDate(date);

	    var map = {
	        "M": date.getMonth() + 1, //月份
	        "d": date.getDate(), //日
	        "h": date.getHours(), //小时
	        "m": date.getMinutes(), //分
	        "s": date.getSeconds(), //秒
	        "q": Math.floor((date.getMonth() + 3) / 3), //季度
	        "S": date.getMilliseconds() //毫秒
	    };

	    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
	        var v = map[t];
	        if (v !== undefined) {
	            if (all.length > 1) {
	                v = '0' + v;
	                v = v.substr(v.length - 2);
	            }
	            return v;
	        } else if (t === 'y') {
	            return (date.getFullYear() + '').substr(4 - all.length);
	        }
	        return all;
	    });

	    return format;
	});

	/**
	 * 时间显示规则
	 * 1、1分钟以内：刚刚
	 * 2、1分钟-1小时（含1分钟）：xx分钟前
	 * 3、1小时-1天（含1小时）：xx小时前
	 * 4、1天-昨天（含1天）：昨天 10:30
	 * 5、昨天-前天（含昨天）：前天 10:30
	 * 6、前天之前（含前天）：07-15 10:30
	 * 7、跨年：2017-08-03 11:30
	 */
	_artTemplate2.default.helper('dateStandard', function (date) {
	    if (!date) {
	        return '';
	    }

	    date = _utils2.default.stringToDate(date);

	    var map = {
	        'M': date.getMonth() + 1, // 月份
	        'd': date.getDate(), // 日
	        'h': date.getHours(), // 小时
	        'm': date.getMinutes(), // 分
	        's': date.getSeconds(), // 秒
	        'q': Math.floor((date.getMonth() + 3) / 3), // 季度
	        'S': date.getMilliseconds() // 毫秒
	    };

	    var date_now = new Date();
	    var now = {
	        'M': date_now.getMonth() + 1, // 月份
	        'd': date_now.getDate(), // 日
	        'h': date_now.getHours(), // 小时
	        'm': date_now.getMinutes(), // 分
	        's': date_now.getSeconds(), // 秒
	        'q': Math.floor((date_now.getMonth() + 3) / 3), // 季度
	        'S': date_now.getMilliseconds() // 毫秒
	    };

	    function formatDate(date, format) {
	        format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
	            var v = map[t];
	            if (v !== undefined) {
	                if (all.length > 1) {
	                    v = '0' + v;
	                    v = v.substr(v.length - 2);
	                }
	                return v;
	            } else if (t === 'y') {
	                return (date.getFullYear() + '').substr(4 - all.length);
	            }
	            return all;
	        });
	        return format;
	    }

	    if (date.getFullYear() != date_now.getFullYear()) {
	        return formatDate(date, 'yyyy-MM-dd hh:mm');
	    }

	    if (map.M != now.M) {
	        return formatDate(date, 'MM-dd hh:mm');
	    }

	    if (map.d != now.d) {
	        if (map.d - now.d == -2) {
	            return '前天' + formatDate(date, 'hh:mm');
	        }
	        if (map.d - now.d == -1) {
	            return '昨天' + formatDate(date, 'hh:mm');
	        }
	        return formatDate(date, 'MM-dd hh:mm');
	    }

	    var difTimes = date_now.getTime() - date.getTime();
	    if (difTimes < 3600 * 1000) {
	        var difMin = Math.floor(difTimes / (60 * 1000));
	        if (difMin <= 0) {
	            return '刚刚';
	        }
	        return difMin + '分钟前';
	    } else {
	        var difH = Math.floor(difTimes / (3600 * 1000));
	        return difH + '小时前';
	    }
	});

	/**
	 * 舍去法保留1位小数
	 * 例如：'110.11' -> 110.1
	 */
	_artTemplate2.default.helper('fix1', function (string, number) {
	    number = Number(string).toFixed(1);
	    if (number == parseInt(number)) {
	        number = parseInt(number);
	    }

	    return number;
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	 * 把秒转为时间格式
	 */
	var stringToDate = function stringToDate(odate) {
	    if (!odate) {
	        return null;
	    }

	    if (String(odate).length === 10) {
	        // 秒数
	        odate = odate * 1000;
	    }

	    return new Date(odate);
	};

	var utils = {
	    stringToDate: stringToDate
	};

	exports.default = utils;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;