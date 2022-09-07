import { Layout } from '@/components/library'
import { Outlet } from 'umi';

// const { Content, Footer, Sider } = Layout;

export default function Dashboard() {
  return (
    <div>
      这里是后台layout
      <Outlet />
      {/* <Header />
      <Content>
        <Outlet />
      </Content> */}
    </div>
  )
}
