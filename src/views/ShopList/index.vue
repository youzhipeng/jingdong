<template>
  <div class="shopList">
    <!-- 筛选框 -->
    <div class="cart">
      <el-row align="middle" type="flex">
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <p>品类筛选：</p>
          </div>
        </el-col>
        <el-col :span="21">
          <div class="grid-content bg-purple-light">
            <el-select v-model="cate" placeholder="请选择">
              <el-option
                v-for="item in cartList"
                :key="item.id"
                :label="item.cate_zh"
                :value="item.cate"
              ></el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="table">
      <el-table :data="list" border style="width: 100%">
        <el-table-column fixed prop="name" label="商品名称" width="150" align="center"></el-table-column>
        <el-table-column label="商品图片" width="150" align="center">
          <template slot-scope="scope">
            <img class="img" :src="scope.row.img" alt />
          </template>
        </el-table-column>
        <el-table-column prop="cate" label="品类" width="150" align="center"></el-table-column>
        <el-table-column prop="price" label="价格" width="150" align="center"></el-table-column>
        <el-table-column prop="create_time" label="上架时间" width="300" align="center"></el-table-column>
        <el-table-column prop="rank" label="邮编" width="120" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="put">添加</el-button>
            <el-button @click="update(scope.row)" type="text" size="mini">编辑</el-button>
            <el-button type="text" size="mini" @click="del(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  <!-- 修改的弹框 -->
     <el-dialog title="商品添加" :visible.sync="dialogFormVisible2">
      <el-form :model="form">
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
import moment from "moment";
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
      },
      formLabelWidth: "120px",
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则"
            },
            {
              value: "daohang",
              label: "导航"
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic"
            },
            {
              value: "form",
              label: "Form"
            },
            {
              value: "data",
              label: "Data"
            },
            {
              value: "notice",
              label: "Notice"
            },
            {
              value: "navigation",
              label: "Navigation"
            },
            {
              value: "others",
              label: "Others"
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ]
    };
  },
  watch: {
    cate: function() {
      this.getList();
    }
  },
  methods: {
    put() {
      this.$router.push("/addgoods")
    },
    subm() {
      this.form.name1 ==''
      let data = {
        id:this.id,
        name:this.form.name1,
        desc:this.form.name2,
        price:this.form.price,
        cate:this.form.cate2,
        hot:this.form.delivery,
        img:`http://localhost:3000${this.img}`
      }
      // console.log(this.fileLists)
      this.$http.addGood(data).then((res) =>{
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
            a: this.$http.delGood(params),
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
      let params = {
        // hot: true,
        page: this.page,
        pagesize: 4,
        cate: this.cate
      };
      this.$http.getList(params).then(res => {
        console.log(res.data.list)
        res.data.list.map((item, index) => {
          res.data.list[index].create_time = moment(item.create_time).format(
            "HH:mm:ss"
          );
        });
        this.list = res.data.list;
      });
    },
  update(row) {
        // name:this.form.name1,
        // desc:this.form.name2,
        // price:this.form.price,
        // cate:this.form.cate2,
        // hot:this.form.delivery,
    this.dialogFormVisible2 = true
    this.form.name1 = row.name
    this.form.name2 = row.desc
    this.form.price = row.price
    this.form.cate2 = row.cate
    this.form.delivery = row.hot
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
.cart {
  margin: 18px 0 0 20px;
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
  width: 100px;
  height: 90px;
}
</style>
