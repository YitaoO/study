/**************************************************
 插件公共脚本
 **************************************************/

/* -------------------- 初始化body高度，使不随输入框影响，dialog定位问题  -------------------- */
$('body').css("min-height", $(window).height())

/* -------------------- 应用级自定义ajax  -------------------- */
window.customAjax = new customAjax({
    prefix: function(url) {
        if (typeof user == 'undefined') {
        } else {
            if (url.indexOf('?') > -1) {
                url += '&access_token=' + user.accessToken;
            } else {
                url += '?access_token=' + user.accessToken;
            }
        }
        return url
    },
    refreshToken: function(token) {
        if (typeof user == 'undefined') {
        } else {
            user.accessToken = token
            ls.set(config.userKey, user)
        }
    }
})

/* -------------------- 定义变量  -------------------- */
let appName = '' //app名称
let data = {} //存储页面数据
let lsKey = {} //localStorage的key值
let ssKey = {} //sessionStorage的key值

/* -------------------- 通用方法  -------------------- */
function generateLSKey(page, key, extra) { //生成localStorage的key值
    if (typeof user !== 'undefined' && user) {
        return appname + '_' + page + '_' + key + '_' + user.domainId + '_' + user.groupId + '_' + user.id + (extra || '')
    } else {
        return appname + '_' + page + '_' + key + '_' + (extra || '')
    }
}

let weixinInstance;
if (typeof user == 'undefined') { //定义微信分享
}else{
    weixinInstance = new weixin()
    weixinInstance.hide()
}

baiduStatistics(config.baiduStatisticsCode) //百度统计

window.interfaceConfig = {  //定义统一接口
    baseInt: config.interfaceUrls[0] + '//baseInt', //首页广告和签到信息接口
}

/* -------------------- 暴露定义的定西  -------------------- */
export {
    appName, 
    data,
    lsKey,
    ssKey,
    generateLSKey,
    generateSSKey,
    weixinInstance
}
