import React, { FC, ReactElement } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import './style.css'
import '@hashicorp/platform-util/nprogress/style.css'

import NProgress from '@hashicorp/platform-util/nprogress'
import Router from 'next/router'

NProgress({ Router })

const EmptyLayout: FC = ({ children }) => <>children</>

interface HashiAppProps extends AppProps {
  Component: AppProps['Component'] & { layout?: React.ComponentType }
}

function App({ Component, pageProps }: HashiAppProps): React.ReactElement {
  const Layout = Component.layout ?? EmptyLayout
  return (
    <Layout>
      <Head>
        <title>HashiCorp Humans</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
