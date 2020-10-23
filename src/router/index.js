import Vue from 'vue'
import VueRouter from 'vue-router'


const shouye = () => import ("../views/shouye/shouye.vue")
const fenlei = () => import ("../views/fenlei/fenlei.vue")
const gouwuche = () => import ("../views/gouwuche/gouwuche.vue")
const wode = () => import ("../views/wode/wode.vue")



Vue.use(VueRouter)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


const routes = [
  {
    path:"",
    redirect:"/shouye"
  },
  {
    path:"/shouye",
    component:shouye,
    meta:{
      title:"首页"
    }
  },
  {
    path:"/fenlei",
    component:fenlei,
    meta:{
      title:"分类"
    }
  },
  {
    path:"/gouwuche",
    component:gouwuche,
    meta:{
      title:"购物车"
    }
  },
  {
    path:"/wode",
    component:wode,
    meta:{
      title:"我的"
    }
  }
]
const router = new VueRouter({
  //配置路径和组件之间的应用关系
  // router:router
  routes,
  mode:"history"
})

// router文件夹-->index.js文件
//cv以下代码解决路由地址重复的报错问题(一劳永逸)
   const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
   }

//实时改变网页title
   router.beforeEach((to,from,next)=>{
    document.title = to.matched[0].meta.title
    // console.log(to)
    next()
})

export default router
