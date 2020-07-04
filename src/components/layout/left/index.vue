<template>
  <div class="left">
    <!-- <el-aside width="200px"> -->
      <el-row>
        <el-col :span="24">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            router
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>数据管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/userList">用户列表</el-menu-item>
                <el-menu-item index="/adminList">管理员列表</el-menu-item>
                <el-menu-item index="/shopList">商品管理</el-menu-item>
                <el-menu-item index="/foodlist">食品列表</el-menu-item>
                <el-menu-item index="/addgoods">添加商品</el-menu-item>
                <el-menu-item index="/text">富文本框</el-menu-item>
                <el-menu-item index="/swiper">轮播图</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-plus"></i>
                <span>添加数据</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/foodlist">食品列表</el-menu-item>
                <el-menu-item index="/orderlist">订单列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-grid"></i>
                <span>图表</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-6">选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span>编辑</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-7">选项1</el-menu-item>
                <el-menu-item index="1-8">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-9">选项1</el-menu-item>
                <el-menu-item index="1-10">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-warning-outline"></i>
                <span>说明</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-11">选项1</el-menu-item>
                <el-menu-item index="1-12">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    <!-- </el-aside> -->
  </div>
</template>

<script>
export default {
  name: "left",
   methods: {
    handleOpen() {
      console.log("dd");
    },
    handleClose() {
      console.log("hh");
    }
  },
};
</script>

<style lang="scss" scoped>
.left {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-row{
      height: 100%;
  }
}
</style>
