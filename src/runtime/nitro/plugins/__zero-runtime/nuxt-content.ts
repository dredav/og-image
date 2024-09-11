import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin'
import { nuxtContentPlugin } from '../../util/plugins'

export default defineNitroPlugin((nitroApp) => {
  if (import.meta.dev || import.meta.prerender) {
    nuxtContentPlugin(nitroApp)
    return
  }
  throw new Error('Not supported in zeroRuntime mode.')
})