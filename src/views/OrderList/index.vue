<template>
  <div class="orderList">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单ID" prop="id"></el-table-column>
      <el-table-column label="总价格" prop="name"></el-table-column>
      <el-table-column label="订单状态" prop="desc"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "orderList",
  data() {
    return {
      tableData: [
        {
          id: "1111111",
          name: "998",
          category: "江浙小吃、小吃零食",
          desc: "支付超时",
          address: "998",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "1111111",
          name: "998",
          category: "江浙小吃、小吃零食",
          desc: "支付超时",
          address: "998",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "1111111",
          name: "998",
          category: "江浙小吃、小吃零食",
          desc: "支付超时",
          address: "998",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "1111111",
          name: "998",
          category: "江浙小吃、小吃零食",
          desc: "支付超时",
          address: "998",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
