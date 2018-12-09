/**
 * 页面类型
 */
module.exports = exports = {
  type: 'list',
  name: 'pageType',
  message: '选择页面架构：',
  choices: [{
      name: 'vue',
      value: 'vue',
      checked: true
    },
    {
      name: '小程序',
      value: 'wechat',
      checked: false
    }
  ]
}