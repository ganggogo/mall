import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//虽然这里可以引用css文件，但是一般不在这用
// require("./assets/css/base.css")
