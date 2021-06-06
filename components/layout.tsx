import { FunctionComponent } from 'react'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'Luke Carr'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Luke Carr" />
        <meta name="application-name" content="Luke Carr" />
        <meta name="msapplication-TileColor" content="#" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml?v=1" />
        <meta name="theme-color" content="#5c677d" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=1" />
        <link rel="manifest" href="/icons/site.webmanifest?v=1" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg?v=1" />
        <link rel="shortcut icon" href="/icons/favicon.ico?v=1" />
      </Head>
      {children}
    </>
  )
}

export default Layout
