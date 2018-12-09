/**
 * 弹窗提示
 */

class Dialog {
  // 警告弹窗
  showAlert(message, callBack, icon, timer) {
    wx.showToast({
      title: message,
      icon: (icon != undefined && icon != '') ? icon : 'none', //TODO:这里引用本地图片显示不出来，需要优化
      duration: (timer != undefined && timer != '') ? timer : 2000,
      mask: true,
      success: function() {
        callBack()
      }
    })
  }
  // 等待中
  showLoading(message) {
    wx.showLoading({
      title: (message != undefined && message != '') ? message : '加载中',
      mask: true
    })
  }
  // 关闭
  hideLoading() {
    wx.hideLoading()
  }
  // 底部弹窗
  showDraw(messageArr, callBack) {

    wx.showActionSheet({
      itemList: messageArr,
      success: function(res) {
        callBack({
          code: 0,
          index: res.tapIndex
        })
      },
      fail: function(error) {
        callBack({
          code: -1
        })
      }
    })
  }
  // 模拟弹窗(后期实现)
  modelDialog() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function(res) {
        if (res.confirm) {} else if (res.cancel) {}
      }
    })
  }
}

export default new Dialog()