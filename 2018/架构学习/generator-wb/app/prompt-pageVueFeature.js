/**
 * 功能类型
 */
module.exports = exports = {
  type: 'list',
  name: 'pageVueFeature',
  message: '选择vue类型：',
  choices: [{
      name: '头部菜单',
      value: 'Header',
      checked: true
    },
    {
      name: '百度地图',
      value: 'BaiduMap',
      checked: true
    },
    {
      name: '侧边菜单(navbar)',
      value: 'Navbar',
      checked: true
    }
  ]
}