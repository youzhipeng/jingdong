import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../views/Home'
import Login from '../views/Login'
import Regi from '../views/Regi'
import UserList from '../views/UserList' //用户列表
import AdminList from '../views/AdminList' //管理员列表
import ShopList from '../views/ShopList' //商家管理
import FoodList from '../views/FoodList' //食品列表
import OrderList from '../views/OrderList' //订单列表
import AddGoods from '../views/AddGoods' //添加商品
import Text from '../views/Text' //富文本框
import Swiper from '../views/Swiper' //上传轮播图
// import index from '../views'
let router = new VueRouter({
    routes: [
        {
            path: "home",
            component: Home,
        },
        {
            path: '/userList',
            component: UserList
        },
        {
            path: '/adminList',
            component: AdminList
        },
        {
            path: '/shopList',
            component: ShopList
        },
        {
            path: '/foodlist',
            component: FoodList
        },
        {
            path: '/orderlist',
            component: OrderList
        },
        {
            path: '/addgoods',
            component: AddGoods
        },
        {
            path: '/text',
            component: Text
        },
        {
            path: '/swiper',
            component: Swiper
        },
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/login",
            components: {
                login:Login
            }
        },
        {
            path: "/regi",
            component: Regi
        },
    ]
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to,from,next) =>{
    if(to.path !=="/login"){
        if(localStorage.getItem("token")){
            next()
        }else {
            next("/login")
        }
    }else{
        next()
    }
})

export default router
