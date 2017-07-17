/*! photoswipe v0.0.6 ~ (c) 2012-2017 zszhang@ewaytec.cn ~ http://gitlab.ewaytec.cn/frontend-components-team/photoswipe.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["photoswipe"] = factory();
	else
		root["photoswipe"] = factory();
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

	'use strict';__webpack_require__(1);__webpack_require__(5);(function(window){var lastTime=0;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(callback,element){var currTime=Date.now();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitcancelAnimationFrame||function(id){clearTimeout(id);};})(window)// spin.js
	;(function(window){var prefixes=['webkit'],animations={},useCssAnimations,sheet;function createEl(tag,prop){var el=document.createElement(tag||'div'),n;for(n in prop){el[n]=prop[n];}return el;}function ins(parent/* child1, child2, ...*/){for(var i=1,n=arguments.length;i<n;i++){parent.appendChild(arguments[i]);}return parent;}function addAnimation(alpha,trail,i,lines){var name=['opacity',trail,~~(alpha*100),i,lines].join('-'),start=0.01+i/lines*100,z=Math.max(1-(1-alpha)/trail*(100-start),alpha),prefix=useCssAnimations.substring(0,useCssAnimations.indexOf('Animation')).toLowerCase(),pre=prefix&&'-'+prefix+'-'||'';if(!animations[name]){sheet.insertRule('@'+pre+'keyframes '+name+'{'+'0%{opacity:'+z+'}'+start+'%{opacity:'+alpha+'}'+(start+0.01)+'%{opacity:1}'+(start+trail)%100+'%{opacity:'+alpha+'}'+'100%{opacity:'+z+'}'+'}',sheet.cssRules.length);animations[name]=1;}return name;}function vendor(el,prop){var s=el.style,pp,i;prop=prop.charAt(0).toUpperCase()+prop.slice(1);if(s[prop]!==undefined)return prop;for(i=0;i<prefixes.length;i++){pp=prefixes[i]+prop;if(s[pp]!==undefined)return pp;}}function css(el,prop){for(var n in prop){el.style[vendor(el,n)||n]=prop[n];}return el;}function merge(obj){for(var i=1;i<arguments.length;i++){var def=arguments[i];for(var n in def){if(obj[n]===undefined)obj[n]=def[n];}}return obj;}function getColor(color,idx){return typeof color=='string'?color:color[idx%color.length];}var defaults={lines:12// The number of lines to draw
	,length:0// The length of each line
	,width:8// The line thickness
	,radius:16// The radius of the inner circle
	,scale:1.0// Scales overall size of the spinner
	,corners:1// Roundness (0..1)
	,color:'#FFF'// #rgb or #rrggbb
	,opacity:1/4// Opacity of the lines
	,rotate:0// Rotation offset
	,direction:1// 1: clockwise, -1: counterclockwise
	,speed:1// Rounds per second
	,trail:50// Afterglow percentage
	,fps:20// Frames per second when using setTimeout()
	,zIndex:2e9// Use a high z-index by default
	,className:'spinner'// CSS class to assign to the element
	,top:'50%'// center vertically
	,left:'50%'// center horizontally
	,shadow:false// Whether to render a shadow
	,hwaccel:false// Whether to use hardware acceleration (might be buggy)
	,position:'absolute'// Element positioning
	};function Spinner(o){this.opts=merge(o||{},Spinner.defaults,defaults);}Spinner.defaults={};merge(Spinner.prototype,{/**
	         * Adds the spinner to the given target element. If this instance is already
	         * spinning, it is automatically removed from its previous target b calling
	         * stop() internally.
	         */spin:function spin(target){this.stop();var self=this,o=self.opts,el=self.el=createEl(null,{className:o.className});css(el,{position:o.position,width:0,zIndex:o.zIndex,left:o.left,top:o.top});if(target){target.insertBefore(el,target.firstChild||null);}el.setAttribute('role','progressbar');self.lines(el,self.opts);if(!useCssAnimations){// No CSS animation support, use setTimeout() instead
	var i=0,start=(o.lines-1)*(1-o.direction)/2,alpha,fps=o.fps,f=fps/o.speed,ostep=(1-o.opacity)/(f*o.trail/100),astep=f/o.lines;(function anim(){i++;for(var j=0;j<o.lines;j++){alpha=Math.max(1-(i+(o.lines-j)*astep)%f*ostep,o.opacity);self.opacity(el,j*o.direction+start,alpha,o);}self.timeout=self.el&&setTimeout(anim,~~(1000/fps));})();}return self;}/**
	         * Stops and removes the Spinner.
	         */,stop:function stop(){var el=this.el;if(el){clearTimeout(this.timeout);if(el.parentNode)el.parentNode.removeChild(el);this.el=undefined;}return this;}/**
	         * Internal method that draws the individual lines. Will be overwritten
	         * in VML fallback mode below.
	         */,lines:function lines(el,o){var i=0,start=(o.lines-1)*(1-o.direction)/2,seg;function fill(color,shadow){return css(createEl(),{position:'absolute',width:o.scale*(o.length+o.width)+'px',height:o.scale*o.width+'px',background:color,boxShadow:shadow,transformOrigin:'left',transform:'rotate('+~~(360/o.lines*i+o.rotate)+'deg) translate('+o.scale*o.radius+'px'+',0)',borderRadius:(o.corners*o.scale*o.width>>1)+'px'});}for(;i<o.lines;i++){seg=css(createEl(),{position:'absolute',top:1+~(o.scale*o.width/2)+'px',transform:o.hwaccel?'translate3d(0,0,0)':'',opacity:o.opacity,animation:useCssAnimations&&addAnimation(o.opacity,o.trail,start+i*o.direction,o.lines)+' '+1/o.speed+'s linear infinite'});if(o.shadow)ins(seg,css(fill('#000','0 0 4px #000'),{top:'2px'}));ins(el,ins(seg,fill(getColor(o.color,i),'0 0 1px rgba(0,0,0,.1)')));}return el;}/**
	         * Internal method that adjusts the opacity of a single line.
	         * Will be overwritten in VML fallback mode below.
	         */,opacity:function opacity(el,i,val){if(i<el.childNodes.length)el.childNodes[i].style.opacity=val;}});if(typeof document!=='undefined'){sheet=function(){var el=createEl('style',{type:'text/css'});ins(document.getElementsByTagName('head')[0],el);return el.sheet||el.styleSheet;}();var probe=css(createEl('group'),{behavior:'url(#default#VML)'});useCssAnimations=vendor(probe,'animation');}window.Spinner=Spinner;})(window)// photoswipe.js
	;(function(window){function PhotoSwipe(template,UiClass,items,options){var utils=function(){var me={};me.createEl=function(classes,tag){var el=document.createElement(tag||'div');if(classes){el.className=classes;}return el;};me.getScrollY=function(){var yOffset=window.pageYOffset;return yOffset!==undefined?yOffset:document.documentElement.scrollTop;},me.removeClass=function(el,className){var reg=new RegExp('(\\s|^)'+className+'(\\s|$)');el.className=el.className.replace(reg,' ').replace(/^\s\s*/,'').replace(/\s\s*$/,'');};me.addClass=function(el,className){if(!me.hasClass(el,className)){el.className+=(el.className?' ':'')+className;}};me.hasClass=function(el,className){return el.className&&new RegExp('(^|\\s)'+className+'(\\s|$)').test(el.className);};me.getChildByClass=function(parentEl,childClassName){var node=parentEl.firstChild;while(node){if(utils.hasClass(node,childClassName)){return node;}node=node.nextSibling;}};me.extend=function(o1,o2,preventOverwrite){for(var prop in o2){if(o2.hasOwnProperty(prop)){if(preventOverwrite&&o1.hasOwnProperty(prop)){continue;}o1[prop]=o2[prop];}}};me.extend(me.easing={},{sine:{out:function out(k){return Math.sin(k*(Math.PI/2));},inOut:function inOut(k){return-(Math.cos(Math.PI*k)-1)/2;}},cubic:{out:function out(k){return--k*k*k+1;}}});me.features=function(){if(me.features){return me.features;}var features={},helperEl=me.createEl(),helperStyle=helperEl.style,vendor='';var styleChecks=['transform','perspective'],vendors=['','webkit'],styleCheckItem,styleName;for(var i=0;i<vendors.length;i++){vendor=vendors[i];for(var a=0;a<styleChecks.length;a++){styleCheckItem=styleChecks[a];styleName=vendor+(vendor?styleCheckItem.charAt(0).toUpperCase()+styleCheckItem.slice(1):styleCheckItem);if(!features[styleCheckItem]&&styleName in helperStyle){features[styleCheckItem]=styleName;}}}features.translatePrefix='translate'+(features.perspective?'3d(':'(');features.translateSufix=features.perspective?', 0px)':')';features.setTranslateX=function(x,elStyle){elStyle[features.transform]=features.translatePrefix+x+'px, 0px'+features.translateSufix;};return features;}();return me;}();/******************** 核心模块 begin ********************/var _options={allowPanToNext:true,// 缩放状态可滑动
	spacing:0.12,// 滑块间距
	bgOpacity:1,// 背景透明度
	loop:false,// 循环滑动
	hideAnimationDuration:333,// 隐藏动画持续时间
	showAnimationDuration:333,// 隐藏动画持续时间
	mainScrollEndFriction:0.35,// 滑动边缘摩擦力
	panEndFriction:0.35,// 缩放边缘摩擦力
	getDoubleTapZoom:function getDoubleTapZoom(item){return item.initialZoomLevel<0.7?1:1.33;},// 获取双击缩放
	maxSpreadZoom:1.33// 最大缩放比率
	};utils.extend(_options,options);var self=this;var NUM_HOLDERS=3;function _getEmptyPoint(){return{x:0,y:0};};var _isOpen,_isDestroying,_currentItemIndex,_containerStyle,_containerShiftIndex,_currPanDist=_getEmptyPoint(),_startPanOffset=_getEmptyPoint(),_panOffset=_getEmptyPoint(),_offset={},_globalEventHandlers,_viewportSize={},_currZoomLevel,_startZoomLevel,_translatePrefix,_translateSufix,_updateSizeInterval,_itemsNeedUpdate,_currPositionIndex=0,_slideSize=_getEmptyPoint(),// size of slide area, including spacing
	_itemHolders,_prevItemIndex,_indexDiff=0,// difference of indexes since last content update
	_transformKey,_requestAF,_cancelAF,_initalClassName,_initalWindowScrollY,_currentWindowScrollY,_features,_renderMaxResolution=false;function _getLoopedId(index){var numSlides=self.getNumItems();if(index>numSlides-1){return index-numSlides;}else if(index<0){return numSlides+index;}return index;};var _listeners={};function _listen(name,fn){if(!_listeners[name]){_listeners[name]=[];}return _listeners[name].push(fn);};function _shout(name){var listeners=_listeners[name];if(listeners){var args=Array.prototype.slice.call(arguments);args.shift();for(var i=0;i<listeners.length;i++){listeners[i].apply(self,args);}}};// 设置背景透明度
	function _applyBgOpacity(opacity){_bgOpacity=opacity;self.bg.style.opacity=opacity*_options.bgOpacity;};// 设置缩放zoom和位移transform
	function _applyZoomTransform(styleObj,x,y,zoom,item){if(!_renderMaxResolution||item&&item!==self.currItem){zoom=zoom/(item?item.fitRatio:self.currItem.fitRatio);}styleObj[_transformKey]=_translatePrefix+x+'px, '+y+'px'+_translateSufix+' scale('+zoom+')';};// 设置当前对象缩放和平移
	function _applyCurrentZoomPan(allowRenderResolution){if(_currZoomElementStyle){if(allowRenderResolution){if(_currZoomLevel>self.currItem.fitRatio){if(!_renderMaxResolution){setImageSize(self.currItem,false,true);_renderMaxResolution=true;}}else{if(_renderMaxResolution){setImageSize(self.currItem);_renderMaxResolution=false;}}}_applyZoomTransform(_currZoomElementStyle,_panOffset.x,_panOffset.y,_currZoomLevel);}};// 设置指定对象缩放和平移
	function _applyZoomPanToItem(item){if(item.container){_applyZoomTransform(item.container.style,item.initialPosition.x,item.initialPosition.y,item.initialZoomLevel,item);}};// 设置TranslateX值
	function _setTranslateX(x,elStyle){elStyle[_transformKey]=_translatePrefix+x+'px, 0px'+_translateSufix;};// 移动图片左右滚动
	function _moveMainScroll(x,dragging){if(!_options.loop&&dragging){var newSlideIndexOffset=_currentItemIndex+(_slideSize.x*_currPositionIndex-x)/_slideSize.x,delta=Math.round(x-_mainScrollPos.x);if(newSlideIndexOffset<0&&delta>0||newSlideIndexOffset>=self.getNumItems()-1&&delta<0){x=_mainScrollPos.x+delta*_options.mainScrollEndFriction;}}_mainScrollPos.x=x;_setTranslateX(x,_containerStyle);};// 计算平移偏移
	function _calculatePanOffset(axis,zoomLevel){var m=_midZoomPoint[axis]-_offset[axis];return _startPanOffset[axis]+_currPanDist[axis]+m-m*(zoomLevel/_startZoomLevel);};function _equalizePoints(p1,p2){p1.x=p2.x;p1.y=p2.y;if(p2.id){p1.id=p2.id;}};function _roundPoint(p){p.x=Math.round(p.x);p.y=Math.round(p.y);};// 计算实时平移边界
	function _calculatePanBounds(zoomLevel,update){var bounds=self.calculateItemSize(self.currItem,_viewportSize,zoomLevel);if(update){_currPanBounds=bounds;}return bounds;};// 获取最小缩放级别
	function _getMinZoomLevel(item){if(!item){item=self.currItem;}return item.initialZoomLevel;};// 获取最大缩放级别
	function _getMaxZoomLevel(item){if(!item){item=self.currItem;}return item.w>0?_options.maxSpreadZoom:1;};// 不调用的话，双击放大的时候，有50px的top值
	function _updatePageScrollOffset(){self.setScrollOffset(0,utils.getScrollY());};utils.extend(self,{shout:_shout,listen:_listen,viewportSize:_viewportSize,options:_options,getZoomLevel:function getZoomLevel(){return _currZoomLevel;},getCurrentIndex:function getCurrentIndex(){return _currentItemIndex;},isDragging:function isDragging(){return _isDragging;},isZooming:function isZooming(){return _isZooming;},setScrollOffset:function setScrollOffset(x,y){_offset.x=x;_currentWindowScrollY=_offset.y=y;},applyZoomPan:function applyZoomPan(zoomLevel,panX,panY,allowRenderResolution){_panOffset.x=panX;_panOffset.y=panY;_currZoomLevel=zoomLevel;_applyCurrentZoomPan(allowRenderResolution);},init:function init(){if(_isOpen||_isDestroying){return;}self.utils=utils;self.template=template;self.bg=utils.getChildByClass(template,'pswp__bg');_initalClassName=template.className;_isOpen=true;_features=utils.features;_requestAF=window.requestAnimationFrame;_cancelAF=window.cancelAnimationFrame;_transformKey=_features.transform;self.scrollWrap=utils.getChildByClass(template,'pswp__scroll-wrap');self.container=utils.getChildByClass(self.scrollWrap,'pswp__container');_containerStyle=self.container.style;// for fast access
	// Objects that hold slides (there are only 3 in DOM)
	self.itemHolders=_itemHolders=[{el:self.container.children[0],wrap:0,index:-1},{el:self.container.children[1],wrap:0,index:-1},{el:self.container.children[2],wrap:0,index:-1}];// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
	_itemHolders[0].el.style.display=_itemHolders[2].el.style.display='none';_translatePrefix='translate'+(_features.perspective?'3d(':'(');_translateSufix=_features.perspective?', 0px)':')';// Setup global events
	_globalEventHandlers={resize:self.updateSize,scroll:_updatePageScrollOffset};initTap();initController();initGestures();// init
	if(UiClass){var ui=self.ui=new UiClass(self,utils);ui.init();}_currentItemIndex=_currentItemIndex||_options.index||0;// validate index
	if(isNaN(_currentItemIndex)||_currentItemIndex<0||_currentItemIndex>=self.getNumItems()){_currentItemIndex=0;}self.currItem=self.getItemAt(_currentItemIndex);template.setAttribute('aria-hidden','false');template.style.position='fixed';if(_currentWindowScrollY===undefined){_currentWindowScrollY=_initalWindowScrollY=utils.getScrollY();}// add classes to root element of PhotoSwipe
	var rootClasses='pswp--open ';if(_options.mainClass){rootClasses+=_options.mainClass+' ';}rootClasses+='pswp--notouch';rootClasses+=_features.animationName?' pswp--css_animation':'';rootClasses+=_features.svg?' pswp--svg':'';utils.addClass(template,rootClasses);self.updateSize();// initial update
	_containerShiftIndex=-1;_indexDiff=null;for(var i=0;i<NUM_HOLDERS;i++){_setTranslateX((i+_containerShiftIndex)*_slideSize.x,_itemHolders[i].el.style);}self.scrollWrap.addEventListener('touchstart',self);_listen('initialZoomInEnd',function(){self.setContent(_itemHolders[0],_currentItemIndex-1);self.setContent(_itemHolders[2],_currentItemIndex+1);_itemHolders[0].el.style.display=_itemHolders[2].el.style.display='block';_bindEvents();function _bindEvents(){if(_features.transform){self.scrollWrap.addEventListener('click',self);}window.addEventListener('resize',self);window.addEventListener('scroll',self);_shout('bindEvents');};});self.setContent(_itemHolders[1],_currentItemIndex);self.updateCurrItem();utils.addClass(template,'pswp--visible');},close:function close(){if(!_isOpen){return;}var hash=window.location.hash.indexOf('photoswipe')>-1;if(hash){window.history.back();}_isOpen=false;_isDestroying=true;_shout('close');_unbindEvents();_showOrHide(self.currItem,null,true,self.destroy);function _unbindEvents(){window.removeEventListener('resize',self);window.removeEventListener('scroll',_globalEventHandlers.scroll);if(_features.transform){self.scrollWrap.removeEventListener('click',self);}if(_isDragging){window.removeEventListener('touchmove',self);window.removeEventListener('touchend',self);window.removeEventListener('touchcancel',self);}_shout('unbindEvents');};},destroy:function destroy(){_shout('destroy');if(_showOrHideTimeout){clearTimeout(_showOrHideTimeout);}template.setAttribute('aria-hidden','true');template.className=_initalClassName;if(_updateSizeInterval){clearInterval(_updateSizeInterval);}self.scrollWrap.removeEventListener('touchstart',self);window.removeEventListener('scroll',self);_stopDragUpdateLoop();_stopAllAnimations();_listeners=null;},panTo:function panTo(x,y,force){if(!force){if(x>_currPanBounds.min.x){x=_currPanBounds.min.x;}else if(x<_currPanBounds.max.x){x=_currPanBounds.max.x;}if(y>_currPanBounds.min.y){y=_currPanBounds.min.y;}else if(y<_currPanBounds.max.y){y=_currPanBounds.max.y;}}_panOffset.x=x;_panOffset.y=y;_applyCurrentZoomPan();},handleEvent:function handleEvent(e){e=e||window.event;if(_globalEventHandlers[e.type]){_globalEventHandlers[e.type](e);}},updateCurrZoomItem:function updateCurrZoomItem(emulateSetContent){if(emulateSetContent){_shout('beforeChange',0);}if(_itemHolders[1].el.children.length){var zoomElement=_itemHolders[1].el.children[0];if(utils.hasClass(zoomElement,'pswp__zoom-wrap')){_currZoomElementStyle=zoomElement.style;}else{_currZoomElementStyle=null;}}else{_currZoomElementStyle=null;}_currPanBounds=self.currItem.bounds;_startZoomLevel=_currZoomLevel=self.currItem.initialZoomLevel;_panOffset.x=_currPanBounds.center.x;_panOffset.y=_currPanBounds.center.y;},invalidateCurrItems:function invalidateCurrItems(){_itemsNeedUpdate=true;for(var i=0;i<NUM_HOLDERS;i++){if(_itemHolders[i].item){_itemHolders[i].item.needsUpdate=true;}}},updateCurrItem:function updateCurrItem(beforeAnimation){if(_indexDiff===0){return;}var diffAbs=Math.abs(_indexDiff),tempHolder;if(beforeAnimation&&diffAbs<2){return;}self.currItem=self.getItemAt(_currentItemIndex);_renderMaxResolution=false;_shout('beforeChange',_indexDiff);if(diffAbs>=NUM_HOLDERS){_containerShiftIndex+=_indexDiff+(_indexDiff>0?-NUM_HOLDERS:NUM_HOLDERS);diffAbs=NUM_HOLDERS;}for(var i=0;i<diffAbs;i++){if(_indexDiff>0){tempHolder=_itemHolders.shift();_itemHolders[NUM_HOLDERS-1]=tempHolder;// move first to last
	_containerShiftIndex++;_setTranslateX((_containerShiftIndex+2)*_slideSize.x,tempHolder.el.style);self.setContent(tempHolder,_currentItemIndex-diffAbs+i+1+1);}else{tempHolder=_itemHolders.pop();_itemHolders.unshift(tempHolder);// move last to first
	_containerShiftIndex--;_setTranslateX(_containerShiftIndex*_slideSize.x,tempHolder.el.style);self.setContent(tempHolder,_currentItemIndex+diffAbs-i-1-1);}}// reset zoom/pan on previous item
	if(_currZoomElementStyle&&Math.abs(_indexDiff)===1){var prevItem=self.getItemAt(_prevItemIndex);if(prevItem.initialZoomLevel!==_currZoomLevel){self.calculateItemSize(prevItem,_viewportSize);self.setImageSize(prevItem);_applyZoomPanToItem(prevItem);}}// reset diff after update
	_indexDiff=0;self.updateCurrZoomItem();_prevItemIndex=_currentItemIndex;},updateSize:function updateSize(force){_viewportSize.x=self.scrollWrap.clientWidth;_viewportSize.y=self.scrollWrap.clientHeight;_updatePageScrollOffset();_slideSize.x=_viewportSize.x+Math.round(_viewportSize.x*_options.spacing);_slideSize.y=_viewportSize.y;_moveMainScroll(_slideSize.x*_currPositionIndex);_shout('beforeResize');if(_containerShiftIndex!==undefined){var holder,item,hIndex;for(var i=0;i<NUM_HOLDERS;i++){holder=_itemHolders[i];_setTranslateX((i+_containerShiftIndex)*_slideSize.x,holder.el.style);hIndex=_currentItemIndex+i-1;if(_options.loop&&self.getNumItems()>2){hIndex=_getLoopedId(hIndex);}// update zoom level on items and refresh source (if needsUpdate)
	item=self.getItemAt(hIndex);// re-render gallery item if `needsUpdate`,
	// or doesn't have `bounds` (entirely new slide object)
	if(item&&(_itemsNeedUpdate||item.needsUpdate||!item.bounds)){self.cleanSlide(item);self.setContent(holder,hIndex);// if "center" slide
	if(i===1){self.currItem=item;self.updateCurrZoomItem(true);}item.needsUpdate=false;}else if(holder.index===-1&&hIndex>=0){// add content first time
	self.setContent(holder,hIndex);}if(item&&item.container){self.calculateItemSize(item,_viewportSize);self.setImageSize(item);_applyZoomPanToItem(item);}}_itemsNeedUpdate=false;}_startZoomLevel=_currZoomLevel=self.currItem.initialZoomLevel;_currPanBounds=self.currItem.bounds;if(_currPanBounds){_panOffset.x=_currPanBounds.center.x;_panOffset.y=_currPanBounds.center.y;_applyCurrentZoomPan(true);}_shout('resize');},zoomTo:function zoomTo(destoryZoomLevel,centerPoint,speed,easingFn,updateFn){if(centerPoint){_startZoomLevel=_currZoomLevel;_midZoomPoint.x=Math.abs(centerPoint.x)-_panOffset.x;_midZoomPoint.y=Math.abs(centerPoint.y)-_panOffset.y;_equalizePoints(_startPanOffset,_panOffset);}var destPanBounds=_calculatePanBounds(destoryZoomLevel,false),destPanOffset={};_modifyDestPanOffset('x',destPanBounds,destPanOffset,destoryZoomLevel);_modifyDestPanOffset('y',destPanBounds,destPanOffset,destoryZoomLevel);var initialZoomLevel=_currZoomLevel;var initialPanOffset={x:_panOffset.x,y:_panOffset.y};_roundPoint(destPanOffset);var onUpdate=function onUpdate(now){if(now===1){_currZoomLevel=destoryZoomLevel;_panOffset.x=destPanOffset.x;_panOffset.y=destPanOffset.y-_currentWindowScrollY;}else{_currZoomLevel=(destoryZoomLevel-initialZoomLevel)*now+initialZoomLevel;_panOffset.x=(destPanOffset.x-initialPanOffset.x)*now+initialPanOffset.x;_panOffset.y=(destPanOffset.y-_currentWindowScrollY-initialPanOffset.y)*now+initialPanOffset.y;}if(updateFn){updateFn(now);}_applyCurrentZoomPan(now===1);};if(speed){_animateProp('customZoomTo',0,1,speed,easingFn||utils.easing.sine.inOut,onUpdate);}else{onUpdate(1);}// 验证实时平移边界，超出边界返回true
	function _modifyDestPanOffset(axis,destPanBounds,destPanOffset,destoryZoomLevel){if(destoryZoomLevel===self.currItem.initialZoomLevel){destPanOffset[axis]=self.currItem.initialPosition[axis];return true;}else{destPanOffset[axis]=_calculatePanOffset(axis,destoryZoomLevel);if(destPanOffset[axis]>destPanBounds.min[axis]){destPanOffset[axis]=destPanBounds.min[axis];return true;}else if(destPanOffset[axis]<destPanBounds.max[axis]){destPanOffset[axis]=destPanBounds.max[axis];return true;}}return false;};}});/******************** 核心模块 end ********************//******************** 动画模块 begin ********************/var _animations={},_numAnimations=0;function _stopAnimation(name){if(_animations[name]){if(_animations[name].raf){_cancelAF(_animations[name].raf);}_numAnimations--;delete _animations[name];}};function _registerStartAnimation(name){if(_animations[name]){_stopAnimation(name);}if(!_animations[name]){_numAnimations++;_animations[name]={};}};function _stopAllAnimations(){for(var prop in _animations){if(_animations.hasOwnProperty(prop)){_stopAnimation(prop);}}};function _animateProp(name,b,endProp,d,easingFn,onUpdate,onComplete){var startAnimTime=Date.now(),t;_registerStartAnimation(name);var animloop=function animloop(){if(_animations[name]){t=Date.now()-startAnimTime;// time diff
	//b - beginning (start prop)
	//d - anim duration
	if(t>=d){_stopAnimation(name);onUpdate(endProp);if(onComplete){onComplete();}return;}onUpdate((endProp-b)*easingFn(t/d)+b);_animations[name].raf=_requestAF(animloop);}};animloop();};/******************** 动画模块 end ********************//******************** 显示隐藏模块 begin ********************/var _showOrHideTimeout,initialZoomRunning;// 显示或隐藏动画执行中
	function _showOrHide(item,img,out,completeFn){if(_showOrHideTimeout){clearTimeout(_showOrHideTimeout);}initialZoomRunning=true;initialContentSet=true;var thumbBounds=_options.getThumbBoundsFn&&_options.getThumbBoundsFn(_currentItemIndex),duration=out?_options.hideAnimationDuration:_options.showAnimationDuration;function startAnimation(){if(!out){// 显示时，缩放平移到小图大小和位置
	_currZoomLevel=thumbBounds.w/item.w;_panOffset.x=thumbBounds.x;_panOffset.y=thumbBounds.y-_initalWindowScrollY;_applyCurrentZoomPan();}else{utils.removeClass(template,'pswp--animated-in');}_registerStartAnimation('initialZoom');_showOrHideTimeout=setTimeout(function(){_shout('initialZoom'+(out?'Out':'In'));if(!out){// 显示时，缩放平移到初始化的大小和位置
	_currZoomLevel=item.initialZoomLevel;_equalizePoints(_panOffset,item.initialPosition);_applyCurrentZoomPan();_applyBgOpacity(1);_showOrHideTimeout=setTimeout(onComplete,duration+20);}else{// 隐藏时，缩放平移到小图大小和位置
	_currZoomLevel=thumbBounds.w/item.w;_panOffset.x=thumbBounds.x;_panOffset.y=thumbBounds.y-_initalWindowScrollY;_applyCurrentZoomPan();_applyBgOpacity(0);_showOrHideTimeout=setTimeout(onComplete,duration+20);}},out?25:90);};startAnimation();function onComplete(){_stopAnimation('initialZoom');if(!out){if(img){img.style.display='block';}utils.addClass(template,'pswp--animated-in');}else{self.template.removeAttribute('style');self.bg.removeAttribute('style');}_shout('initialZoom'+(out?'OutEnd':'InEnd'));completeFn&&completeFn();initialZoomRunning=false;}};/******************** 显示隐藏模块 end ********************//******************** 手势模块 begin ********************/var MIN_SWIPE_DISTANCE=30,DIRECTION_CHECK_OFFSET=10;// amount of pixels to drag to determine direction of swipe
	var _gestureStartTime,_gestureCheckSpeedTime,p={},// first point
	p2={},// second point (for zoom gesture)
	delta={},_currPoint={},_startPoint={},_startMainScrollPos={},_releaseAnimData,_posPoints=[],// array of points during dragging, used to determine type of gesture
	_isZoomingIn,_currZoomedItemIndex=0,_centerPoint=_getEmptyPoint(),_lastReleaseTime=0,_isDragging,// 是否在拖拽中
	_isMultitouch,// at least two _pointers are down
	_zoomStarted,// zoom level changed during zoom gesture
	_moved,_dragAnimFrame,_mainScrollShifted,_currentPoints,// array of current touch points
	_isZooming,_currPointsDistance,_startPointsDistance,_currPanBounds,_mainScrollPos=_getEmptyPoint(),_currZoomElementStyle,_mainScrollAnimating,// true, if animation after swipe gesture is running
	_midZoomPoint=_getEmptyPoint(),_currCenterPoint=_getEmptyPoint(),_direction,_isFirstMove,// 是否首次移动
	_opacityChanged,_bgOpacity,_wasOverInitialZoom,_ePoint1={},_ePoint2={},_tempPointsArr=[];// 计算两点间距
	function _calculatePointsDistance(p0,p1){var x=Math.abs(p0.x-p1.x),y=Math.abs(p0.y-p1.y);return Math.sqrt(x*x+y*y);};// 停止拖拽循环监控
	function _stopDragUpdateLoop(){if(_dragAnimFrame){_cancelAF(_dragAnimFrame);_dragAnimFrame=null;}};// 开启拖拽循环监控
	function _dragUpdateLoop(){if(_isDragging){_dragAnimFrame=_requestAF(_dragUpdateLoop);_renderMovement();}};// 计算两点的中心点
	function _findCenterOfPoints(p0,p1,pCenter){pCenter.x=(p0.x+p1.x)*0.5;pCenter.y=(p0.y+p1.y)*0.5;};// 获取点击点
	function _getTouchPoints(e){// clean up previous points, without recreating array
	while(_tempPointsArr.length>0){_tempPointsArr.pop();}if(e.type.indexOf('touch')>-1){if(e.touches&&e.touches.length>0){_tempPointsArr[0]=_convertTouchToPoint(e.touches[0],_ePoint1);if(e.touches.length>1){_tempPointsArr[1]=_convertTouchToPoint(e.touches[1],_ePoint2);}}}else{_ePoint1.x=e.pageX;_ePoint1.y=e.pageY;_ePoint1.id='';_tempPointsArr[0]=_ePoint1;//_ePoint1;
	}return _tempPointsArr;function _convertTouchToPoint(touch,p){p.x=touch.pageX;p.y=touch.pageY;p.id=touch.identifier;return p;};};// 拖拽开始
	function _onDragStart(e){e.preventDefault();if(initialZoomRunning){// 显示或隐藏动画执行中
	return;}var startPointsList=_getTouchPoints(e),numPoints=startPointsList.length;_currentPoints=null;// 初始化拖拽
	if(!_isDragging||numPoints===1){_isDragging=_isFirstMove=true;window.addEventListener('touchmove',self);window.addEventListener('touchend',self);window.addEventListener('touchcancel',self);_isZoomingIn=_wasOverInitialZoom=_opacityChanged=_mainScrollShifted=_moved=_isMultitouch=_zoomStarted=false;_direction=null;_equalizePoints(_startPanOffset,_panOffset);_currPanDist.x=_currPanDist.y=0;_equalizePoints(_currPoint,startPointsList[0]);_equalizePoints(_startPoint,_currPoint);_startMainScrollPos.x=_slideSize.x*_currPositionIndex;_posPoints=[{x:_currPoint.x,y:_currPoint.y}];_gestureCheckSpeedTime=_gestureStartTime=Date.now();_calculatePanBounds(_currZoomLevel,true);_stopDragUpdateLoop();_dragUpdateLoop();}// 初始化多点触控缩放
	if(!_isZooming&&numPoints>1&&!_mainScrollAnimating&&!_mainScrollShifted){_startZoomLevel=_currZoomLevel;_zoomStarted=false;_isZooming=_isMultitouch=true;_currPanDist.y=_currPanDist.x=0;_equalizePoints(_startPanOffset,_panOffset);_equalizePoints(p,startPointsList[0]);_equalizePoints(p2,startPointsList[1]);_findCenterOfPoints(p,p2,_currCenterPoint);_midZoomPoint.x=Math.abs(_currCenterPoint.x)-_panOffset.x;_midZoomPoint.y=Math.abs(_currCenterPoint.y)-_panOffset.y;_currPointsDistance=_startPointsDistance=_calculatePointsDistance(p,p2);}};// 拖拽移动
	function _onDragMove(e){e.preventDefault();if(_isDragging){var touchesList=_getTouchPoints(e);if(!_direction&&!_moved&&!_isZooming){;if(_mainScrollPos.x!==_slideSize.x*_currPositionIndex){_direction='h';}else{var diff=Math.abs(touchesList[0].x-_currPoint.x)-Math.abs(touchesList[0].y-_currPoint.y);if(Math.abs(diff)>=DIRECTION_CHECK_OFFSET){_direction=diff>0?'h':'v';_currentPoints=touchesList;}}}else{_currentPoints=touchesList;}}};// 渲染拖拽移动
	function _renderMovement(){if(!_currentPoints){return;}var numPoints=_currentPoints.length;if(numPoints===0){return;}_equalizePoints(p,_currentPoints[0]);delta.x=p.x-_currPoint.x;delta.y=p.y-_currPoint.y;if(_isZooming&&numPoints>1){// 处理多点触控
	_currPoint.x=p.x;_currPoint.y=p.y;// check if one of two points changed
	if(!delta.x&&!delta.y&&_isEqualPoints(_currentPoints[1],p2)){return;}_equalizePoints(p2,_currentPoints[1]);if(!_zoomStarted){_zoomStarted=true;}var pointsDistance=_calculatePointsDistance(p,p2);var zoomLevel=_calculateZoomLevel(pointsDistance);// slightly over the of initial zoom level
	if(zoomLevel>self.currItem.initialZoomLevel+self.currItem.initialZoomLevel/15){_wasOverInitialZoom=true;}// Apply the friction if zoom level is out of the bounds
	var zoomFriction=1,minZoomLevel=_getMinZoomLevel(),maxZoomLevel=_getMaxZoomLevel();if(zoomLevel<minZoomLevel){zoomFriction=(minZoomLevel-zoomLevel)/minZoomLevel;if(zoomFriction>1){zoomFriction=1;}zoomLevel=minZoomLevel-zoomFriction*(minZoomLevel/3);}else if(zoomLevel>maxZoomLevel){// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
	zoomFriction=(zoomLevel-maxZoomLevel)/(minZoomLevel*6);if(zoomFriction>1){zoomFriction=1;}zoomLevel=maxZoomLevel+zoomFriction*minZoomLevel;}if(zoomFriction<0){zoomFriction=0;}// distance between touch points after friction is applied
	_currPointsDistance=pointsDistance;_findCenterOfPoints(p,p2,_centerPoint);_currPanDist.x+=_centerPoint.x-_currCenterPoint.x;_currPanDist.y+=_centerPoint.y-_currCenterPoint.y;_equalizePoints(_currCenterPoint,_centerPoint);_panOffset.x=_calculatePanOffset('x',zoomLevel);_panOffset.y=_calculatePanOffset('y',zoomLevel);_isZoomingIn=zoomLevel>_currZoomLevel;_currZoomLevel=zoomLevel;_applyCurrentZoomPan();}else{// handle behaviour for one point (dragging or panning)
	if(!_direction){return;}if(_isFirstMove){_isFirstMove=false;// subtract drag distance that was used during the detection direction
	if(Math.abs(delta.x)>=DIRECTION_CHECK_OFFSET){delta.x-=_currentPoints[0].x-_startPoint.x;}if(Math.abs(delta.y)>=DIRECTION_CHECK_OFFSET){delta.y-=_currentPoints[0].y-_startPoint.y;}}_currPoint.x=p.x;_currPoint.y=p.y;if(delta.x===0&&delta.y===0){return;}_pushPosPoint(Date.now(),p.x,p.y);_moved=true;_currPanBounds=self.currItem.bounds;var mainScrollChanged=_panOrMoveMainScroll('x',delta);if(!mainScrollChanged){_panOrMoveMainScroll('y',delta);_roundPoint(_panOffset);_applyCurrentZoomPan();}}function _isEqualPoints(p1,p2){return p1.x===p2.x&&p1.y===p2.y;};function _pushPosPoint(time,x,y){if(time-_gestureCheckSpeedTime>50){var o=_posPoints.length>2?_posPoints.shift():{};o.x=x;o.y=y;_posPoints.push(o);_gestureCheckSpeedTime=time;}};function _panOrMoveMainScroll(axis,delta){var panFriction,overDiff=0,newOffset=_panOffset[axis]+delta[axis],startOverDiff,dir=delta[axis]>0,newMainScrollPosition=_mainScrollPos.x+delta.x,mainScrollDiff=_mainScrollPos.x-_startMainScrollPos.x,newPanPos,newMainScrollPos;// calculate fdistance over the bounds and friction
	if(newOffset>_currPanBounds.min[axis]||newOffset<_currPanBounds.max[axis]){panFriction=_options.panEndFriction;// Linear increasing of friction, so at 1/4 of viewport it's at max value.
	// Looks not as nice as was expected. Left for history.
	// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
	}else{panFriction=1;}newOffset=_panOffset[axis]+delta[axis]*panFriction;// move main scroll or start panning
	if(_options.allowPanToNext||_currZoomLevel===self.currItem.initialZoomLevel){if(!_currZoomElementStyle){newMainScrollPos=newMainScrollPosition;}else if(_direction==='h'&&axis==='x'&&!_zoomStarted){if(dir){if(newOffset>_currPanBounds.min[axis]){panFriction=_options.panEndFriction;overDiff=_currPanBounds.min[axis]-newOffset;startOverDiff=_currPanBounds.min[axis]-_startPanOffset[axis];}// drag right
	if((startOverDiff<=0||mainScrollDiff<0)&&self.getNumItems()>1){newMainScrollPos=newMainScrollPosition;if(mainScrollDiff<0&&newMainScrollPosition>_startMainScrollPos.x){newMainScrollPos=_startMainScrollPos.x;}}else{if(_currPanBounds.min.x!==_currPanBounds.max.x){newPanPos=newOffset;}}}else{if(newOffset<_currPanBounds.max[axis]){panFriction=_options.panEndFriction;overDiff=newOffset-_currPanBounds.max[axis];startOverDiff=_startPanOffset[axis]-_currPanBounds.max[axis];}if((startOverDiff<=0||mainScrollDiff>0)&&self.getNumItems()>1){newMainScrollPos=newMainScrollPosition;if(mainScrollDiff>0&&newMainScrollPosition<_startMainScrollPos.x){newMainScrollPos=_startMainScrollPos.x;}}else{if(_currPanBounds.min.x!==_currPanBounds.max.x){newPanPos=newOffset;}}}//
	}if(axis==='x'){if(newMainScrollPos!==undefined){_moveMainScroll(newMainScrollPos,true);if(newMainScrollPos===_startMainScrollPos.x){_mainScrollShifted=false;}else{_mainScrollShifted=true;}}if(_currPanBounds.min.x!==_currPanBounds.max.x){if(newPanPos!==undefined){_panOffset.x=newPanPos;}else if(!_mainScrollShifted){_panOffset.x+=delta.x*panFriction;}}return newMainScrollPos!==undefined;}}if(!_mainScrollAnimating){if(!_mainScrollShifted){if(_currZoomLevel>self.currItem.fitRatio){_panOffset[axis]+=delta[axis]*panFriction;}}}};function _calculateZoomLevel(touchesDistance){return 1/_startPointsDistance*touchesDistance*_startZoomLevel;};};// 拖拽释放
	function _onDragRelease(e){e.preventDefault();var releasePoint;var touchList=_getTouchPoints(e),gestureType,numPoints=touchList.length;_currentWindowScrollY=0;// 拖拽中滚动y轴为0
	// 超过双点触控不做处理
	if(numPoints===2){_currentPoints=null;return true;}// 如果是双点触控
	if(numPoints===1){_equalizePoints(_startPoint,touchList[0]);}// 单点触控，点击事件
	if(numPoints===0&&!_direction&&!_mainScrollAnimating){if(!releasePoint){if(e.changedTouches&&e.changedTouches[0]){releasePoint={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:'touch'};}}_shout('touchRelease',e,releasePoint);}// Difference in time between releasing of two last touch points (zoom gesture)
	var releaseTimeDiff=-1;// Gesture completed, no pointers left
	if(numPoints===0){_isDragging=false;window.removeEventListener('touchmove',self);window.removeEventListener('touchend',self);window.removeEventListener('touchcancel',self);_stopDragUpdateLoop();if(_isZooming){// Two points released at the same time
	releaseTimeDiff=0;}else if(_lastReleaseTime!==-1){releaseTimeDiff=Date.now()-_lastReleaseTime;}}_lastReleaseTime=numPoints===1?Date.now():-1;if(releaseTimeDiff!==-1&&releaseTimeDiff<150){gestureType='zoom';}else{gestureType='swipe';}if(_isZooming&&numPoints<2){_isZooming=false;// Only second point released
	if(numPoints===1){gestureType='zoomPointerUp';}}_currentPoints=null;if(!_moved&&!_zoomStarted&&!_mainScrollAnimating){// nothing to animate
	return;}_stopAllAnimations();if(!_releaseAnimData){_releaseAnimData=_initDragReleaseAnimationData();}_releaseAnimData.calculateSwipeSpeed('x');// main scroll
	if((_mainScrollShifted||_mainScrollAnimating)&&numPoints===0){var itemChanged=_finishSwipeMainScrollGesture(gestureType,_releaseAnimData);if(itemChanged){return;}gestureType='zoomPointerUp';}// prevent zoom/pan animation when main scroll animation runs
	if(_mainScrollAnimating){return;}// Complete simple zoom gesture (reset zoom level if it's out of the bounds)
	if(gestureType!=='swipe'){_completeZoomGesture();return;}// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
	if(!_mainScrollShifted&&_currZoomLevel>self.currItem.fitRatio){_completePanGesture(_releaseAnimData);}function _initDragReleaseAnimationData(){// temp local vars
	var lastFlickDuration,tempReleasePos;// s = this
	var s={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function calculateSwipeSpeed(axis){if(_posPoints.length>1){lastFlickDuration=Date.now()-_gestureCheckSpeedTime+50;tempReleasePos=_posPoints[_posPoints.length-2][axis];}else{lastFlickDuration=Date.now()-_gestureStartTime;// total gesture duration
	tempReleasePos=_startPoint[axis];}s.lastFlickOffset[axis]=_currPoint[axis]-tempReleasePos;s.lastFlickDist[axis]=Math.abs(s.lastFlickOffset[axis]);if(s.lastFlickDist[axis]>20){s.lastFlickSpeed[axis]=s.lastFlickOffset[axis]/lastFlickDuration;}else{s.lastFlickSpeed[axis]=0;}if(Math.abs(s.lastFlickSpeed[axis])<0.1){s.lastFlickSpeed[axis]=0;}s.slowDownRatio[axis]=0.95;s.slowDownRatioReverse[axis]=1-s.slowDownRatio[axis];s.speedDecelerationRatio[axis]=1;},calculateOverBoundsAnimOffset:function calculateOverBoundsAnimOffset(axis,speed){if(!s.backAnimStarted[axis]){if(_panOffset[axis]>_currPanBounds.min[axis]){s.backAnimDestination[axis]=_currPanBounds.min[axis];}else if(_panOffset[axis]<_currPanBounds.max[axis]){s.backAnimDestination[axis]=_currPanBounds.max[axis];}if(s.backAnimDestination[axis]!==undefined){s.slowDownRatio[axis]=0.7;s.slowDownRatioReverse[axis]=1-s.slowDownRatio[axis];if(s.speedDecelerationRatioAbs[axis]<0.05){s.lastFlickSpeed[axis]=0;s.backAnimStarted[axis]=true;_animateProp('bounceZoomPan'+axis,_panOffset[axis],s.backAnimDestination[axis],speed||300,utils.easing.sine.out,function(pos){_panOffset[axis]=pos;_applyCurrentZoomPan();});}}}},// Reduces the speed by slowDownRatio (per 10ms)
	calculateAnimOffset:function calculateAnimOffset(axis){if(!s.backAnimStarted[axis]){s.speedDecelerationRatio[axis]=s.speedDecelerationRatio[axis]*(s.slowDownRatio[axis]+s.slowDownRatioReverse[axis]-s.slowDownRatioReverse[axis]*s.timeDiff/10);s.speedDecelerationRatioAbs[axis]=Math.abs(s.lastFlickSpeed[axis]*s.speedDecelerationRatio[axis]);s.distanceOffset[axis]=s.lastFlickSpeed[axis]*s.speedDecelerationRatio[axis]*s.timeDiff;_panOffset[axis]+=s.distanceOffset[axis];}},panAnimLoop:function panAnimLoop(){if(_animations.zoomPan){_animations.zoomPan.raf=_requestAF(s.panAnimLoop);s.now=Date.now();s.timeDiff=s.now-s.lastNow;s.lastNow=s.now;s.calculateAnimOffset('x');s.calculateAnimOffset('y');_applyCurrentZoomPan();s.calculateOverBoundsAnimOffset('x');s.calculateOverBoundsAnimOffset('y');if(s.speedDecelerationRatioAbs.x<0.05&&s.speedDecelerationRatioAbs.y<0.05){// round pan position
	_panOffset.x=Math.round(_panOffset.x);_panOffset.y=Math.round(_panOffset.y);_applyCurrentZoomPan();_stopAnimation('zoomPan');return;}}}};return s;};function _completePanGesture(animData){// calculate swipe speed for Y axis (paanning)
	animData.calculateSwipeSpeed('y');_currPanBounds=self.currItem.bounds;animData.backAnimDestination={};animData.backAnimStarted={};// Avoid acceleration animation if speed is too low
	if(Math.abs(animData.lastFlickSpeed.x)<=0.05&&Math.abs(animData.lastFlickSpeed.y)<=0.05){animData.speedDecelerationRatioAbs.x=animData.speedDecelerationRatioAbs.y=0;// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
	animData.calculateOverBoundsAnimOffset('x');animData.calculateOverBoundsAnimOffset('y');return true;}// Animation loop that controls the acceleration after pan gesture ends
	_registerStartAnimation('zoomPan');animData.lastNow=Date.now();animData.panAnimLoop();};function _finishSwipeMainScrollGesture(gestureType,_releaseAnimData){var itemChanged;if(!_mainScrollAnimating){_currZoomedItemIndex=_currentItemIndex;}var itemsDiff;if(gestureType==='swipe'){var totalShiftDist=_currPoint.x-_startPoint.x,isFastLastFlick=_releaseAnimData.lastFlickDist.x<10;// if container is shifted for more than MIN_SWIPE_DISTANCE,
	// and last flick gesture was in right direction
	if(totalShiftDist>MIN_SWIPE_DISTANCE&&(isFastLastFlick||_releaseAnimData.lastFlickOffset.x>20)){// go to prev item
	itemsDiff=-1;}else if(totalShiftDist<-MIN_SWIPE_DISTANCE&&(isFastLastFlick||_releaseAnimData.lastFlickOffset.x<-20)){// go to next item
	itemsDiff=1;}}var nextCircle;if(itemsDiff){_currentItemIndex+=itemsDiff;if(_currentItemIndex<0){_currentItemIndex=_options.loop?self.getNumItems()-1:0;nextCircle=true;}else if(_currentItemIndex>=self.getNumItems()){_currentItemIndex=_options.loop?0:self.getNumItems()-1;nextCircle=true;}if(!nextCircle||_options.loop){_indexDiff+=itemsDiff;_currPositionIndex-=itemsDiff;itemChanged=true;}}var animateToX=_slideSize.x*_currPositionIndex;var animateToDist=Math.abs(animateToX-_mainScrollPos.x);var finishAnimDuration;if(!itemChanged&&animateToX>_mainScrollPos.x!==_releaseAnimData.lastFlickSpeed.x>0){// "return to current" duration, e.g. when dragging from slide 0 to -1
	finishAnimDuration=333;}else{finishAnimDuration=Math.abs(_releaseAnimData.lastFlickSpeed.x)>0?animateToDist/Math.abs(_releaseAnimData.lastFlickSpeed.x):333;finishAnimDuration=Math.min(finishAnimDuration,400);finishAnimDuration=Math.max(finishAnimDuration,250);}if(_currZoomedItemIndex===_currentItemIndex){itemChanged=false;}_mainScrollAnimating=true;_shout('mainScrollAnimStart');_animateProp('mainScroll',_mainScrollPos.x,animateToX,finishAnimDuration,utils.easing.cubic.out,_moveMainScroll,function(){_stopAllAnimations();_mainScrollAnimating=false;_currZoomedItemIndex=-1;if(itemChanged||_currZoomedItemIndex!==_currentItemIndex){self.updateCurrItem();}_shout('mainScrollAnimComplete');});if(itemChanged){self.updateCurrItem(true);}return itemChanged;};function _completeZoomGesture(){var destoryZoomLevel=_currZoomLevel,minZoomLevel=_getMinZoomLevel(),maxZoomLevel=_getMaxZoomLevel();if(_currZoomLevel<minZoomLevel){destoryZoomLevel=minZoomLevel;}else if(_currZoomLevel>maxZoomLevel){destoryZoomLevel=maxZoomLevel;}var destOpacity=1,onUpdate,initialOpacity=_bgOpacity;if(_opacityChanged&&!_isZoomingIn&&!_wasOverInitialZoom&&_currZoomLevel<minZoomLevel){self.close();return true;}if(_opacityChanged){onUpdate=function onUpdate(now){_applyBgOpacity((destOpacity-initialOpacity)*now+initialOpacity);};}self.zoomTo(destoryZoomLevel,0,200,utils.easing.cubic.out,onUpdate);return true;};};function initGestures(){_globalEventHandlers['touchstart']=_onDragStart;_globalEventHandlers['touchmove']=_onDragMove;_globalEventHandlers['touchend']=_onDragRelease;_globalEventHandlers['touchcancel']=_globalEventHandlers['touchend'];}/******************** 手势模块 end ********************//******************** 控制器模块 begin ********************/var _items,_tempPanAreaSize={},_imagesToAppendPool=[],_controllerDefaultOptions={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">图片</a>加载失败。</div>',forceProgressiveLoading:false,// TODO
	preload:[1,1],getNumItemsFn:function getNumItemsFn(){return _items.length;}},initialContentSet,loadingCurrImg=true;function setImageSize(item,img,maxRes){if(!item.src){return;}if(!img&&item.container){img=item.container.lastChild;}var w=maxRes?item.w:Math.round(item.w*item.fitRatio),h=maxRes?item.h:Math.round(item.h*item.fitRatio);if(item.placeholder&&!item.loaded){item.placeholder.style.width=w+'px';item.placeholder.style.height=h+'px';}if(img){img.style.width=w+'px';img.style.height=h+'px';}};function appendImage(index,item,baseDiv,img,preventAnimation,keepPlaceholder){if(item.loadError){return;}if(img){item.imageAppended=true;setImageSize(item,img);baseDiv.appendChild(img);if(keepPlaceholder){setTimeout(function(){if(item&&item.loaded&&item.placeholder){item.placeholder.style.display='none';item.placeholder=null;}},500);}}};function appendImagesPool(){if(_imagesToAppendPool.length){var poolItem;for(var i=0;i<_imagesToAppendPool.length;i++){poolItem=_imagesToAppendPool[i];if(poolItem.holder.index===poolItem.index){appendImage(poolItem.index,poolItem.item,poolItem.baseDiv,poolItem.img,false,poolItem.clearPlaceholder);}}_imagesToAppendPool=[];}};function cleanSlide(item){if(item.img){item.img.onload=item.img.onerror=null;}item.loaded=item.loading=item.img=item.imageAppended=false;};// 计算元素大小
	function calculateItemSize(item,viewportSize,zoomLevel){if(item.src&&!item.loadError){var isInitial=!zoomLevel;if(isInitial){if(!item.vGap){item.vGap={top:0,bottom:0};}}_tempPanAreaSize.x=viewportSize.x;_tempPanAreaSize.y=viewportSize.y-item.vGap.top-item.vGap.bottom;if(isInitial){var hRatio=_tempPanAreaSize.x/item.w;var vRatio=_tempPanAreaSize.y/item.h;item.fitRatio=hRatio<vRatio?hRatio:vRatio;zoomLevel=item.fitRatio;if(zoomLevel>1){zoomLevel=1;}item.initialZoomLevel=zoomLevel;if(!item.bounds){item.bounds=getZeroBounds();}}if(!zoomLevel){return;}_calculateSingleItemPanBounds(item,item.w*zoomLevel,item.h*zoomLevel);if(isInitial&&zoomLevel===item.initialZoomLevel){item.initialPosition=item.bounds.center;}return item.bounds;}else{item.w=item.h=0;item.initialZoomLevel=item.fitRatio=1;item.bounds=getZeroBounds();item.initialPosition=item.bounds.center;return item.bounds;}return false;function getZeroBounds(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}};};function _calculateSingleItemPanBounds(item,realPanElementW,realPanElementH){var bounds=item.bounds;// position of element when it's centered
	bounds.center.x=Math.round((_tempPanAreaSize.x-realPanElementW)/2);bounds.center.y=Math.round((_tempPanAreaSize.y-realPanElementH)/2)+item.vGap.top;// maximum pan position
	bounds.max.x=realPanElementW>_tempPanAreaSize.x?Math.round(_tempPanAreaSize.x-realPanElementW):bounds.center.x;bounds.max.y=realPanElementH>_tempPanAreaSize.y?Math.round(_tempPanAreaSize.y-realPanElementH)+item.vGap.top:bounds.center.y;// minimum pan position
	bounds.min.x=realPanElementW>_tempPanAreaSize.x?0:bounds.center.x;bounds.min.y=realPanElementH>_tempPanAreaSize.y?item.vGap.top:bounds.center.y;};};function preloadImage(item){item.loading=true;item.loaded=false;var img=item.img=utils.createEl('pswp__img','img');var onComplete;onComplete=function onComplete(){item.loading=false;item.loaded=true;if(this){item.w=this.naturalWidth;item.h=this.naturalHeight;}if(item.loadComplete){item.loadComplete(item);}else{item.img=null;}img.onload=img.onerror=null;img=null;};img.onload=onComplete;img.onerror=function(){item.loadError=true;onComplete();};img.src=item.src;return img;};function lazyLoadItem(index){index=_getLoopedId(index);var item=getItemAt(index);if(!item||(item.loaded||item.loading)&&!_itemsNeedUpdate){return;}_shout('gettingData',index,item);if(!item.src){return;}item.loadComplete=function(item){var holder=_itemHolders[index];if(holder){holder.item=item;holder.item.w=item.w;holder.item.h=item.h;}calculateItemSize(item,_viewportSize);_applyZoomPanToItem(item);self.updateCurrZoomItem();};preloadImage(item);};// 设置内容
	function setContent(holder,index){var item=getItemAt(index),img;if(!item){holder.el.innerHTML='';return;}_shout('gettingData',index,item);holder.index=index;holder.item=item;var baseDiv=item.container=utils.createEl('pswp__zoom-wrap');checkForError(item);calculateItemSize(item,_viewportSize);if(item.src&&!item.loadError&&!item.loaded){item.loadComplete=function(item){// 图片查看器在图片加载完成之前关闭
	if(!_isOpen){return;}if(holder&&holder.index===index){if(checkForError(item)){item.loadComplete=item.img=null;calculateItemSize(item,_viewportSize);_applyZoomPanToItem(item);if(holder.index===_currentItemIndex){self.updateCurrZoomItem();}return;}else{holder.item.w=item.w;holder.item.h=item.h;calculateItemSize(item,_viewportSize);_applyZoomPanToItem(item);self.updateCurrZoomItem();}if(!item.imageAppended){if(_features.transform&&(_mainScrollAnimating||initialZoomRunning)){_imagesToAppendPool.push({item:item,baseDiv:baseDiv,img:item.img,index:index,holder:holder,clearPlaceholder:true});}else{appendImage(index,item,baseDiv,item.img,_mainScrollAnimating||initialZoomRunning,true);}}else{if(!initialZoomRunning&&item.placeholder){item.placeholder.style.display='none';item.placeholder=null;}}loadingCurrImg=false;}item.loadComplete=null;item.img=null;_shout('imageLoadComplete',index,item);};var placeholderClassName='pswp__img pswp__img--placeholder';placeholderClassName+=item.msrc?'':' pswp__img--placeholder--blank';var placeholder=utils.createEl(placeholderClassName,item.msrc?'img':'');if(item.msrc){placeholder.src=item.msrc;}setImageSize(item,placeholder);baseDiv.appendChild(placeholder);item.placeholder=placeholder;if(!item.loading){preloadImage(item);}if(!initialContentSet){_imagesToAppendPool.push({item:item,baseDiv:baseDiv,img:item.img,index:index,holder:holder});}else{appendImage(index,item,baseDiv,item.img,true,true);}}else if(item.src&&!item.loadError){img=utils.createEl('pswp__img','img');img.style.opacity=1;img.src=item.src;setImageSize(item,img);appendImage(index,item,baseDiv,img,true);}if(!initialContentSet&&index===_currentItemIndex){_currZoomElementStyle=baseDiv.style;_showOrHide(item,img||item.img);}else{_applyZoomPanToItem(item);}holder.el.innerHTML='';holder.el.appendChild(baseDiv);// 必须设置这三句，否则ios显示动画不正常
	var gallery=document.getElementById('gallery');gallery.style.webkitTransform='translate3d(0,0,0)';window.getComputedStyle(gallery).getPropertyValue('position');function checkForError(item){if(item.src&&item.loadError&&item.container){item.container.innerHTML=_options.errorMsg.replace('%url%',item.src);return true;}};};// 获取元素
	function getItemAt(index){if(index>=0){return _items[index]!==undefined?_items[index]:false;}return false;};// 获取元素数量
	function getNumItems(){return _items.length;};function initController(){utils.extend(_options,_controllerDefaultOptions,true);self.items=_items=items;_listen('beforeChange',function(direction){// direction: null初始化, -1向左, 1向右
	var p=_options.preload,isNext=direction===null?true:direction>=0,preloadBefore=Math.min(p[0],getNumItems()),preloadAfter=Math.min(p[1],getNumItems());for(var i=1;i<=(isNext?preloadAfter:preloadBefore);i++){lazyLoadItem(_currentItemIndex+i);}for(var i=1;i<=(isNext?preloadBefore:preloadAfter);i++){lazyLoadItem(_currentItemIndex-i);}});_listen('mainScrollAnimComplete',appendImagesPool);_listen('initialZoomInEnd',appendImagesPool);_listen('destroy',function(){var item;for(var i=0;i<_items.length;i++){item=_items[i];// remove reference to DOM elements, for GC
	if(item.container){item.container=null;}if(item.placeholder){item.placeholder=null;}if(item.img){item.img=null;}if(item.preloader){item.preloader=null;}if(item.loadError){item.loaded=item.loadError=false;}}_imagesToAppendPool=null;});};utils.extend(self,{getNumItems:getNumItems,getItemAt:getItemAt,setContent:setContent,calculateItemSize:calculateItemSize,cleanSlide:cleanSlide,setImageSize:setImageSize});/******************** 控制器模块 end ********************//******************** 点击模块 begin ********************/var tapTimer,lastReleasePoint={},DOUBLE_TAP_RADIUS=25;// 判定双击的两次点击间距
	function onTapRelease(e,releasePoint){if(!_moved&&!_isMultitouch&&!_numAnimations){// 双击事件
	if(tapTimer&&isNearbyPoints(releasePoint,lastReleasePoint)){clearTimeout(tapTimer);tapTimer=null;_shout('doubleTap',releasePoint);return;}_equalizePoints(lastReleasePoint,releasePoint);// 存储点击释放位置
	// 单击事件
	tapTimer=setTimeout(function(){dispatchTapEvent(e,releasePoint);tapTimer=null;},300);}function isNearbyPoints(touch0,touch1){return Math.abs(touch0.x-touch1.x)<DOUBLE_TAP_RADIUS&&Math.abs(touch0.y-touch1.y)<DOUBLE_TAP_RADIUS;};function dispatchTapEvent(originalEvent,releasePoint,pointerType){var e=document.createEvent('CustomEvent'),eDetail={originalEvent:originalEvent,target:originalEvent.target,releasePoint:releasePoint,pointerType:pointerType||'touch'};e.initCustomEvent('pswpTap',true,true,eDetail);originalEvent.target.dispatchEvent(e);}};function initTap(){_listen('touchRelease',onTapRelease);_listen('destroy',function(){tapTimer=null;lastReleasePoint={};});};/******************** 点击模块 end ********************/};window.PhotoSwipe=PhotoSwipe;})(window)// photoswipe-ui-default.js
	;(function(window){function PhotoSwipeUI(pswp,utils){var _defaultUIOptions={counterEl:true,preloaderEl:true,loadingIndicatorDelay:20,indexIndicatorSep:' / '};var ui=this;var _options,_listen,_controls,_indexIndicator,_loadingIndicator,_loadingIndicatorHidden,_loadingIndicatorTimeout,_galleryHasOneSlide;var _uiElements=[{name:'counter',option:'counterEl',onInit:function onInit(el){_indexIndicator=el;}},{name:'preloader',option:'preloaderEl',onInit:function onInit(el){_loadingIndicator=el;}}];function _togglePswpClass(el,cName,add){utils[(add?'add':'remove')+'Class'](el,'pswp__'+cName);};// 判断元素数量
	function _countNumItems(){var hasOneSlide=_options.getNumItemsFn()===1;if(hasOneSlide!==_galleryHasOneSlide){_togglePswpClass(_controls,'ui--one-slide',hasOneSlide);_galleryHasOneSlide=hasOneSlide;}};// 设置加载中指示器
	function _setupLoadingIndicator(){if(_options.preloaderEl){_toggleLoadingIndicator(true);_toggleImageFilter(true);_listen('beforeChange',function(){clearTimeout(_loadingIndicatorTimeout);var duration=typeof pswp.isDragging()==='undefined'?333:0;// 第一次加载或者左右滑动
	_loadingIndicatorTimeout=setTimeout(function(){if(pswp.currItem&&pswp.currItem.loading){// 当前图片加载中，显示加载指示器
	_toggleLoadingIndicator(false);_toggleImageFilter(false);}else{_toggleLoadingIndicator(true);_toggleImageFilter(true);}},duration);});_listen('imageLoadComplete',function(index,item){if(pswp.currItem===item){_toggleLoadingIndicator(true);_toggleImageFilter(true);}});}function _toggleLoadingIndicator(hide){//_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
	var target=document.querySelector('.pswp__scroll-wrap');if(!hide){if(!ui.spinner){ui.spinner=new Spinner().spin(target);}else{ui.spinner.spin(target);}}else{ui.spinner&&ui.spinner.spin();}//_loadingIndicatorHidden = hide;
	};function _toggleImageFilter(hide){var images=document.querySelectorAll('.pswp__img');if(images&&images.length>0){for(var i=0;i<images.length;i++){if(!hide){images[i].style.webkitFilter='blur(4px) brightness(.5)';}else{images[i].style.webkitFilter='';}}}}};// 设置控件ui
	function _setupUIElements(){setElements(_controls.children);var topBar=utils.getChildByClass(_controls,'pswp__top-bar');setElements(topBar.children);function setElements(elements){for(var i=0;i<elements.length;i++){var item=elements[i],classAttr=item.className;for(var a=0;a<_uiElements.length;a++){var uiElement=_uiElements[a];if(classAttr.indexOf('pswp__'+uiElement.name)>-1){if(_options[uiElement.option]){utils.removeClass(item,'pswp__element--disabled');if(uiElement.onInit){uiElement.onInit(item);}}else{utils.addClass(item,'pswp__element--disabled');}}}}}};ui.init=function(){utils.extend(pswp.options,_defaultUIOptions,true);_options=pswp.options;_controls=utils.getChildByClass(pswp.scrollWrap,'pswp__ui');_listen=pswp.listen;// 滑动时更新控制器
	_listen('beforeChange',ui.update);// 双击时缩放扩大
	_listen('doubleTap',function(point){var initialZoomLevel=pswp.currItem.initialZoomLevel;if(pswp.getZoomLevel()!==initialZoomLevel){pswp.zoomTo(initialZoomLevel,point,333);}else{pswp.zoomTo(_options.getDoubleTapZoom(pswp.currItem),point,333);}});// 绑定单击时关闭查看器
	_listen('bindEvents',function(){pswp.scrollWrap.addEventListener('pswpTap',ui.onGlobalTap);});// 解绑单击事件
	_listen('unbindEvents',function(){pswp.scrollWrap.removeEventListener('pswpTap',ui.onGlobalTap);});// 关闭事件
	_listen('destroy',function(){utils.removeClass(_controls,'pswp__ui--over-close');utils.addClass(_controls,'pswp__ui--hidden');if(ui.spinner){ui.spinner.spin();var images=document.querySelectorAll('.pswp__img');if(images&&images.length>0){for(var i=0;i<images.length;i++){images[i].style.webkitFilter='';}}}});if(!_options.showAnimationDuration){utils.removeClass(_controls,'pswp__ui--hidden');}_listen('initialZoomIn',function(){if(_options.showAnimationDuration){utils.removeClass(_controls,'pswp__ui--hidden');}});_listen('initialZoomOut',function(){utils.addClass(_controls,'pswp__ui--hidden');});_setupUIElements();_countNumItems();_setupLoadingIndicator();};ui.update=function(){if(pswp.currItem){ui.updateIndexIndicator();}_countNumItems();};ui.updateIndexIndicator=function(){if(_options.counterEl){_indexIndicator.innerHTML=pswp.getCurrentIndex()+1+_options.indexIndicatorSep+_options.getNumItemsFn();}};ui.onGlobalTap=function(e){pswp.close();};};window.PhotoSwipeUI=PhotoSwipeUI;})(window)// zepto.photoswipe.js
	;(function(window,$){$.fn.groupPhotoswipe=function(c){var template='<div id="gallery" class="pswp">'+'<div class="pswp__bg"></div>'+'<div class="pswp__scroll-wrap">'+'<div class="pswp__container">'+'<div class="pswp__item"></div>'+'<div class="pswp__item"></div>'+'<div class="pswp__item"></div>'+'</div>'+'<div class="pswp__ui pswp__ui--hidden">'+'<div class="pswp__top-bar">'+'<div class="pswp__counter"></div>'+'<div class="pswp__preloader">'+'<div class="pswp__preloader__icn">'+'<div class="pswp__preloader__cut">'+'<div class="pswp__preloader__donut"></div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>';if(!document.querySelector('.pswp')){var ele=document.createElement('div');ele.innerHTML=template;document.body.appendChild(ele);template=document.querySelector('.pswp');}var galleryElements=document.querySelectorAll('.gallery');for(var i=0,l=galleryElements.length;i<l;i++){galleryElements[i].onclick=onThumbnailsClick;// if (window.location.hash.indexOf('photoswipe') > -1 && galleryElements[i].children.length > 0) {
	//     galleryElements[i].children[0].click();
	// }
	}function closest(el,fn){return el&&(fn(el)?el:closest(el.parentNode,fn));}function onThumbnailsClick(e){e=e||window.event;e.preventDefault?e.preventDefault():e.returnValue=false;var eTarget=e.target||e.srcElement;var eleLi;var clickedListItem=closest(eTarget,function(el){if(el.tagName==='LI'){eleLi=el;return true;}else{return false;}});if(!clickedListItem){return;}// 点击时，排除gallery-no类名元素
	if(eleLi&&eleLi.className.indexOf('gallery-no')>-1){return;}if(window.location.hash.indexOf('photoswipe')==-1){window.location.hash+='&photoswipe';}var clickedGallery=clickedListItem.parentNode;var childNodes=clickedListItem.parentNode.childNodes,nodeIndex=0,index;for(var i=0;i<childNodes.length;i++){if(childNodes[i].nodeType!==1){continue;}if(childNodes[i]===clickedListItem){index=nodeIndex;break;}nodeIndex++;}if(index>=0){openPhotoSwipe(index,clickedGallery);}return false;}function openPhotoSwipe(index,galleryElement){var pswpElement=document.querySelectorAll('.pswp')[0],gallery,options={},items;options.index=parseInt(index,10);if(isNaN(options.index)){return;}items=parseThumbnailElements(galleryElement);options.getThumbBoundsFn=function(index){var thumbnail=items[index].el.children[0],pageYScroll=window.pageYOffset||document.documentElement.scrollTop,rect=thumbnail.getBoundingClientRect();return{x:rect.left,y:rect.top+pageYScroll,w:rect.width};};gallery=new PhotoSwipe(pswpElement,PhotoSwipeUI,items,options);gallery.close=function(e){if(gallery){gallery.destroy();}c.closeCallback&&c.closeCallback(e);};// window.pswpManager = window.pswpManager || [];
	// window.pswpManager.push(gallery);
	var firstResize=true,imageSrcWillChange;gallery.listen('beforeResize',function(){var dpiRatio=window.devicePixelRatio?window.devicePixelRatio:1;dpiRatio=Math.min(dpiRatio,2.5);if(imageSrcWillChange&&!firstResize){gallery.invalidateCurrItems();}if(firstResize){firstResize=false;}imageSrcWillChange=false;});gallery.listen('gettingData',function(index,item){item.src=item.m.src;});gallery.init();// window.onhashchange = function () {
	//     var hash = window.location.hash.indexOf('photoswipe') > -1;
	//     if (!hash) {
	//         gallery.close();
	//     }
	// }
	}// 转化小图元素信息
	function parseThumbnailElements(el){var thumbElements=el.childNodes,items=[];for(var i=0;i<thumbElements.length;i++){var ele=thumbElements[i];// 计算元素个数时，忽略gallery-no类名元素
	if(ele.nodeType!==1||ele.className.indexOf('gallery-no')>-1){continue;}var childElements=ele.children;var originImage=childElements[0];// 小图元素
	var item={src:originImage.getAttribute('src')||originImage.getAttribute('data-src'),w:originImage.width||originImage.getAttribute('data-w')||originImage.clientWidth,h:originImage.height||originImage.getAttribute('data-h')||originImage.clientHeight};item.el=ele;if(childElements.length>0){item.msrc=originImage.getAttribute('src')||originImage.getAttribute('data-src');}var mediumSrc=ele.getAttribute('data-med');if(mediumSrc){item.m={src:mediumSrc,w:0,h:0};}item.o={src:item.src,w:item.w,h:item.h};items.push(item);}return items;}};$.fn.photoswipe=function(c){c=$.extend({},{closeCallback:function closeCallback(){}},c);window.location.hash=window.location.hash.replace('&photoswipe','');$(this).each(function(){var group=this;var loaded=0;// 每组已下载元素数量
	var total=$('.gallery-item',group).length;// 每组元素数量
	$('.gallery-item',this).each(function(index,el){var img=new Image();img.onload=img.onerror=function(){loaded++;el.style.backgroundImage='url('+this.src+')';el.style.backgroundColor='inherit';el.setAttribute('data-w',this.width);el.setAttribute('data-h',this.height);if(loaded===total){$(group).groupPhotoswipe({closeCallback:c.closeCallback});}};img.src=el.getAttribute('data-src');});});};})(window,$);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\sass-loader\\index.js!./photoswipe.scss", function() {
				var newContent = require("!!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\sass-loader\\index.js!./photoswipe.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\r\n\tStyles for basic PhotoSwipe functionality (sliding area, open/close transitions)\r\n*/\n/* pswp = photoswipe */\n.pswp {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  -ms-touch-action: none;\n  touch-action: none;\n  z-index: 1500;\n  -webkit-text-size-adjust: 100%;\n  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */\n  -webkit-backface-visibility: hidden;\n  outline: none; }\n\n.pswp * {\n  box-sizing: border-box; }\n\n.pswp img {\n  max-width: none; }\n\n/* style is added when JS option showHideOpacity is set to true */\n.pswp--animate_opacity {\n  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */\n  opacity: 0.001;\n  will-change: opacity;\n  /* for open/close transition */\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp--open {\n  display: block; }\n\n.pswp--zoom-allowed .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n\n.pswp--zoomed-in .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab; }\n\n.pswp--dragging .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing; }\n\n/*\r\n\tBackground is added as a separate element.\r\n\tAs animating opacity is much faster than animating rgba() background-color.\r\n*/\n.pswp__bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n\n.pswp__scroll-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.pswp__container,\n.pswp__zoom-wrap {\n  -ms-touch-action: none;\n  touch-action: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n/* Prevent selection and tap highlights */\n.pswp__container,\n.pswp__img {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none; }\n\n.pswp__zoom-wrap {\n  position: absolute;\n  width: 100%;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  /* for open/close transition */\n  -webkit-transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1), -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp__bg {\n  will-change: opacity;\n  /* for open/close transition */\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp--animated-in .pswp__bg,\n.pswp--animated-in .pswp__zoom-wrap {\n  -webkit-transition: none;\n  transition: none; }\n\n.pswp__container,\n.pswp__zoom-wrap {\n  -webkit-backface-visibility: hidden;\n  will-change: transform; }\n\n.pswp__item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden; }\n\n.pswp__img {\n  position: absolute;\n  width: auto;\n  height: auto;\n  top: 0;\n  left: 0; }\n\n/*\r\n\tstretched thumbnail or div placeholder element (see below)\r\n\tstyle is added to avoid flickering in webkit/blink when layers overlap\r\n*/\n.pswp__img--placeholder {\n  -webkit-backface-visibility: hidden; }\n\n/*\r\n\tdiv element that matches size of large image\r\n\tlarge image loads on top of it\r\n*/\n.pswp__img--placeholder--blank {\n  background: #222; }\n\n.pswp--ie .pswp__img {\n  width: 100% !important;\n  height: auto !important;\n  left: 0;\n  top: 0; }\n\n/*\r\n\tError message appears when image is not loaded\r\n\t(JS option errorMsg controls markup)\r\n*/\n.pswp__error-msg {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  margin-top: -8px;\n  color: #CCC; }\n\n.pswp__error-msg a {\n  color: #CCC;\n  text-decoration: underline; }\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\sass-loader\\index.js!./default-skin.scss", function() {
				var newContent = require("!!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\css-loader\\index.js!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\postcss-loader\\index.js!C:\\nvm\\v6.4.0\\node_modules\\fis\\node_modules\\sass-loader\\index.js!./default-skin.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\r\n\r\n\tContents:\r\n\r\n\t1. Buttons\r\n\t2. Share modal and links\r\n\t3. Index indicator (\"1 of X\" counter)\r\n\t4. Caption\r\n\t5. Loading indicator\r\n\t6. Additional styles (root element, top bar, idle state, hidden state, etc.)\r\n\r\n*/\n/*\r\n\r\n\t1. Buttons\r\n\r\n */\n/* <button> css reset */\n.pswp__button {\n  width: 44px;\n  height: 44px;\n  position: relative;\n  background: none;\n  cursor: pointer;\n  overflow: visible;\n  -webkit-appearance: none;\n  display: block;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  float: right;\n  opacity: 0.75;\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  box-shadow: none; }\n\n.pswp__button:focus,\n.pswp__button:hover {\n  opacity: 1; }\n\n.pswp__button:active {\n  outline: none;\n  opacity: 0.9; }\n\n.pswp__button::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n/* pswp__ui--over-close class it added when mouse is over element that should close gallery */\n.pswp__ui--over-close .pswp__button--close {\n  opacity: 1; }\n\n.pswp__button,\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  background-size: 264px 88px;\n  width: 44px;\n  height: 44px; }\n\n@media (-webkit-min-device-pixel-ratio: 1.1), (-webkit-min-device-pixel-ratio: 1.09375), (min-resolution: 105dpi), (min-resolution: 1.1dppx) {\n  /* Serve SVG sprite if browser supports SVG and resolution is more than 105dpi */\n  .pswp--svg .pswp__button--arrow--left,\n  .pswp--svg .pswp__button--arrow--right {\n    background: none; } }\n\n.pswp__button--close {\n  background-position: 0 -44px; }\n\n.pswp__button--share {\n  background-position: -44px -44px; }\n\n.pswp__button--fs {\n  display: none; }\n\n.pswp--supports-fs .pswp__button--fs {\n  display: block; }\n\n.pswp--fs .pswp__button--fs {\n  background-position: -44px 0; }\n\n.pswp__button--zoom {\n  display: none;\n  background-position: -88px 0; }\n\n.pswp--zoom-allowed .pswp__button--zoom {\n  display: block; }\n\n.pswp--zoomed-in .pswp__button--zoom {\n  background-position: -132px 0; }\n\n/* no arrows on touch screens */\n.pswp--touch .pswp__button--arrow--left,\n.pswp--touch .pswp__button--arrow--right {\n  visibility: hidden; }\n\n/*\r\n\tArrow buttons hit area\r\n\t(icon is added to :before pseudo-element)\r\n*/\n.pswp__button--arrow--left,\n.pswp__button--arrow--right {\n  background: none;\n  top: 50%;\n  margin-top: -50px;\n  width: 70px;\n  height: 100px;\n  position: absolute; }\n\n.pswp__button--arrow--left {\n  left: 0; }\n\n.pswp__button--arrow--right {\n  right: 0; }\n\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  content: '';\n  top: 35px;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 30px;\n  width: 32px;\n  position: absolute; }\n\n.pswp__button--arrow--left:before {\n  left: 6px;\n  background-position: -138px -44px; }\n\n.pswp__button--arrow--right:before {\n  right: 6px;\n  background-position: -94px -44px; }\n\n/*\r\n\r\n\t2. Share modal/popup and links\r\n\r\n */\n.pswp__counter,\n.pswp__share-modal {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.pswp__share-modal {\n  display: block;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  position: absolute;\n  z-index: 1600;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-out;\n  transition: opacity 0.25s ease-out;\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n\n.pswp__share-modal--hidden {\n  display: none; }\n\n.pswp__share-tooltip {\n  z-index: 1620;\n  position: absolute;\n  background: #FFF;\n  top: 56px;\n  border-radius: 2px;\n  display: block;\n  width: auto;\n  right: 44px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  -webkit-transform: translateY(6px);\n  transform: translateY(6px);\n  -webkit-transition: -webkit-transform 0.25s;\n  transition: -webkit-transform 0.25s;\n  transition: transform 0.25s;\n  transition: transform 0.25s, -webkit-transform 0.25s;\n  -webkit-backface-visibility: hidden;\n  will-change: transform; }\n\n.pswp__share-tooltip a {\n  display: block;\n  padding: 8px 12px;\n  color: #000;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 18px; }\n\n.pswp__share-tooltip a:hover {\n  text-decoration: none;\n  color: #000; }\n\n.pswp__share-tooltip a:first-child {\n  /* round corners on the first/last list item */\n  border-radius: 2px 2px 0 0; }\n\n.pswp__share-tooltip a:last-child {\n  border-radius: 0 0 2px 2px; }\n\n.pswp__share-modal--fade-in {\n  opacity: 1; }\n\n.pswp__share-modal--fade-in .pswp__share-tooltip {\n  -webkit-transform: translateY(0);\n  transform: translateY(0); }\n\n/* increase size of share links on touch devices */\n.pswp--touch .pswp__share-tooltip a {\n  padding: 16px 12px; }\n\na.pswp__share--facebook:before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -12px;\n  right: 15px;\n  border: 6px solid transparent;\n  border-bottom-color: #FFF;\n  -webkit-pointer-events: none;\n  -moz-pointer-events: none;\n  pointer-events: none; }\n\na.pswp__share--facebook:hover {\n  background: #3E5C9A;\n  color: #FFF; }\n\na.pswp__share--facebook:hover:before {\n  border-bottom-color: #3E5C9A; }\n\na.pswp__share--twitter:hover {\n  background: #55ACEE;\n  color: #FFF; }\n\na.pswp__share--pinterest:hover {\n  background: #CCC;\n  color: #CE272D; }\n\na.pswp__share--download:hover {\n  background: #DDD; }\n\n/*\r\n\r\n\t3. Index indicator (\"1 of X\" counter)\r\n\r\n */\n.pswp__counter {\n  height: 44px;\n  font-size: 13px;\n  line-height: 44px;\n  color: #FFF;\n  opacity: 0.75;\n  padding: 0 10px; }\n\n/*\r\n\r\n\t4. Caption\r\n\r\n */\n.pswp__caption {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  min-height: 44px; }\n\n.pswp__caption small {\n  font-size: 11px;\n  color: #BBB; }\n\n.pswp__caption__center {\n  text-align: left;\n  max-width: 420px;\n  margin: 0 auto;\n  font-size: 13px;\n  padding: 10px;\n  line-height: 20px;\n  color: #CCC; }\n\n.pswp__caption--empty {\n  display: none; }\n\n/* Fake caption element, used to calculate height of next/prev image */\n.pswp__caption--fake {\n  visibility: hidden; }\n\n/*\r\n\r\n\t5. Loading indicator (preloader)\r\n\r\n\tYou can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR\r\n\r\n */\n.pswp__preloader {\n  width: 44px;\n  height: 44px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-left: -22px;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-out;\n  transition: opacity 0.25s ease-out;\n  will-change: opacity;\n  direction: ltr; }\n\n.pswp__preloader__icn {\n  width: 20px;\n  height: 20px;\n  margin: 12px; }\n\n.pswp__preloader--active {\n  opacity: 1; }\n\n.pswp__preloader--active .pswp__preloader__icn {\n  /* We use .gif in browsers that don't support CSS animation */ }\n\n.pswp--css_animation .pswp__preloader--active {\n  opacity: 1; }\n\n.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {\n  -webkit-animation: clockwise 500ms linear infinite;\n  animation: clockwise 500ms linear infinite; }\n\n.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {\n  -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;\n  animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite; }\n\n.pswp--css_animation .pswp__preloader__icn {\n  background: none;\n  opacity: 0.75;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  margin: 0; }\n\n.pswp--css_animation .pswp__preloader__cut {\n  /*\r\n\t\t\tThe idea of animating inner circle is based on Polymer (\"material\") loading indicator\r\n\t\t\t by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html\r\n\t\t*/\n  position: relative;\n  width: 7px;\n  height: 14px;\n  overflow: hidden; }\n\n.pswp--css_animation .pswp__preloader__donut {\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: none;\n  margin: 0; }\n\n@-webkit-keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n    transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); } }\n\n@keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n    transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); } }\n\n/*\r\n\r\n\t6. Additional styles\r\n\r\n */\n/* root element of UI */\n.pswp__ui {\n  -webkit-font-smoothing: auto;\n  visibility: visible;\n  opacity: 1;\n  z-index: 1550; }\n\n/* top black bar with buttons and \"1 of X\" indicator */\n.pswp__top-bar {\n  position: absolute;\n  left: 0;\n  bottom: 40px;\n  height: 44px;\n  width: 100%;\n  text-align: center; }\n\n.pswp__caption,\n.pswp__top-bar,\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  -webkit-backface-visibility: hidden;\n  will-change: opacity;\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n/* pswp--has_mouse class is added only when two subsequent mousemove events occur */\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  visibility: visible; }\n\n/* pswp__ui--fit class is added when main image \"fits\" between top bar and bottom bar (caption) */\n.pswp__ui--fit .pswp__top-bar,\n.pswp__ui--fit .pswp__caption {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n/* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */\n.pswp__ui--idle .pswp__top-bar {\n  opacity: 0; }\n\n.pswp__ui--idle .pswp__button--arrow--left,\n.pswp__ui--idle .pswp__button--arrow--right {\n  opacity: 0; }\n\n/*\r\n\tpswp__ui--hidden class is added when controls are hidden\r\n\te.g. when user taps to toggle visibility of controls\r\n*/\n.pswp__ui--hidden .pswp__top-bar,\n.pswp__ui--hidden .pswp__caption,\n.pswp__ui--hidden .pswp__button--arrow--left,\n.pswp__ui--hidden .pswp__button--arrow--right {\n  /* Force paint & create composition layer for controls. */\n  opacity: 0.001; }\n\n/* pswp__ui--one-slide class is added when there is just one item in gallery */\n.pswp__ui--one-slide .pswp__button--arrow--left,\n.pswp__ui--one-slide .pswp__button--arrow--right,\n.pswp__ui--one-slide .pswp__counter {\n  display: none; }\n\n.pswp__element--disabled {\n  display: none !important; }\n\n.pswp--minimal--dark .pswp__top-bar {\n  background: none; }\n", ""]);

	// exports


/***/ }
/******/ ])
});
;