import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import VueAxios from "vue-axios"
import axios from 'axios'
import apolloProvider from './apollo'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {sync} from "vuex-router-sync"


// Lazy-load
Vue.use(VueLazyload)

// Axios
Vue.use(VueAxios, axios)

// FontAwesome
library.add(faUser)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

// vuex-router-sync
sync(store, router)

if (store.getters['Auth/isAuthenticated']) {
  // start refreshing link
  store.dispatch('Auth/startRefreshJWT')
}

Vue.config.productionTip = false

// hack for active mobile
document.addEventListener("touchstart", function () {}, true)


new Vue({
  render: h => h(App),
  router,
  store,
  apolloProvider,
}).$mount('#app')
