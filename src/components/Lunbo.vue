<template>
<div class="main">
    <el-carousel height="350px" width="1600px">
      <el-carousel-item v-for="item in pics" :key="item.id" class="carousel">
       <a href="javascript:;"><img :src="item.pic" alt="" width="100%"></a>
      </el-carousel-item>
    </el-carousel>
    </div>
  </template>
     <script>
       export default {
         data(){
           return {
              active_log:true,
             pics:[
                {id:0,pic:"img/1.png"},
                {id:1,pic:"img/2.png"},
                {id:2,pic:"img/3.png"},
                {id:3,pic:"img/4.png"},
                {id:4,pic:"img/5.png"},
                {id:5,pic:"img/6.png"}
             ]
           }
         }
       }
     </script>
  <style scoped>
      .main{
        width:1600px;
      }
   .carousel img{
      margin-top:34px;  
   }
  </style>