/**
 * 登陆入口
 */
import "@/common/js/resources";
import Vue from "vue";
import store from "@/store";
import Login from "./login.vue";

// ele-ui额外引入
import {
  Form,
  FormItem,
  Input,
  Checkbox,
  Button,
  Select,
  Option,
  Dialog
} from "element-ui";
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Dialog);

const loginVue = new Vue({
  el: "#login",
  store,
  components: {
    Login
  }
});
//设置html->font-size
let ele = document.getElementsByTagName("html")[0],
  size = (document.body.clientWidth / 1920) * 20;
ele.style.fontSize = size + "px";
