<template>
    <div id="main">
    <div class="head">
       <a href=""  class="logo">
             <img src="../assets/wy_Logo.png" alt="">
         </a>
          <ul class="ulstyle">
         <li>
              <a href="javascript:;">发现音乐 </a> 
        </li>
        <li >
           <a href="javascript:;"> 我的音乐</a>
        </li>
        <li>
           <a href="javascript:;"> 朋友</a>   
        </li>
        <li>
           <a href="javascript:;"> 商城</a>
        </li>
        <li >
           <a href="javascript:;" > 音乐人</a>
        </li>
        <li >
          <a href="javascript:;"> 下载客户端 </a>
        </li>
          </ul>
          <span class="input">
                <input type="text" placeholder="音乐/视频/用户/电台">
                <span class="search_pic"></span>
          </span>
             <a  class="txt" href="">创作者中心</a>
          <span class="log">
              <a href="javascript:;">登录</a>
              <img src="../assets/logo_sanjiao.png" alt="">
          </span>
    </div>
 <div class="fu_dh">
    <div class="dh">
           <ul class="nav">
               <li> 
                   <a href="javascript:;">推荐</a>
                   </li>
                <li>
                     <a href="">排行榜</a>
                    <div class="dh_bg"></div>
                    </li>
                 <li> 
                      <a href="">歌单</a>
                     </li>
                  <li>
                       <a href="javascript:;">主播电台</a>
                  </li>
                    <li><a href="">歌手</a></li>
                   <li><a href="">新碟上架</a></li>
           </ul>
       </div>
 </div>
  
</div>
</template>
<script>

</script>

<style scoped>
/* 最外层元素 宽度样式 */
 #main{
      width:100%;
      height:70px;
      border:1px solid #000;
      background:#242424;
      color:#888;   
  }
  /* 导航栏演示 */
 #main .head{
      width:1100px;
      margin:0 auto;

}
/* 导航栏中网易云图片logo的样式 */
  .logo{
      width:50px;
      height:50px;
      background:#e60026;
      padding: 12px 5px;
      border-radius: 50%;
      float:left;
      margin-left: 120px;
      margin-top: 10px;
  }
  .logo img{
     width:40px;
     margin-top:-7px;
     margin-left: -1px;
  }
  /* 导航栏中 ul元素样式 */
  #main .ulstyle{
      list-style: none;
      margin:0 auto;
  }
  /* 导航栏中 ul下的li样式 */
  .ulstyle li{
      padding:22px 20px;
      text-align: center;
     float:left;
  }
  .ulstyle li a{
      color:#fff;
      text-decoration: none;
  }
  /* li鼠标悬浮背景颜色 */
   .ulstyle li:hover{
       background:#000;
   }
   /* 设置导航栏中搜索框的样式 */
    .head input{
        width:150px;
        border-radius:20px;
        border:0;
        margin-top:23px;
        padding-left:30px;
      
    }
    .head .input{
          position:relative;
    }
    /* 搜索框中字体样式、大小 */
   .head input::-webkit-input-placeholder{
      font-size:12px;
      color:gray;
  }
  /* 插入搜索小图标 */
  .head  .search_pic{
      width:16px;
      height:16px;
      background-image:url("../assets/search.png");
      background-position:0px 0px;
      position:absolute;
      top: 3px;
      right: 126px;
 } 
     /* 设置"创作者中心"样式 */
        .head .txt{
            border:1px solid #666;
            width:100px;
            padding:2px 10px;
            border-radius: 20px;
            margin:0 20px;
            color:#fff;
            font-size:15px;
            text-decoration: none;
           
        }
        .head .txt:hover{
           border:1px solid #fff;
        }
        /* li下的 “登录” 样式*/
        .head .log a{
            color:#707070;
            font-size:15px;
        }


        /* 第二层菜单栏红色背景 */
          .fu_dh{
              width:100%;
              background:#c20c0c;
          }
         .dh{
           width: 1100px;
           height: 34px;
           margin: 0 auto;
           margin-top:15px;
           background:#c20c0c;
           
        }
        .dh .nav{
            padding-left:170px;
        }
        .dh .nav li{
            line-height: 34px;
            padding:0 20px;
        }
        .dh .nav li a{
            color:#fff;
            text-decoration: none;
            font-size:13px;
            padding:2px 10px;
            border-radius: 15px;    
        }
        .dh .nav li a:hover{
           background:#000;  
        }
   
</style>