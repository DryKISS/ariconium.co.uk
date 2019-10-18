/**
 * App
 */

// Next
import Router from 'next/router'

// UI
import { GoogleAnalyticsPageView, MyApp } from 'industry-ui'

// Layout
import Layout from 'layout'

// Config
import { Google, Theme } from 'config'

// Font awesome
import {
  faLightbulb,
  faCheckSquare,
  faGlobeEurope,
  faPhoneSquare
} from '@fortawesome/pro-duotone-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faLightbulb,
  faCheckSquare,
  faGlobeEurope,
  faPhoneSquare
)

// Track pageViews
Router.events.on('routeChangeComplete', url => {
  if (Google && Google.analytics) {
    GoogleAnalyticsPageView(url, Google.analytics)
  }
})

export default (props) =>
  <MyApp Layout={Layout} theme={Theme} {...props} />
