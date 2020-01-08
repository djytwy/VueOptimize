import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Button,
  // Select,
  // Input,
  // InputNumber,
  // Radio,
  // RadioGroup,
} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Button)
// Vue.use(Select)
// Vue.use(Input)
// Vue.use(InputNumber)
// Vue.use(Radio)
// Vue.use(RadioGroup)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
