// WARNING: This file is automatically generated, do not manually modify.
import { withQuery } from 'ufo'
import type { GoogleAnalyticsApi } from 'third-party-capital'
import { defu } from 'defu'
import { useRegistryScript } from '#nuxt-scripts-utils'
import type { RegistryScriptInput } from '#nuxt-scripts'
import { object, string, optional } from '#nuxt-scripts-validator'

export const GoogleAnalyticsOptions = object({ id: string(), dataLayerName: optional(string()) })

declare global {
  interface Window extends GoogleAnalyticsApi {}
}
export type GoogleAnalyticsInput = RegistryScriptInput<typeof GoogleAnalyticsOptions>

export function useScriptGoogleAnalytics<T extends GoogleAnalyticsApi>(_options?: GoogleAnalyticsInput) {
  _options = defu(_options, { dataLayerName: 'defaultGa' })
  return useRegistryScript<T, typeof GoogleAnalyticsOptions>(_options?.key || 'google-analytics', options => ({
    scriptInput: {
      src: withQuery('https://www.googletagmanager.com/gtag/js', { id: options?.id }),
    },
    schema: import.meta.dev ? undefined : GoogleAnalyticsOptions,
    scriptOptions: {
      use: () => { return { dataLayer: window.dataLayers[options.dataLayerName!], gtag: window.gtag } },
      stub: import.meta.client ? undefined : ({ fn }) => { return fn === 'dataLayer' ? [] : void 0 },
      performanceMarkFeature: 'nuxt-third-parties-ga',
      ...({ tagPriority: 1 }),
    },
    // eslint-disable-next-line
        clientInit: import.meta.server ? undefined : () => {window.dataLayers=window.dataLayers||{};window.dataLayers[options.dataLayerName!]=window.dataLayers[options.dataLayerName!]||[];window.gtag=function gtag(){window.dataLayers[options.dataLayerName!].push(arguments);};window.gtag('js',new Date());window.gtag('config',options.id!)},
  }), _options)
}
