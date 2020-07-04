<template>
  <div class="index">
    <!-- 布局 -->
    <el-container>
      <el-aside width="180px">
        <Left></Left>
      </el-aside>
      <!-- 右边布局 -->
      <el-container>
        <el-header>
          <!-- 导航 -->
          <Hander></Hander>
        </el-header>
        <!-- <Hander></Hander> -->
        <div class="box">
          <router-view></router-view>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
    Hander: () => import("@/components/layout/hander"),
    Left: () => import("@/components/layout/left")
  },
}
</script>

<style lang="scss" scpoed>
.index {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    /* line-height: 200px; */
    width: 200px;
    height: 100%;
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.box {
  overflow: auto;
}
</style>
