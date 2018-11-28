/**
 * 组件类型配置
 */
module.exports = exports = {
  type: 'list',
  name: 'componentType',
  message: '选择项目类型：',
  choices: [{
      name: '通用',
      value: 'common',
      checked: true
    },
    {
      name: 'vue',
      value: 'vue',
      checked: false
    }
  ]
}