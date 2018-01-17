/*eslint no-trailing-spaces: "error"*/
<template>
  <div id="HelloWorld">
    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="age" :rules="[{ required: true, message: '账号不能为空'},{ type: 'number', message: '账号必须为数字值'}]">
      <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input></el-form-item>
      <el-form-item label="密码" prop="password" :rules="{ required: true, message: '密码不能为空'}">
      <el-input type="password" v-model.number="numberValidateForm.password" auto-complete="off"></el-input></el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
      <el-button v-on:click="resetForm('numberValidateForm')">重置</el-button>
      <el-button type="primary"> <router-link to="/haha">注册</router-link></el-button>
    </el-form-item>
</el-form>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      numberValidateForm: {
          age: '',
          password:''
        }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           
            if(this.numberValidateForm.age=='123456'&&this.numberValidateForm.password=='king'){
               alert('submit!');
               this.$router.push({path:"/Home"})
            }else{
               alert('error submit!!');
           
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
