import { Layout } from 'antd'
import { FormattedMessage, Outlet } from 'umi';

import Header from './header'

const { Content, Footer, Sider } = Layout

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <FormattedMessage id="welcome" />
        <Outlet />
      </Content>
    </Layout>
  )
}
