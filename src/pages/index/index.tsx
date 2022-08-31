import yayJpg from '@/assets/image/yay.jpg';
import { FormattedMessage } from 'umi';
import { DatePicker } from 'antd';
import cx from 'classnames';

import styles from './index.less';

export default function HomePage() {
  return (
    <div>
      <div className={cx(styles.wel, 'ml1', 'H1-Bold')}><FormattedMessage id="welcome" /></div>
      <DatePicker />
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
