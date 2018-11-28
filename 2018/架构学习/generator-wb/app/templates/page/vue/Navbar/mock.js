/**
 * 模拟数据,到时这个打开
 */
let mockData = [{
    "modId": 10010,
    "parent": 100,
    "level": 1,
    "seq": 1,
    "name": "测试菜单一",
    "jsPath": "pages/index/state",
    "modType": 2,
    "isDel": 0,
    "delDate": null,
    "iconClass": "icon-state",
    "moduleList": [],
    "checked": true
  },
  {
    "modId": 10020,
    "parent": 100,
    "level": 2,
    "seq": 2,
    "name": "测试菜单二",
    "jsPath": "pages/index/workbench",
    "modType": 2,
    "isDel": 0,
    "delDate": null,
    "iconClass": "icon-wBench",
    "moduleList": [],
    "checked": true
  }
]
let mockChildData = [{
    "modId": 40010,
    "parent": 400,
    "level": 1,
    "seq": 1,
    "name": "基础数据",
    "jsPath": "pages/setup/baseSet",
    "iconClass": "icon-baseSet",
    "modType": 2,
    "isDel": 0,
    "delDate": null,
    "moduleList": [{
        "modId": 4001010,
        "parent": 40010,
        "level": 1,
        "seq": 1,
        "name": "区域管理",
        "jsPath": "pages/baseSet/areaSet",
        "iconClass": "",
        "modType": 2,
        "isDel": 0,
        "delDate": null,
        "moduleList": [],
        "checked": false
      },
      {
        "modId": 4001020,
        "parent": 40010,
        "level": 2,
        "seq": 2,
        "name": "设备管理",
        "jsPath": "pages/baseSet/deviceSet",
        "iconClass": "",
        "modType": 2,
        "isDel": 0,
        "delDate": null,
        "moduleList": [],
        "checked": false
      },
      {
        "modId": 4001030,
        "parent": 40010,
        "level": 2,
        "seq": 2,
        "name": "告警设置",
        "jsPath": "pages/baseSet/alarmSet",
        "iconClass": "",
        "modType": 2,
        "isDel": 0,
        "delDate": null,
        "moduleList": [],
        "checked": false
      }
    ],
    "checked": false
  },
  {
    "modId": 40020,
    "parent": 400,
    "level": 2,
    "seq": 2,
    "name": "系统设置",
    "jsPath": "pages/setup/systemSet",
    "iconClass": "icon-systemSet",
    "modType": 2,
    "isDel": 0,
    "delDate": null,
    "moduleList": [],
    "checked": false
  }
]

export {
  mockData,
  mockChildData
}