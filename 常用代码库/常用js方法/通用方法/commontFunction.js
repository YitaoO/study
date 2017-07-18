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
