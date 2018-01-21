
<template>
  <div class="Hello">
    <div v-for='k in 5' class='del'>
      <span class='col' v-on:click='get(it,k)' v-for="it in 23" :key="it" :class="setClass(it,k)">{{it}}</span>
    </div>
    <p>{{getNum}}</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'go',
  data () {
    return{
       getNum:[],
       key:'',//当前会议室id
       item:'',
    }
  },
  watch:{
  item(){

  }
  },
   methods:{
      get(item,k){
        console.log(item)
        // console.log(this.key,k)
        
        if(this.getNum.length>=2||k!=this.key){
           this.getNum=[];
           this.getNum.push(item)
        }else{
           this.getNum.push(item)
        }
          this.key=k;
          //  console.log(this.getNum)
      },
      setClass(item,k){      
        if(this.key==k){
            if(this.getNum.length==2){
          if(this.getNum[0]<=item&&item<=this.getNum[1]){
            return 'getIt'
          }
        }else{
            if(this.getNum[0]==item){
            return 'getIt'
          }
        }
        }  
      
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col{
    height:50px;
    width:50px;
    border:1px solid #ccc;
    float:left;  
    cursor: pointer;
}
.del{
  width:1200px;
  display:block;
}
.getIt{
  background:#0f0;
}

</style>