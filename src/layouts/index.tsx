// import { Provider } from 'react-redux'
// import { IRouteComponentProps } from 'umi'
import zhTW from 'antd/es/locale/zh_TW'
import { ConfigProvider } from '@/components/library';
import { getLocale } from 'umi';

import './index.less'
import Container from './container'

console.log('getLocale(): ', getLocale());

export default () => {
  return (
    // <ConfigProvider locale={getLocale()}>
      <Container></Container>
    // </ConfigProvider>
  )
}
