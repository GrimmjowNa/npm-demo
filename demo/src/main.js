import Vue from 'vue'
import App from './App.vue'
import NUI from 'npm-demo-nick-na'
import 'npm-demo-nick-na/lib/base.css'

Vue.config.productionTip = false
Vue.use(NUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
