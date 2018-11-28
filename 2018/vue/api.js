/**
 * vue常用功能学习
 * 1:计算属性
 * 2:监听属性
 * 3:绑定class
 */

{
  //1:计算属性
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
  //下面是相同的效果
  <
  p > Reversed message: "{{ reversedMessage() }}" < /p>
  methods: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  }
}, {
  //2:监听属性
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}, {
  //3:绑定class
  <
  div class = "static"
  v - bind: class = "{ active: isActive, 'text-danger': hasError }" > < /div>
  data: {
    isActive: true,
    hasError: false
  }
}