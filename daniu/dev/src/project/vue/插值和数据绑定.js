/* ============================================================
    此JS用于总结vue基本的使用
============================================================ */
//1:基本模型
export default {
  name: 'app',
  data () { //data可以返回Object对象的函数,也可以是一个对象属性(data:{title:"vue-tod0s"}，不过一般采用返回对象函数)
    return {
      title: 'vue-todos'
    }
  }
}
//2:插值：基本用法：{{}}:Mustache语法
<h1>{{title}}</h1>

/**
 * 数据绑定
 */
//1:v-for:用于枚举一个数组并将对象渲染成一个列表
<li v-for="(todo,index) in todos" :id="index">
  //:(todo,index):第二个参数可以用于获取index,用于输出遍历的是第几项
  <label for="">{{index+1}}{{todo.value}}</label>
</li>
</ul>

data () {
    return {
      title: 'vue-todos',
      todos:[
        {value:"阅读一本关于前端的书，比如vue",done:false},
        {value:"补充的实例",done:true},
        {value:"读书心得",done:false}
      ]
    }
  }

//3:总结:DOM是被vue托管的，所以我们不需要对DOM进行操作，这才是数据绑定的真正意义;
