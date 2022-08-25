import { useState } from 'react';
import { Layout } from 'antd';
import { Tabs, Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { HEADER_NAV_MAP, LANG_MAP, LangKey } from './canstant';
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
  const [langSelectedKeys, setLangSelectedKeys] = useState([LangKey.Cn])

  const onChange = (key: string) => {
    console.log(key);
  };

  const onLangClick = ({ key }) => {
    setLangSelectedKeys([key])
  }

  const langMenu = (
    <Menu
      items={LANG_MAP}
      selectedKeys={langSelectedKeys}
      onClick={onLangClick}
    />
  )

  return (
    <Layout.Header className={styles.header}>
      <img src="https://nd-valid-data-bintest1.oss-cn-hangzhou.aliyuncs.com/aleo/aleopool.png" alt="logo" className={styles.pointer} />
      <div className={styles.body}>
        <Tabs defaultActiveKey={HEADER_NAV_MAP[0]} hideAdd={true} onChange={onChange}>
          {HEADER_NAV_MAP.map((x) => (<TabPane tab={x} key={x} />))}
        </Tabs>
        <Space size="large" style={{ lineHeight: '16px' }}>
          <Dropdown overlay={langMenu} trigger={['click']} arrow>
            <Space className={styles.pointer}>
              <i className="iconfont icon-wangluo"></i>
              {LANG_MAP.find(item => langSelectedKeys[0] === item.key)?.label}
              <DownOutlined />
            </Space>
          </Dropdown>
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