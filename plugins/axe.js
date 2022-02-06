
import Vue from 'vue'

if (process.env.NODE_ENV === 'development') {
  import(/* webpackChunkName: 'axe' */ 'vue-axe')
    .then(({ default: VueAxe }) => Vue.use(VueAxe, {
      allowConsoleClears: false, // disable all console clears
    }))
    // eslint-disable-next-line no-console
    .catch(err => console.error('failed to load vue-axe', err))
}
