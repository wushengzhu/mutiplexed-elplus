import { App } from 'vue'
import select from './src/index.vue'

export default {
  install(app: App) {
    app.component('lib-select', select)
  }
}
