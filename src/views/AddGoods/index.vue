<template>
  <div class="addgoods">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称" :label-width="formLabelWidth">
        <el-input v-model="form.name1" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" :label-width="formLabelWidth">
        <el-input v-model="form.name2" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价格" :label-width="formLabelWidth">
        <el-input v-model="form.price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="是否推荐" :label-width="formLabelWidth">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="品类筛选" :label-width="formLabelWidth">
        <el-row align="middle" type="flex">
          <!-- <el-col :span="21"> -->
          <div class="grid-content bg-purple-light">
            <el-select v-model="form.cate2" placeholder="请选择">
              <el-option
                v-for="item in cartList"
                :key="item.id"
                :label="item.cate_zh"
                :value="item.cate"
              ></el-option>
            </el-select>
          </div>
          <!-- </el-col> -->
        </el-row>
      </el-form-item>
      <el-form-item label="店铺图片" :label-width="formLabelWidth">
        <el-upload
          action="http://localhost:8081/updata/img"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="success"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item>
         <el-button type="primary" @click="subm">立即新建</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addgoods",
  data() {
    return {
      //图片上传
      dialogImageUrl: "",
      dialogVisible: false,
      cartList: [], //存放筛选的数组
      formLabelWidth: "120px",
      //图片上传
      img: "",
      form: {
        name1: "", //商品名称
        name2: "", //商品描述
        price: "", //价格
        cate2: "", //品类
        region: "",
        date1: "",
        date2: "",
        delivery: false, //是否推荐
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  mounted() {
    // this.handleClick();
    this.getList();
 
  },
  methods: {
    getList(){ //渲染筛选页
         this.$http.getAllCates({}).then(res => {
      // console.log(res.data)
      res.data.unshift({ cate: "", cate_zh: "全部" });
      this.cartList = res.data;
      // this.
    });
    },
    subm() {
      let data = {
        name: this.form.name1,
        desc: this.form.name2,
        price: this.form.price,
        cate: this.form.cate2,
        hot: this.form.delivery,
        img: `http://localhost:3000${this.img}`
      };
      // console.log(this.fileLists)
      this.$http.addGood(data).then(res => {
        if (res.err == 0) {
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success"
          });
          this.$router.push("/shopList")
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    success(response) {
      //图片上传成功，将后台返回的结果地址给到data数据
      this.img = response.data.url;
      // console.log(this.img)
    }
  }
};
</script>

<style lang="scss" scoped>
.addgoods {
  max-width: 500px;
  margin: 10px auto;

  // border: 1px solid #ccc;
  // padding: 20px;
  // box-sizing: border-box;
}
</style>
