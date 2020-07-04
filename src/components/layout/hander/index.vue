<template>
  <div class="hander">
<el-header>
    <el-dropdown style="position: absolute;margin:5px">
    <span class="el-dropdown-link">
        <div><el-avatar :size="40" :src="squareUrl"></el-avatar></div>
    </span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
</el-header>
  </div>
</template>

<script>
export default {
  name: 'hander',
    data() {
    return {
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    };
  },
}
</script>

<style lang="scss" scoped>
.hander{
    width: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.block {
  position: absolute;
//   margin-top: 10px;
  right: 0;
}
.demo-basic--circle {
  height: 100%;
}
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown{ 
      position: absolute;
      right: 0;
  }
  .box{
    overflow: auto;
  }
</style>
