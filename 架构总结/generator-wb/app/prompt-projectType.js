/**
 * 项目类型配置
 */
module.exports = exports = {
  type: 'list',
  name: 'projectType',
  message: '选择项目类型：',
  choices: [{
      name: '小程序',
      value: 'wechat',
      checked: true
    },
    {
      name: 'vue',
      value: 'vue',
      checked: false
    }
  ]
}