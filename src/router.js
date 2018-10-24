/***
 * 
 * router 的使用：
 * 第一步： 安装vue-router
 * 第二步： 配置：路由间的内容，如下面的routes = [...] 那个uri对应哪个页面，
 *          ；实例化 router = new VueRouter()
 * 第三步：在index.html 文件中挂载vue节点中加上<router-view></router-view>
 * 
 */

 /***
  * 
  * router-link 的使用
  * <router-link to="/pagea">go to a</router-link><br>
  */

import Vue from 'vue';
import VueRouter from 'vue-router';
import pageA from './pages/a.vue';
import pageB from './pages/b.vue';
import PageDefault from './pages/default.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: PageDefault
    },
    {
        path: '/pagea',
        component: pageA
    },
    {
        path: '/pageb',
        component: pageB
    }
];

const router = new VueRouter({
    routes
})

export default router;