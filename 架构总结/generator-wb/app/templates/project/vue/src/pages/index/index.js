/**
 * board页面入口
 */
import "@/common/js/resources"; //引用通用内容
import Vue from "vue";
import Index from "./index.vue";

// ele-ui引入
import { Header, Progress, Button } from "element-ui";
Vue.use(Header);
Vue.use(Progress);
Vue.use(Button);

// 实例化
const BoardVue = new Vue({
  el: "#Index",
  components: {
    Index
  },
  mounted() {},
  created() {},
  methods: {}
});
