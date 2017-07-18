/* ============================================================
    此JS用于总结vue路由的使用
============================================================ */
//关于单页应用重要的两个概念
  页面是一个抽象的逻辑概念，用于划分功能的场景
  组件是页面再Vue的具体实现方式

//1:引入路由
import VueRoute from 'vue-route'
Vue.use(VueRoute)
//2:引入创建的页面
import Home from './Home.vue'
import Home from './Cart.vue'
//3:使用路由插件
const router= new VueRoute({
  //history模式：充分利用了history.pushState API来完成URL的跳转而无需重新加载页面
  mode:'history',
  base:'__dirname',
  routes:[
    //将页面组件和path指定的路由关联(隐性)
    {name:'Home',path:'/',component:Home},
    {name:'Cart',path:'/',component:Cart},
    {name:'Explorer',path:'/',component:Explorer},
    {name:'Me',path:'/',component:Me}
  ]
})
//4:将路由添加到实例化的vue中
new Vue({
  el: '#app',
  routes,
  render: h => h(App) //render：这里的渲染机制和react一致
})
//5:使用router-link 指向定义path
<router-link to="{name:'Home'}">
  <div>我是首页</div>
</router-link>

//6:路由使用原则：不直接引用路由定义（直接用引用路由缺点:暴露路径，配置出现多次，如果修改要全部修改一遍）

//2:路由配置
  名称        路由         组件
  首页       /home        Home.vue
  分类       /explorer    Explore.vue
  购物车     /cart        Cart.vue
  我        /me          Me.vue
