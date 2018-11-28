    }
<!-- 登陆模块 -->
<template>
<div class="login-wrap" v-loading="loading" element-loading-text="拼命加载中">
  <div class="login-content">
    <div class="form-content primary-color-bg-white">
      <div class="title ">用户登录</div>

      <el-form class="form" autoComplete="on" ref="loginForm" :model="tempForm" label-position='right' label-width="80px">
        <el-form-item label="账号:" prop="account">
          <el-input v-model="tempForm.account" autoComplete="on" placeholder="请输入登录账号">
          </el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" v-model="tempForm.password" placeholder="请输入登录密码">
          </el-input>
        </el-form-item>
      </el-form>
      <footer>
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <el-button class="form-btn" type="primary" @click.native.prevent="handleLogin">登录</el-button>
      </footer>

    </div>
  </div>
</div>
</template>

<script>
import md5 from "md5";

export default {
  data() {
    return {
      loading: false,
      tempForm: {
        userId: this.$cookies.getJSON("wb_userId") || "",
        password: this.$cookies.getJSON("wb_password") || "",
        verifyCode: ""
      },
      checked: true // 是否记住密码
    };
  },
  created() {},
  methods: {
    // 登录
    handleLogin() {
      if (!this.tempForm.userId || !this.tempForm.password) {
        this.$Notification.error({
          title: "错误",
          message: "帐号或密码不能为空！"
        });
        return;
      }
      this.loading = true;
      let url = "";
      let password = !this.$utils.isNull(this.$cookies.getJSON("wb_password"))
        ? this.tempForm.password
        : md5(this.tempForm.password);

      // TODO: 一般不放在url上
      this.$customAxios
        .post(`/api/login?userId=${this.tempForm.userId}&password=${password}`)
        .then(resq => {
          this.loading = false;
          this.$Notification({
            title: "成功",
            message: `登录成功！`,
            type: "success"
          });
          this.$cookies.set("wb_userInfo", resq, 7);
          //缓存
          if (!!this.checked) {
            this.$cookies.set("wb_userId", this.tempForm.userId, 7);
            this.$cookies.set("wb_password", password, 7);
          } else {
            this.$cookies.remove("wb_userId");
            this.$cookies.remove("wb_password");
          }
          window.location.href = "./index.html";
        })
        .catch(error => {
          this.callOf();
        });
    },
    // 清除数据
    callOf() {
      this.loading = false;
      this.loginForm = {};
      this.$cookies.remove("wb_userId");
      this.$cookies.remove("wb_password");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
#login {
  height: 100%;
  width: 100%;
}
.login-content {
  padding: 10px;
  width: 500px;
  height: 500px;
  .title {
    padding: 10px;
    text-align: center;
  }
  .form {
    padding: 10px;
  }
  footer {
    padding: 10px;
  }
}
</style>
