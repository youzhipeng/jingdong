<template>
  <div class="login">
    <div class="box">
        <h1>商商后台登入</h1>
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        class="demo-ruleForm"
      >
      <el-form-item prop="pass"
      :rules="[
               { required: true, message: '请输入用户名', trigger: 'blur' },
              ]"
      >
          <el-input type="text" v-model="ruleForm.text" autocomplete="off" placeholder="用户名"></el-input>
      </el-form-item>
         <el-form-item  prop="pass"
           :rules="[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                   ]"
         >
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
          <el-button class="btn"  @click="btn" type="text">注册</el-button>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" :plain="true">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        text: "",
        pass: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
        // console.log(this.$refs[formName])
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
              username:this.ruleForm.text,
              password:this.ruleForm.pass
          }
          this.$http.login(data).then((res) =>{
              if(res.err == 0) {
            this.$message({
                showClose: true,
                message: '登入成功'
                }); 
                localStorage.setItem("token",res.data.token)
            this.time = setTimeout(() =>{
                this.$router.replace("/home")
            },1000)
              }else{
                    this.$message({
                showClose: true,
                message: '登入有误'
                });
              }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    btn() {
          this.$router.push("/regi")
        console.log("hhh")
      }
  },
  destroyed() {
    clearInterval(this.time)
  }
};
</script>

<style lang="scss" scpoed>
.login {
  // margin: 0 auto;
  background: #324057;
  width: 100%;
  height: 100%;
  .box {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: white;
    // text-align: center;
    box-sizing: border-box;
    padding: 20px;
    overflow: hidden;
    &>h1{
        margin: 20px auto;
        text-align: center;
        font-size: 20px;
    }
    .el-button--text{
    position: absolute;
    right: 10px;
    }
  }
}
</style>
