import './index.scss'
import { data, lsKey, ssKey, appname, generateLSKey, generateSSKey } from './app'

data.pagename = 'index'
data.paginatorInstance // 分页控件实例


//存储数据
lsKey.list = generateLSKey(data.pagename, 'list')
lsKey.lastUpdateTime = generateLSKey(data.pagename, 'lastUpdateTime')
lsKey.hasData = generateLSKey(data.pagename, 'hasData')

// 渲染页面前处理每条数据
function render(item) {
    return item
}

// 渲染页面后处理
function renderEnd(model, items, time) {
    waves.attach('.ripple-btn', ['waves-light']) // 涟漪特效
    waves.attach('.ripple-btn-blue', ['waves-blue']) // 涟漪特效
}

function bindEvent() {

}

let myOptions = {
    customAjax: customAjax, //必传
    pattern: 'server',
    url: config.interfaceUrls[0] + '/culture/object_list', // 数据url
    data: {
        pageIndex: 1,
        pageSize: 20
    },
    first: function(end) {
        if (!end) {
            // dialog.showLoading()
        } else {
            $('.loader').hide()
            $('#content').css('padding-top', 0)
        }
    },
    // 服务器分页模式配置
    server: {
        key: 'list',
        // 响应报文：总数
        total: 'totalCount'
    },
    sameTab: true,
    noTopUpdate: true,
    ls: {
        id: '', // 列表id
        where: '', // 筛选条件
        orders: '', // 排序字段
        sorts: '', // 排序方向 DESC ASC
        list: lsKey.list,
        lastUpdateTime: lsKey.lastUpdateTime,
        hasData: lsKey.hasData
    },
    success: function(result) {},
    render: function(item) {
        return item;

    },
    render: renderEnd()

}
// 设置样式
function setStyle() {
    $('.index-image').height($(window).width() / 2)
}

function pageInit() {
    //初始化分页
    if (this.paginatorInstance) {
            paginatorInstance.set(myOptions)
            paginatorInstance.load()
            return true
        } else {
          paginatorInstance = new paginator(myOptions)
          paginatorInstance.load()
            return false
        }
    // 绑定事件
    bindEvent()
}

pageInit()

waves.init() // 涟漪特效
