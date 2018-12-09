/**
 * 首页地图页面
 */
// 功能 - 登录
import Login from '../../components/Login/login'


let App = getApp().globalData
Page({
  onLoad: function() {
    var that = this;
    wx.Dialog.showLoading()


  },
  onShow: function() {
    let that = this
    if (!App.userInfo.UserID && App.userInfo.UserID == null && that.data.markers.length == 0) {
      Login.init().then(function() {
        //获取点
        that.getPoint()
      })
    } else {
      that.setData({
        markers: []
      })
      //获取点
      that.getPoint()
    }
    //动态设置标题
    wx.WxTools.setTitle('微柏空调监控')
  },
  data: {
    showNoNetwork: false,
    longitude: "",
    latitude: "",
    markers: [],
    scale: 11
  },
  onPullDownRefresh() {

  },

  // 获取点
  getPoint() {
    let that = this
    wx.customAjax.get(`${wx.Interface.selectAreaByUserId}`, {
      userId: getApp().globalData.userInfo.UserID
    }, function(res) {
      if (!res.ok) {
        that.setData({
          showNoNetwork: true
        })
        wx.Dialog.hideLoading()
        return
      }
      let areaLists = []

      if (res.data.areaList.length > 0) {
        // res.data.areaList.length = 1
        res.data.areaList.forEach(function(item, key, items) {
          areaLists.push({
            longitude: item.longitude,
            latitude: item.latitude,
            title: item.areaName,
            callout: {
              display: 'ALWAYS',
              content: item.areaName,
              bgColor: '#ffffff',
              padding: 5
            },
            content: item.areaName,
            iconPath: "../../img/map_dibiao.png",
            width: 40,
            height: 50,
            id: item.areaId,
            subAreaCount: item.subAreaCount

          })

        })
        that.setData({
          markers: areaLists

        })
      } else { //获取当前位置

        wx.getLocation({
          success: function(res) {
            that.setData({
              longitude: res.longitude,
              latitude: res.latitude

            })

          }
        })

      }

      wx.Dialog.hideLoading()
    })
  },

  // 点击喵点
  markertap: function(e) {
    var that = this;
    var id = e.markerId;
    let subAreaCount = ''
    let title = ''
    that.data.markers.forEach(function(item, key) {
      if (item.id == id) {
        subAreaCount = item.subAreaCount,
          title = item.title
      }
    })
    if (Number(subAreaCount) > 0 && !!id) {
      wx.navigateTo({
        url: `/pages/dataCenter/childDataCenter/childDataCenter?&areaId=${id}&areaName=${title}`,
      })
    } else {
      wx.navigateTo({
        url: `/pages/dataCenter/monitoring/monitoring?areaId=${id}&areaName=${title}`,
      })
    }

  }


})