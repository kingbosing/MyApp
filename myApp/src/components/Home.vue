<template>
<div class='home'>
    <h1>欢迎来到头条世界</h1>
    <router-link to="/go">去</router-link>
    <el-button type="primary" v-for="(k,v) in typeList" @click="getType(v)" :key="k"> {{k}}</el-button>
    <div class='col'  v-for='item of dataList' @click="toHref(item.url)" :key="item">
        <img :src="item.thumbnail_pic_s" alt="">
        <p>{{item.title}}</p>
    </div>
</div>
</template>
<script>

/* eslint-disable */
import Vue from 'vue'
export default {
  name:"Home",
  data(){
      return{
             dataList:'',
             type:'',
             typeList:{top:'头条',shehui:'社会',guonei:'国内',guoji:'国际',yule:'娱乐',tiyu:'体育',junshi:'军事',keji:'科技',caijing:'财经',shishang:'时尚'}
      }   
  },
  mounted:function(){
      var that=this;
      $.ajax({
        url:'http://toutiao-ali.juheapi.com/toutiao/index?type=top', 
        headers:{
            Authorization:'APPCODE 67098035511c40df9d9bec2276dccdc5'},    
        type:'GET',
        success:function(data){
            console.log(data)
            that.dataList=data.result.data;
        },
        error:function(e){
            console.log(e)
        }
    })
  },
  methods:{
      getType(data){
          var that=this;
          that.dataList='';
          $.ajax({
            url:'http://toutiao-ali.juheapi.com/toutiao/index?type='+data, 
            headers:{
                Authorization:'APPCODE 67098035511c40df9d9bec2276dccdc5'},    
            type:'GET',
            success:function(data){
                console.log(data)
                that.dataList=data.result.data;
            },
            error:function(e){
                console.log(e)
            }
      })
      },
      toHref(data){
          location.href=data;
      }
  }
}

</script>

<style>
.col{
    width: 100%;
    min-height: 100px;
    box-shadow: 2px 2px #dedede;
}
.col p{
    padding: 0;
    margin: 10px 0 20px 0;
}
.el-button{
    margin: 5px;
}
</style>


