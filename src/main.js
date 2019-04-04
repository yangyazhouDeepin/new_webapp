import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/index"
import util from '@/utils/util'
import 'lib-flexible/flexible'
import '@/assets/stylus/index.styl'
import 'animate.css'

import DefaultImg from '@/components/DefaultImg'

Vue.config.productionTip = false
Vue.prototype.util = util

Vue.component('DefaultImg', DefaultImg)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
