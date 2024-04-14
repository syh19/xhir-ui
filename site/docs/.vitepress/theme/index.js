// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme"
// import * as xhirUI from 'xhir-ui'
// export default async ({
//   Vue,
//   options,
//   router,
//   siteData,
//   isServer,
// }) => {
//   if (!isServer) {
//     await import(/* @vite-ignore */xhirUI).then((module) => {
//       Vue.use(module.default)
//     })
//   }
// };




export default {
  ...DefaultTheme,
  // enhanceApp: async ({ app, router, siteData, isServer }) => {
  //   // app is the Vue 3 app instance from `createApp()`. router is VitePress'
  //   // custom router. `siteData`` is a `ref`` of current site-level metadata.
  //   app.use(xhirUI)
  // },
}

