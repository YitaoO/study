/**
 * 基础类型
 */
module.exports = exports = {
  type: 'list',
  name: 'pageVueCommonType',
  message: '选择vue类型：',
  choices: [{
      name: '基础vue',
      value: 'base',
      checked: true
    },
    {
      name: '修改密码',
      value: 'changePassword',
      checked: false
    }
  ]
}