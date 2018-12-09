<!-- 模版 - 头部菜单 -->
<template>
<el-row class="header-wrap">
  <!-- logo -->
  <el-col :span="4" class="item-logo">
    <span class="header-icon icon" src=""></span>
  </el-col>
  <el-col :span="16" class="item-tabs">
    <li class="cursor-point" :class="{active:index == menuIndex}" @click="bindTab(index,item.modId)" v-for="(item,index) in mainMenu">{{item.name}}</li>
  </el-col>
  <el-col :span="4" class="">
    <el-popover class="item-card" width="300" placement="top-start" trigger="click">
      <div class="user-wrap">
        <div class="user-info">
          <p class="info-item font-size-14 ">欢迎 {{userInfo.name}} 回来！</p>
          <p class="info-item font-size-14">您的单位为: {{userInfo.compName}}</p>
          <p class="info-item">ID:{{userInfo.UserID}}</p>
        </div>
        <div class="user-btn grid-list">
          <div class="btn grid-list-item">
            <span class="icon password"></span>
            <span class="cursor-point" @click="handleReserPass()">修改密码</span>
          </div>
          <span class="line"></span>
          <div class="btn btn-right grid-list-item">
            <span class="icon out"></span>
            <span class="cursor-point" @click="handleOutLogin()">退出登录</span>
          </div>
        </div>
      </div>

      <div class="item-card cursor-point" slot="reference">
        <span class="line"></span>
        <span class="card-userName font-size-14">Hi!  {{userInfo.name}}</span>
      </div>
    </el-popover>
  </el-col>
</el-row>
</template>

<script>
// 功能 - 菜单数据
import renderData from './_data'
export default {
  data() {
    return {
      mainMenu: [], //菜单
      userInfo: {}, //个人信息
      menuIndex: 0,
      dialogshow: {
        show: false
      },
    };
  },
  created() {
    let that = this
    // 获取菜单数据
    renderData(that).then(function(datas) {
      that.mainMenu = datas.menus
      that.userInfo = datas.userInfo
    })

    that.setCookie()

  },
  methods: {
    //tab切换
    bindTab(index, modId) {
      this.menuIndex = index
      this.setCookie(index)
      this.$bus.$emit('tabChange', modId); //传给navbar组件
    },
    // 缓存
    setCookie(index) {
      if (!!this.$utils.isNull(index)) {
        this.$cookies.set('web_menuIndex', 0, 7)
      } else {
        console.log(index);
        this.$cookies.set('web_menuIndex', index, 7)
      }

    },

    // 退出登陆
    handleOutLogin() {
      this.$customAxios.get('logout', {

      }).then(resq => {
        window.location.href = './login.html'
      }).catch(error => {});
    },
    // 修改密码
    handleReserPass() {
      this.dialogshow.show = true

    }

  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.header-wrap {
    // border-bottom: 1px solid #dcdfe1;
    box-shadow: 0 1px 0 #dcdfe1;
    width: 100%;
}
/* ------------------------------------------------------------
   左边logo
------------------------------------------------------------ */
.item-logo {
    height: 50px;
    position: relative;
    // width: 250px;
    span {
        left: 20px;
        top: 9px;
        position: absolute;
        width: 218px;
        height: 30px;
        // @include showGlobalImage('index_common_logo_icon');
    }
}
/* ------------------------------------------------------------
   中间菜单
------------------------------------------------------------ */
.item-tabs {
    li {
        position: relative;
        font-size: 16px;
        float: left;
        line-height: 50px;
        padding: 0 20px;
        opacity: 0.65;
        color: #818886;
        &.active {
            color: #17b990;
            opacity: 1;
        }
    }
    li.active:after {
        position: absolute;
        right: 0;
        bottom: 2px;
        left: 0;
        display: block;
        width: 73%;
        height: 4px;
        margin: auto;
        content: '';
        background: #17b990;
    }

}
/* ------------------------------------------------------------
   右边个人信息
------------------------------------------------------------ */
.item-card {
    text-align: center;
    line-height: 50px;
    // width: 200px;
    position: relative;
    .line {
        position: absolute;
        width: 1px;
        top: 0;
        left: 0;
        height: 50px;
        background: #dcdfe1;
    }
    .card-arrow {
        margin-right: 5px;
        margin-left: 5px;
    }
    .card-icon {
        width: 36px;
        height: 36px;
        // @include showGlobalImage('header_default_icon');
    }

}

.user-wrap {
    padding: 10px;

    .user-info {
        padding: 10px 0;
        .info-item {
            padding-bottom: 8px;
        }
    }
    .user-btn {
        position: relative;
        height: 40px;
        line-height: 40px;
        text-align: center;
        .line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: 100%;
            width: 1px;
            background: #fff;
        }
        .btn {

            width: 50%;
            .icon {
                width: 25px;
                height: 25px;
                &.password {
                    // @include showGlobalImage('login_password_icon');
                }
                &.out {
                    // @include showGlobalImage('login_out_icon');
                }

            }
        }

    }
}
</style>
