/* ================================================================================
    广告
================================================================================ */

import { appname, data, lsKey, ssKey, generateLSKey } from '../../app'

export default function renderAd(data) {
    //获取数据
    let adData
    if (!!data) { //存在数据
        adData = data
    } else { //不存在数据
        customAjax.get(interfaceConfig.index, {}).done(function(result) {
            adData = result.ads
        })
    }

    //渲染模板
    $('.slider-box').removeClass('hide')
    // 渲染广告
    $('.slider-box').html(template('tempalte-index-ad', adData))
    $('.slider ul li').width($(window).width()) //解决图片展示不完整的问题

    // 添加轮换
    $('.slider').swipeSlide({
        // 轮播初始值
        index: 0,
        // 连续滚动
        continuousScroll: true,
        // 自动切换
        autoSwipe: true,
        // 切换速度
        speed: 2500,
        // 图片懒加载
        // transitionType: 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
        // 图片懒加载
        lazyLoad: true,
        // 回调方法
        callback: function(index) {
            $(".slider-box" + ' .sub-pannel').find('.indicator')
                .removeClass('sel')
                .eq(index).addClass('sel')
        }
    })

    // 跳转到外部广告
    $('.toAd').click(function() {
        let linkUrl = $(this).data('url')
        let id = $(this).data('id')
        if (!!linkUrl) {
            window.location.href = linkUrl
        }
    })

}