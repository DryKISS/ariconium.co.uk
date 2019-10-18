/**
 * Document
 */

// React
import React from 'react'

// Next
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// Config
import { Google } from 'config'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <html className='no-js' lang='en' dir='ltr' prefix='og: http://ogp.me/ns#'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' key='viewport' />
          <meta charSet='UTF-8' key='charset' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' key='edge' />
          <meta name='format-detection' content='telephone=no' key='format' />

          <meta name='author' content='DryKISS' key='author' />

          <meta property='og:type' content='website' />
          <meta property='og:image' content='https://drykiss.com/static/social/drykiss-facebook.png' />
          <meta property='og:site_name' content='DryKISS' />
          <meta property='og:locale' content='en_GB' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='fb:app_id' content='285418984933747' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@drykiss' />
          <meta name='twitter:site' content='@drykiss' />
          <meta name='twitter:image' content='https://drykiss.com/static/social/drykiss-facebook.png' />
          <meta name='twitter:image:alt' content='DryKISS logo and strapline' />

          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon.png' />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${Google.analytics}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${Google.analytics}');
              `
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
