/**
 * 公共资源
 */
import Vue from "vue";
import Cookies from "js-cookie";
import Moment from "moment";
import echarts from "echarts";
import scroll from "vue-seamless-scroll";
import CustomAxios from "@/components/CustomAxios/index";
import Utils from "@/tools/utils";
import "../style/common.scss"; // 引用通用样式

// ele-ui引入
import {
  Row,
  Col,
  Container,
  Main,
  Loading,
  Alert,
  Notification
} from "element-ui";
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Main);
Vue.use(Loading);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$Notification = Notification;

Vue.prototype.$moment = Moment; // 时间转换插件
Vue.prototype.$echarts = echarts; // echarts

Vue.config.productionTip = false;

//引入vue-video-play
import VueVideoPlayer from "vue-video-player";
Vue.use(VueVideoPlayer);
Vue.use(scroll);

Vue.prototype.$customAxios = CustomAxios; // axios请求
Vue.prototype.$cookies = Cookies; // cookie缓存
Vue.prototype.$utils = Utils; // 工具
Vue.prototype.$bus = new Vue(); // 通信

//设置html->font-size
let ele = document.getElementsByTagName("html")[0],
  size = (document.body.clientWidth / 1920) * 20;
ele.style.fontSize = size + "px";
