/**
 * 前期准备
 */

/**
 * 一:域名映射到公网
 * 1:安装npm:sudo npm install -g localtunnel
 * 2:开启服务:tomcat服务：./startup.sh（http://localhost:8080/访问）
 * 3:开启映射:lt --port 8080
 */

/**
 * 二:配置公众号后台
 * 1:url+token
 */

/**
 * 三：验证公众号（代码实现）
 * 1:token+timestamp,nonce三个参数进行字典序排序
 * 2:将三个参数字符串拼接成一个字符串进行sha1加密
 * 3:将加密后的字符串与signature对比，相同表示请求来源微信，我们直接原样返回echostr参数内容，接入验证成功
 */
{
  var token=config.wechat.token;

  var signature=this.query.signature;
  var nonce=this.query.nonce;
  var timestamp=this.query.timestamp
  var echostr=this.query.echostr

  var str= [token,timestamp,nonce].sort().join('')
  var sha= sha1(str)
  if(sha === signature){
    this.body=echostr+''
  }else{
    this.body='wrong'
  }
}

/**
 * 四:更新token
 */
{
  var Promise = require('bluebird')
  var request = Promise.promisify(require('request'))

  var prefix = 'https://api.weixin.qq.com/cgi-bin/'
  var api = {
    accessToken:prefix + 'token?grant_type=client_credential'
  }
  function Token(opts){
    var that = this;
    this.appID=opts.appID
    this.appSecret=opts.appSecret
    this.getAccessToken =opts.getAccessToken
    this.saveAccessToken =opts.saveAccessToken

    this.getAccessToken().then(function(data){
      try{
        data=JSON.parse(data)
      }
      catch(e){
        return that.uploadToken()
      }
      if(that.verificationToken(data)){
         Promise.resolve(data)
      }else{
        return that.uploadToken()
      }
    }).then(function(data){ //存储token
      that.access_token=data.access_token
      that.expires_in=data.expires_in
      that.saveAccessToken(data)
    })

  }
  // 验证token
  Token.prototype.verificationToken=function(data){
    if(!data || !data.access_token || !data.expires_in){
      return false
    }
    var access_token= data.access_token
    var expires_in=data.expires_in
    var now =(new Date().getTime())
    if(now < expires_in){
      return true
    }else{ //超过时间
      return false
    }
  }
  // 更新token
  Token.prototype.uploadToken=function(){
     var appID = this.appID
     var appSecret =this.appSecret
     var url = api.accessToken + '&appid='+appID+'&secret=' + appSecret
     return new Promise(function(resolve,reject){
       request({url:url,json:true}).then(function(response){
         var data = response.body
         var now = (new Date().getTime())
         var expires_in = now + (data.expires_in-20) * 1000
         resolve(data)
       })
     })
  }
  module.exports=Token
}
