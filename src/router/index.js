import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import navConfig from '../components/nav.config.js'
Vue.use(Router)
const view = (path,name) => () => import(`@/components/${path}${name}`)

const loadDocs = function(path) {
  return r=>require.ensure([],()=>r(require(`../docs${path}.md`)))
}
const loadMap = function(name) {
  return r=>require.ensure([],()=>r(require(`../pages/${name}.vue`)))
}
const registerRoute = navConfig => {
  let route = [];
  route.push({
    path: '/component',
    component: view('','Index'),
    children:[]
  })
  navConfig.forEach(nav=>{
    if(nav.children){
      nav.children.forEach(nav=>addRoute(nav))
    } else {
      addRoute(nav)
    }
  })
  addRoute({
    "name": "导航地图",
    "path": "/nav-map"
  });
  function addRoute(page){
    let component;
    if(page.path === '/changelog') {
      component = loadMap('changelog');
    } else if (page.path === '/nav-map') {
      component = loadMap('nav-map'); 
    } else {
      component = loadDocs(page.path);
    }
    let child = {
      path:page.path.slice(1),
      name:'component-' + (page.title || page.name),
      component: component
    }
    route[0].children.push(child)
  }
  return route
}
var route = registerRoute(navConfig);
route = route.concat([
  {
    path: '/',
    redirect: '/component/nav-map'
  },
  {
    path: '*',
    redirect: '/component/nav-map'
  }
])
var router = new Router({
  routes: route
})
router.afterEach((to,from)=>{
  //article-menu 监听路由变化而触发buildContentData函数,由于现在的vue router不可触发hashchange事件因此用路由守卫
  store.commit('UPDATE_ROUTE_CHANGE',Number(store.state.routeChange + 1));
})
export default router



