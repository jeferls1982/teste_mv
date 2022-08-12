import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import VueMask from 'v-mask';

Vue.config.productionTip = false

new Vue({
    store,
    router,
    vuetify,
    VueMask,
    render: h => h(App)
}).$mount('#app')