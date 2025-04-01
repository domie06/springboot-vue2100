import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yuangong from '@/views/modules/yuangong/list'
    import paiqianyuangong from '@/views/modules/paiqianyuangong/list'
    import gongyingshangguanli from '@/views/modules/gongyingshangguanli/list'
    import yidongguanli from '@/views/modules/yidongguanli/list'
    import kehukaifatongji from '@/views/modules/kehukaifatongji/list'
    import kehuxinxi from '@/views/modules/kehuxinxi/list'
    import yewuyuan from '@/views/modules/yewuyuan/list'
    import zhaopinxinxi from '@/views/modules/zhaopinxinxi/list'
    import yonggongdanwei from '@/views/modules/yonggongdanwei/list'
    import hetongguanli from '@/views/modules/hetongguanli/list'
    import heimingdanguanli from '@/views/modules/heimingdanguanli/list'
    import yuangongzaizhitongji from '@/views/modules/yuangongzaizhitongji/list'
    import danganguanli from '@/views/modules/danganguanli/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/paiqianyuangong',
        name: '派遣员工',
        component: paiqianyuangong
      }
      ,{
	path: '/gongyingshangguanli',
        name: '供应商管理',
        component: gongyingshangguanli
      }
      ,{
	path: '/yidongguanli',
        name: '异动管理',
        component: yidongguanli
      }
      ,{
	path: '/kehukaifatongji',
        name: '客户开发统计',
        component: kehukaifatongji
      }
      ,{
	path: '/kehuxinxi',
        name: '客户信息',
        component: kehuxinxi
      }
      ,{
	path: '/yewuyuan',
        name: '业务员',
        component: yewuyuan
      }
      ,{
	path: '/zhaopinxinxi',
        name: '招聘信息',
        component: zhaopinxinxi
      }
      ,{
	path: '/yonggongdanwei',
        name: '用工单位',
        component: yonggongdanwei
      }
      ,{
	path: '/hetongguanli',
        name: '合同管理',
        component: hetongguanli
      }
      ,{
	path: '/heimingdanguanli',
        name: '黑名单管理',
        component: heimingdanguanli
      }
      ,{
	path: '/yuangongzaizhitongji',
        name: '员工在职统计',
        component: yuangongzaizhitongji
      }
      ,{
	path: '/danganguanli',
        name: '档案管理',
        component: danganguanli
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
