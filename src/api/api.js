import fetch from '@/utils/fetch.js'

export function getList(params) {
    return fetch({
        url:"/goods/all",
        method:"GET",
        params
    })
}
export function getAllCates(params) {
    return fetch({
        url:"/goods/cate",
        method:"GET",
        params
    })
}
export function delGood(params) {
    return fetch({
        url:"/goods/del",
        method:"GET",
        params
    })
}
export function regi(data) {
    return fetch({
        url:"/user/regist",
        method:"POST",
        data
    })
}
export function login(data) {
    return fetch({
        url:"/users/login",
        method:"POST",
        data
    })
}
export function addGood(data) {
    return fetch({
        url:"/goods/add",
        method:"POST",
        data
    })
}
export function getTet(data) {
    return fetch({
        url:"/textuse/tet",
        method:"POST",
        data
    })
}
export function getSwp(data) {//添加，修改轮播图
    return fetch({
        url:"/goods/swp",
        method:"POST",
        data
    })
}
export function getSwpall(params) {//查询全部轮播图
    return fetch({
        url:"/goods/swpall",
        method:"GET",
        params
    })
}
export function getswpdel(params) {//删除轮播图
    return fetch({
        url:"/goods/swpdel",
        method:"get",
        params
    })
}
export default {
    getList,
    getAllCates,
    delGood,
    regi,
    login,
    addGood,
    getTet,
    getSwp,
    getSwpall,
    getswpdel
}
