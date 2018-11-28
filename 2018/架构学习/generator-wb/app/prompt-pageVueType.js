/**
 * vue页面类型
 */
module.exports = exports = {
  type: 'list',
  name: 'pageVueType',
  message: '选择vue类型：',
  choices: [{
      name: '基础模版',
      value: 'common',
      checked: true
    },
    {
      name: '功能模版',
      value: 'feature',
      checked: false
    }
  ]
}