<template>
  <div class="regi">
      <div class="box">
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      class="demo-ruleForm"
    >
    <el-form-item prop="text" 
    :rules="{ required: true, message: '请输入用户名', trigger: 'blur' }"
    >
        <el-input type="text" v-model="ruleForm.text" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pass"
       :rules="{ required: true, message: '请输入密码', trigger: 'blur' }"
      >
        <el-input type="password" v-model="ruleForm.pass" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass"
       :rules="{ required: true, message: '请再次输入密码', trigger: 'blur' }"
      >
        <el-input type="password" v-model="ruleForm.checkPass" placeholder="再次输入密码"></el-input>
      </el-form-item>
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
  name: "regi",
    data() {
      return {
        ruleForm: {
          text:"",
          pass: '',
          checkPass: '',
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              let data ={
                  username:this.ruleForm.text,
                  password:this.ruleForm.pass,
                  password2:this.ruleForm.checkPass
              }
           this.$http.regi(data).then((res) =>{
               if(res.err ==0){
            this.$message({
                showClose: true,
                message: '注册成功'
                });
               this.time = setTimeout(()=>{
                    this.$router.replace("/login")
                    
               },1000)
               }else{
                   this.$message({
                showClose: true,
                message: '已经注册'
                });
               }
          
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    destroyed() {
        clearInterval(this.time)
    }
};
</script>

<style lang="scss" scpoed>
.regi{
  width: 100%;
  height: 100%;
  background: #ccc;
    .box{
        width: 400px;
        height: 300px;
        box-sizing: border-box;
        padding: 20px;
        background: white;
        position:absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
    }
}
</style>
