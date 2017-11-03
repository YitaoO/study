/* ================================================================================
    排行榜
================================================================================ */
import './rank.scss'

import { appname, data, lsKey, ssKey, generateLSKey } from '../../app.js'
class rank {
    constructor() {
        //设置初始默认值
        this.rankPageIndex = 1;
        this.hasNextPage = false;
        this.hasPreviousPage = true;
        this.totalSize = 1;
    }
    init() {
        this.getData(); //获取数据
        this.initTemplate();
        this.bindEvent();
    }
    initTemplate() {
        $('#rank').html(template('templateRank', {}));
    }
    getData() {
        let me = this;
        new Promise(function(resolve, reject) {
            var params = {
                gameId: data.gameId,
                pageIndex: me.rankPageIndex
            };
            customAjax.get(config.interfaceUrls[0] + '/march/get_ranking', params).done(function(data) {
                console.log(data.list.length);
                if (data.list.length > 0) {
                    //设置全部变量
                    me.hasNextPage = data.hasNextPage;
                    me.hasPreviousPage = data.hasPreviousPage;
                    me.totalSize = data.totalSize;
                    for (var i = 0; i < data.list.length; i++) {
                        data.list[i].rank = (me.rankPageIndex - 1) * 5 + (i + 1);
                    }
                    resolve(data); //在异步操作成功时调用
                } else {
                    reject(data.ErrMsg); //在异步操作失败时调用
                }
            });
        }).then(function(data) {
            $('.rank-data').html(template('templateData', data));
            $('.rank-bestRank').text(data.maxIntegral);
            $('.rank-how').text(data.maxOrderNo);
        }).catch(function(ErrMsg) {
            //获取数据失败时的处理逻辑
        });
    }
    bindEvent() {
        var me = this;
        //请求首页
        $('.button-Home').click(function() {
            if (me.hasPreviousPage === false) {
                dialog.showMsg('当前已经是首页!', 500, function() {});
                return;
            } else {
                $('.rank-list').remove();
                me.rankPageIndex = 1;
                me.getData();
            }
        });
        //请求上一页
        $('.button-pre').click(function() {
            if (me.hasPreviousPage === false) {
                dialog.showMsg('当前已经是第一页!!', 500, function() {});
                return;
            } else {
                $('.rank-list').remove();
                me.rankPageIndex--;
                me.getData();
            }
        });
        //请求下一页
        $('.button-next').click(function() {
            if (me.hasNextPage === false) {
                dialog.showMsg('当前已经是最后一页!', 500, function() {});
                return;
            } else {
                $('.rank-list').remove();
                me.rankPageIndex++;
                me.getData();
            }
        });
        //请求尾页
        $('.button-end').click(function() {
            if (me.hasNextPage === false) {
                dialog.showMsg('当前已经是末页!', 500, function() {});
                return;
            } else {
                $('.rank-list').remove();
                me.rankPageIndex = Math.ceil(me.totalSize / 5);

                me.getData();
            }
        });
        //关闭当前弹窗
        $('.close-btn ').click(function() {
            $('.rank-overlay').remove();
            $('.rank-wrap').remove();
        });
    }

}


export default new rank();