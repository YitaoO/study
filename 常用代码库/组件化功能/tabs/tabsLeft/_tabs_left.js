/* ================================================================================
    左边切换选项卡
================================================================================ */
/**
 * 配置说明(params说明)
 * type 确认点击的是那个tab（0：project;1:topic;3:两个都存在，初始化的）
 * default 是否是第一次进来（如果第一次，两个tab初始化点击，如果不是，初始化点击的那个）
 *
 */
import { data, lsKey, ssKey } from '../../../app'
import renderList from '../../index/_index_tabs_list'

/**
 * 点击事件
 */
function tabClick() {
    $('.wrap-tab li:not(.on-click)').addClass('on-click').click(function() {
        let type = $(this).parent().data('type')

        if (type == 1) { //project
            sessionStorage.setItem(ssKey.indexProjectTab, $(this).index())
        } else {
            sessionStorage.setItem(ssKey.indexTopicTab, $(this).index())
        }

        tabInit({ default: 0, type: type })
    })
}
/**
 * 渲染数据前设置样式
 */
function setStyle(params) {
    $('.pullUp').css('display', 'none');
    $('.topicWrap,.projectWrap').css('background', '#fff');
    if (params.default == 1) {
        $('#projectWrap,#topicWrap').html(template('template-common-loader'))

        $('.wrap-tab li').removeClass('active')
        $('.tab1 li').eq(data.currentProjecTab).addClass('active')
        $('.tab2 li').eq(data.currenTopicTab).addClass('active')
        $('.tab1').parent().find('.toMore').attr('data-projectype', data.currentProjecTab);
        $('.tab2').parent().find('.toMore').attr('data-topictype', data.currenTopicTab);
    } else {
        if (params.type == 1) {
            $('.tab1 li').removeClass('active')
            $('.tab1 li').eq(data.currentProjecTab).addClass('active')
            $('.tab1').parent().find('.toMore').attr('data-projectype', data.currentProjecTab);

            $('#projectWrap').html(template('template-common-loader'))

        } else {
            $('.tab2 li').removeClass('active')
            $('.tab2 li').eq(data.currenTopicTab).addClass('active')
            $('.tab2').parent().find('.toMore').attr('data-topictype', data.currenTopicTab);

            $('#topicWrap').html(template('template-common-loader'))


        }

    }
}

export default function tabInit(params) {

    data.currentProjecTab = Number(sessionStorage.getItem(ssKey.indexProjectTab)) || 0
    data.currenTopicTab = Number(sessionStorage.getItem(ssKey.indexTopicTab)) || 0

    setStyle(params)

    tabClick()

    let type = !!params.type ? params.type : 3 // (0：项目；1：帖子；3：项目和话题)
    renderList({ type: type, projectType: (data.currentProjecTab == 0) ? 1 : 0, topicType: data.currenTopicTab })

}
