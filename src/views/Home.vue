<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- .dh{
     width:100%;/* 宽度为屏幕的宽度 */
     height:40px;
     background:#c20c0c;
     padding: 0 237px;
     display:none;
 }
 /* 导航条下的ul宽度 */
 .dh ul{
     width:1300px; /* 宽度 */
     display:flex; /* 弹性布局 */
     list-style: none; /* 清除小圆点 */
     margin:0 auto;
 }
 /* ul下的li */
 .dh li{
      line-height:40px; /* 文字行高 */
      padding:0 20px; 
      position:relative;
 }
 /* li下的a元素 */
 .dh li a{
     color:#fff;
     font-size:14px;
     text-decoration:none; /* 清除下划线 */
     padding:2px 10px;
     border-radius:20px;  /* 边框倒角 */
     font-size:12px;
 }
 /* li下的a元素鼠标悬浮背景颜色 */
.dh li a:hover{
    background:rgb(27, 26, 26);
}
/* 设置小三角的样式、定位 */
.dh li .sanjiao{
    width:32px;
    height:32px;
    background-image:url("../assets/sanjiao.png");
    background-position:0px 0px;
    position:absolute;  /* 绝对定位 */
    top:-20px;
}
.dh .dh_bg{
    width:100%;
    height:5px;
    background:#c20c0c;
} -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}


</script>
