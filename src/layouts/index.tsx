import { ConfigProvider } from 'antd'
// import { Provider } from 'react-redux'
// import { IRouteComponentProps } from 'umi'
import zhCN from 'antd/es/locale/zh_CN'

import './index.less'
import Container from './container'

export default () => {


  return (
    // <ConfigProvider locale={zhCN}>
    //   <Provider store={store}>
    //     <Container>{children}</Container>
    //   </Provider>
    // </ConfigProvider>
    <Container></Container>
  )
}
