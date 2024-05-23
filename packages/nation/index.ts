import { App } from 'vue'
import LibNation from './src/index.vue'

export { LibNation }
export default {
  install(app: App) {
    app.component('lib-nation', LibNation)
  }
}
