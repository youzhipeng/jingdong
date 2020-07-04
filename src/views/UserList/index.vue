<template>
    <div class="userList">
    <el-table
      :data="tableData"
      style="width: 100% ;">
       <el-table-column
        prop="num"
        label="#"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
</template>

<script>
export default {
    name:"userList",
    data() {
        return {
          tableData: [{
              num:1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
               num:2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },  {
               num:3,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    }
}
</script>

<style lang="scss" scoped>
.userList{
    padding:20px 0 0 20px;
}
.el-pagination{
    position:absolute;
    bottom: 0;
}
</style>
