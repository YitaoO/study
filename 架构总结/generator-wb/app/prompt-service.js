module.exports = exports  = {
    type: 'list',
    name: 'servicePageName',
    message: '我想初始化：',
    choices: [
        {
            name: '内容发布服务 - 发布页',
            value: 'service-cms-publish',
            checked: true
        },
        {
            name: '内容发布服务 - 详情页',
            value: 'service-cms-detail',
            checked: false
        },
        {
            name: '内容发布服务 - 列表页',
            value: 'service-cms-list',
            checked: false
        },
        {
            name: '内容发布服务 - 排行榜',
            value: 'service-cms-rank',
            checked: false
        }
    ]
}
