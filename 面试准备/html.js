/* ============================================================
    此js用于面试中常问的html问题
============================================================ */

//1：如何在html中添加事件
<div onclick="func()"></div>  //标签中直接添加
btn.onclick() //js中添加
btn.attachEvent('onclick',method) //ie方法
btn.addEventListener('click',method,false) //FF

//2:window对象是js的顶层对象，其他的BOM对象都是window的属性(document->文档对象;location->当前url对象;navigator->浏览器本身信息;screen->屏幕信息;history->浏览器的访问历史信息    )

//3:如何实现两行等高:使用display table布局
<div style="display:table">
 <p style="display:table-cell"></p>
  <p style="display:table-cell"></p>
</div>
