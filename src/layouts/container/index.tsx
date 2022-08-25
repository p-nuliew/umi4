import React from 'react'
import { Layout } from 'antd'
// import { Provider } from 'react-redux'
// import { IRouteComponentProps } from 'umi'
import zhCN from 'antd/es/locale/zh_CN'


import Header from './header'


export default () => {
  return (
    <Layout>
      <Header />
      {/* <Content>2</Content> */}
    </Layout>
  )
}
