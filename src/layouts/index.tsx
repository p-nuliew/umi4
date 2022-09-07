import { Layout } from '@/components/Library'
import { Outlet, useLocation } from 'umi';

import Dashboard from './Dashboard';

export default function HWLayout() {
  const location = useLocation()
  console.log('location: ', location);
  const isDashboard = location.pathname.includes('/dashboard')  // 控制面板
  console.log('isDashboard: ', isDashboard);
  return isDashboard ? <Dashboard /> : <Outlet />
}
