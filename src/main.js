// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import DemoBlock from './base/demo-block'
import SideNav from './components/side-nav'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.component('demo-block',DemoBlock)
Vue.component('side-nav',SideNav)

import YukiButton from './packages/button/src/main'
const components = [YukiButton]
const install = function(Vue) {
  if(install.installed) {
    return
  }
  components.map(component => Vue.component(component.name,component))
}
if(typeof window !== 'undefined' && window.Vue) {
  install(Vue)
}

// export default {
//   install,
//   YukiButton
// }

// new Vue({
//   template: '<yuki-button/>'
// }).$mount('#app')


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
