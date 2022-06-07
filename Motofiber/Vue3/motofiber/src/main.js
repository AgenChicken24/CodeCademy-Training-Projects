import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false

router.beforeEach( (to, from, next) => {
  let lang = to.params.lang;
  if (!lang) {
    lang = 'en'
  }

  i18n.locale = lang
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
