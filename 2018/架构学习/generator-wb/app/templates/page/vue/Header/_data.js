/**
 * 数据处理
 */
let menus = [{
    "modId": 100,
    "parent": 0,
    "level": 1,
    "seq": 0,
    "name": "首页",
    "jsPath": "pages/index",
    "modType": 2,
    "isDel": 0,
    "delDate": null,
    "iconClass": null,
    "moduleList": [],
    "checked": false
  },
  {
    "modId": 200,
    "parent": 0,
    "level": 2,
    "seq": 0,
    "name": "日常管理",
    "jsPath": "pages/dailyManager",
    "modType": 2,
    "isDel": 0,
    "delDate": null,
    "iconClass": "icon-insp",
    "moduleList": [],
    "checked": false
  },
  {
    "modId": 300,
    "parent": 0,
    "level": 3,
    "seq": 0,
    "name": "统计报表",
    "jsPath": "pages/report",
    "modType": 2,
    "isDel": 0,
    "delDate": null,
    "iconClass": null,
    "moduleList": [],
    "checked": false
  },
  {
    "modId": 400,
    "parent": 0,
    "level": 4,
    "seq": 0,
    "name": "设置",
    "jsPath": "pages/setup",
    "modType": 2,
    "isDel": 0,
    "delDate": null,
    "iconClass": null,
    "moduleList": [],
    "checked": false
  }
]
let userInfo = {
  "compId": "100",
  "UserID": 1001116,
  "roleId": 5,
  "name": "冀保杰",
  "roleName": "普通管理员",
  "telephone": "15626451043",
  "state": 1,
  "compName": "微柏软件",
  "email": "",
  "debug": false,
  "sessionId": "b3768523-4a12-472d-a360-99c04e0122ba"
}

export default function renderData(globalVue) {
  return new Promise(function(resolve, reject) {
    // TODO: 模拟数据用,到时把这一行去掉
    resolve(resolve({
      menus,
      userInfo
    }))

    // TODO: 真实数据的时候打开
    // globalVue.$customAxios.get('module/selectModule', {
    //     params: {
    //
    //     }
    //   })
    //   .then(resq => {
    //     let menus = resq
    //     let userInfo = globalVue.$cookies.getJSON('userInfo')
    //     resolve({
    //       menus,
    //       userInfo
    //     })
    //   }).catch(error => {});
  })
}