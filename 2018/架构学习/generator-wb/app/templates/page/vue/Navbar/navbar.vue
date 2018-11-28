<!-- 组件 - 侧边栏 -->
<template>
<div class="navbar primary-color-bg-white">

  <el-menu :default-openeds="defaultOpens" class="el-menu-vertical-demo" v-for="(item,index) in navbarMenu" :key="item.modId" background-color="#fff" text-color="#999" active-text-color="#999">

    <!-- 不存在子菜单 -->
    <el-menu-item v-if="item.moduleList.length==0" :index="item.jsPath+''" :class="{active:item.modId == navbarModId}" @click="bindTab(index,item.modId)">
      <i class="el-icon-setting"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>

    <!-- 存在子菜单 -->
    <el-submenu v-if="item.moduleList.length>0" :index="index">
      <template slot="title">
           <i class="el-icon-location"></i>
           <span>{{item.name}}</span>
       </template>
      <el-menu-item-group>
        <el-menu-item :class="{active:childItem.modId == navbarChildModId}" :index="index-childIndex" v-for="(childItem,childIndex) in item.moduleList" :key="childItem.modId" @click="bindChildTab(childIndex,childItem.modId,index,item.modId)">{{childItem.name}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
  </el-col>
  </el-row>
</div>
</template>

<script>
import {
  mockData,
  mockChildData
} from './mock'
export default {
  data() {
    return {
      navbarMenu: [], //主菜单内容
      hasChild: false,
      mainMenuIndexModId: '',
      navbarModId: '', //侧边菜单
      navbarChildModId: '', // 侧边二级菜单
      defaultOpens: [0, 0]
    }
  },

  created() {
    let that = this

    that.getNavbarData()

  },
  methods: {
    //获取navbar数据
    getNavbarData() {
      let that = this

      // TODO: 接口存在的时候下面关闭
      that.navbarMenu = mockChildData
      that.setCookies(mockData)

      // TODO: 接口存在的时候下面打开
      // globalVue.$customAxios.get('module/selectModuleTreeByParent', {
      //   params: {
      //
      //   }
      // }).then(resq => {
      //   that.navbarMenu = resq.data
      //   that.setCookies(resq.data)
      // }).catch(error => {});
    },
    //缓存数据
    setCookies(datas) {
      let that = this

      let params = {}
      let childLength = that.navbarMenu[0].moduleList.length
      if (childLength == 0) {
        let navberObj = that.$cookies.getJSON('wb_navberObj')

        if (!!that.$utils.isNull(navberObj)) {
          params = {
            type: 0,
            index: 0,
            modId: datas[0].modId
          }
        } else {
          params = {
            type: 0,
            index: navberObj.index,
            modId: navberObj.modId
          }
        }

      } else {
        params = {
          type: 1,
          index: 0,
          modId: that.navbarMenu[0].modId,
          childIndex: 0,
          childModId: that.navbarMenu[0].moduleList[0].modId
        }
      }
      that.setTabData(params)


    },
    // 设置tab参数
    setTabData(params) {
      this.$cookies.set('wb_navberObj', {
        index: params.index,
        modId: params.modId
      }, 7)
      if (params.type == 1) {
        this.$cookies.set('wb_navbarChildObj', {
          indexChild: params.childIndex,
          modId: params.childModId
        }, 7)
        this.navbarChildModId = params.childModId
      }

      this.navbarModId = params.modId

    },

    // navbar切换
    bindTab(index, modId) {
      this.setTabData({
        type: 0,
        index: index,
        modId: modId
      });
    },
    // navbar子菜单切换
    bindChildTab(indexChild, modId, parentIndex, parentModId) {
      this.setTabData({
        type: 1,
        index: parentIndex,
        modId: parentModId,
        childIndex: indexChild,
        childModId: modId
      });

    },

  }
}
</script>
<style lang="scss"scoped>
.navbar {
    width: 250px;
    height: 100%;
    border: solid 1px #dcdfe1;
    box-sizing: border-box;
    .icon-left {
        width: 25px;
        height: 25px;

        // TODO: 开发阶段下面注释打开,具体的类名根据后台返回
        // &.icon-state {
        //     @include showGlobalImage('menu_icon_state');
        // }
        // &.icon-wBench {
        //     @include showGlobalImage('menu_icon_wBench');
        // }
        // &.icon-insp {
        //     @include showGlobalImage('menu_icon_state');
        // }
        // &.icon-wOrder {
        //     @include showGlobalImage('menu_icon_wOrde');
        // }
        // &.icon-repair {
        //     @include showGlobalImage('menu_icon_repair');
        // }
        // &.icon-tReport {
        //     @include showGlobalImage('menu_icon_tReport');
        // }
        // &.icon-aStatistic {
        //     @include showGlobalImage('menu_icon_aStatistic');
        // }
        // &.icon-aReport {
        //     @include showGlobalImage('menu_icon_aReport');
        // }
        // &.icon-baseSet {
        //     @include showGlobalImage('menu_icon_baseSet');
        // }
        // &.icon-systemSet {
        //     @include showGlobalImage('menu_icon_aStatistic');
        // }

    }
    .title {
        color: #999999;
    }
    .icon-arrow {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 0;
        height: 20px;
        color: #17b990;
    }
    .el-menu {
        border-right: none !important;
    }

    .active {
        color: #17b990 !important;
        position: relative;

        &.over-menu {
            background-color: #e8f7f3 !important;

        }
        &.active:before {
            position: absolute;
            height: 100%;
            width: 4px;
            content: '';
            left: 0;
            top: 0;
            background: #a2dbcb;
        }

        .title {
            color: #17b990;
        }
        .icon-left {
            // TODO: 开发阶段下面注释打开,具体的类名根据后台返回
            // &.icon-state {
            //     @include showGlobalImage('menu_icon_state_active');
            // }
            // &.icon-wBench {
            //     @include showGlobalImage('menu_icon_wBench_active');
            // }
            // &.icon-insp {
            //     @include showGlobalImage('menu_icon_state_active');
            // }
            // &.icon-wOrder {
            //     @include showGlobalImage('menu_icon_wOrde_active');
            // }
            // &.icon-repair {
            //     @include showGlobalImage('menu_icon_repair_active');
            // }
            // &.icon-tReport {
            //     @include showGlobalImage('menu_icon_tReport_active');
            // }
            // &.icon-aStatistic {
            //     @include showGlobalImage('menu_icon_aStatistic_active');
            // }
            // &.icon-aReport {
            //     @include showGlobalImage('menu_icon_aReport_active');
            // }
            // &.icon-baseSet {
            //     @include showGlobalImage('menu_icon_baseSet_active');
            // }
            // &.icon-systemSet {
            //     @include showGlobalImage('menu_icon_aStatistic_active');
            // }
        }

    }
}
.el-icon-arrow-down:before {
    content: '' !important;
}
</style>
