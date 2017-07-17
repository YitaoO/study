/*! swiper v0.0.2 ~ (c) 2012-2016  ~ http://gitlab.ewaytec.cn/frontend-components-team/swiper.git */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["swiper"] = factory();
	else
		root["swiper"] = factory();
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

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/**
	 * Swiper 3.3.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: February 7, 2016
	 */__webpack_require__(1);(function(){'use strict';var $;/*===========================
	    Swiper
	    ===========================*/var Swiper=function Swiper(container,params){if(!(this instanceof Swiper))return new Swiper(container,params);var defaults={direction:'horizontal',touchEventsTarget:'container',initialSlide:0,speed:300,// autoplay
	autoplay:false,autoplayDisableOnInteraction:true,autoplayStopOnLast:false,// To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	iOSEdgeSwipeDetection:false,iOSEdgeSwipeThreshold:20,// Free mode
	freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeSticky:false,freeModeMinimumVelocity:0.02,// Autoheight
	autoHeight:false,// Set wrapper width
	setWrapperSize:false,// Virtual Translate
	virtualTranslate:false,// Effects
	effect:'slide',// 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true},flip:{slideShadows:true,limitRotation:true},cube:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:0.94},fade:{crossFade:false},// Parallax
	parallax:false,// Scrollbar
	scrollbar:null,scrollbarHide:true,scrollbarDraggable:false,scrollbarSnapOnRelease:false,// Keyboard Mousewheel
	keyboardControl:false,mousewheelControl:false,mousewheelReleaseOnEdges:false,mousewheelInvert:false,mousewheelForceToAxis:false,mousewheelSensitivity:1,// Hash Navigation
	hashnav:false,// Breakpoints
	breakpoints:undefined,// Slides grid
	spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:'column',slidesPerGroup:1,centeredSlides:false,slidesOffsetBefore:0,// in px
	slidesOffsetAfter:0,// in px
	// Round length
	roundLengths:false,// Touches
	touchRatio:1,touchAngle:45,simulateTouch:true,shortSwipes:true,longSwipes:true,longSwipesRatio:0.5,longSwipesMs:300,followFinger:true,onlyExternal:false,threshold:0,touchMoveStopPropagation:true,// Unique Navigation Elements
	uniqueNavElements:true,// Pagination
	pagination:null,paginationElement:'span',paginationClickable:false,paginationHide:false,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:'bullets',// 'bullets' or 'progress' or 'fraction' or 'custom'
	// Resistance
	resistance:true,resistanceRatio:0.85,// Next/prev buttons
	nextButton:null,prevButton:null,// Progress
	watchSlidesProgress:false,watchSlidesVisibility:false,// Cursor
	grabCursor:false,// Clicks
	preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false,// Lazy Loading
	lazyLoading:false,lazyLoadingInPrevNext:false,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:false,// Images
	preloadImages:true,updateOnImagesReady:true,// loop
	loop:false,loopAdditionalSlides:0,loopedSlides:null,// Control
	control:undefined,controlInverse:false,controlBy:'slide',//or 'container'
	// Swiping/no swiping
	allowSwipeToPrev:true,allowSwipeToNext:true,swipeHandler:null,//'.swipe-handler',
	noSwiping:true,noSwipingClass:'swiper-no-swiping',// NS
	slideClass:'swiper-slide',slideActiveClass:'swiper-slide-active',slideVisibleClass:'swiper-slide-visible',slideDuplicateClass:'swiper-slide-duplicate',slideNextClass:'swiper-slide-next',slidePrevClass:'swiper-slide-prev',wrapperClass:'swiper-wrapper',bulletClass:'swiper-pagination-bullet',bulletActiveClass:'swiper-pagination-bullet-active',buttonDisabledClass:'swiper-button-disabled',paginationCurrentClass:'swiper-pagination-current',paginationTotalClass:'swiper-pagination-total',paginationHiddenClass:'swiper-pagination-hidden',paginationProgressbarClass:'swiper-pagination-progressbar',// Observer
	observer:false,observeParents:false,// Accessibility
	a11y:false,prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide',firstSlideMessage:'This is the first slide',lastSlideMessage:'This is the last slide',paginationBulletMessage:'Go to slide {{index}}',// Callbacks
	runCallbacksOnInit:true/*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */};var initialVirtualTranslate=params&&params.virtualTranslate;params=params||{};var originalParams={};for(var param in params){if(_typeof(params[param])==='object'&&params[param]!==null&&!(params[param].nodeType||params[param]===window||params[param]===document||typeof Dom7!=='undefined'&&params[param]instanceof Dom7||typeof jQuery!=='undefined'&&params[param]instanceof jQuery)){originalParams[param]={};for(var deepParam in params[param]){originalParams[param][deepParam]=params[param][deepParam];}}else{originalParams[param]=params[param];}}for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}else if(_typeof(params[def])==='object'){for(var deepDef in defaults[def]){if(typeof params[def][deepDef]==='undefined'){params[def][deepDef]=defaults[def][deepDef];}}}}// Swiper
	var s=this;// Params
	s.params=params;s.originalParams=originalParams;// Classname
	s.classNames=[];/*=========================
	          Dom Library and plugins
	          ===========================*/if(typeof $!=='undefined'&&typeof Dom7!=='undefined'){$=Dom7;}if(typeof $==='undefined'){if(typeof Dom7==='undefined'){$=window.Dom7||window.Zepto||window.jQuery;}else{$=Dom7;}if(!$)return;}// Export it to Swiper instance
	s.$=$;/*=========================
	          Breakpoints
	          ===========================*/s.currentBreakpoint=undefined;s.getActiveBreakpoint=function(){//Get breakpoint for window width
	if(!s.params.breakpoints)return false;var breakpoint=false;var points=[],point;for(point in s.params.breakpoints){if(s.params.breakpoints.hasOwnProperty(point)){points.push(point);}}points.sort(function(a,b){return parseInt(a,10)>parseInt(b,10);});for(var i=0;i<points.length;i++){point=points[i];if(point>=window.innerWidth&&!breakpoint){breakpoint=point;}}return breakpoint||'max';};s.setBreakpoint=function(){//Set breakpoint for window width and update parameters
	var breakpoint=s.getActiveBreakpoint();if(breakpoint&&s.currentBreakpoint!==breakpoint){var breakPointsParams=breakpoint in s.params.breakpoints?s.params.breakpoints[breakpoint]:s.originalParams;var needsReLoop=s.params.loop&&breakPointsParams.slidesPerView!==s.params.slidesPerView;for(var param in breakPointsParams){s.params[param]=breakPointsParams[param];}s.currentBreakpoint=breakpoint;if(needsReLoop&&s.destroyLoop){s.reLoop(true);}}};// Set breakpoint on load
	if(s.params.breakpoints){s.setBreakpoint();}/*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/s.container=$(container);if(s.container.length===0)return;if(s.container.length>1){var swipers=[];s.container.each(function(){var container=this;swipers.push(new Swiper(this,params));});return swipers;}// Save instance in container HTML Element and in data
	s.container[0].swiper=s;s.container.data('swiper',s);s.classNames.push('swiper-container-'+s.params.direction);if(s.params.freeMode){s.classNames.push('swiper-container-free-mode');}if(!s.support.flexbox){s.classNames.push('swiper-container-no-flexbox');s.params.slidesPerColumn=1;}if(s.params.autoHeight){s.classNames.push('swiper-container-autoheight');}// Enable slides progress when required
	if(s.params.parallax||s.params.watchSlidesVisibility){s.params.watchSlidesProgress=true;}// Coverflow / 3D
	if(['cube','coverflow','flip'].indexOf(s.params.effect)>=0){if(s.support.transforms3d){s.params.watchSlidesProgress=true;s.classNames.push('swiper-container-3d');}else{s.params.effect='slide';}}if(s.params.effect!=='slide'){s.classNames.push('swiper-container-'+s.params.effect);}if(s.params.effect==='cube'){s.params.resistanceRatio=0;s.params.slidesPerView=1;s.params.slidesPerColumn=1;s.params.slidesPerGroup=1;s.params.centeredSlides=false;s.params.spaceBetween=0;s.params.virtualTranslate=true;s.params.setWrapperSize=false;}if(s.params.effect==='fade'||s.params.effect==='flip'){s.params.slidesPerView=1;s.params.slidesPerColumn=1;s.params.slidesPerGroup=1;s.params.watchSlidesProgress=true;s.params.spaceBetween=0;s.params.setWrapperSize=false;if(typeof initialVirtualTranslate==='undefined'){s.params.virtualTranslate=true;}}// Grab Cursor
	if(s.params.grabCursor&&s.support.touch){s.params.grabCursor=false;}// Wrapper
	s.wrapper=s.container.children('.'+s.params.wrapperClass);// Pagination
	if(s.params.pagination){s.paginationContainer=$(s.params.pagination);if(s.params.uniqueNavElements&&typeof s.params.pagination==='string'&&s.paginationContainer.length>1&&s.container.find(s.params.pagination).length===1){s.paginationContainer=s.container.find(s.params.pagination);}if(s.params.paginationType==='bullets'&&s.params.paginationClickable){s.paginationContainer.addClass('swiper-pagination-clickable');}else{s.params.paginationClickable=false;}s.paginationContainer.addClass('swiper-pagination-'+s.params.paginationType);}// Next/Prev Buttons
	if(s.params.nextButton||s.params.prevButton){if(s.params.nextButton){s.nextButton=$(s.params.nextButton);if(s.params.uniqueNavElements&&typeof s.params.nextButton==='string'&&s.nextButton.length>1&&s.container.find(s.params.nextButton).length===1){s.nextButton=s.container.find(s.params.nextButton);}}if(s.params.prevButton){s.prevButton=$(s.params.prevButton);if(s.params.uniqueNavElements&&typeof s.params.prevButton==='string'&&s.prevButton.length>1&&s.container.find(s.params.prevButton).length===1){s.prevButton=s.container.find(s.params.prevButton);}}}// Is Horizontal
	s.isHorizontal=function(){return s.params.direction==='horizontal';};// s.isH = isH;
	// RTL
	s.rtl=s.isHorizontal()&&(s.container[0].dir.toLowerCase()==='rtl'||s.container.css('direction')==='rtl');if(s.rtl){s.classNames.push('swiper-container-rtl');}// Wrong RTL support
	if(s.rtl){s.wrongRTL=s.wrapper.css('display')==='-webkit-box';}// Columns
	if(s.params.slidesPerColumn>1){s.classNames.push('swiper-container-multirow');}// Check for Android
	if(s.device.android){s.classNames.push('swiper-container-android');}// Add classes
	s.container.addClass(s.classNames.join(' '));// Translate
	s.translate=0;// Progress
	s.progress=0;// Velocity
	s.velocity=0;/*=========================
	          Locks, unlocks
	          ===========================*/s.lockSwipeToNext=function(){s.params.allowSwipeToNext=false;};s.lockSwipeToPrev=function(){s.params.allowSwipeToPrev=false;};s.lockSwipes=function(){s.params.allowSwipeToNext=s.params.allowSwipeToPrev=false;};s.unlockSwipeToNext=function(){s.params.allowSwipeToNext=true;};s.unlockSwipeToPrev=function(){s.params.allowSwipeToPrev=true;};s.unlockSwipes=function(){s.params.allowSwipeToNext=s.params.allowSwipeToPrev=true;};/*=========================
	          Round helper
	          ===========================*/function round(a){return Math.floor(a);}/*=========================
	          Set grab cursor
	          ===========================*/if(s.params.grabCursor){s.container[0].style.cursor='move';s.container[0].style.cursor='-webkit-grab';s.container[0].style.cursor='-moz-grab';s.container[0].style.cursor='grab';}/*=========================
	          Update on Images Ready
	          ===========================*/s.imagesToLoad=[];s.imagesLoaded=0;s.loadImage=function(imgElement,src,srcset,checkForComplete,callback){var image;function onReady(){if(callback)callback();}if(!imgElement.complete||!checkForComplete){if(src){image=new window.Image();image.onload=onReady;image.onerror=onReady;if(srcset){image.srcset=srcset;}if(src){image.src=src;}}else{onReady();}}else{//image already loaded...
	onReady();}};s.preloadImages=function(){s.imagesToLoad=s.container.find('img');function _onReady(){if(typeof s==='undefined'||s===null)return;if(s.imagesLoaded!==undefined)s.imagesLoaded++;if(s.imagesLoaded===s.imagesToLoad.length){if(s.params.updateOnImagesReady)s.update();s.emit('onImagesReady',s);}}for(var i=0;i<s.imagesToLoad.length;i++){s.loadImage(s.imagesToLoad[i],s.imagesToLoad[i].currentSrc||s.imagesToLoad[i].getAttribute('src'),s.imagesToLoad[i].srcset||s.imagesToLoad[i].getAttribute('srcset'),true,_onReady);}};/*=========================
	          Autoplay
	          ===========================*/s.autoplayTimeoutId=undefined;s.autoplaying=false;s.autoplayPaused=false;function autoplay(){s.autoplayTimeoutId=setTimeout(function(){if(s.params.loop){s.fixLoop();s._slideNext();s.emit('onAutoplay',s);}else{if(!s.isEnd){s._slideNext();s.emit('onAutoplay',s);}else{if(!params.autoplayStopOnLast){s._slideTo(0);s.emit('onAutoplay',s);}else{s.stopAutoplay();}}}},s.params.autoplay);}s.startAutoplay=function(){if(typeof s.autoplayTimeoutId!=='undefined')return false;if(!s.params.autoplay)return false;if(s.autoplaying)return false;s.autoplaying=true;s.emit('onAutoplayStart',s);autoplay();};s.stopAutoplay=function(internal){if(!s.autoplayTimeoutId)return;if(s.autoplayTimeoutId)clearTimeout(s.autoplayTimeoutId);s.autoplaying=false;s.autoplayTimeoutId=undefined;s.emit('onAutoplayStop',s);};s.pauseAutoplay=function(speed){if(s.autoplayPaused)return;if(s.autoplayTimeoutId)clearTimeout(s.autoplayTimeoutId);s.autoplayPaused=true;if(speed===0){s.autoplayPaused=false;autoplay();}else{s.wrapper.transitionEnd(function(){if(!s)return;s.autoplayPaused=false;if(!s.autoplaying){s.stopAutoplay();}else{autoplay();}});}};/*=========================
	          Min/Max Translate
	          ===========================*/s.minTranslate=function(){return-s.snapGrid[0];};s.maxTranslate=function(){return-s.snapGrid[s.snapGrid.length-1];};/*=========================
	          Slider/slides sizes
	          ===========================*/s.updateAutoHeight=function(){// Update Height
	var slide=s.slides.eq(s.activeIndex)[0];if(typeof slide!=='undefined'){var newHeight=slide.offsetHeight;if(newHeight)s.wrapper.css('height',newHeight+'px');}};s.updateContainerSize=function(){var width,height;if(typeof s.params.width!=='undefined'){width=s.params.width;}else{width=s.container[0].clientWidth;}if(typeof s.params.height!=='undefined'){height=s.params.height;}else{height=s.container[0].clientHeight;}if(width===0&&s.isHorizontal()||height===0&&!s.isHorizontal()){return;}//Subtract paddings
	width=width-parseInt(s.container.css('padding-left'),10)-parseInt(s.container.css('padding-right'),10);height=height-parseInt(s.container.css('padding-top'),10)-parseInt(s.container.css('padding-bottom'),10);// Store values
	s.width=width;s.height=height;s.size=s.isHorizontal()?s.width:s.height;};s.updateSlidesSize=function(){s.slides=s.wrapper.children('.'+s.params.slideClass);s.snapGrid=[];s.slidesGrid=[];s.slidesSizesGrid=[];var spaceBetween=s.params.spaceBetween,slidePosition=-s.params.slidesOffsetBefore,i,prevSlideSize=0,index=0;if(typeof s.size==='undefined')return;if(typeof spaceBetween==='string'&&spaceBetween.indexOf('%')>=0){spaceBetween=parseFloat(spaceBetween.replace('%',''))/100*s.size;}s.virtualSize=-spaceBetween;// reset margins
	if(s.rtl)s.slides.css({marginLeft:'',marginTop:''});else s.slides.css({marginRight:'',marginBottom:''});var slidesNumberEvenToRows;if(s.params.slidesPerColumn>1){if(Math.floor(s.slides.length/s.params.slidesPerColumn)===s.slides.length/s.params.slidesPerColumn){slidesNumberEvenToRows=s.slides.length;}else{slidesNumberEvenToRows=Math.ceil(s.slides.length/s.params.slidesPerColumn)*s.params.slidesPerColumn;}if(s.params.slidesPerView!=='auto'&&s.params.slidesPerColumnFill==='row'){slidesNumberEvenToRows=Math.max(slidesNumberEvenToRows,s.params.slidesPerView*s.params.slidesPerColumn);}}// Calc slides
	var slideSize;var slidesPerColumn=s.params.slidesPerColumn;var slidesPerRow=slidesNumberEvenToRows/slidesPerColumn;var numFullColumns=slidesPerRow-(s.params.slidesPerColumn*slidesPerRow-s.slides.length);for(i=0;i<s.slides.length;i++){slideSize=0;var slide=s.slides.eq(i);if(s.params.slidesPerColumn>1){// Set slides order
	var newSlideOrderIndex;var column,row;if(s.params.slidesPerColumnFill==='column'){column=Math.floor(i/slidesPerColumn);row=i-column*slidesPerColumn;if(column>numFullColumns||column===numFullColumns&&row===slidesPerColumn-1){if(++row>=slidesPerColumn){row=0;column++;}}newSlideOrderIndex=column+row*slidesNumberEvenToRows/slidesPerColumn;slide.css({'-webkit-box-ordinal-group':newSlideOrderIndex,'-moz-box-ordinal-group':newSlideOrderIndex,'-ms-flex-order':newSlideOrderIndex,'-webkit-order':newSlideOrderIndex,'order':newSlideOrderIndex});}else{row=Math.floor(i/slidesPerRow);column=i-row*slidesPerRow;}slide.css({'margin-top':row!==0&&s.params.spaceBetween&&s.params.spaceBetween+'px'}).attr('data-swiper-column',column).attr('data-swiper-row',row);}if(slide.css('display')==='none')continue;if(s.params.slidesPerView==='auto'){slideSize=s.isHorizontal()?slide.outerWidth(true):slide.outerHeight(true);if(s.params.roundLengths)slideSize=round(slideSize);}else{slideSize=(s.size-(s.params.slidesPerView-1)*spaceBetween)/s.params.slidesPerView;if(s.params.roundLengths)slideSize=round(slideSize);if(s.isHorizontal()){s.slides[i].style.width=slideSize+'px';}else{s.slides[i].style.height=slideSize+'px';}}s.slides[i].swiperSlideSize=slideSize;s.slidesSizesGrid.push(slideSize);if(s.params.centeredSlides){slidePosition=slidePosition+slideSize/2+prevSlideSize/2+spaceBetween;if(i===0)slidePosition=slidePosition-s.size/2-spaceBetween;if(Math.abs(slidePosition)<1/1000)slidePosition=0;if(index%s.params.slidesPerGroup===0)s.snapGrid.push(slidePosition);s.slidesGrid.push(slidePosition);}else{if(index%s.params.slidesPerGroup===0)s.snapGrid.push(slidePosition);s.slidesGrid.push(slidePosition);slidePosition=slidePosition+slideSize+spaceBetween;}s.virtualSize+=slideSize+spaceBetween;prevSlideSize=slideSize;index++;}s.virtualSize=Math.max(s.virtualSize,s.size)+s.params.slidesOffsetAfter;var newSlidesGrid;if(s.rtl&&s.wrongRTL&&(s.params.effect==='slide'||s.params.effect==='coverflow')){s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});}if(!s.support.flexbox||s.params.setWrapperSize){if(s.isHorizontal())s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});else s.wrapper.css({height:s.virtualSize+s.params.spaceBetween+'px'});}if(s.params.slidesPerColumn>1){s.virtualSize=(slideSize+s.params.spaceBetween)*slidesNumberEvenToRows;s.virtualSize=Math.ceil(s.virtualSize/s.params.slidesPerColumn)-s.params.spaceBetween;s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});if(s.params.centeredSlides){newSlidesGrid=[];for(i=0;i<s.snapGrid.length;i++){if(s.snapGrid[i]<s.virtualSize+s.snapGrid[0])newSlidesGrid.push(s.snapGrid[i]);}s.snapGrid=newSlidesGrid;}}// Remove last grid elements depending on width
	if(!s.params.centeredSlides){newSlidesGrid=[];for(i=0;i<s.snapGrid.length;i++){if(s.snapGrid[i]<=s.virtualSize-s.size){newSlidesGrid.push(s.snapGrid[i]);}}s.snapGrid=newSlidesGrid;if(Math.floor(s.virtualSize-s.size)-Math.floor(s.snapGrid[s.snapGrid.length-1])>1){s.snapGrid.push(s.virtualSize-s.size);}}if(s.snapGrid.length===0)s.snapGrid=[0];if(s.params.spaceBetween!==0){if(s.isHorizontal()){if(s.rtl)s.slides.css({marginLeft:spaceBetween+'px'});else s.slides.css({marginRight:spaceBetween+'px'});}else s.slides.css({marginBottom:spaceBetween+'px'});}if(s.params.watchSlidesProgress){s.updateSlidesOffset();}};s.updateSlidesOffset=function(){for(var i=0;i<s.slides.length;i++){s.slides[i].swiperSlideOffset=s.isHorizontal()?s.slides[i].offsetLeft:s.slides[i].offsetTop;}};/*=========================
	          Slider/slides progress
	          ===========================*/s.updateSlidesProgress=function(translate){if(typeof translate==='undefined'){translate=s.translate||0;}if(s.slides.length===0)return;if(typeof s.slides[0].swiperSlideOffset==='undefined')s.updateSlidesOffset();var offsetCenter=-translate;if(s.rtl)offsetCenter=translate;// Visible Slides
	s.slides.removeClass(s.params.slideVisibleClass);for(var i=0;i<s.slides.length;i++){var slide=s.slides[i];var slideProgress=(offsetCenter-slide.swiperSlideOffset)/(slide.swiperSlideSize+s.params.spaceBetween);if(s.params.watchSlidesVisibility){var slideBefore=-(offsetCenter-slide.swiperSlideOffset);var slideAfter=slideBefore+s.slidesSizesGrid[i];var isVisible=slideBefore>=0&&slideBefore<s.size||slideAfter>0&&slideAfter<=s.size||slideBefore<=0&&slideAfter>=s.size;if(isVisible){s.slides.eq(i).addClass(s.params.slideVisibleClass);}}slide.progress=s.rtl?-slideProgress:slideProgress;}};s.updateProgress=function(translate){if(typeof translate==='undefined'){translate=s.translate||0;}var translatesDiff=s.maxTranslate()-s.minTranslate();var wasBeginning=s.isBeginning;var wasEnd=s.isEnd;if(translatesDiff===0){s.progress=0;s.isBeginning=s.isEnd=true;}else{s.progress=(translate-s.minTranslate())/translatesDiff;s.isBeginning=s.progress<=0;s.isEnd=s.progress>=1;}if(s.isBeginning&&!wasBeginning)s.emit('onReachBeginning',s);if(s.isEnd&&!wasEnd)s.emit('onReachEnd',s);if(s.params.watchSlidesProgress)s.updateSlidesProgress(translate);s.emit('onProgress',s,s.progress);};s.updateActiveIndex=function(){var translate=s.rtl?s.translate:-s.translate;var newActiveIndex,i,snapIndex;for(i=0;i<s.slidesGrid.length;i++){if(typeof s.slidesGrid[i+1]!=='undefined'){if(translate>=s.slidesGrid[i]&&translate<s.slidesGrid[i+1]-(s.slidesGrid[i+1]-s.slidesGrid[i])/2){newActiveIndex=i;}else if(translate>=s.slidesGrid[i]&&translate<s.slidesGrid[i+1]){newActiveIndex=i+1;}}else{if(translate>=s.slidesGrid[i]){newActiveIndex=i;}}}// Normalize slideIndex
	if(newActiveIndex<0||typeof newActiveIndex==='undefined')newActiveIndex=0;// for (i = 0; i < s.slidesGrid.length; i++) {
	// if (- translate >= s.slidesGrid[i]) {
	// newActiveIndex = i;
	// }
	// }
	snapIndex=Math.floor(newActiveIndex/s.params.slidesPerGroup);if(snapIndex>=s.snapGrid.length)snapIndex=s.snapGrid.length-1;if(newActiveIndex===s.activeIndex){return;}s.snapIndex=snapIndex;s.previousIndex=s.activeIndex;s.activeIndex=newActiveIndex;s.updateClasses();};/*=========================
	          Classes
	          ===========================*/s.updateClasses=function(){s.slides.removeClass(s.params.slideActiveClass+' '+s.params.slideNextClass+' '+s.params.slidePrevClass);var activeSlide=s.slides.eq(s.activeIndex);// Active classes
	activeSlide.addClass(s.params.slideActiveClass);// Next Slide
	var nextSlide=activeSlide.next('.'+s.params.slideClass).addClass(s.params.slideNextClass);if(s.params.loop&&nextSlide.length===0){s.slides.eq(0).addClass(s.params.slideNextClass);}// Prev Slide
	var prevSlide=activeSlide.prev('.'+s.params.slideClass).addClass(s.params.slidePrevClass);if(s.params.loop&&prevSlide.length===0){s.slides.eq(-1).addClass(s.params.slidePrevClass);}// Pagination
	if(s.paginationContainer&&s.paginationContainer.length>0){// Current/Total
	var current,total=s.params.loop?Math.ceil((s.slides.length-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop){current=Math.ceil((s.activeIndex-s.loopedSlides)/s.params.slidesPerGroup);if(current>s.slides.length-1-s.loopedSlides*2){current=current-(s.slides.length-s.loopedSlides*2);}if(current>total-1)current=current-total;if(current<0&&s.params.paginationType!=='bullets')current=total+current;}else{if(typeof s.snapIndex!=='undefined'){current=s.snapIndex;}else{current=s.activeIndex||0;}}// Types
	if(s.params.paginationType==='bullets'&&s.bullets&&s.bullets.length>0){s.bullets.removeClass(s.params.bulletActiveClass);if(s.paginationContainer.length>1){s.bullets.each(function(){if($(this).index()===current)$(this).addClass(s.params.bulletActiveClass);});}else{s.bullets.eq(current).addClass(s.params.bulletActiveClass);}}if(s.params.paginationType==='fraction'){s.paginationContainer.find('.'+s.params.paginationCurrentClass).text(current+1);s.paginationContainer.find('.'+s.params.paginationTotalClass).text(total);}if(s.params.paginationType==='progress'){var scale=(current+1)/total,scaleX=scale,scaleY=1;if(!s.isHorizontal()){scaleY=scale;scaleX=1;}s.paginationContainer.find('.'+s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX('+scaleX+') scaleY('+scaleY+')').transition(s.params.speed);}if(s.params.paginationType==='custom'&&s.params.paginationCustomRender){s.paginationContainer.html(s.params.paginationCustomRender(s,current+1,total));s.emit('onPaginationRendered',s,s.paginationContainer[0]);}}// Next/active buttons
	if(!s.params.loop){if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){if(s.isBeginning){s.prevButton.addClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.disable(s.prevButton);}else{s.prevButton.removeClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.enable(s.prevButton);}}if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){if(s.isEnd){s.nextButton.addClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.disable(s.nextButton);}else{s.nextButton.removeClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.enable(s.nextButton);}}}};/*=========================
	          Pagination
	          ===========================*/s.updatePagination=function(){if(!s.params.pagination)return;if(s.paginationContainer&&s.paginationContainer.length>0){var paginationHTML='';if(s.params.paginationType==='bullets'){var numberOfBullets=s.params.loop?Math.ceil((s.slides.length-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;for(var i=0;i<numberOfBullets;i++){if(s.params.paginationBulletRender){paginationHTML+=s.params.paginationBulletRender(i,s.params.bulletClass);}else{paginationHTML+='<'+s.params.paginationElement+' class="'+s.params.bulletClass+'"></'+s.params.paginationElement+'>';}}s.paginationContainer.html(paginationHTML);s.bullets=s.paginationContainer.find('.'+s.params.bulletClass);if(s.params.paginationClickable&&s.params.a11y&&s.a11y){s.a11y.initPagination();}}if(s.params.paginationType==='fraction'){if(s.params.paginationFractionRender){paginationHTML=s.params.paginationFractionRender(s,s.params.paginationCurrentClass,s.params.paginationTotalClass);}else{paginationHTML='<span class="'+s.params.paginationCurrentClass+'"></span>'+' / '+'<span class="'+s.params.paginationTotalClass+'"></span>';}s.paginationContainer.html(paginationHTML);}if(s.params.paginationType==='progress'){if(s.params.paginationProgressRender){paginationHTML=s.params.paginationProgressRender(s,s.params.paginationProgressbarClass);}else{paginationHTML='<span class="'+s.params.paginationProgressbarClass+'"></span>';}s.paginationContainer.html(paginationHTML);}if(s.params.paginationType!=='custom'){s.emit('onPaginationRendered',s,s.paginationContainer[0]);}}};/*=========================
	          Common update method
	          ===========================*/s.update=function(updateTranslate){s.updateContainerSize();s.updateSlidesSize();s.updateProgress();s.updatePagination();s.updateClasses();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();}function forceSetTranslate(){newTranslate=Math.min(Math.max(s.translate,s.maxTranslate()),s.minTranslate());s.setWrapperTranslate(newTranslate);s.updateActiveIndex();s.updateClasses();}if(updateTranslate){var translated,newTranslate;if(s.controller&&s.controller.spline){s.controller.spline=undefined;}if(s.params.freeMode){forceSetTranslate();if(s.params.autoHeight){s.updateAutoHeight();}}else{if((s.params.slidesPerView==='auto'||s.params.slidesPerView>1)&&s.isEnd&&!s.params.centeredSlides){translated=s.slideTo(s.slides.length-1,0,false,true);}else{translated=s.slideTo(s.activeIndex,0,false,true);}if(!translated){forceSetTranslate();}}}else if(s.params.autoHeight){s.updateAutoHeight();}};/*=========================
	          Resize Handler
	          ===========================*/s.onResize=function(forceUpdatePagination){//Breakpoints
	if(s.params.breakpoints){s.setBreakpoint();}// Disable locks on resize
	var allowSwipeToPrev=s.params.allowSwipeToPrev;var allowSwipeToNext=s.params.allowSwipeToNext;s.params.allowSwipeToPrev=s.params.allowSwipeToNext=true;s.updateContainerSize();s.updateSlidesSize();if(s.params.slidesPerView==='auto'||s.params.freeMode||forceUpdatePagination)s.updatePagination();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();}if(s.controller&&s.controller.spline){s.controller.spline=undefined;}var slideChangedBySlideTo=false;if(s.params.freeMode){var newTranslate=Math.min(Math.max(s.translate,s.maxTranslate()),s.minTranslate());s.setWrapperTranslate(newTranslate);s.updateActiveIndex();s.updateClasses();if(s.params.autoHeight){s.updateAutoHeight();}}else{s.updateClasses();if((s.params.slidesPerView==='auto'||s.params.slidesPerView>1)&&s.isEnd&&!s.params.centeredSlides){slideChangedBySlideTo=s.slideTo(s.slides.length-1,0,false,true);}else{slideChangedBySlideTo=s.slideTo(s.activeIndex,0,false,true);}}if(s.params.lazyLoading&&!slideChangedBySlideTo&&s.lazy){s.lazy.load();}// Return locks after resize
	s.params.allowSwipeToPrev=allowSwipeToPrev;s.params.allowSwipeToNext=allowSwipeToNext;};/*=========================
	          Events
	          ===========================*///Define Touch Events
	var desktopEvents=['mousedown','mousemove','mouseup'];if(window.navigator.pointerEnabled)desktopEvents=['pointerdown','pointermove','pointerup'];else if(window.navigator.msPointerEnabled)desktopEvents=['MSPointerDown','MSPointerMove','MSPointerUp'];s.touchEvents={start:s.support.touch||!s.params.simulateTouch?'touchstart':desktopEvents[0],move:s.support.touch||!s.params.simulateTouch?'touchmove':desktopEvents[1],end:s.support.touch||!s.params.simulateTouch?'touchend':desktopEvents[2]};// WP8 Touch Events Fix
	if(window.navigator.pointerEnabled||window.navigator.msPointerEnabled){(s.params.touchEventsTarget==='container'?s.container:s.wrapper).addClass('swiper-wp8-'+s.params.direction);}// Attach/detach events
	s.initEvents=function(detach){var actionDom=detach?'off':'on';var action=detach?'removeEventListener':'addEventListener';var touchEventsTarget=s.params.touchEventsTarget==='container'?s.container[0]:s.wrapper[0];var target=s.support.touch?touchEventsTarget:document;var moveCapture=s.params.nested?true:false;//Touch Events
	if(s.browser.ie){touchEventsTarget[action](s.touchEvents.start,s.onTouchStart,false);target[action](s.touchEvents.move,s.onTouchMove,moveCapture);target[action](s.touchEvents.end,s.onTouchEnd,false);}else{if(s.support.touch){touchEventsTarget[action](s.touchEvents.start,s.onTouchStart,false);touchEventsTarget[action](s.touchEvents.move,s.onTouchMove,moveCapture);touchEventsTarget[action](s.touchEvents.end,s.onTouchEnd,false);}if(params.simulateTouch&&!s.device.ios&&!s.device.android){touchEventsTarget[action]('mousedown',s.onTouchStart,false);document[action]('mousemove',s.onTouchMove,moveCapture);document[action]('mouseup',s.onTouchEnd,false);}}window[action]('resize',s.onResize);// Next, Prev, Index
	if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){s.nextButton[actionDom]('click',s.onClickNext);if(s.params.a11y&&s.a11y)s.nextButton[actionDom]('keydown',s.a11y.onEnterKey);}if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){s.prevButton[actionDom]('click',s.onClickPrev);if(s.params.a11y&&s.a11y)s.prevButton[actionDom]('keydown',s.a11y.onEnterKey);}if(s.params.pagination&&s.params.paginationClickable){s.paginationContainer[actionDom]('click','.'+s.params.bulletClass,s.onClickIndex);if(s.params.a11y&&s.a11y)s.paginationContainer[actionDom]('keydown','.'+s.params.bulletClass,s.a11y.onEnterKey);}// Prevent Links Clicks
	if(s.params.preventClicks||s.params.preventClicksPropagation)touchEventsTarget[action]('click',s.preventClicks,true);};s.attachEvents=function(){s.initEvents();};s.detachEvents=function(){s.initEvents(true);};/*=========================
	          Handle Clicks
	          ===========================*/// Prevent Clicks
	s.allowClick=true;s.preventClicks=function(e){if(!s.allowClick){if(s.params.preventClicks)e.preventDefault();if(s.params.preventClicksPropagation&&s.animating){e.stopPropagation();e.stopImmediatePropagation();}}};// Clicks
	s.onClickNext=function(e){e.preventDefault();if(s.isEnd&&!s.params.loop)return;s.slideNext();};s.onClickPrev=function(e){e.preventDefault();if(s.isBeginning&&!s.params.loop)return;s.slidePrev();};s.onClickIndex=function(e){e.preventDefault();var index=$(this).index()*s.params.slidesPerGroup;if(s.params.loop)index=index+s.loopedSlides;s.slideTo(index);};/*=========================
	          Handle Touches
	          ===========================*/function findElementInEvent(e,selector){var el=$(e.target);if(!el.is(selector)){if(typeof selector==='string'){el=el.parents(selector);}else if(selector.nodeType){var found;el.parents().each(function(index,_el){if(_el===selector)found=selector;});if(!found)return undefined;else return selector;}}if(el.length===0){return undefined;}return el[0];}s.updateClickedSlide=function(e){var slide=findElementInEvent(e,'.'+s.params.slideClass);var slideFound=false;if(slide){for(var i=0;i<s.slides.length;i++){if(s.slides[i]===slide)slideFound=true;}}if(slide&&slideFound){s.clickedSlide=slide;s.clickedIndex=$(slide).index();}else{s.clickedSlide=undefined;s.clickedIndex=undefined;return;}if(s.params.slideToClickedSlide&&s.clickedIndex!==undefined&&s.clickedIndex!==s.activeIndex){var slideToIndex=s.clickedIndex,realIndex,duplicatedSlides;if(s.params.loop){if(s.animating)return;realIndex=$(s.clickedSlide).attr('data-swiper-slide-index');if(s.params.centeredSlides){if(slideToIndex<s.loopedSlides-s.params.slidesPerView/2||slideToIndex>s.slides.length-s.loopedSlides+s.params.slidesPerView/2){s.fixLoop();slideToIndex=s.wrapper.children('.'+s.params.slideClass+'[data-swiper-slide-index="'+realIndex+'"]:not(.swiper-slide-duplicate)').eq(0).index();setTimeout(function(){s.slideTo(slideToIndex);},0);}else{s.slideTo(slideToIndex);}}else{if(slideToIndex>s.slides.length-s.params.slidesPerView){s.fixLoop();slideToIndex=s.wrapper.children('.'+s.params.slideClass+'[data-swiper-slide-index="'+realIndex+'"]:not(.swiper-slide-duplicate)').eq(0).index();setTimeout(function(){s.slideTo(slideToIndex);},0);}else{s.slideTo(slideToIndex);}}}else{s.slideTo(slideToIndex);}}};var isTouched,isMoved,allowTouchCallbacks,touchStartTime,isScrolling,currentTranslate,startTranslate,allowThresholdMove,// Form elements to match
	formElements='input, select, textarea, button',// Last click time
	lastClickTime=Date.now(),clickTimeout,//Velocities
	velocities=[],allowMomentumBounce;// Animating Flag
	s.animating=false;// Touches information
	s.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};// Touch handlers
	var isTouchEvent,startMoving;s.onTouchStart=function(e){if(e.originalEvent)e=e.originalEvent;isTouchEvent=e.type==='touchstart';if(!isTouchEvent&&'which'in e&&e.which===3)return;if(s.params.noSwiping&&findElementInEvent(e,'.'+s.params.noSwipingClass)){s.allowClick=true;return;}if(s.params.swipeHandler){if(!findElementInEvent(e,s.params.swipeHandler))return;}var startX=s.touches.currentX=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;var startY=s.touches.currentY=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;// Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	if(s.device.ios&&s.params.iOSEdgeSwipeDetection&&startX<=s.params.iOSEdgeSwipeThreshold){return;}isTouched=true;isMoved=false;allowTouchCallbacks=true;isScrolling=undefined;startMoving=undefined;s.touches.startX=startX;s.touches.startY=startY;touchStartTime=Date.now();s.allowClick=true;s.updateContainerSize();s.swipeDirection=undefined;if(s.params.threshold>0)allowThresholdMove=false;if(e.type!=='touchstart'){var preventDefault=true;if($(e.target).is(formElements))preventDefault=false;if(document.activeElement&&$(document.activeElement).is(formElements)){document.activeElement.blur();}if(preventDefault){e.preventDefault();}}s.emit('onTouchStart',s,e);};s.onTouchMove=function(e){if(e.originalEvent)e=e.originalEvent;if(isTouchEvent&&e.type==='mousemove')return;if(e.preventedByNestedSwiper){s.touches.startX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.startY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;return;}if(s.params.onlyExternal){// isMoved = true;
	s.allowClick=false;if(isTouched){s.touches.startX=s.touches.currentX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.startY=s.touches.currentY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;touchStartTime=Date.now();}return;}if(isTouchEvent&&document.activeElement){if(e.target===document.activeElement&&$(e.target).is(formElements)){isMoved=true;s.allowClick=false;return;}}if(allowTouchCallbacks){s.emit('onTouchMove',s,e);}if(e.targetTouches&&e.targetTouches.length>1)return;s.touches.currentX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.currentY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(typeof isScrolling==='undefined'){var touchAngle=Math.atan2(Math.abs(s.touches.currentY-s.touches.startY),Math.abs(s.touches.currentX-s.touches.startX))*180/Math.PI;isScrolling=s.isHorizontal()?touchAngle>s.params.touchAngle:90-touchAngle>s.params.touchAngle;}if(isScrolling){s.emit('onTouchMoveOpposite',s,e);}if(typeof startMoving==='undefined'&&s.browser.ieTouch){if(s.touches.currentX!==s.touches.startX||s.touches.currentY!==s.touches.startY){startMoving=true;}}if(!isTouched)return;if(isScrolling){isTouched=false;return;}if(!startMoving&&s.browser.ieTouch){return;}s.allowClick=false;s.emit('onSliderMove',s,e);e.preventDefault();if(s.params.touchMoveStopPropagation&&!s.params.nested){e.stopPropagation();}if(!isMoved){if(params.loop){s.fixLoop();}startTranslate=s.getWrapperTranslate();s.setWrapperTransition(0);if(s.animating){s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');}if(s.params.autoplay&&s.autoplaying){if(s.params.autoplayDisableOnInteraction){s.stopAutoplay();}else{s.pauseAutoplay();}}allowMomentumBounce=false;//Grab Cursor
	if(s.params.grabCursor){s.container[0].style.cursor='move';s.container[0].style.cursor='-webkit-grabbing';s.container[0].style.cursor='-moz-grabbin';s.container[0].style.cursor='grabbing';}}isMoved=true;var diff=s.touches.diff=s.isHorizontal()?s.touches.currentX-s.touches.startX:s.touches.currentY-s.touches.startY;diff=diff*s.params.touchRatio;if(s.rtl)diff=-diff;s.swipeDirection=diff>0?'prev':'next';currentTranslate=diff+startTranslate;var disableParentSwiper=true;if(diff>0&&currentTranslate>s.minTranslate()){disableParentSwiper=false;if(s.params.resistance)currentTranslate=s.minTranslate()-1+Math.pow(-s.minTranslate()+startTranslate+diff,s.params.resistanceRatio);}else if(diff<0&&currentTranslate<s.maxTranslate()){disableParentSwiper=false;if(s.params.resistance)currentTranslate=s.maxTranslate()+1-Math.pow(s.maxTranslate()-startTranslate-diff,s.params.resistanceRatio);}if(disableParentSwiper){e.preventedByNestedSwiper=true;}// Directions locks
	if(!s.params.allowSwipeToNext&&s.swipeDirection==='next'&&currentTranslate<startTranslate){currentTranslate=startTranslate;}if(!s.params.allowSwipeToPrev&&s.swipeDirection==='prev'&&currentTranslate>startTranslate){currentTranslate=startTranslate;}if(!s.params.followFinger)return;// Threshold
	if(s.params.threshold>0){if(Math.abs(diff)>s.params.threshold||allowThresholdMove){if(!allowThresholdMove){allowThresholdMove=true;s.touches.startX=s.touches.currentX;s.touches.startY=s.touches.currentY;currentTranslate=startTranslate;s.touches.diff=s.isHorizontal()?s.touches.currentX-s.touches.startX:s.touches.currentY-s.touches.startY;return;}}else{currentTranslate=startTranslate;return;}}// Update active index in free mode
	if(s.params.freeMode||s.params.watchSlidesProgress){s.updateActiveIndex();}if(s.params.freeMode){//Velocity
	if(velocities.length===0){velocities.push({position:s.touches[s.isHorizontal()?'startX':'startY'],time:touchStartTime});}velocities.push({position:s.touches[s.isHorizontal()?'currentX':'currentY'],time:new window.Date().getTime()});}// Update progress
	s.updateProgress(currentTranslate);// Update translate
	s.setWrapperTranslate(currentTranslate);};s.onTouchEnd=function(e){if(e.originalEvent)e=e.originalEvent;if(allowTouchCallbacks){s.emit('onTouchEnd',s,e);}allowTouchCallbacks=false;if(!isTouched)return;//Return Grab Cursor
	if(s.params.grabCursor&&isMoved&&isTouched){s.container[0].style.cursor='move';s.container[0].style.cursor='-webkit-grab';s.container[0].style.cursor='-moz-grab';s.container[0].style.cursor='grab';}// Time diff
	var touchEndTime=Date.now();var timeDiff=touchEndTime-touchStartTime;// Tap, doubleTap, Click
	if(s.allowClick){s.updateClickedSlide(e);s.emit('onTap',s,e);if(timeDiff<300&&touchEndTime-lastClickTime>300){if(clickTimeout)clearTimeout(clickTimeout);clickTimeout=setTimeout(function(){if(!s)return;if(s.params.paginationHide&&s.paginationContainer.length>0&&!$(e.target).hasClass(s.params.bulletClass)){s.paginationContainer.toggleClass(s.params.paginationHiddenClass);}s.emit('onClick',s,e);},300);}if(timeDiff<300&&touchEndTime-lastClickTime<300){if(clickTimeout)clearTimeout(clickTimeout);s.emit('onDoubleTap',s,e);}}lastClickTime=Date.now();setTimeout(function(){if(s)s.allowClick=true;},0);if(!isTouched||!isMoved||!s.swipeDirection||s.touches.diff===0||currentTranslate===startTranslate){isTouched=isMoved=false;return;}isTouched=isMoved=false;var currentPos;if(s.params.followFinger){currentPos=s.rtl?s.translate:-s.translate;}else{currentPos=-currentTranslate;}if(s.params.freeMode){if(currentPos<-s.minTranslate()){s.slideTo(s.activeIndex);return;}else if(currentPos>-s.maxTranslate()){if(s.slides.length<s.snapGrid.length){s.slideTo(s.snapGrid.length-1);}else{s.slideTo(s.slides.length-1);}return;}if(s.params.freeModeMomentum){if(velocities.length>1){var lastMoveEvent=velocities.pop(),velocityEvent=velocities.pop();var distance=lastMoveEvent.position-velocityEvent.position;var time=lastMoveEvent.time-velocityEvent.time;s.velocity=distance/time;s.velocity=s.velocity/2;if(Math.abs(s.velocity)<s.params.freeModeMinimumVelocity){s.velocity=0;}// this implies that the user stopped moving a finger then released.
	// There would be no events with distance zero, so the last event is stale.
	if(time>150||new window.Date().getTime()-lastMoveEvent.time>300){s.velocity=0;}}else{s.velocity=0;}velocities.length=0;var momentumDuration=1000*s.params.freeModeMomentumRatio;var momentumDistance=s.velocity*momentumDuration;var newPosition=s.translate+momentumDistance;if(s.rtl)newPosition=-newPosition;var doBounce=false;var afterBouncePosition;var bounceAmount=Math.abs(s.velocity)*20*s.params.freeModeMomentumBounceRatio;if(newPosition<s.maxTranslate()){if(s.params.freeModeMomentumBounce){if(newPosition+s.maxTranslate()<-bounceAmount){newPosition=s.maxTranslate()-bounceAmount;}afterBouncePosition=s.maxTranslate();doBounce=true;allowMomentumBounce=true;}else{newPosition=s.maxTranslate();}}else if(newPosition>s.minTranslate()){if(s.params.freeModeMomentumBounce){if(newPosition-s.minTranslate()>bounceAmount){newPosition=s.minTranslate()+bounceAmount;}afterBouncePosition=s.minTranslate();doBounce=true;allowMomentumBounce=true;}else{newPosition=s.minTranslate();}}else if(s.params.freeModeSticky){var j=0,nextSlide;for(j=0;j<s.snapGrid.length;j+=1){if(s.snapGrid[j]>-newPosition){nextSlide=j;break;}}if(Math.abs(s.snapGrid[nextSlide]-newPosition)<Math.abs(s.snapGrid[nextSlide-1]-newPosition)||s.swipeDirection==='next'){newPosition=s.snapGrid[nextSlide];}else{newPosition=s.snapGrid[nextSlide-1];}if(!s.rtl)newPosition=-newPosition;}//Fix duration
	if(s.velocity!==0){if(s.rtl){momentumDuration=Math.abs((-newPosition-s.translate)/s.velocity);}else{momentumDuration=Math.abs((newPosition-s.translate)/s.velocity);}}else if(s.params.freeModeSticky){s.slideReset();return;}if(s.params.freeModeMomentumBounce&&doBounce){s.updateProgress(afterBouncePosition);s.setWrapperTransition(momentumDuration);s.setWrapperTranslate(newPosition);s.onTransitionStart();s.animating=true;s.wrapper.transitionEnd(function(){if(!s||!allowMomentumBounce)return;s.emit('onMomentumBounce',s);s.setWrapperTransition(s.params.speed);s.setWrapperTranslate(afterBouncePosition);s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd();});});}else if(s.velocity){s.updateProgress(newPosition);s.setWrapperTransition(momentumDuration);s.setWrapperTranslate(newPosition);s.onTransitionStart();if(!s.animating){s.animating=true;s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd();});}}else{s.updateProgress(newPosition);}s.updateActiveIndex();}if(!s.params.freeModeMomentum||timeDiff>=s.params.longSwipesMs){s.updateProgress();s.updateActiveIndex();}return;}// Find current slide
	var i,stopIndex=0,groupSize=s.slidesSizesGrid[0];for(i=0;i<s.slidesGrid.length;i+=s.params.slidesPerGroup){if(typeof s.slidesGrid[i+s.params.slidesPerGroup]!=='undefined'){if(currentPos>=s.slidesGrid[i]&&currentPos<s.slidesGrid[i+s.params.slidesPerGroup]){stopIndex=i;groupSize=s.slidesGrid[i+s.params.slidesPerGroup]-s.slidesGrid[i];}}else{if(currentPos>=s.slidesGrid[i]){stopIndex=i;groupSize=s.slidesGrid[s.slidesGrid.length-1]-s.slidesGrid[s.slidesGrid.length-2];}}}// Find current slide size
	var ratio=(currentPos-s.slidesGrid[stopIndex])/groupSize;if(timeDiff>s.params.longSwipesMs){// Long touches
	if(!s.params.longSwipes){s.slideTo(s.activeIndex);return;}if(s.swipeDirection==='next'){if(ratio>=s.params.longSwipesRatio)s.slideTo(stopIndex+s.params.slidesPerGroup);else s.slideTo(stopIndex);}if(s.swipeDirection==='prev'){if(ratio>1-s.params.longSwipesRatio)s.slideTo(stopIndex+s.params.slidesPerGroup);else s.slideTo(stopIndex);}}else{// Short swipes
	if(!s.params.shortSwipes){s.slideTo(s.activeIndex);return;}if(s.swipeDirection==='next'){s.slideTo(stopIndex+s.params.slidesPerGroup);}if(s.swipeDirection==='prev'){s.slideTo(stopIndex);}}};/*=========================
	          Transitions
	          ===========================*/s._slideTo=function(slideIndex,speed){return s.slideTo(slideIndex,speed,true,true);};s.slideTo=function(slideIndex,speed,runCallbacks,internal){if(typeof runCallbacks==='undefined')runCallbacks=true;if(typeof slideIndex==='undefined')slideIndex=0;if(slideIndex<0)slideIndex=0;s.snapIndex=Math.floor(slideIndex/s.params.slidesPerGroup);if(s.snapIndex>=s.snapGrid.length)s.snapIndex=s.snapGrid.length-1;var translate=-s.snapGrid[s.snapIndex];// Stop autoplay
	if(s.params.autoplay&&s.autoplaying){if(internal||!s.params.autoplayDisableOnInteraction){s.pauseAutoplay(speed);}else{s.stopAutoplay();}}// Update progress
	s.updateProgress(translate);// Normalize slideIndex
	for(var i=0;i<s.slidesGrid.length;i++){if(-Math.floor(translate*100)>=Math.floor(s.slidesGrid[i]*100)){slideIndex=i;}}// Directions locks
	if(!s.params.allowSwipeToNext&&translate<s.translate&&translate<s.minTranslate()){return false;}if(!s.params.allowSwipeToPrev&&translate>s.translate&&translate>s.maxTranslate()){if((s.activeIndex||0)!==slideIndex)return false;}// Update Index
	if(typeof speed==='undefined')speed=s.params.speed;s.previousIndex=s.activeIndex||0;s.activeIndex=slideIndex;if(s.rtl&&-translate===s.translate||!s.rtl&&translate===s.translate){// Update Height
	if(s.params.autoHeight){s.updateAutoHeight();}s.updateClasses();if(s.params.effect!=='slide'){s.setWrapperTranslate(translate);}return false;}s.updateClasses();s.onTransitionStart(runCallbacks);if(speed===0){s.setWrapperTranslate(translate);s.setWrapperTransition(0);s.onTransitionEnd(runCallbacks);}else{s.setWrapperTranslate(translate);s.setWrapperTransition(speed);if(!s.animating){s.animating=true;s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd(runCallbacks);});}}return true;};s.onTransitionStart=function(runCallbacks){if(typeof runCallbacks==='undefined')runCallbacks=true;if(s.params.autoHeight){s.updateAutoHeight();}if(s.lazy)s.lazy.onTransitionStart();if(runCallbacks){s.emit('onTransitionStart',s);if(s.activeIndex!==s.previousIndex){s.emit('onSlideChangeStart',s);if(s.activeIndex>s.previousIndex){s.emit('onSlideNextStart',s);}else{s.emit('onSlidePrevStart',s);}}}};s.onTransitionEnd=function(runCallbacks){s.animating=false;s.setWrapperTransition(0);if(typeof runCallbacks==='undefined')runCallbacks=true;if(s.lazy)s.lazy.onTransitionEnd();if(runCallbacks){s.emit('onTransitionEnd',s);if(s.activeIndex!==s.previousIndex){s.emit('onSlideChangeEnd',s);if(s.activeIndex>s.previousIndex){s.emit('onSlideNextEnd',s);}else{s.emit('onSlidePrevEnd',s);}}}if(s.params.hashnav&&s.hashnav){s.hashnav.setHash();}};s.slideNext=function(runCallbacks,speed,internal){if(s.params.loop){if(s.animating)return false;s.fixLoop();var clientLeft=s.container[0].clientLeft;return s.slideTo(s.activeIndex+s.params.slidesPerGroup,speed,runCallbacks,internal);}else return s.slideTo(s.activeIndex+s.params.slidesPerGroup,speed,runCallbacks,internal);};s._slideNext=function(speed){return s.slideNext(true,speed,true);};s.slidePrev=function(runCallbacks,speed,internal){if(s.params.loop){if(s.animating)return false;s.fixLoop();var clientLeft=s.container[0].clientLeft;return s.slideTo(s.activeIndex-1,speed,runCallbacks,internal);}else return s.slideTo(s.activeIndex-1,speed,runCallbacks,internal);};s._slidePrev=function(speed){return s.slidePrev(true,speed,true);};s.slideReset=function(runCallbacks,speed,internal){return s.slideTo(s.activeIndex,speed,runCallbacks);};/*=========================
	          Translate/transition helpers
	          ===========================*/s.setWrapperTransition=function(duration,byController){s.wrapper.transition(duration);if(s.params.effect!=='slide'&&s.effects[s.params.effect]){s.effects[s.params.effect].setTransition(duration);}if(s.params.parallax&&s.parallax){s.parallax.setTransition(duration);}if(s.params.scrollbar&&s.scrollbar){s.scrollbar.setTransition(duration);}if(s.params.control&&s.controller){s.controller.setTransition(duration,byController);}s.emit('onSetTransition',s,duration);};s.setWrapperTranslate=function(translate,updateActiveIndex,byController){var x=0,y=0,z=0;if(s.isHorizontal()){x=s.rtl?-translate:translate;}else{y=translate;}if(s.params.roundLengths){x=round(x);y=round(y);}if(!s.params.virtualTranslate){if(s.support.transforms3d)s.wrapper.transform('translate3d('+x+'px, '+y+'px, '+z+'px)');else s.wrapper.transform('translate('+x+'px, '+y+'px)');}s.translate=s.isHorizontal()?x:y;// Check if we need to update progress
	var progress;var translatesDiff=s.maxTranslate()-s.minTranslate();if(translatesDiff===0){progress=0;}else{progress=(translate-s.minTranslate())/translatesDiff;}if(progress!==s.progress){s.updateProgress(translate);}if(updateActiveIndex)s.updateActiveIndex();if(s.params.effect!=='slide'&&s.effects[s.params.effect]){s.effects[s.params.effect].setTranslate(s.translate);}if(s.params.parallax&&s.parallax){s.parallax.setTranslate(s.translate);}if(s.params.scrollbar&&s.scrollbar){s.scrollbar.setTranslate(s.translate);}if(s.params.control&&s.controller){s.controller.setTranslate(s.translate,byController);}s.emit('onSetTranslate',s,s.translate);};s.getTranslate=function(el,axis){var matrix,curTransform,curStyle,transformMatrix;// automatic axis detection
	if(typeof axis==='undefined'){axis='x';}if(s.params.virtualTranslate){return s.rtl?-s.translate:s.translate;}curStyle=window.getComputedStyle(el,null);if(window.WebKitCSSMatrix){curTransform=curStyle.transform||curStyle.webkitTransform;if(curTransform.split(',').length>6){curTransform=curTransform.split(', ').map(function(a){return a.replace(',','.');}).join(', ');}// Some old versions of Webkit choke when 'none' is passed; pass
	// empty string instead in this case
	transformMatrix=new window.WebKitCSSMatrix(curTransform==='none'?'':curTransform);}else{transformMatrix=curStyle.MozTransform||curStyle.OTransform||curStyle.MsTransform||curStyle.msTransform||curStyle.transform||curStyle.getPropertyValue('transform').replace('translate(','matrix(1, 0, 0, 1,');matrix=transformMatrix.toString().split(',');}if(axis==='x'){//Latest Chrome and webkits Fix
	if(window.WebKitCSSMatrix)curTransform=transformMatrix.m41;//Crazy IE10 Matrix
	else if(matrix.length===16)curTransform=parseFloat(matrix[12]);//Normal Browsers
	else curTransform=parseFloat(matrix[4]);}if(axis==='y'){//Latest Chrome and webkits Fix
	if(window.WebKitCSSMatrix)curTransform=transformMatrix.m42;//Crazy IE10 Matrix
	else if(matrix.length===16)curTransform=parseFloat(matrix[13]);//Normal Browsers
	else curTransform=parseFloat(matrix[5]);}if(s.rtl&&curTransform)curTransform=-curTransform;return curTransform||0;};s.getWrapperTranslate=function(axis){if(typeof axis==='undefined'){axis=s.isHorizontal()?'x':'y';}return s.getTranslate(s.wrapper[0],axis);};/*=========================
	          Observer
	          ===========================*/s.observers=[];function initObserver(target,options){options=options||{};// create an observer instance
	var ObserverFunc=window.MutationObserver||window.WebkitMutationObserver;var observer=new ObserverFunc(function(mutations){mutations.forEach(function(mutation){s.onResize(true);s.emit('onObserverUpdate',s,mutation);});});observer.observe(target,{attributes:typeof options.attributes==='undefined'?true:options.attributes,childList:typeof options.childList==='undefined'?true:options.childList,characterData:typeof options.characterData==='undefined'?true:options.characterData});s.observers.push(observer);}s.initObservers=function(){if(s.params.observeParents){var containerParents=s.container.parents();for(var i=0;i<containerParents.length;i++){initObserver(containerParents[i]);}}// Observe container
	initObserver(s.container[0],{childList:false});// Observe wrapper
	initObserver(s.wrapper[0],{attributes:false});};s.disconnectObservers=function(){for(var i=0;i<s.observers.length;i++){s.observers[i].disconnect();}s.observers=[];};/*=========================
	          Loop
	          ===========================*/// Create looped slides
	s.createLoop=function(){// Remove duplicated slides
	s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass).remove();var slides=s.wrapper.children('.'+s.params.slideClass);if(s.params.slidesPerView==='auto'&&!s.params.loopedSlides)s.params.loopedSlides=slides.length;s.loopedSlides=parseInt(s.params.loopedSlides||s.params.slidesPerView,10);s.loopedSlides=s.loopedSlides+s.params.loopAdditionalSlides;if(s.loopedSlides>slides.length){s.loopedSlides=slides.length;}var prependSlides=[],appendSlides=[],i;slides.each(function(index,el){var slide=$(this);if(index<s.loopedSlides)appendSlides.push(el);if(index<slides.length&&index>=slides.length-s.loopedSlides)prependSlides.push(el);slide.attr('data-swiper-slide-index',index);});for(i=0;i<appendSlides.length;i++){s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));}for(i=prependSlides.length-1;i>=0;i--){s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));}};s.destroyLoop=function(){s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass).remove();s.slides.removeAttr('data-swiper-slide-index');};s.reLoop=function(updatePosition){var oldIndex=s.activeIndex-s.loopedSlides;s.destroyLoop();s.createLoop();s.updateSlidesSize();if(updatePosition){s.slideTo(oldIndex+s.loopedSlides,0,false);}};s.fixLoop=function(){var newIndex;//Fix For Negative Oversliding
	if(s.activeIndex<s.loopedSlides){newIndex=s.slides.length-s.loopedSlides*3+s.activeIndex;newIndex=newIndex+s.loopedSlides;s.slideTo(newIndex,0,false,true);}//Fix For Positive Oversliding
	else if(s.params.slidesPerView==='auto'&&s.activeIndex>=s.loopedSlides*2||s.activeIndex>s.slides.length-s.params.slidesPerView*2){newIndex=-s.slides.length+s.activeIndex+s.loopedSlides;newIndex=newIndex+s.loopedSlides;s.slideTo(newIndex,0,false,true);}};/*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/s.appendSlide=function(slides){if(s.params.loop){s.destroyLoop();}if((typeof slides==='undefined'?'undefined':_typeof(slides))==='object'&&slides.length){for(var i=0;i<slides.length;i++){if(slides[i])s.wrapper.append(slides[i]);}}else{s.wrapper.append(slides);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}};s.prependSlide=function(slides){if(s.params.loop){s.destroyLoop();}var newActiveIndex=s.activeIndex+1;if((typeof slides==='undefined'?'undefined':_typeof(slides))==='object'&&slides.length){for(var i=0;i<slides.length;i++){if(slides[i])s.wrapper.prepend(slides[i]);}newActiveIndex=s.activeIndex+slides.length;}else{s.wrapper.prepend(slides);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}s.slideTo(newActiveIndex,0,false);};s.removeSlide=function(slidesIndexes){if(s.params.loop){s.destroyLoop();s.slides=s.wrapper.children('.'+s.params.slideClass);}var newActiveIndex=s.activeIndex,indexToRemove;if((typeof slidesIndexes==='undefined'?'undefined':_typeof(slidesIndexes))==='object'&&slidesIndexes.length){for(var i=0;i<slidesIndexes.length;i++){indexToRemove=slidesIndexes[i];if(s.slides[indexToRemove])s.slides.eq(indexToRemove).remove();if(indexToRemove<newActiveIndex)newActiveIndex--;}newActiveIndex=Math.max(newActiveIndex,0);}else{indexToRemove=slidesIndexes;if(s.slides[indexToRemove])s.slides.eq(indexToRemove).remove();if(indexToRemove<newActiveIndex)newActiveIndex--;newActiveIndex=Math.max(newActiveIndex,0);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}if(s.params.loop){s.slideTo(newActiveIndex+s.loopedSlides,0,false);}else{s.slideTo(newActiveIndex,0,false);}};s.removeAllSlides=function(){var slidesIndexes=[];for(var i=0;i<s.slides.length;i++){slidesIndexes.push(i);}s.removeSlide(slidesIndexes);};/*=========================
	          Effects
	          ===========================*/s.effects={fade:{setTranslate:function setTranslate(){for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var offset=slide[0].swiperSlideOffset;var tx=-offset;if(!s.params.virtualTranslate)tx=tx-s.translate;var ty=0;if(!s.isHorizontal()){ty=tx;tx=0;}var slideOpacity=s.params.fade.crossFade?Math.max(1-Math.abs(slide[0].progress),0):1+Math.min(Math.max(slide[0].progress,-1),0);slide.css({opacity:slideOpacity}).transform('translate3d('+tx+'px, '+ty+'px, 0px)');}},setTransition:function setTransition(duration){s.slides.transition(duration);if(s.params.virtualTranslate&&duration!==0){var eventTriggered=false;s.slides.transitionEnd(function(){if(eventTriggered)return;if(!s)return;eventTriggered=true;s.animating=false;var triggerEvents=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'];for(var i=0;i<triggerEvents.length;i++){s.wrapper.trigger(triggerEvents[i]);}});}}},flip:{setTranslate:function setTranslate(){for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var progress=slide[0].progress;if(s.params.flip.limitRotation){progress=Math.max(Math.min(slide[0].progress,1),-1);}var offset=slide[0].swiperSlideOffset;var rotate=-180*progress,rotateY=rotate,rotateX=0,tx=-offset,ty=0;if(!s.isHorizontal()){ty=tx;tx=0;rotateX=-rotateY;rotateY=0;}else if(s.rtl){rotateY=-rotateY;}slide[0].style.zIndex=-Math.abs(Math.round(progress))+s.slides.length;if(s.params.flip.slideShadows){//Set shadows
	var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=Math.max(-progress,0);if(shadowAfter.length)shadowAfter[0].style.opacity=Math.max(progress,0);}slide.transform('translate3d('+tx+'px, '+ty+'px, 0px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');}},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(s.params.virtualTranslate&&duration!==0){var eventTriggered=false;s.slides.eq(s.activeIndex).transitionEnd(function(){if(eventTriggered)return;if(!s)return;if(!$(this).hasClass(s.params.slideActiveClass))return;eventTriggered=true;s.animating=false;var triggerEvents=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'];for(var i=0;i<triggerEvents.length;i++){s.wrapper.trigger(triggerEvents[i]);}});}}},cube:{setTranslate:function setTranslate(){var wrapperRotate=0,cubeShadow;if(s.params.cube.shadow){if(s.isHorizontal()){cubeShadow=s.wrapper.find('.swiper-cube-shadow');if(cubeShadow.length===0){cubeShadow=$('<div class="swiper-cube-shadow"></div>');s.wrapper.append(cubeShadow);}cubeShadow.css({height:s.width+'px'});}else{cubeShadow=s.container.find('.swiper-cube-shadow');if(cubeShadow.length===0){cubeShadow=$('<div class="swiper-cube-shadow"></div>');s.container.append(cubeShadow);}}}for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var slideAngle=i*90;var round=Math.floor(slideAngle/360);if(s.rtl){slideAngle=-slideAngle;round=Math.floor(-slideAngle/360);}var progress=Math.max(Math.min(slide[0].progress,1),-1);var tx=0,ty=0,tz=0;if(i%4===0){tx=-round*4*s.size;tz=0;}else if((i-1)%4===0){tx=0;tz=-round*4*s.size;}else if((i-2)%4===0){tx=s.size+round*4*s.size;tz=s.size;}else if((i-3)%4===0){tx=-s.size;tz=3*s.size+s.size*4*round;}if(s.rtl){tx=-tx;}if(!s.isHorizontal()){ty=tx;tx=0;}var transform='rotateX('+(s.isHorizontal()?0:-slideAngle)+'deg) rotateY('+(s.isHorizontal()?slideAngle:0)+'deg) translate3d('+tx+'px, '+ty+'px, '+tz+'px)';if(progress<=1&&progress>-1){wrapperRotate=i*90+progress*90;if(s.rtl)wrapperRotate=-i*90-progress*90;}slide.transform(transform);if(s.params.cube.slideShadows){//Set shadows
	var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=Math.max(-progress,0);if(shadowAfter.length)shadowAfter[0].style.opacity=Math.max(progress,0);}}s.wrapper.css({'-webkit-transform-origin':'50% 50% -'+s.size/2+'px','-moz-transform-origin':'50% 50% -'+s.size/2+'px','-ms-transform-origin':'50% 50% -'+s.size/2+'px','transform-origin':'50% 50% -'+s.size/2+'px'});if(s.params.cube.shadow){if(s.isHorizontal()){cubeShadow.transform('translate3d(0px, '+(s.width/2+s.params.cube.shadowOffset)+'px, '+-s.width/2+'px) rotateX(90deg) rotateZ(0deg) scale('+s.params.cube.shadowScale+')');}else{var shadowAngle=Math.abs(wrapperRotate)-Math.floor(Math.abs(wrapperRotate)/90)*90;var multiplier=1.5-(Math.sin(shadowAngle*2*Math.PI/360)/2+Math.cos(shadowAngle*2*Math.PI/360)/2);var scale1=s.params.cube.shadowScale,scale2=s.params.cube.shadowScale/multiplier,offset=s.params.cube.shadowOffset;cubeShadow.transform('scale3d('+scale1+', 1, '+scale2+') translate3d(0px, '+(s.height/2+offset)+'px, '+-s.height/2/scale2+'px) rotateX(-90deg)');}}var zFactor=s.isSafari||s.isUiWebView?-s.size/2:0;s.wrapper.transform('translate3d(0px,0,'+zFactor+'px) rotateX('+(s.isHorizontal()?0:wrapperRotate)+'deg) rotateY('+(s.isHorizontal()?-wrapperRotate:0)+'deg)');},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(s.params.cube.shadow&&!s.isHorizontal()){s.container.find('.swiper-cube-shadow').transition(duration);}}},coverflow:{setTranslate:function setTranslate(){var transform=s.translate;var center=s.isHorizontal()?-transform+s.width/2:-transform+s.height/2;var rotate=s.isHorizontal()?s.params.coverflow.rotate:-s.params.coverflow.rotate;var translate=s.params.coverflow.depth;//Each slide offset from center
	for(var i=0,length=s.slides.length;i<length;i++){var slide=s.slides.eq(i);var slideSize=s.slidesSizesGrid[i];var slideOffset=slide[0].swiperSlideOffset;var offsetMultiplier=(center-slideOffset-slideSize/2)/slideSize*s.params.coverflow.modifier;var rotateY=s.isHorizontal()?rotate*offsetMultiplier:0;var rotateX=s.isHorizontal()?0:rotate*offsetMultiplier;// var rotateZ = 0
	var translateZ=-translate*Math.abs(offsetMultiplier);var translateY=s.isHorizontal()?0:s.params.coverflow.stretch*offsetMultiplier;var translateX=s.isHorizontal()?s.params.coverflow.stretch*offsetMultiplier:0;//Fix for ultra small values
	if(Math.abs(translateX)<0.001)translateX=0;if(Math.abs(translateY)<0.001)translateY=0;if(Math.abs(translateZ)<0.001)translateZ=0;if(Math.abs(rotateY)<0.001)rotateY=0;if(Math.abs(rotateX)<0.001)rotateX=0;var slideTransform='translate3d('+translateX+'px,'+translateY+'px,'+translateZ+'px)  rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)';slide.transform(slideTransform);slide[0].style.zIndex=-Math.abs(Math.round(offsetMultiplier))+1;if(s.params.coverflow.slideShadows){//Set shadows
	var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=offsetMultiplier>0?offsetMultiplier:0;if(shadowAfter.length)shadowAfter[0].style.opacity=-offsetMultiplier>0?-offsetMultiplier:0;}}//Set correct perspective for IE10
	if(s.browser.ie){var ws=s.wrapper[0].style;ws.perspectiveOrigin=center+'px 50%';}},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);}}};/*=========================
	          Images Lazy Loading
	          ===========================*/s.lazy={initialImageLoaded:false,loadImageInSlide:function loadImageInSlide(index,loadInDuplicate){if(typeof index==='undefined')return;if(typeof loadInDuplicate==='undefined')loadInDuplicate=true;if(s.slides.length===0)return;var slide=s.slides.eq(index);var img=slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');if(slide.hasClass('swiper-lazy')&&!slide.hasClass('swiper-lazy-loaded')&&!slide.hasClass('swiper-lazy-loading')){img=img.add(slide[0]);}if(img.length===0)return;img.each(function(){var _img=$(this);_img.addClass('swiper-lazy-loading');var background=_img.attr('data-background');var src=_img.attr('data-src'),srcset=_img.attr('data-srcset');s.loadImage(_img[0],src||background,srcset,false,function(){if(background){_img.css('background-image','url("'+background+'")');_img.removeAttr('data-background');}else{if(srcset){_img.attr('srcset',srcset);_img.removeAttr('data-srcset');}if(src){_img.attr('src',src);_img.removeAttr('data-src');}}_img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');slide.find('.swiper-lazy-preloader, .preloader').remove();if(s.params.loop&&loadInDuplicate){var slideOriginalIndex=slide.attr('data-swiper-slide-index');if(slide.hasClass(s.params.slideDuplicateClass)){var originalSlide=s.wrapper.children('[data-swiper-slide-index="'+slideOriginalIndex+'"]:not(.'+s.params.slideDuplicateClass+')');s.lazy.loadImageInSlide(originalSlide.index(),false);}else{var duplicatedSlide=s.wrapper.children('.'+s.params.slideDuplicateClass+'[data-swiper-slide-index="'+slideOriginalIndex+'"]');s.lazy.loadImageInSlide(duplicatedSlide.index(),false);}}s.emit('onLazyImageReady',s,slide[0],_img[0]);});s.emit('onLazyImageLoad',s,slide[0],_img[0]);});},load:function load(){var i;if(s.params.watchSlidesVisibility){s.wrapper.children('.'+s.params.slideVisibleClass).each(function(){s.lazy.loadImageInSlide($(this).index());});}else{if(s.params.slidesPerView>1){for(i=s.activeIndex;i<s.activeIndex+s.params.slidesPerView;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}}else{s.lazy.loadImageInSlide(s.activeIndex);}}if(s.params.lazyLoadingInPrevNext){if(s.params.slidesPerView>1||s.params.lazyLoadingInPrevNextAmount&&s.params.lazyLoadingInPrevNextAmount>1){var amount=s.params.lazyLoadingInPrevNextAmount;var spv=s.params.slidesPerView;var maxIndex=Math.min(s.activeIndex+spv+Math.max(amount,spv),s.slides.length);var minIndex=Math.max(s.activeIndex-Math.max(spv,amount),0);// Next Slides
	for(i=s.activeIndex+s.params.slidesPerView;i<maxIndex;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}// Prev Slides
	for(i=minIndex;i<s.activeIndex;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}}else{var nextSlide=s.wrapper.children('.'+s.params.slideNextClass);if(nextSlide.length>0)s.lazy.loadImageInSlide(nextSlide.index());var prevSlide=s.wrapper.children('.'+s.params.slidePrevClass);if(prevSlide.length>0)s.lazy.loadImageInSlide(prevSlide.index());}}},onTransitionStart:function onTransitionStart(){if(s.params.lazyLoading){if(s.params.lazyLoadingOnTransitionStart||!s.params.lazyLoadingOnTransitionStart&&!s.lazy.initialImageLoaded){s.lazy.load();}}},onTransitionEnd:function onTransitionEnd(){if(s.params.lazyLoading&&!s.params.lazyLoadingOnTransitionStart){s.lazy.load();}}};/*=========================
	          Scrollbar
	          ===========================*/s.scrollbar={isTouched:false,setDragPosition:function setDragPosition(e){var sb=s.scrollbar;var x=0,y=0;var translate;var pointerPosition=s.isHorizontal()?e.type==='touchstart'||e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX||e.clientX:e.type==='touchstart'||e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY||e.clientY;var position=pointerPosition-sb.track.offset()[s.isHorizontal()?'left':'top']-sb.dragSize/2;var positionMin=-s.minTranslate()*sb.moveDivider;var positionMax=-s.maxTranslate()*sb.moveDivider;if(position<positionMin){position=positionMin;}else if(position>positionMax){position=positionMax;}position=-position/sb.moveDivider;s.updateProgress(position);s.setWrapperTranslate(position,true);},dragStart:function dragStart(e){var sb=s.scrollbar;sb.isTouched=true;e.preventDefault();e.stopPropagation();sb.setDragPosition(e);clearTimeout(sb.dragTimeout);sb.track.transition(0);if(s.params.scrollbarHide){sb.track.css('opacity',1);}s.wrapper.transition(100);sb.drag.transition(100);s.emit('onScrollbarDragStart',s);},dragMove:function dragMove(e){var sb=s.scrollbar;if(!sb.isTouched)return;if(e.preventDefault)e.preventDefault();else e.returnValue=false;sb.setDragPosition(e);s.wrapper.transition(0);sb.track.transition(0);sb.drag.transition(0);s.emit('onScrollbarDragMove',s);},dragEnd:function dragEnd(e){var sb=s.scrollbar;if(!sb.isTouched)return;sb.isTouched=false;if(s.params.scrollbarHide){clearTimeout(sb.dragTimeout);sb.dragTimeout=setTimeout(function(){sb.track.css('opacity',0);sb.track.transition(400);},1000);}s.emit('onScrollbarDragEnd',s);if(s.params.scrollbarSnapOnRelease){s.slideReset();}},enableDraggable:function enableDraggable(){var sb=s.scrollbar;var target=s.support.touch?sb.track:document;$(sb.track).on(s.touchEvents.start,sb.dragStart);$(target).on(s.touchEvents.move,sb.dragMove);$(target).on(s.touchEvents.end,sb.dragEnd);},disableDraggable:function disableDraggable(){var sb=s.scrollbar;var target=s.support.touch?sb.track:document;$(sb.track).off(s.touchEvents.start,sb.dragStart);$(target).off(s.touchEvents.move,sb.dragMove);$(target).off(s.touchEvents.end,sb.dragEnd);},set:function set(){if(!s.params.scrollbar)return;var sb=s.scrollbar;sb.track=$(s.params.scrollbar);if(s.params.uniqueNavElements&&typeof s.params.scrollbar==='string'&&sb.track.length>1&&s.container.find(s.params.scrollbar).length===1){sb.track=s.container.find(s.params.scrollbar);}sb.drag=sb.track.find('.swiper-scrollbar-drag');if(sb.drag.length===0){sb.drag=$('<div class="swiper-scrollbar-drag"></div>');sb.track.append(sb.drag);}sb.drag[0].style.width='';sb.drag[0].style.height='';sb.trackSize=s.isHorizontal()?sb.track[0].offsetWidth:sb.track[0].offsetHeight;sb.divider=s.size/s.virtualSize;sb.moveDivider=sb.divider*(sb.trackSize/s.size);sb.dragSize=sb.trackSize*sb.divider;if(s.isHorizontal()){sb.drag[0].style.width=sb.dragSize+'px';}else{sb.drag[0].style.height=sb.dragSize+'px';}if(sb.divider>=1){sb.track[0].style.display='none';}else{sb.track[0].style.display='';}if(s.params.scrollbarHide){sb.track[0].style.opacity=0;}},setTranslate:function setTranslate(){if(!s.params.scrollbar)return;var diff;var sb=s.scrollbar;var translate=s.translate||0;var newPos;var newSize=sb.dragSize;newPos=(sb.trackSize-sb.dragSize)*s.progress;if(s.rtl&&s.isHorizontal()){newPos=-newPos;if(newPos>0){newSize=sb.dragSize-newPos;newPos=0;}else if(-newPos+sb.dragSize>sb.trackSize){newSize=sb.trackSize+newPos;}}else{if(newPos<0){newSize=sb.dragSize+newPos;newPos=0;}else if(newPos+sb.dragSize>sb.trackSize){newSize=sb.trackSize-newPos;}}if(s.isHorizontal()){if(s.support.transforms3d){sb.drag.transform('translate3d('+newPos+'px, 0, 0)');}else{sb.drag.transform('translateX('+newPos+'px)');}sb.drag[0].style.width=newSize+'px';}else{if(s.support.transforms3d){sb.drag.transform('translate3d(0px, '+newPos+'px, 0)');}else{sb.drag.transform('translateY('+newPos+'px)');}sb.drag[0].style.height=newSize+'px';}if(s.params.scrollbarHide){clearTimeout(sb.timeout);sb.track[0].style.opacity=1;sb.timeout=setTimeout(function(){sb.track[0].style.opacity=0;sb.track.transition(400);},1000);}},setTransition:function setTransition(duration){if(!s.params.scrollbar)return;s.scrollbar.drag.transition(duration);}};/*=========================
	          Controller
	          ===========================*/s.controller={LinearSpline:function LinearSpline(x,y){this.x=x;this.y=y;this.lastIndex=x.length-1;// Given an x value (x2), return the expected y2 value:
	// (x1,y1) is the known point before given value,
	// (x3,y3) is the known point after given value.
	var i1,i3;var l=this.x.length;this.interpolate=function(x2){if(!x2)return 0;// Get the indexes of x1 and x3 (the array indexes before and after given x2):
	i3=binarySearch(this.x,x2);i1=i3-1;// We have our indexes i1 & i3, so we can calculate already:
	// y2 := ((x2鈭抶1) 脳 (y3鈭抷1)) 梅 (x3鈭抶1) + y1
	return(x2-this.x[i1])*(this.y[i3]-this.y[i1])/(this.x[i3]-this.x[i1])+this.y[i1];};var binarySearch=function(){var maxIndex,minIndex,guess;return function(array,val){minIndex=-1;maxIndex=array.length;while(maxIndex-minIndex>1){if(array[guess=maxIndex+minIndex>>1]<=val){minIndex=guess;}else{maxIndex=guess;}}return maxIndex;};}();},//xxx: for now i will just save one spline function to to
	getInterpolateFunction:function getInterpolateFunction(c){if(!s.controller.spline)s.controller.spline=s.params.loop?new s.controller.LinearSpline(s.slidesGrid,c.slidesGrid):new s.controller.LinearSpline(s.snapGrid,c.snapGrid);},setTranslate:function setTranslate(translate,byController){var controlled=s.params.control;var multiplier,controlledTranslate;function setControlledTranslate(c){// this will create an Interpolate function based on the snapGrids
	// x is the Grid of the scrolled scroller and y will be the controlled scroller
	// it makes sense to create this only once and recall it for the interpolation
	// the function does a lot of value caching for performance
	translate=c.rtl&&c.params.direction==='horizontal'?-s.translate:s.translate;if(s.params.controlBy==='slide'){s.controller.getInterpolateFunction(c);// i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	// but it did not work out
	controlledTranslate=-s.controller.spline.interpolate(-translate);}if(!controlledTranslate||s.params.controlBy==='container'){multiplier=(c.maxTranslate()-c.minTranslate())/(s.maxTranslate()-s.minTranslate());controlledTranslate=(translate-s.minTranslate())*multiplier+c.minTranslate();}if(s.params.controlInverse){controlledTranslate=c.maxTranslate()-controlledTranslate;}c.updateProgress(controlledTranslate);c.setWrapperTranslate(controlledTranslate,false,s);c.updateActiveIndex();}if(s.isArray(controlled)){for(var i=0;i<controlled.length;i++){if(controlled[i]!==byController&&controlled[i]instanceof Swiper){setControlledTranslate(controlled[i]);}}}else if(controlled instanceof Swiper&&byController!==controlled){setControlledTranslate(controlled);}},setTransition:function setTransition(duration,byController){var controlled=s.params.control;var i;function setControlledTransition(c){c.setWrapperTransition(duration,s);if(duration!==0){c.onTransitionStart();c.wrapper.transitionEnd(function(){if(!controlled)return;if(c.params.loop&&s.params.controlBy==='slide'){c.fixLoop();}c.onTransitionEnd();});}}if(s.isArray(controlled)){for(i=0;i<controlled.length;i++){if(controlled[i]!==byController&&controlled[i]instanceof Swiper){setControlledTransition(controlled[i]);}}}else if(controlled instanceof Swiper&&byController!==controlled){setControlledTransition(controlled);}}};/*=========================
	          Hash Navigation
	          ===========================*/s.hashnav={init:function init(){if(!s.params.hashnav)return;s.hashnav.initialized=true;var hash=document.location.hash.replace('#','');if(!hash)return;var speed=0;for(var i=0,length=s.slides.length;i<length;i++){var slide=s.slides.eq(i);var slideHash=slide.attr('data-hash');if(slideHash===hash&&!slide.hasClass(s.params.slideDuplicateClass)){var index=slide.index();s.slideTo(index,speed,s.params.runCallbacksOnInit,true);}}},setHash:function setHash(){if(!s.hashnav.initialized||!s.params.hashnav)return;document.location.hash=s.slides.eq(s.activeIndex).attr('data-hash')||'';}};/*=========================
	          Keyboard Control
	          ===========================*/function handleKeyboard(e){if(e.originalEvent)e=e.originalEvent;//jquery fix
	var kc=e.keyCode||e.charCode;// Directions locks
	if(!s.params.allowSwipeToNext&&(s.isHorizontal()&&kc===39||!s.isHorizontal()&&kc===40)){return false;}if(!s.params.allowSwipeToPrev&&(s.isHorizontal()&&kc===37||!s.isHorizontal()&&kc===38)){return false;}if(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey){return;}if(document.activeElement&&document.activeElement.nodeName&&(document.activeElement.nodeName.toLowerCase()==='input'||document.activeElement.nodeName.toLowerCase()==='textarea')){return;}if(kc===37||kc===39||kc===38||kc===40){var inView=false;//Check that swiper should be inside of visible area of window
	if(s.container.parents('.swiper-slide').length>0&&s.container.parents('.swiper-slide-active').length===0){return;}var windowScroll={left:window.pageXOffset,top:window.pageYOffset};var windowWidth=window.innerWidth;var windowHeight=window.innerHeight;var swiperOffset=s.container.offset();if(s.rtl)swiperOffset.left=swiperOffset.left-s.container[0].scrollLeft;var swiperCoord=[[swiperOffset.left,swiperOffset.top],[swiperOffset.left+s.width,swiperOffset.top],[swiperOffset.left,swiperOffset.top+s.height],[swiperOffset.left+s.width,swiperOffset.top+s.height]];for(var i=0;i<swiperCoord.length;i++){var point=swiperCoord[i];if(point[0]>=windowScroll.left&&point[0]<=windowScroll.left+windowWidth&&point[1]>=windowScroll.top&&point[1]<=windowScroll.top+windowHeight){inView=true;}}if(!inView)return;}if(s.isHorizontal()){if(kc===37||kc===39){if(e.preventDefault)e.preventDefault();else e.returnValue=false;}if(kc===39&&!s.rtl||kc===37&&s.rtl)s.slideNext();if(kc===37&&!s.rtl||kc===39&&s.rtl)s.slidePrev();}else{if(kc===38||kc===40){if(e.preventDefault)e.preventDefault();else e.returnValue=false;}if(kc===40)s.slideNext();if(kc===38)s.slidePrev();}}s.disableKeyboardControl=function(){s.params.keyboardControl=false;$(document).off('keydown',handleKeyboard);};s.enableKeyboardControl=function(){s.params.keyboardControl=true;$(document).on('keydown',handleKeyboard);};/*=========================
	          Mousewheel Control
	          ===========================*/s.mousewheel={event:false,lastScrollTime:new window.Date().getTime()};if(s.params.mousewheelControl){try{new window.WheelEvent('wheel');s.mousewheel.event='wheel';}catch(e){if(window.WheelEvent||s.container[0]&&'wheel'in s.container[0]){s.mousewheel.event='wheel';}}if(!s.mousewheel.event&&window.WheelEvent){}if(!s.mousewheel.event&&document.onmousewheel!==undefined){s.mousewheel.event='mousewheel';}if(!s.mousewheel.event){s.mousewheel.event='DOMMouseScroll';}}function handleMousewheel(e){if(e.originalEvent)e=e.originalEvent;//jquery fix
	var we=s.mousewheel.event;var delta=0;var rtlFactor=s.rtl?-1:1;//WebKits
	if(we==='mousewheel'){if(s.params.mousewheelForceToAxis){if(s.isHorizontal()){if(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY))delta=e.wheelDeltaX*rtlFactor;else return;}else{if(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX))delta=e.wheelDeltaY;else return;}}else{delta=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*rtlFactor:-e.wheelDeltaY;}}//Old FireFox
	else if(we==='DOMMouseScroll')delta=-e.detail;//New FireFox
	else if(we==='wheel'){if(s.params.mousewheelForceToAxis){if(s.isHorizontal()){if(Math.abs(e.deltaX)>Math.abs(e.deltaY))delta=-e.deltaX*rtlFactor;else return;}else{if(Math.abs(e.deltaY)>Math.abs(e.deltaX))delta=-e.deltaY;else return;}}else{delta=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*rtlFactor:-e.deltaY;}}if(delta===0)return;if(s.params.mousewheelInvert)delta=-delta;if(!s.params.freeMode){if(new window.Date().getTime()-s.mousewheel.lastScrollTime>60){if(delta<0){if((!s.isEnd||s.params.loop)&&!s.animating)s.slideNext();else if(s.params.mousewheelReleaseOnEdges)return true;}else{if((!s.isBeginning||s.params.loop)&&!s.animating)s.slidePrev();else if(s.params.mousewheelReleaseOnEdges)return true;}}s.mousewheel.lastScrollTime=new window.Date().getTime();}else{//Freemode or scrollContainer:
	var position=s.getWrapperTranslate()+delta*s.params.mousewheelSensitivity;var wasBeginning=s.isBeginning,wasEnd=s.isEnd;if(position>=s.minTranslate())position=s.minTranslate();if(position<=s.maxTranslate())position=s.maxTranslate();s.setWrapperTransition(0);s.setWrapperTranslate(position);s.updateProgress();s.updateActiveIndex();if(!wasBeginning&&s.isBeginning||!wasEnd&&s.isEnd){s.updateClasses();}if(s.params.freeModeSticky){clearTimeout(s.mousewheel.timeout);s.mousewheel.timeout=setTimeout(function(){s.slideReset();},300);}else{if(s.params.lazyLoading&&s.lazy){s.lazy.load();}}// Return page scroll on edge positions
	if(position===0||position===s.maxTranslate())return;}if(s.params.autoplay)s.stopAutoplay();if(e.preventDefault)e.preventDefault();else e.returnValue=false;return false;}s.disableMousewheelControl=function(){if(!s.mousewheel.event)return false;s.container.off(s.mousewheel.event,handleMousewheel);return true;};s.enableMousewheelControl=function(){if(!s.mousewheel.event)return false;s.container.on(s.mousewheel.event,handleMousewheel);return true;};/*=========================
	          Parallax
	          ===========================*/function setParallaxTransform(el,progress){el=$(el);var p,pX,pY;var rtlFactor=s.rtl?-1:1;p=el.attr('data-swiper-parallax')||'0';pX=el.attr('data-swiper-parallax-x');pY=el.attr('data-swiper-parallax-y');if(pX||pY){pX=pX||'0';pY=pY||'0';}else{if(s.isHorizontal()){pX=p;pY='0';}else{pY=p;pX='0';}}if(pX.indexOf('%')>=0){pX=parseInt(pX,10)*progress*rtlFactor+'%';}else{pX=pX*progress*rtlFactor+'px';}if(pY.indexOf('%')>=0){pY=parseInt(pY,10)*progress+'%';}else{pY=pY*progress+'px';}el.transform('translate3d('+pX+', '+pY+',0px)');}s.parallax={setTranslate:function setTranslate(){s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){setParallaxTransform(this,s.progress);});s.slides.each(function(){var slide=$(this);slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){var progress=Math.min(Math.max(slide[0].progress,-1),1);setParallaxTransform(this,progress);});});},setTransition:function setTransition(duration){if(typeof duration==='undefined')duration=s.params.speed;s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){var el=$(this);var parallaxDuration=parseInt(el.attr('data-swiper-parallax-duration'),10)||duration;if(duration===0)parallaxDuration=0;el.transition(parallaxDuration);});}};/*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/s._plugins=[];for(var plugin in s.plugins){var p=s.plugins[plugin](s,s.params[plugin]);if(p)s._plugins.push(p);}// Method to call all plugins event/method
	s.callPlugins=function(eventName){for(var i=0;i<s._plugins.length;i++){if(eventName in s._plugins[i]){s._plugins[i][eventName](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}}};/*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/function normalizeEventName(eventName){if(eventName.indexOf('on')!==0){if(eventName[0]!==eventName[0].toUpperCase()){eventName='on'+eventName[0].toUpperCase()+eventName.substring(1);}else{eventName='on'+eventName;}}return eventName;}s.emitterEventListeners={};s.emit=function(eventName){// Trigger callbacks
	if(s.params[eventName]){s.params[eventName](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}var i;// Trigger events
	if(s.emitterEventListeners[eventName]){for(i=0;i<s.emitterEventListeners[eventName].length;i++){s.emitterEventListeners[eventName][i](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}}// Trigger plugins
	if(s.callPlugins)s.callPlugins(eventName,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);};s.on=function(eventName,handler){eventName=normalizeEventName(eventName);if(!s.emitterEventListeners[eventName])s.emitterEventListeners[eventName]=[];s.emitterEventListeners[eventName].push(handler);return s;};s.off=function(eventName,handler){var i;eventName=normalizeEventName(eventName);if(typeof handler==='undefined'){// Remove all handlers for such event
	s.emitterEventListeners[eventName]=[];return s;}if(!s.emitterEventListeners[eventName]||s.emitterEventListeners[eventName].length===0)return;for(i=0;i<s.emitterEventListeners[eventName].length;i++){if(s.emitterEventListeners[eventName][i]===handler)s.emitterEventListeners[eventName].splice(i,1);}return s;};s.once=function(eventName,handler){eventName=normalizeEventName(eventName);var _handler=function _handler(){handler(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);s.off(eventName,_handler);};s.on(eventName,_handler);return s;};// Accessibility tools
	s.a11y={makeFocusable:function makeFocusable($el){$el.attr('tabIndex','0');return $el;},addRole:function addRole($el,role){$el.attr('role',role);return $el;},addLabel:function addLabel($el,label){$el.attr('aria-label',label);return $el;},disable:function disable($el){$el.attr('aria-disabled',true);return $el;},enable:function enable($el){$el.attr('aria-disabled',false);return $el;},onEnterKey:function onEnterKey(event){if(event.keyCode!==13)return;if($(event.target).is(s.params.nextButton)){s.onClickNext(event);if(s.isEnd){s.a11y.notify(s.params.lastSlideMessage);}else{s.a11y.notify(s.params.nextSlideMessage);}}else if($(event.target).is(s.params.prevButton)){s.onClickPrev(event);if(s.isBeginning){s.a11y.notify(s.params.firstSlideMessage);}else{s.a11y.notify(s.params.prevSlideMessage);}}if($(event.target).is('.'+s.params.bulletClass)){$(event.target)[0].click();}},liveRegion:$('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function notify(message){var notification=s.a11y.liveRegion;if(notification.length===0)return;notification.html('');notification.html(message);},init:function init(){// Setup accessibility
	if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){s.a11y.makeFocusable(s.nextButton);s.a11y.addRole(s.nextButton,'button');s.a11y.addLabel(s.nextButton,s.params.nextSlideMessage);}if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){s.a11y.makeFocusable(s.prevButton);s.a11y.addRole(s.prevButton,'button');s.a11y.addLabel(s.prevButton,s.params.prevSlideMessage);}$(s.container).append(s.a11y.liveRegion);},initPagination:function initPagination(){if(s.params.pagination&&s.params.paginationClickable&&s.bullets&&s.bullets.length){s.bullets.each(function(){var bullet=$(this);s.a11y.makeFocusable(bullet);s.a11y.addRole(bullet,'button');s.a11y.addLabel(bullet,s.params.paginationBulletMessage.replace(/{{index}}/,bullet.index()+1));});}},destroy:function destroy(){if(s.a11y.liveRegion&&s.a11y.liveRegion.length>0)s.a11y.liveRegion.remove();}};/*=========================
	          Init/Destroy
	          ===========================*/s.init=function(){if(s.params.loop)s.createLoop();s.updateContainerSize();s.updateSlidesSize();s.updatePagination();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();if(s.params.scrollbarDraggable){s.scrollbar.enableDraggable();}}if(s.params.effect!=='slide'&&s.effects[s.params.effect]){if(!s.params.loop)s.updateProgress();s.effects[s.params.effect].setTranslate();}if(s.params.loop){s.slideTo(s.params.initialSlide+s.loopedSlides,0,s.params.runCallbacksOnInit);}else{s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit);if(s.params.initialSlide===0){if(s.parallax&&s.params.parallax)s.parallax.setTranslate();if(s.lazy&&s.params.lazyLoading){s.lazy.load();s.lazy.initialImageLoaded=true;}}}s.attachEvents();if(s.params.observer&&s.support.observer){s.initObservers();}if(s.params.preloadImages&&!s.params.lazyLoading){s.preloadImages();}if(s.params.autoplay){s.startAutoplay();}if(s.params.keyboardControl){if(s.enableKeyboardControl)s.enableKeyboardControl();}if(s.params.mousewheelControl){if(s.enableMousewheelControl)s.enableMousewheelControl();}if(s.params.hashnav){if(s.hashnav)s.hashnav.init();}if(s.params.a11y&&s.a11y)s.a11y.init();s.emit('onInit',s);};// Cleanup dynamic styles
	s.cleanupStyles=function(){// Container
	s.container.removeClass(s.classNames.join(' ')).removeAttr('style');// Wrapper
	s.wrapper.removeAttr('style');// Slides
	if(s.slides&&s.slides.length){s.slides.removeClass([s.params.slideVisibleClass,s.params.slideActiveClass,s.params.slideNextClass,s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');}// Pagination/Bullets
	if(s.paginationContainer&&s.paginationContainer.length){s.paginationContainer.removeClass(s.params.paginationHiddenClass);}if(s.bullets&&s.bullets.length){s.bullets.removeClass(s.params.bulletActiveClass);}// Buttons
	if(s.params.prevButton)$(s.params.prevButton).removeClass(s.params.buttonDisabledClass);if(s.params.nextButton)$(s.params.nextButton).removeClass(s.params.buttonDisabledClass);// Scrollbar
	if(s.params.scrollbar&&s.scrollbar){if(s.scrollbar.track&&s.scrollbar.track.length)s.scrollbar.track.removeAttr('style');if(s.scrollbar.drag&&s.scrollbar.drag.length)s.scrollbar.drag.removeAttr('style');}};// Destroy
	s.destroy=function(deleteInstance,cleanupStyles){// Detach evebts
	s.detachEvents();// Stop autoplay
	s.stopAutoplay();// Disable draggable
	if(s.params.scrollbar&&s.scrollbar){if(s.params.scrollbarDraggable){s.scrollbar.disableDraggable();}}// Destroy loop
	if(s.params.loop){s.destroyLoop();}// Cleanup styles
	if(cleanupStyles){s.cleanupStyles();}// Disconnect observer
	s.disconnectObservers();// Disable keyboard/mousewheel
	if(s.params.keyboardControl){if(s.disableKeyboardControl)s.disableKeyboardControl();}if(s.params.mousewheelControl){if(s.disableMousewheelControl)s.disableMousewheelControl();}// Disable a11y
	if(s.params.a11y&&s.a11y)s.a11y.destroy();// Destroy callback
	s.emit('onDestroy');// Delete instance
	if(deleteInstance!==false)s=null;};s.init();// Return swiper instance
	return s;};/*==================================================
	        Prototype
	    ====================================================*/Swiper.prototype={isSafari:function(){var ua=navigator.userAgent.toLowerCase();return ua.indexOf('safari')>=0&&ua.indexOf('chrome')<0&&ua.indexOf('android')<0;}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function isArray(arr){return Object.prototype.toString.apply(arr)==='[object Array]';},/*==================================================
	        Browser
	        ====================================================*/browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},/*==================================================
	        Devices
	        ====================================================*/device:function(){var ua=navigator.userAgent;var android=ua.match(/(Android);?[\s\/]+([\d.]+)?/);var ipad=ua.match(/(iPad).*OS\s([\d_]+)/);var ipod=ua.match(/(iPod)(.*OS\s([\d_]+))?/);var iphone=!ipad&&ua.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:ipad||iphone||ipod,android:android};}(),/*==================================================
	        Feature Detection
	        ====================================================*/support:{touch:window.Modernizr&&Modernizr.touch===true||function(){return!!('ontouchstart'in window||window.DocumentTouch&&document instanceof DocumentTouch);}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===true||function(){var div=document.createElement('div').style;return'webkitPerspective'in div||'MozPerspective'in div||'OPerspective'in div||'MsPerspective'in div||'perspective'in div;}(),flexbox:function(){var div=document.createElement('div').style;var styles='alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');for(var i=0;i<styles.length;i++){if(styles[i]in div)return true;}}(),observer:function(){return'MutationObserver'in window||'WebkitMutationObserver'in window;}()},/*==================================================
	        Plugins
	        ====================================================*/plugins:{}};/*===========================
	    Dom7 Library
	    ===========================*/var Dom7=function(){var Dom7=function Dom7(arr){var _this=this,i=0;// Create array-like object
	for(i=0;i<arr.length;i++){_this[i]=arr[i];}_this.length=arr.length;// Return collection with methods
	return this;};var $=function $(selector,context){var arr=[],i=0;if(selector&&!context){if(selector instanceof Dom7){return selector;}}if(selector){// String
	if(typeof selector==='string'){var els,tempParent,html=selector.trim();if(html.indexOf('<')>=0&&html.indexOf('>')>=0){var toCreate='div';if(html.indexOf('<li')===0)toCreate='ul';if(html.indexOf('<tr')===0)toCreate='tbody';if(html.indexOf('<td')===0||html.indexOf('<th')===0)toCreate='tr';if(html.indexOf('<tbody')===0)toCreate='table';if(html.indexOf('<option')===0)toCreate='select';tempParent=document.createElement(toCreate);tempParent.innerHTML=selector;for(i=0;i<tempParent.childNodes.length;i++){arr.push(tempParent.childNodes[i]);}}else{if(!context&&selector[0]==='#'&&!selector.match(/[ .<>:~]/)){// Pure ID selector
	els=[document.getElementById(selector.split('#')[1])];}else{// Other selectors
	els=(context||document).querySelectorAll(selector);}for(i=0;i<els.length;i++){if(els[i])arr.push(els[i]);}}}// Node/element
	else if(selector.nodeType||selector===window||selector===document){arr.push(selector);}//Array of elements or instance of Dom
	else if(selector.length>0&&selector[0].nodeType){for(i=0;i<selector.length;i++){arr.push(selector[i]);}}}return new Dom7(arr);};Dom7.prototype={// Classes and attriutes
	addClass:function addClass(className){if(typeof className==='undefined'){return this;}var classes=className.split(' ');for(var i=0;i<classes.length;i++){for(var j=0;j<this.length;j++){this[j].classList.add(classes[i]);}}return this;},removeClass:function removeClass(className){var classes=className.split(' ');for(var i=0;i<classes.length;i++){for(var j=0;j<this.length;j++){this[j].classList.remove(classes[i]);}}return this;},hasClass:function hasClass(className){if(!this[0])return false;else return this[0].classList.contains(className);},toggleClass:function toggleClass(className){var classes=className.split(' ');for(var i=0;i<classes.length;i++){for(var j=0;j<this.length;j++){this[j].classList.toggle(classes[i]);}}return this;},attr:function attr(attrs,value){if(arguments.length===1&&typeof attrs==='string'){// Get attr
	if(this[0])return this[0].getAttribute(attrs);else return undefined;}else{// Set attrs
	for(var i=0;i<this.length;i++){if(arguments.length===2){// String
	this[i].setAttribute(attrs,value);}else{// Object
	for(var attrName in attrs){this[i][attrName]=attrs[attrName];this[i].setAttribute(attrName,attrs[attrName]);}}}return this;}},removeAttr:function removeAttr(attr){for(var i=0;i<this.length;i++){this[i].removeAttribute(attr);}return this;},data:function data(key,value){if(typeof value==='undefined'){// Get value
	if(this[0]){var dataKey=this[0].getAttribute('data-'+key);if(dataKey)return dataKey;else if(this[0].dom7ElementDataStorage&&key in this[0].dom7ElementDataStorage)return this[0].dom7ElementDataStorage[key];else return undefined;}else return undefined;}else{// Set value
	for(var i=0;i<this.length;i++){var el=this[i];if(!el.dom7ElementDataStorage)el.dom7ElementDataStorage={};el.dom7ElementDataStorage[key]=value;}return this;}},// Transforms
	transform:function transform(_transform){for(var i=0;i<this.length;i++){var elStyle=this[i].style;elStyle.webkitTransform=elStyle.MsTransform=elStyle.msTransform=elStyle.MozTransform=elStyle.OTransform=elStyle.transform=_transform;}return this;},transition:function transition(duration){if(typeof duration!=='string'){duration=duration+'ms';}for(var i=0;i<this.length;i++){var elStyle=this[i].style;elStyle.webkitTransitionDuration=elStyle.MsTransitionDuration=elStyle.msTransitionDuration=elStyle.MozTransitionDuration=elStyle.OTransitionDuration=elStyle.transitionDuration=duration;}return this;},//Events
	on:function on(eventName,targetSelector,listener,capture){function handleLiveEvent(e){var target=e.target;if($(target).is(targetSelector))listener.call(target,e);else{var parents=$(target).parents();for(var k=0;k<parents.length;k++){if($(parents[k]).is(targetSelector))listener.call(parents[k],e);}}}var events=eventName.split(' ');var i,j;for(i=0;i<this.length;i++){if(typeof targetSelector==='function'||targetSelector===false){// Usual events
	if(typeof targetSelector==='function'){listener=arguments[1];capture=arguments[2]||false;}for(j=0;j<events.length;j++){this[i].addEventListener(events[j],listener,capture);}}else{//Live events
	for(j=0;j<events.length;j++){if(!this[i].dom7LiveListeners)this[i].dom7LiveListeners=[];this[i].dom7LiveListeners.push({listener:listener,liveListener:handleLiveEvent});this[i].addEventListener(events[j],handleLiveEvent,capture);}}}return this;},off:function off(eventName,targetSelector,listener,capture){var events=eventName.split(' ');for(var i=0;i<events.length;i++){for(var j=0;j<this.length;j++){if(typeof targetSelector==='function'||targetSelector===false){// Usual events
	if(typeof targetSelector==='function'){listener=arguments[1];capture=arguments[2]||false;}this[j].removeEventListener(events[i],listener,capture);}else{// Live event
	if(this[j].dom7LiveListeners){for(var k=0;k<this[j].dom7LiveListeners.length;k++){if(this[j].dom7LiveListeners[k].listener===listener){this[j].removeEventListener(events[i],this[j].dom7LiveListeners[k].liveListener,capture);}}}}}}return this;},once:function once(eventName,targetSelector,listener,capture){var dom=this;if(typeof targetSelector==='function'){targetSelector=false;listener=arguments[1];capture=arguments[2];}function proxy(e){listener(e);dom.off(eventName,targetSelector,proxy,capture);}dom.on(eventName,targetSelector,proxy,capture);},trigger:function trigger(eventName,eventData){for(var i=0;i<this.length;i++){var evt;try{evt=new window.CustomEvent(eventName,{detail:eventData,bubbles:true,cancelable:true});}catch(e){evt=document.createEvent('Event');evt.initEvent(eventName,true,true);evt.detail=eventData;}this[i].dispatchEvent(evt);}return this;},transitionEnd:function transitionEnd(callback){var events=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'],i,j,dom=this;function fireCallBack(e){/*jshint validthis:true */if(e.target!==this)return;callback.call(this,e);for(i=0;i<events.length;i++){dom.off(events[i],fireCallBack);}}if(callback){for(i=0;i<events.length;i++){dom.on(events[i],fireCallBack);}}return this;},// Sizing/Styles
	width:function width(){if(this[0]===window){return window.innerWidth;}else{if(this.length>0){return parseFloat(this.css('width'));}else{return null;}}},outerWidth:function outerWidth(includeMargins){if(this.length>0){if(includeMargins)return this[0].offsetWidth+parseFloat(this.css('margin-right'))+parseFloat(this.css('margin-left'));else return this[0].offsetWidth;}else return null;},height:function height(){if(this[0]===window){return window.innerHeight;}else{if(this.length>0){return parseFloat(this.css('height'));}else{return null;}}},outerHeight:function outerHeight(includeMargins){if(this.length>0){if(includeMargins)return this[0].offsetHeight+parseFloat(this.css('margin-top'))+parseFloat(this.css('margin-bottom'));else return this[0].offsetHeight;}else return null;},offset:function offset(){if(this.length>0){var el=this[0];var box=el.getBoundingClientRect();var body=document.body;var clientTop=el.clientTop||body.clientTop||0;var clientLeft=el.clientLeft||body.clientLeft||0;var scrollTop=window.pageYOffset||el.scrollTop;var scrollLeft=window.pageXOffset||el.scrollLeft;return{top:box.top+scrollTop-clientTop,left:box.left+scrollLeft-clientLeft};}else{return null;}},css:function css(props,value){var i;if(arguments.length===1){if(typeof props==='string'){if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(props);}else{for(i=0;i<this.length;i++){for(var prop in props){this[i].style[prop]=props[prop];}}return this;}}if(arguments.length===2&&typeof props==='string'){for(i=0;i<this.length;i++){this[i].style[props]=value;}return this;}return this;},//Dom manipulation
	each:function each(callback){for(var i=0;i<this.length;i++){callback.call(this[i],i,this[i]);}return this;},html:function html(_html){if(typeof _html==='undefined'){return this[0]?this[0].innerHTML:undefined;}else{for(var i=0;i<this.length;i++){this[i].innerHTML=_html;}return this;}},text:function text(_text){if(typeof _text==='undefined'){if(this[0]){return this[0].textContent.trim();}else return null;}else{for(var i=0;i<this.length;i++){this[i].textContent=_text;}return this;}},is:function is(selector){if(!this[0])return false;var compareWith,i;if(typeof selector==='string'){var el=this[0];if(el===document)return selector===document;if(el===window)return selector===window;if(el.matches)return el.matches(selector);else if(el.webkitMatchesSelector)return el.webkitMatchesSelector(selector);else if(el.mozMatchesSelector)return el.mozMatchesSelector(selector);else if(el.msMatchesSelector)return el.msMatchesSelector(selector);else{compareWith=$(selector);for(i=0;i<compareWith.length;i++){if(compareWith[i]===this[0])return true;}return false;}}else if(selector===document)return this[0]===document;else if(selector===window)return this[0]===window;else{if(selector.nodeType||selector instanceof Dom7){compareWith=selector.nodeType?[selector]:selector;for(i=0;i<compareWith.length;i++){if(compareWith[i]===this[0])return true;}return false;}return false;}},index:function index(){if(this[0]){var child=this[0];var i=0;while((child=child.previousSibling)!==null){if(child.nodeType===1)i++;}return i;}else return undefined;},eq:function eq(index){if(typeof index==='undefined')return this;var length=this.length;var returnIndex;if(index>length-1){return new Dom7([]);}if(index<0){returnIndex=length+index;if(returnIndex<0)return new Dom7([]);else return new Dom7([this[returnIndex]]);}return new Dom7([this[index]]);},append:function append(newChild){var i,j;for(i=0;i<this.length;i++){if(typeof newChild==='string'){var tempDiv=document.createElement('div');tempDiv.innerHTML=newChild;while(tempDiv.firstChild){this[i].appendChild(tempDiv.firstChild);}}else if(newChild instanceof Dom7){for(j=0;j<newChild.length;j++){this[i].appendChild(newChild[j]);}}else{this[i].appendChild(newChild);}}return this;},prepend:function prepend(newChild){var i,j;for(i=0;i<this.length;i++){if(typeof newChild==='string'){var tempDiv=document.createElement('div');tempDiv.innerHTML=newChild;for(j=tempDiv.childNodes.length-1;j>=0;j--){this[i].insertBefore(tempDiv.childNodes[j],this[i].childNodes[0]);}// this[i].insertAdjacentHTML('afterbegin', newChild);
	}else if(newChild instanceof Dom7){for(j=0;j<newChild.length;j++){this[i].insertBefore(newChild[j],this[i].childNodes[0]);}}else{this[i].insertBefore(newChild,this[i].childNodes[0]);}}return this;},insertBefore:function insertBefore(selector){var before=$(selector);for(var i=0;i<this.length;i++){if(before.length===1){before[0].parentNode.insertBefore(this[i],before[0]);}else if(before.length>1){for(var j=0;j<before.length;j++){before[j].parentNode.insertBefore(this[i].cloneNode(true),before[j]);}}}},insertAfter:function insertAfter(selector){var after=$(selector);for(var i=0;i<this.length;i++){if(after.length===1){after[0].parentNode.insertBefore(this[i],after[0].nextSibling);}else if(after.length>1){for(var j=0;j<after.length;j++){after[j].parentNode.insertBefore(this[i].cloneNode(true),after[j].nextSibling);}}}},next:function next(selector){if(this.length>0){if(selector){if(this[0].nextElementSibling&&$(this[0].nextElementSibling).is(selector))return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);}else{if(this[0].nextElementSibling)return new Dom7([this[0].nextElementSibling]);else return new Dom7([]);}}else return new Dom7([]);},nextAll:function nextAll(selector){var nextEls=[];var el=this[0];if(!el)return new Dom7([]);while(el.nextElementSibling){var next=el.nextElementSibling;if(selector){if($(next).is(selector))nextEls.push(next);}else nextEls.push(next);el=next;}return new Dom7(nextEls);},prev:function prev(selector){if(this.length>0){if(selector){if(this[0].previousElementSibling&&$(this[0].previousElementSibling).is(selector))return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);}else{if(this[0].previousElementSibling)return new Dom7([this[0].previousElementSibling]);else return new Dom7([]);}}else return new Dom7([]);},prevAll:function prevAll(selector){var prevEls=[];var el=this[0];if(!el)return new Dom7([]);while(el.previousElementSibling){var prev=el.previousElementSibling;if(selector){if($(prev).is(selector))prevEls.push(prev);}else prevEls.push(prev);el=prev;}return new Dom7(prevEls);},parent:function parent(selector){var parents=[];for(var i=0;i<this.length;i++){if(selector){if($(this[i].parentNode).is(selector))parents.push(this[i].parentNode);}else{parents.push(this[i].parentNode);}}return $($.unique(parents));},parents:function parents(selector){var parents=[];for(var i=0;i<this.length;i++){var parent=this[i].parentNode;while(parent){if(selector){if($(parent).is(selector))parents.push(parent);}else{parents.push(parent);}parent=parent.parentNode;}}return $($.unique(parents));},find:function find(selector){var foundElements=[];for(var i=0;i<this.length;i++){var found=this[i].querySelectorAll(selector);for(var j=0;j<found.length;j++){foundElements.push(found[j]);}}return new Dom7(foundElements);},children:function children(selector){var children=[];for(var i=0;i<this.length;i++){var childNodes=this[i].childNodes;for(var j=0;j<childNodes.length;j++){if(!selector){if(childNodes[j].nodeType===1)children.push(childNodes[j]);}else{if(childNodes[j].nodeType===1&&$(childNodes[j]).is(selector))children.push(childNodes[j]);}}}return new Dom7($.unique(children));},remove:function remove(){for(var i=0;i<this.length;i++){if(this[i].parentNode)this[i].parentNode.removeChild(this[i]);}return this;},add:function add(){var dom=this;var i,j;for(i=0;i<arguments.length;i++){var toAdd=$(arguments[i]);for(j=0;j<toAdd.length;j++){dom[dom.length]=toAdd[j];dom.length++;}}return dom;}};$.fn=Dom7.prototype;$.unique=function(arr){var unique=[];for(var i=0;i<arr.length;i++){if(unique.indexOf(arr[i])===-1)unique.push(arr[i]);}return unique;};return $;}();/*===========================
	     Get Dom libraries
	     ===========================*/var swiperDomPlugins=['jQuery','Zepto','Dom7'];for(var i=0;i<swiperDomPlugins.length;i++){if(window[swiperDomPlugins[i]]){addLibraryPlugin(window[swiperDomPlugins[i]]);}}// Required DOM Plugins
	var domLib;if(typeof Dom7==='undefined'){domLib=window.Dom7||window.Zepto||window.jQuery;}else{domLib=Dom7;}/*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/function addLibraryPlugin(lib){lib.fn.swiper=function(params){var firstInstance;lib(this).each(function(){var s=new Swiper(this,params);if(!firstInstance)firstInstance=s;});return firstInstance;};}if(domLib){if(!('transitionEnd'in domLib.fn)){domLib.fn.transitionEnd=function(callback){var events=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'],i,j,dom=this;function fireCallBack(e){/*jshint validthis:true */if(e.target!==this)return;callback.call(this,e);for(i=0;i<events.length;i++){dom.off(events[i],fireCallBack);}}if(callback){for(i=0;i<events.length;i++){dom.on(events[i],fireCallBack);}}return this;};}if(!('transform'in domLib.fn)){domLib.fn.transform=function(transform){for(var i=0;i<this.length;i++){var elStyle=this[i].style;elStyle.webkitTransform=elStyle.MsTransform=elStyle.msTransform=elStyle.MozTransform=elStyle.OTransform=elStyle.transform=transform;}return this;};}if(!('transition'in domLib.fn)){domLib.fn.transition=function(duration){if(typeof duration!=='string'){duration=duration+'ms';}for(var i=0;i<this.length;i++){var elStyle=this[i].style;elStyle.webkitTransitionDuration=elStyle.MsTransitionDuration=elStyle.msTransitionDuration=elStyle.MozTransitionDuration=elStyle.OTransitionDuration=elStyle.transitionDuration=duration;}return this;};}}window.Swiper=Swiper;})();/*===========================
	Swiper AMD Export
	===========================*/if(true){module.exports=window.Swiper;}else if(typeof define==='function'&&define.amd){define([],function(){'use strict';return window.Swiper;});}//# sourceMappingURL=maps/swiper.js.map

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
			module.hot.accept("!!./../../../../Users/32606/AppData/Roaming/npm/node_modules/fis/node_modules/css-loader/index.js!./../../../../Users/32606/AppData/Roaming/npm/node_modules/fis/node_modules/postcss-loader/index.js!./../../../../Users/32606/AppData/Roaming/npm/node_modules/fis/node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../Users/32606/AppData/Roaming/npm/node_modules/fis/node_modules/css-loader/index.js!./../../../../Users/32606/AppData/Roaming/npm/node_modules/fis/node_modules/postcss-loader/index.js!./../../../../Users/32606/AppData/Roaming/npm/node_modules/fis/node_modules/sass-loader/index.js!./index.scss");
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
	exports.push([module.id, "/**\r\n * Swiper 3.3.1\r\n * Most modern mobile touch slider and framework with hardware accelerated transitions\r\n * \r\n * http://www.idangero.us/swiper/\r\n * \r\n * Copyright 2016, Vladimir Kharlampidi\r\n * The iDangero.us\r\n * http://www.idangero.us/\r\n * \r\n * Licensed under MIT\r\n * \r\n * Released on: February 7, 2016\r\n */\n.swiper-container {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  /* Fix of Webkit flickering */\n  z-index: 1; }\n\n.swiper-container-no-flexbox .swiper-slide {\n  float: left; }\n\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  box-sizing: content-box; }\n\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  -webkit-transform: translate3d(0px, 0, 0);\n  transform: translate3d(0px, 0, 0); }\n\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-box-lines: multiple;\n  -moz-box-lines: multiple;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.swiper-container-free-mode > .swiper-wrapper {\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  margin: 0 auto; }\n\n.swiper-slide {\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n/* Auto Height */\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto; }\n\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  -ms-grid-row-align: flex-start;\n      align-items: flex-start;\n  -webkit-transition-property: -webkit-transform, height;\n  -webkit-transition-property: height, -webkit-transform;\n  transition-property: height, -webkit-transform;\n  transition-property: transform, height;\n  transition-property: transform, height, -webkit-transform; }\n\n/* a11y */\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000; }\n\n/* IE10 Windows Phone 8 Fixes */\n.swiper-wp8-horizontal {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y; }\n\n.swiper-wp8-vertical {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x; }\n\n/* Arrows */\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none; }\n\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto; }\n\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto; }\n\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\"); }\n\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\"); }\n\n/* Pagination Styles */\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10; }\n\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0; }\n\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%; }\n\n/* Bullets */\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2; }\n\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none; }\n\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer; }\n\n.swiper-pagination-white .swiper-pagination-bullet {\n  background: #fff; }\n\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff; }\n\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #fff; }\n\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000; }\n\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0px, -50%, 0);\n  transform: translate3d(0px, -50%, 0); }\n\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 5px 0;\n  display: block; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 5px; }\n\n/* Progress */\n.swiper-pagination-progress {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute; }\n\n.swiper-pagination-progress .swiper-pagination-progressbar {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  transform-origin: left top; }\n\n.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {\n  -webkit-transform-origin: right top;\n  transform-origin: right top; }\n\n.swiper-container-horizontal > .swiper-pagination-progress {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0; }\n\n.swiper-container-vertical > .swiper-pagination-progress {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0; }\n\n.swiper-pagination-progress.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.5); }\n\n.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {\n  background: #fff; }\n\n.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {\n  background: #000; }\n\n/* 3D Container */\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  -o-perspective: 1200px;\n  perspective: 1200px; }\n\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10; }\n\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(transparent));\n  /* Safari 4+, Chrome */\n  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), transparent);\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  /* Firefox 3.6-15 */\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);\n  /* Firefox 16+, IE10, Opera 12.50+ */ }\n\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(transparent));\n  /* Safari 4+, Chrome */\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), transparent);\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  /* Firefox 3.6-15 */\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);\n  /* Firefox 16+, IE10, Opera 12.50+ */ }\n\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(transparent));\n  /* Safari 4+, Chrome */\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), transparent);\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  /* Firefox 3.6-15 */\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);\n  /* Firefox 16+, IE10, Opera 12.50+ */ }\n\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(transparent));\n  /* Safari 4+, Chrome */\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), transparent);\n  /* Chrome 10+, Safari 5.1+, iOS 5+ */\n  /* Firefox 3.6-15 */\n  /* Opera 11.10-12.00 */\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);\n  /* Firefox 16+, IE10, Opera 12.50+ */ }\n\n/* Coverflow */\n.swiper-container-coverflow .swiper-wrapper,\n.swiper-container-flip .swiper-wrapper {\n  /* Windows 8 IE 10 fix */\n  -ms-perspective: 1200px; }\n\n/* Cube + Flip */\n.swiper-container-cube,\n.swiper-container-flip {\n  overflow: visible; }\n\n.swiper-container-cube .swiper-slide,\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1; }\n\n.swiper-container-cube .swiper-slide .swiper-slide,\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none; }\n\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto; }\n\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n/* Cube */\n.swiper-container-cube .swiper-slide {\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%; }\n\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  transform-origin: 100% 0; }\n\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible; }\n\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0; }\n\n/* Fade */\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out; }\n\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  -webkit-transition-property: opacity;\n  transition-property: opacity; }\n\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none; }\n\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto; }\n\n/* Scrollbar */\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1); }\n\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%; }\n\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%; }\n\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0; }\n\n.swiper-scrollbar-cursor-drag {\n  cursor: move; }\n\n/* Preloader */\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite; }\n\n.swiper-lazy-preloader:after {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat; }\n\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

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


/***/ }
/******/ ])
});
;