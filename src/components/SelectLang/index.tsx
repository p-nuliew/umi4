import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { setLocale, getLocale } from 'umi';
import { Menu, Dropdown, Space} from '@/components/Library';

import { LANG_MAP, LangKey } from './canstant';

export default () => {
  // 下次访问应用时先读取缓存
  const [langSelectedKeys, setLangSelectedKeys] = useState([getLocale() || LangKey.zh])

  const changLang = ({ key }) => {
    setLocale(key, false)
    setLangSelectedKeys([key])
  }

  const langMenu = (
    <Menu
      items={LANG_MAP}
      selectedKeys={langSelectedKeys}
      onClick={changLang}
    />
  )

  return (
    <Dropdown overlay={langMenu} trigger={['click']} arrow>
      <Space className="pointer">
        <i className="iconfont icon-wangluo"></i>
        {LANG_MAP.find(item => langSelectedKeys[0] === item.key)?.label}
        <DownOutlined />
      </Space>
    </Dropdown>
  )
}