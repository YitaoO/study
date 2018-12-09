/**
 * websocket
 */


class Websocket {
  /**
   * [init 初始化WebScoket]
   * @param  {[type]} devId   [设备id]
   * @param  {[type]} vueObj [Vue对象]
   * @param  {[type]} type    [方式] 1:详情;2:列表
   */
  init(vueObj, afterUrl) {
    let that = this

    that.socketLock = true //加锁
    that.socketList = [] //webSocket数据
    that.vueObj = vueObj

    // 开启
    that.webSocketInit(vueObj, afterUrl).then(function(socketData) {

      // 监听websocket发回信息
      that.vueObj.webSocket.onmessage = function(res) { //发送完数据后，从服务器端接收相应返回的方法
        console.log('收到服务器内容：' + res.data)
      }
    })

  }
  // 初始化webScoket
  webSocketInit(Vue, afterUrl) {
    let that = this
    console.log(afterUrl);
    return new Promise(function(resolve) {

      let baseUrl = ''
      if (process.env.NODE_ENV !== 'development') { // 这里开发环境因为要跨域，所以开发环境不用这个配置,后期看下可以优化吗
        let url = window.location.href
        let index = (url.indexOf('login') > 0) ? url.indexOf('login') : url.indexOf('index')
        let optionUrl = url.slice(0, index).split("http://").join("");
        baseUrl = `ws://${optionUrl}`
      } else {
        baseUrl = `ws://http://192.168.1.94:9070/wpms`
      }

      //建立链接
      that.vueObj.webSocket = new WebSocket(`${baseUrl}/${afterUrl}`);

      // 监听是否打开
      that.vueObj.webSocket.onopen = function(evt) {
        that.websocketOn = true
        console.log('WebSocket连接已打开！')
        resolve()
      };
      that.vueObj.webSocket.onclose = function() {
        // 关闭 websocket
        console.log('连接已关闭...')
      }
      // 路由跳转时结束websocket链接
      // that.vueObj.$router.afterEach(function() {
      //   that.vueObj.webSocket.close()
      // })
    })
  }

}
export default new Websocket()