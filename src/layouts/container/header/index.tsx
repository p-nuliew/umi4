import { Layout, DatePicker } from 'antd';
import { Tabs, Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi';
import { SelectLang } from '@/components';

import { HEADER_NAV_MAP } from './canstant';
import styles from './index.less';

const { TabPane } = Tabs;

const menu = (
  <Menu
    items={[
      {
        label: '推荐返利',
        key: '0',
      },
      {
        label: '退出',
        key: '1',
      },
    ]}
  />
)

export default () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Layout.Header className={styles.header}>
      <img src="https://nd-valid-data-bintest1.oss-cn-hangzhou.aliyuncs.com/aleo/aleopool.png" alt="logo" className={styles.pointer} />
      <div className={styles.body}>
        <Tabs defaultActiveKey={HEADER_NAV_MAP[0]} hideAdd={true} onChange={onChange}>
          {HEADER_NAV_MAP.map((x) => (<TabPane tab={x} key={x} />))}
        </Tabs>
        <Space size="large" style={{ lineHeight: '16px' }}>
          <SelectLang />
          <Dropdown overlay={menu} trigger={['click']} arrow>
            <Space className={styles.pointer}>
              13566106399@163.com
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </div>


    </Layout.Header>
  )
}