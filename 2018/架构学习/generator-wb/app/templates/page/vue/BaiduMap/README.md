# 名称: 百度MAP
# 作者: jack_huang

------

## 依赖 :
1. vue框架
2. 百度地图
 ------
## 简单使用
1. 引入
  * 依赖包引入:npm install vue-baidu-map
  * 脚手架引入(build->webpack.base.conf.js):
   ``externals:{
    'BMap':'BMap','BMap_Symbol_SHAPE_POINT':'BMap_Symbol_SHAPE_POINT'}
    ``

  * html引入:
  ``<script type="text/javascript"src="http://api.map.baidu.com/api?v=3.0&ak=kFu7pmNAjLwMYvYbmtw5Qcxd"></script>(换成开发者自己的密钥)
  ``
2. 基本使用方法使用方法
 * js引入:``import BaiduMap from '@/components/BaiduMap/baiduMap'``
 * html引入:``<BaiduMap :mapSearch="true"></BaiduMap>``
 * pops:mapSearch="true":是否打开搜索,默认为false
3. 瞄点使用方法
 ``that.$bus.$emit('mapMarkers', [{longitude:113.3274373090,latitude:23.1852650225,name:'梅花园'}])``

### **版本清单**

| 版本号 | 版本更新内容 |
| - | - |
| 1.0.0 | 初始化地图,瞄点,搜索 |


## 待做事项
1. 引入架构无法复制图片，所以生成的map_marker_icon.png无法使用，使用者需自己替换图片相同名字的图片，后期需要优化
