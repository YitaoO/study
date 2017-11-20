/* ================================================================================
    头部切换选项卡
================================================================================ */

import { data, lsKey, ssKey } from '../../../app'

import renderList from '../../../components/projectDetail/tabRenderList'



/**
 * 点击事件
 */
function tabClick() {
    $('.tab-wrap .tabItem:not(.on-click)').addClass('on-click').click(function() {
        $('body').append(template('template-common-loader'))
        sessionStorage.setItem(ssKey.projecDetailTab, $(this).index())

        // data.shareGuide=false; //设置是否重新实例化分享提示弹框

        tabInit()
    })
}


export default function tabInit(params) {
    data.currentProjecDetailTab = Number(sessionStorage.getItem(ssKey.projecDetailTab)) || 0
    $('.tab-wrap .tabItem').eq(data.currentProjecDetailTab).addClass('active').siblings().removeClass('active')

    tabClick()

    renderList()


}

export {
    tabClick
}