import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/transitions.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Notifications from 'vue-notification'

library.add(faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('modal', { template: '#modal-template' })

Vue.config.productionTip = false

Vue.config.devtools = true
Vue.use(BootstrapVue)
Vue.use(Notifications)

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
