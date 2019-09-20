import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//1.引入第三方组件库
//1.1完成引入所有组件
import MintUI from 'mint-ui'
//1.2单引入mint-ui样式文件
import "mint-ui/lib/style.css"
//将mint-ui注册vue
Vue.use(MintUI)
Vue.use(ElementUI)
//创建全局组件header
import Header from './components/Header'
import Lunbo from './components/Lunbo'
import Remen from './components/Remen'
 Vue.component("my-header",Header)
 Vue.component("my-lunbo",Lunbo)
 Vue.component("my-remen",Remen)

//配置请求是否保存session信息
axios.defaults.withCredentials=true
//注册
Vue.prototype.axios=axios
//配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080"


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
