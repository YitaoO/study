/**
 * 方法说明
 * data.timer 倒计时
 * documentTitle 设置标题
 * listenNum 字体数量监听通用方法
 * allShow 文字太多隐藏和显示
 * defaultHead 非默认头像背景图加载
 * inputListen 数字监听
 * counteDecimals 如果超过五位数，保留两位小数
 *
 */

/**
 * 倒计时
 */
let backTime = 10;
data.timer = setInterval(function() {
    backTime = backTime - 1 //倒计时
    $('.timer span').text(backTime)
    if (backTime === 0) {
        clearInterval(data.timer)
        $('.fullAd').remove()
        $('footer').show()
        renderIndex(data.adData)
    }
}, 1000)

/**
 * 设置标题
 */
 function documentTitle(title) {
     setTimeout(function() {
         //利用iframe的onload事件刷新页面
         document.title = title;
         var iframe = document.createElement('iframe');
         iframe.style.visibility = 'hidden';
         iframe.style.width = '1px';
         iframe.style.height = '1px';
         iframe.onload = function() {
             setTimeout(function() {
                 document.body.removeChild(iframe);
             }, 0);
         };
         document.body.appendChild(iframe);
     }, 0);
 }

 /**
  * 字体数量监听通用方法
  * @param  {[type]} listenId  监听的ID
  * @param  {[type]} changeId  改变的Id
  * @param  {[type]} maxTexNum 最大的数量
  * @return {[type]}
  */
 function listenNum(listenId, changeId, maxTexNum) {
     $(listenId).bind('input propertychange', function() {
         // console.info($(this).val())
         let thisVal = $(this).val()
         if (isiOS) {
             thisVal = thisVal.replace(/\u2006/g, ''); //兼容ios问题
         } else {}

         let currentTexNum = thisVal.length;
         if (currentTexNum > maxTexNum) {
             $(this).val($(this).val().substring(0, maxTexNum - 1));
             currentTexNum = maxTexNum;
         }
         $(changeId).text(currentTexNum + '/' + maxTexNum);
     });
 }

 //光标定位到最后一位，解决contenteditable="true"下截取字符光标跑到首位问题
function keyAction(obj) {
    var textbox = document.getElementById('textarea');
    var sel = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(textbox);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
}
/**
 * [defaultHead 文字太多隐藏和显示]
 */
function allShow() {
    $.each($('.content_body'), (key, item) => {
        if (item.clientHeight > 36) {
            $(item).addClass('content_limit')

            $(item).parent().find('.open_all').bind('click', function() {
                $(item).toggleClass('content_limit')
                let showIcon = $(this).find('.icon').hasClass('icon-show')
                if (!!showIcon) {
                    $(this).find('.icon').removeClass('icon-show').addClass('icon-hide')
                } else {
                    $(this).find('.icon').removeClass('icon-hide').addClass('icon-show')
                }

            }).show()
        } else {
            $(item).parent().find('.open_all').hide()
        }
    })
}
/**
 * [defaultHead 非默认头像背景图加载]
 */
function defaultHead() {
    $('[data-bg-src-small], [data-bg-src-big]').each(function() {
        var lock = $(this).attr('data-src-lock');

        if (lock) {
            return;
        }

        var $wrapper = $(this);

        var type = $wrapper.data('bg-src-big') ? 'big' : 'small';

        var timer = setTimeout(function() {
            if ($wrapper[0].className.indexOf('head') > -1) {
                $wrapper.addClass('empty-head-img-' + type);
            } else {
                $wrapper.addClass('empty-img-' + type);
            }
        }, 300);

        var src = $wrapper.data('bg-src-' + type);

        var image = new Image();
        image.src = src;

        image.onload = function() {
            clearTimeout(timer);
            $wrapper.css('background-image', 'url(' + image.src + ')');
            $wrapper.addClass('fadeIn animated-faster');
        };
    });
}
/**
 * 用途：如果超过五位数，保留两位小数
 */
function counteDecimals(count) {
    let returnCount
    let stringCount = count.toString()
    if (stringCount.length > 4) {
        let newInt = stringCount.substring(0, stringCount.length - 4)
        let newDec = stringCount.substring(stringCount.length - 4)
        let count = Number(`${newInt}.${newDec}`).toFixed(2)
        returnCount = `${count}万`
    } else {
        returnCount = count
    }

    return returnCount

}
/**
 * 数字监听
 */
function inputListen() {
    $('.search-input').bind('input propertychange', function() {
        console.log($('input').val());
    });
}
