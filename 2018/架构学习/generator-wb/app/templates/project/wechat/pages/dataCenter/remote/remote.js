/**
 * 控制空调页面
 */
// 功能 - 控制空调
import ControlAir from '../ControlAir'
// 功能 - 处理空调数据
import renderDataThree from '../../../components/DeviceData/renderThreeData'
import renderDataOne from '../../../components/DeviceData/renderOneData'
// 功能 - 处理空调数据
import WebScoket from '../../../components/WebSocket/webSocket'

const AppGlobal = getApp().globalData

Page({
  data: {
    showNoNetwork: false,
    socketList: [],
    socketLock: true
  },
  onLoad: function(options) {
    let that = this

    wx.WxTools.setTitle(options.title)

    ControlAir.init(options.devId, that, 2)

    that.setData({
      devId: options.devId
    })

    that.getData()

  },
  // 获取数据
  getData(devId) {
    let that = this
    wx.Dialog.showLoading()

    wx.customAjax.get(`${wx.Interface.getDeviceBydevId}`, {
      devId: that.data.devId
    }, function(res) {
      if (!res.ok) {
        that.setData({
          showNoNetwork: true
        })
      } else {
        let devType = res.data.devType

        that.setData({
          ...(devType == 1) ? renderDataOne(res.data) : (devType == 3) ? renderDataThree(res.data) : ''
        })
      }
      wx.Dialog.hideLoading()

    })
  },
  // 开关事件处理
  handleSwitch(event) {
    let that = this;

    let devType = that.data.devType
    let params = {}
    switch (devType) {
      case 1: //精密空调
        params = {
          DevID: that.data.devId,
          colName: 'col0',
          value: Number(that.data.status) == 1 ? `0` : `1`
        }
        break;
      case 2: //普通空调

        break;
      case 3: //中央空调
        if (Number(that.data.status) == 2) { //关机状态
          if (that.data.TimeControl == 1) {
            if (!that.enbaleControl()) {
              wx.Dialog.showAlert('当前时间限制使用!', function() {})
              return
            }
          }

        }
        params = {
          DevID: that.data.devId,
          colName: 'col1',
          value: Number(that.data.status) == 1 ? `0,#` : `1,#`
        }
        break;
      default:

    }
    ControlAir.hindleControl(params)
  },
  // 是否允许开机
  enbaleControl() {
    let that = this
    let datas = that.data
    let arrTime = []
    let nowData = datas.nowData //当前时间
    let enable = false
    if (!!datas.TimeOneCtrol) {
      arrTime.push(that.addObj(datas.TimeOneStart, datas.TimeOneEnd))
    }
    if (!!datas.TimeTwoCtrol) {
      arrTime.push(that.addObj(datas.TimeTwoStart, datas.TimeTwoEnd))
    }
    if (!!datas.TimeThreeCtrol) {
      arrTime.push(that.addObj(datas.TimeThreeStart, datas.TimeThreeEnd))
    }
    if (!!datas.TimeFourCtrol) {
      arrTime.push(that.addObj(datas.TimeFourStart, datas.TimeFourEnd))
    }
    for (let i = 0; i < arrTime.length; i++) {
      if (wx.Tools.checkdate(arrTime[i].start, nowData) && !wx.Tools.checkdate(arrTime[i].end, nowData)) { //在范围内
        enable = true;
        break;
      }
    }
    return enable
  },
  // 数组添加对象
  addObj(start, end) {
    return {
      start: start,
      end: end
    }
  },
  // 模式事件处理
  handleModel() {
    let that = this
    wx.Dialog.showDraw(['取暖', '制冷', '睡眠', '唤醒', '关闭'], function(datas) {
      if (datas.code == -1) return

      let params = {
        DevID: that.data.devId,
        colName: `col2`,
        value: `${datas.index},#`
      }
      ControlAir.hindleControl(params)
    })
  },
  // 风速事件处理
  handleWind() {
    let that = this
    wx.Dialog.showDraw(['低速', '中速', '高速', '自动速度', '关闭'], function(datas) {
      if (datas.code == -1) return
      let params = {
        DevID: that.data.devId,
        colName: `col1`,
        value: `#,${datas.index}`
      }
      ControlAir.hindleControl(params)
    })
  },
  // 调温度事件处理
  handleTemplate(event) {
    let that = this
    let devType = that.data.devType
    let handletype = Number(event.currentTarget.dataset.handletype) //按钮类型:0:减少;1:增加
    let params = {}

    if (devType == 1) { //精密空调
      // 最低温度提示
      if (((that.data.template - 1) < that.data.colTemRange) && (handletype == 0)) {
        wx.Dialog.showAlert('已经是最低温度了', function() {

        })
        return
      }
      //最高温度提示
      if (((that.data.template + 1) > that.data.hotTemRange) && (handletype == 1)) {
        wx.Dialog.showAlert('已经是最高温度了', function() {

        })
        return
      }
      params = {
        DevID: that.data.devId,
        colName: (that.data.modelType == 0) ? 'col1' : 'col5',
        value: handletype == 0 ? Number(that.data.template - 1) * 10 : Number(that.data.template + 1) * 10
      }
    } else if (devType == 3) { //中央空调

      switch (Number(that.data.modelType)) {
        case 0: //取暖
          if ((that.data.template - 1) < that.data.hotTemRange[1] && (handletype == 0)) {
            wx.Dialog.showAlert('已经是最低温度了', function() {

            })
            return
          }
          if ((that.data.template + 1) > that.data.hotTemRange[0] && (handletype == 1)) {
            wx.Dialog.showAlert('已经是最高温度了', function() {

            })
            return
          }
          break;
        case 1: //制冷
          if ((that.data.template - 1) < that.data.colTemRange[1] && (handletype == 0)) {
            wx.Dialog.showAlert('已经是最低温度了', function() {

            })
            return
          }
          if ((that.data.template + 1) > that.data.colTemRange[0] && (handletype == 1)) {
            wx.Dialog.showAlert('已经是最高温度了', function() {

            })
            return
          }
          break;
        default:
      }
      params = {
        DevID: that.data.devId,
        colName: 'col2',
        value: handletype == 0 ? `#,${Number(that.data.template-1)}` : `#,${Number(that.data.template+1)}`
      }
    }

    ControlAir.hindleControl(params)

  },
  // 调湿度事件
  handleHum(event) {
    let that = this
    let handletype = Number(event.currentTarget.dataset.handletype) //按钮类型:0:减少;1:增加

    switch (handletype) {
      case 0:
        // 最低温度提示
        if ((that.data.humidity - 1) <= that.data.colHumRange) {
          wx.Dialog.showAlert('已经是最低湿度了', function() {

          })
          return
        }
      case 1:
        //最高温度提示
        if ((that.data.humidity + 1) >= that.data.hotHumRange) {
          wx.Dialog.showAlert('已经是最高湿度了', function() {

          })
          return
        }
        break;
      default:

    }


    let params = {
      DevID: that.data.devId,
      colName: 'col2',
      value: handletype == 0 ? Number(that.data.humidity - 1) * 10 : Number(that.data.humidity + 1) * 10
    }

    ControlAir.hindleControl(params)
  },
  // 跳转页面
  toDeviceInfo(event) { //跳转到设备详情
    let that = this
    let devId = that.data.devId
    if (!!devId) {
      wx.navigateTo({
        url: `/pages/dataCenter/eqInformation/eqInformation?devId=${devId}`,
      })
    }
  }

})