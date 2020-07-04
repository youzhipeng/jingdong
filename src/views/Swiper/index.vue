<template>
  <div class="shopList">
    <!-- 筛选框 -->
    <div class="btn">
      <el-button type="primary" @click="dialogFormVisible =true">增加图片</el-button>
    </div>
    <!-- /新增框/ -->
    <div class="table">
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="title" label="商品名称" width="500" align="center"></el-table-column>
        <el-table-column label="商品图片" width="300" align="center">
          <template slot-scope="scope">
            <img class="img" :src="scope.row.img" alt />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="350" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="put">添加</el-button>
            <el-button @click="update(scope.row)" type="text" size="mini">编辑</el-button>
            <el-button type="text" size="mini" @click="del(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
      <el-dialog title="图片修改" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="轮播图标题" :label-width="formLabelWidth">
          <el-input v-model="form.name1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="轮播图片" :label-width="formLabelWidth">
          <el-upload
            action="http://localhost:8081/updata/img"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="success"
            ref="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submPut">确 定</el-button>
      </div>
    </el-dialog>
  <!-- 修改的弹框 -->
     <el-dialog title="图片修改" :visible.sync="dialogFormVisible2">
      <el-form :model="form">
        <el-form-item label="轮播图标题" :label-width="formLabelWidth">
          <el-input v-model="form.name1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="轮播图片" :label-width="formLabelWidth">
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="subm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="fool">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="currentPage"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopList",
  data() {
    return {
      cartList: [],
      cate: "",
      // 请求回来的数据
      list: [],
      page: 1, //设置当前页数
      id:'',//编辑的商品id
      //图片上传
      dialogImageUrl: "",
      dialogVisible: false,
      // fileLists: [],
      img:'', //接收上传图片后后端返回的地址
      //表单提交文件
      dialogFormVisible: false, //控制添加表单显示隐藏
      dialogFormVisible2:false, //控制编辑表单显示隐藏
      form: {
        name1: "", //商品名称
      },
      formLabelWidth: "120px",
      value: [],
    };
  },
  watch: {
    cate: function() {
      this.getList();
    }
  },
  methods: {
    sumg() {
      console.log("hhh")
    },
    put() {
      this.dialogFormVisible = true //控制添加表单显示隐藏
      this.form.name1 = ''
      this.img=''
    },
    //添加
    submPut() {
      let data = {
    title:this.form.name1,
    img:`http://localhost:3000${this.img}`
  }
  // console.log(this.fileLists)
  this.$http.getSwp(data).then((res) =>{
    if(res.err == 0)  {
      this.$message({
      message: '恭喜你，这是一条成功消息',
      type: 'success'
    });
    this.dialogFormVisible = false
    this.getList()
    }
  }) 
   this.$refs.upload.clearFiles();
    },
    //修改
    subm() {
      this.form.name1 ==''
      let data = {
        id:this.id,
        title:this.form.name1,
        img:`http://localhost:3000${this.img}`
      }
      // console.log(this.fileLists)
      this.$http.getSwp(data).then((res) =>{
        if(res.err == 0)  {
          this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
        this.dialogFormVisible2 = false
        this.getList()
        }
      }) 
    },
    del(id) {
      //删除
      let params = {
        id: id
      };
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            a: this.$http.getswpdel(params),
            b: this.getList()
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      //    this.$http.delGood(params).then((res) =>{
      //   console.log(res)
      // })
    },
    handleClick(row) {
      console.log("hhh", row);
    },
    currentPage(page) {
      //分页事件，当分页数改变的时候发出，同时重新放请求
      // console.log(page,"kkk")
      this.page = page;
      this.getList();
    },
    handleRemove(file, fileList) {
      //删除图片
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      //查看图片
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    success(response) { //图片上传成功，将后台返回的结果地址给到data数据
      this.img = response.data.url
    },
    //图片上传成功后
    getList() {
      this.$http.getSwpall({}).then(res => {
        console.log(res.data,'000000000000000')
        // res.data.map((item, index) => {
        //   res.data[index].create_time = moment(item.create_time).format(
        //     "HH:mm:ss"
        //   );
        // });
        this.list = res.data;
      });
    },
  update(row) {
        // name:this.form.name1,
        // desc:this.form.name2,
        // price:this.form.price,
        // cate:this.form.cate2,
        // hot:this.form.delivery,
        this.form.name1 =row.title
    this.dialogFormVisible2 = true
    this.img = row.img
    this.id =row._id
  }
  },
  mounted() {
    this.handleClick();
    this.getList();
    // this.$http.getAllCates({}).then(res => {
    //   // console.log(res.data)
    //   res.data.unshift({ cate: "", cate_zh: "全部" });
    //   this.cartList = res.data;
    //   // this.
    // });
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
.table {
  margin: 18px 0 0 20px;
  // max-width: 1000px;
  // box-sizing: border-box;
}
.fool {
  text-align: right;
}
.img {
  // width: 100%;
  height: 90px;
}
.btn{
  margin: 18px 0 0 20px; 
}
</style>
