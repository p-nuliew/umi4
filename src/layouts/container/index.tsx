import { Layout } from 'antd'
import { Outlet } from 'umi';
import { Banner } from '@/components'
import BANNER_1 from '@/assets/image/banner1.jpg';
import BANNER_2 from '@/assets/image/banner2.jpg';

import Header from './header'

const { Content, Footer, Sider } = Layout

export default () => {
  return (
    <Layout>
      <Header />
      <Banner images={[BANNER_1, BANNER_2]} />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}
