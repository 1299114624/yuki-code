import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import navConfig from '../components/nav.config.js'
Vue.use(Router)
const view = (path,name) => () => import(`@/components/${path}${name}`)

const loadDocs = function(path) {
  return r=>require.ensure([],()=>r(require(`../docs${path}.md`)))
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
  function addRoute(page){
    let component = loadDocs(page.path)
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
route = route.concat([{
  path: '/',
  component: view('','Index')
}])
var router = new Router({
  routes: route
})
router.beforeEach((to,from,next)=>{
  store.commit('UPDATE_ROUTE_CHANGE',!store.state.routeChange);
  next()
})
export default router



