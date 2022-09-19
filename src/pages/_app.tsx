import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS

import { MessageProvider } from '~/lib/message'

import FullLayout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = { ...SEO, ...pageMeta }

  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...pageSEO} />
      <MessageProvider>
        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
      </MessageProvider>
    </React.Fragment>
  )
}

export default MyApp
