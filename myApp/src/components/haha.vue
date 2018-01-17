
<template>
  <div class="Hello">
    <el-row>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
    <el-col :span="20">
      <div class="grid-content bg-purple-light">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
             <el-form-item label="账号" prop="account" :rules="{ required: true, message: '账号不能为空'}">
              <el-input type="account" v-model="ruleForm2.account" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
    <p @click="goBack">《《返回登录</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'haha',
  data () {
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      msg: 'Welcome to Your Vue.js App',
       ruleForm2: {
         account:'',
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
   
  },
   methods:{
      goBack(){
        this.$router.push({path:"/"})
        
      }, 
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             console.log(this.ruleForm2);
            // alert('submit!');
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
