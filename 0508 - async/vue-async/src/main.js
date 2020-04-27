import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Global
Vue.component("AulaDownload", () => import("./components/AulaDownload.vue"))

new Vue({
  render: h => h(App),
}).$mount('#app')
