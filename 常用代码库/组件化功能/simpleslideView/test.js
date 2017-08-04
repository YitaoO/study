/* ============================================================
    设置弹出框方法
============================================================ */
/**
 * HTML属性
 * 必选 .main-view || .main-view-noStyle：标识主显示页的class
 * 必选 data-slideView="XXX"：标识侧滑页XXX
 * 可选 data-slideView-target="XXX"：标识侧滑页XXX的触发按钮
 * 可选 data-slideView-back="XXX"：标识侧滑页XXX中的返回按钮
 */
function simpleslideView(constViews, changeEffect, mainViewCssSelector) {
    var ConstViews = {}; // 当前页面的slideView常量
    var OriginalHash = '';
    var G_callback = null;

    var device = navigator.userAgent.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/);
    var iosVersion7 = null;
    if (device) {
        iosVersion7 = /^7/.test(navigator.userAgent.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/)[2].replace(/_/g, '.'));
    }

    function _init() {
        OriginalHash = window.location.hash;
        ConstViews = constViews;

        // 侧滑效果[slide, over]
        changeEffect = changeEffect || 'slide';

        // mainview的css选择器，默认为带有样式的“.main-view”
        mainViewCssSelector = mainViewCssSelector || '.main-view';

        window.onhashchange = function() {
            if (sessionStorage.getItem(appname + '_' + pageName + '_' + 'praiseRule')) {
                sessionStorage.removeItem(appname + '_' + pageName + '_' + 'praiseRule')
                //window.location.href = 'http://www.ewaytec2001.cn/portal/ftpweb/APPMobileClass/shgz.html'
                window.location.href = "http://www.ewaytec2001.cn/portal/ftpweb/APPMobileClass/shgz.html"
            }

            var temp = location.hash.replace('#', "").split('&');
            var slideViewName = temp[temp.length - 1].split('=')[1];

            var target = $('.flower.sel')

            if (target && data.clickFlower && window.location.hash.indexOf('flower') === -1) {
                $('.praise-box').removeClass('fadeInUp').addClass('fadeOutDown')
                $('.praise-mask').animate({
                    opacity: 0,
                }, {
                    duration: 200,
                    complete: function() {
                        $('.praise-wrapper').hide()
                        target.lock = false
                        $('.praise').removeClass('sel')
                    }
                })
            } else if (!constViews[slideViewName]) {
                if (changeEffect === 'slide') {
                    $(mainViewCssSelector).css('-webkit-transform', 'translateY(0)');
                }

                $('[data-slideView]').css('-webkit-transform', 'translateY(100%)');

                setTimeout(function() {
                    if (G_callback && typeof G_callback === 'function') {
                        G_callback();
                        G_callback = null;
                    }

                    // 修复ios7中，由于emoji.js重设textarea中的光标位置而引起的textarea宽度溢出的bug，需要在页面使用一个wrapper-body进行包裹
                    if (iosVersion7) {
                        return;
                    }
                    $('[data-slideView]').hide();
                }, 300);
            } else {
                $('[data-slideView=' + slideViewName + ']').show();

                if (changeEffect === 'slide') {
                    $(mainViewCssSelector).css('-webkit-transform', 'translateY(-100%)');
                }

                $('[data-slideView=' + slideViewName + ']').css('-webkit-transform', 'translateY(0)');

                if (G_callback && typeof G_callback === 'function') {
                    G_callback();
                    G_callback = null;
                }
            }
        }
    }

    _init();

    return {
        goToslideView: function(slideViewName, callback) {
            G_callback = callback || null;

            if (OriginalHash == '' || OriginalHash == '#') {
                window.location.hash += 'slideView=' + slideViewName;
            } else {
                window.location.hash += '&slideView=' + slideViewName;
            }
        },
        backToMainview: function(callback) {
            G_callback = callback || null;

            if (window.history.length > 1) {
                window.history.back();
            } else {
                location.hash = OriginalHash;
            }
        },
        originalHash: OriginalHash
    }
}

let slideView

//配置simpleslideView
slideView = simpleslideView({
    flower: 'flower',
    comment: 'comment',
    releaseMusicBtn: 'releaseMusicBtn'
}, 'over', '.main-view-noStyle')

//写音乐故事
$('#musicCommontBtn').off('click').click(function() {
    slideView.goToslideView('musicCommontBtn')
})