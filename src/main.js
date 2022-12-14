import Vue from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue2-smooth-scroll'
import '../src/assets/styles/media.css'

Vue.use(VueSmoothScroll, {
  duration: 2000,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
