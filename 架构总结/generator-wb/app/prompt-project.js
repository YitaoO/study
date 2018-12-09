module.exports = exports = {
  type: 'list',
  name: 'choiceType',
  message: '我想初始化：',
  choices: [{
      name: '项目',
      value: 'project',
      checked: true
    },
    {
      name: '组件',
      value: 'component',
      checked: false
    },
    {
      name: '页面架构',
      value: 'page',
      checked: false
    }
  ]
}