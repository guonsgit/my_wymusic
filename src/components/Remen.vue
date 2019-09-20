<template>
  <div>
    <div class="main">
      <!-- 左侧热门推荐栏 -->
      <div class="re">
        <div class="remen">
          <a href>热门推荐</a>
          <a href="javascript:;">华语</a>
          <span>|</span>
          <a href="javascript:;">流行</a>
          <span>|</span>
          <a href="javascript:;">摇滚</a>
          <span>|</span>
          <a href="javascript:;">民谣</a>
          <span>|</span>
          <a href="javascript:;">电子</a>
          <a href>更多</a>
        </div>
      </div>
      <!-- 右侧歌手信息栏 -->
      <div class="r-u">
        <div class="log">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a href="javascript:;" class="u" @click="log">用户登录</a>
        </div>
        <div class="ruzhu">
          <span>入驻歌手</span>
          <span>
            <a href>查看全部></a>
          </span>
        </div>
        <ul class="musicuser">
          <li>
            <img src="../assets/zhanghuimei.jpg" alt />
            <div class="zhm">
              <span>张惠妹aEMEI</span>
              <p>歌手张惠妹</p>
            </div>
          </li>
          <li>
            <img src="../assets/fine.jpg" alt />
            <div class="zhm">
              <span>Fine乐团</span>
              <p>独立音乐人</p>
            </div>
          </li>
          <li>
            <img src="../assets/zhaolei.jpg" alt />
            <div class="zhm">
              <span>赵雷</span>
              <p>民谣歌手</p>
            </div>
          </li>
          <li>
            <img src="../assets/wanxiaoli.jpg" alt />
            <div class="zhm">
              <span>萬曉利</span>
              <p>民谣歌手</p>
            </div>
          </li>
          <li>
            <img src="../assets/zhaosanpei.jpg" alt />
            <div class="zhm">
              <span>王三浦</span>
              <p>音乐人</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 登录弹出框 -->
    <div class="user_log" v-show="log_active==true">
      <div class="log_txt">
        <span>登录</span>
        <button class="x" @click="log_1">X</button>
      </div>
      <div class="left_userlog">
        <img src="../assets/log_pic.png" alt />
        <div class="phone_zhuce">
          <button class="phone" @click="phone">手机号登录</button>
        </div>
        <div>
          <button class="zhuce" @click="ph">注册</button>
        </div>
      </div>
      <div class="right_log">
        <ul>
          <li>
            <img src="../assets/weixin.png" alt />
            <a href>微信登录</a>
          </li>
          <li>
            <img src="../assets/qq.png" alt />
            <a href>QQ登录</a>
          </li>
          <li>
            <img src="../assets/weibo.png" alt />
            <a href>微博登录</a>
          </li>
          <li>
            <img src="../assets/youxiang.png" alt />
            <a href>网易邮箱账号登录</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 弹出手机号登录框 -->
    <div class="phone_log"  v-show="phone_log_active==true">
      <!-- 第一层文字 -->
      <div class="phone_log_txt">
        <span>手机号登录</span>
        <button  @click="phone_1">X</button>
      </div>
         <!-- 第二层输入框 -->
      <div class="input_width_height">
        <ul>
          <li>
            <span class="shuzi_baliu">+86
              <img src="../assets/phone_sanjiao.png" alt="">
            </span>
            <input class="input_top" type="text" placeholder="请输入手机号">
          </li>
          <li>
             <input class="input_bottom" type="text" placeholder="请输入密码">
          </li>
          <li>
            <input type="checkbox">自动登录
            <span class="wangji"><a href="">忘记密码?</a></span>
          </li>
          <li>
          <button>登录</button>
          </li>
       </ul>
      </div>
       <!-- 第三层其他登录方式 -->
       <div class="phone_other">
           <span><a href="">其他登录方式</a></span>
           <span><a href="">没有账号？免费注册</a></span>
       </div>
    </div>
    <!-- 用户手机号注册 -->
    <div class="phone_log"  v-show="reg_active==true">
         <!-- 注册第一层 -->
      <div class="phone_log_txt">
        <span>手机号注册</span>
        <button @click="X_2">X</button>
      </div>
         <!-- 注册第二层 -->
           <div class="input_width_height">
             <ul>
                  <li>
            <div>手机号:</div>
            <span class="shuzi_baliu">+86
              <img src="../assets/phone_sanjiao.png" alt="">
            </span>
            <input class="input_top" type="text" placeholder="请输入手机号">
          </li>
            <li>
              <div>密码:</div>
             <input class="input_bottom" type="text" placeholder="设置输入密码,不少于6位">
          </li>
             <li>
          <button>下一步</button>
          </li>
             </ul>
           </div>
         <!-- 注册第三层 -->
           <div class="phone_other">
           <a href="">返回登录</a>      
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      log_active: false,
      phone_log_active:false,
      reg_active:false
    };
  },
  methods: {
    /* 点击li用户登陆触发事件 默认隐藏*/
    log() {
      // alert("dsf")
      this.log_active = true;
    },
    /* 点击 X 触发事件 隐藏*/
    log_1() {
      this.log_active = false;
    },
    /*点击手机号登录 触发事件 显示登录页面同时隐藏手机号登录页面*/
    phone(){
       this.phone_log_active=true;
       this.log_active = false;  //同时隐藏手机号登录页面
    },
    phone_1(){  //点击 X 的时候 隐藏手机号登录页面登录
      this.phone_log_active=false;
    },
    ph(){  //点击 注册时 触发事件  显示注册页面 同时隐藏手机号登录页面
      // alert("teng")
       this.reg_active=true; 
       this.log_active = false;   //同时隐藏手机号登录页面
    },
    X_2(){ //点击 x 时触发事件 隐藏注册页面=关闭
       this.reg_active=false; 
      // alert("teng")
    }

  }
};
</script>

<style scoped>
/* 外层父元素 */
.main {
  width: 980px;
  margin: 0 auto;
}
/* 左侧热门推荐栏 */
.re {
  border: 1px solid #e9e9e9;
  border-right: 0;
  width: 730px;
  height: 500px;
  padding: 5px;
  float: left;
}
/* 左侧热门栏中ul外的div */
.remen {
  width: 725px;
  margin: 0 auto;
  height: 50px;
  border-bottom: 2px solid red;
  font-size: 13px;
  /* line-height: 50px; */
}

.remen a:first-child {
  font-size: 20px;
}
.remen a {
  margin-left: 22px;
  color: #666;
}
.remen span {
  margin-left: 10px;
}
.remen a:last-child {
  float: right;
  margin-top: 20px;
  margin-right: 30px;
}
/* 热门推荐右侧登录栏 */
.r-u {
  width: 250px;
  height: 900px;
  border: 1px solid #e9e9e9;
  float: left;
  top: 0px;
  right: 602px;
}
.r-u .log {
  height: 130px;
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 15px;
  text-align: center;
  background: #eee;
}
.r-u p {
  font-size: 13px;
  margin-bottom: 30px;
}
.r-u .u {
  background: #c1090e;
  color: #fff;
  border: 0;
  padding: 5px 22px;
  border-radius: 4px;
}
.r-u .ruzhu {
  width: 235px;
  height: 30px;
  border-bottom: 1px solid #000;
  margin: 0 auto;
  margin-top: 10px;
}
.r-u .ruzhu span {
  margin: 40px;
  font-size: 13px;
}
.r-u .ruzhu a {
  color: gray;
}
.r-u .musicuser {
  list-style: none;
  padding: 0;
  padding: 15px;
}
/* 右下侧 歌手栏 */
.musicuser li {
  height: 80px;
  margin-top: 15px;
  background: #fafafa;
  border: 1px solid #e9e9e9;
}
.musicuser li img {
  float: left;
  margin-right: 20px;
}
.musicuser span {
  font-size: 17px;
  font-weight: bolder;
}
.musicuser li p {
  float: left;
  margin-right: 50px;
  margin-top: 10px;
  font-size: 14px;
}

/* 登录界面 */
/* 登录界面外层div */
.user_log {
  width: 520px;
  height: 340px;
  border: 1px solid #878787;
  margin: 50px 20px;
  border-radius: 3px;
  color: #fff;
  background: #fff;
  position: absolute;
  z-index: 999;
  top: 25%;
  left: 25%;
}
.log_txt {
  width: 100%;
  height: 30px;
  background: #2d2d2d;
  font-size: 15px;
  padding: 5px 15px;
}
.log_txt .x {
  background: #2d2d2d;
  border: 0;
  float: right;
  color: #888888;
}
/* 左侧div */
.left_userlog {
  width: 300px;
  height: 260px;
  border-right: 1px dotted #ccc;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
}
/* 左侧div中的图片 */
.left_userlog img {
  width: 90%;
}
.zhuce,
.phone {
  width: 90%;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  font-size: 12px;
  padding: 5px 0px;
}
.phone {
  background: #3685d1;
  color: #fff;
  margin: 15px 0px;
}
/* 右侧的div */
.right_log {
  float: left;
  margin-top: 30px;
  margin-left: -15px;
}
.right_log li {
  list-style: none;
  padding: 15px 0px;
}
.right_log li a {
  color: #333;
  font-size: 15px;
}

/* 手机号登录界面 */
.phone_log {
  width: 500px;
  height: 297px;
  border: 1px solid #878787;
  margin: 50px 20px;
  border-radius: 3px;
  background: #fff;
  position: absolute;
  z-index: 999;
  top: 25%;
  left: 25%;
}
/* 上层文字高度 */
.phone_log_txt {
  width: 100%;
  height: 30px;
  background: #2d2d2d;
  font-size: 15px;
  padding: 2px 15px;
  color: #fff;
}
.phone_log_txt button{
  color: #ccc;
  float: right;
  text-decoration: none;
  background:#2d2d2d;
  border:0;
}

/* 第二层输入框父元素*/
 .input_width_height{
   width:400px;
   height:205px;
   margin:0 auto;
   padding:15px 40px;
 }
 .input_width_height li{
   padding:7px 0px;
   list-style: none;
   width:220px;
 }
.input_width_height .shuzi_baliu{
  border-right:1px solid gray;
  padding:3px;
  position:absolute;
}
.input_top{
  width:220px;
  padding-left: 60px;
  
}

/* .input_top.form-control:focus{
    	outline: none;
    	box-shadow: none;
    	border-color: #888888;
} */

.input_bottom{
  width:220px;
  padding:0px 10px
}
.input_width_height li .wangji{
  float:right;
}
.input_width_height li button{
  width:100%;
  background:#2e7ecb;
  border:0;
  color:#fff;
  font-size:15px;
  padding:5px 0px;
  border-radius: 3px;
}






/* 第三层其他登录样式 */
.phone_other{
  width:100%;
  height:60px;
  border-top:1px solid #c6c6c6;
  line-height:60px;
  background:#f7f7f7;
  padding:0px 15px;
 
}
.phone_other a{
  font-size:15px;
}
.phone_other span:last-child{
  float:right;
}
.phone_other span:last-child  a{
  color:gray;
}
</style>