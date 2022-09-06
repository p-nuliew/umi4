import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { setLocale } from 'umi';
import { Menu, Dropdown, Space} from '@/components/library';

import { LANG_MAP, LangKey } from './canstant';
import styles from './index.less';

export default () => {
  const [langSelectedKeys, setLangSelectedKeys] = useState([LangKey.Cn])

  const onLangClick = ({ key }) => {
    setLangSelectedKeys([key])
    setLocale(key, false)
  }

  const langMenu = (
    <Menu
      items={LANG_MAP}
      selectedKeys={langSelectedKeys}
      onClick={onLangClick}
    />
  )

  return (
    <Dropdown overlay={langMenu} trigger={['click']} arrow>
      <Space className={styles.pointer}>
        <i className="iconfont icon-wangluo"></i>
        {LANG_MAP.find(item => langSelectedKeys[0] === item.key)?.label}
        <DownOutlined />
      </Space>
    </Dropdown>
  )
}