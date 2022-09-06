import yayJpg from '@/assets/image/yay.jpg';
import { useIntl } from 'umi';
import { DatePicker, Button } from '@/components/library';
import cx from 'classnames';

import styles from './index.less';

export default function HomePage() {
  const intl = useIntl()

  return (
    <div>
      <div className={cx(styles.wel, 'ml1', 'H1-Bold')}>{intl.formatMessage({ id: 'welcome' })}</div>
      <DatePicker />
      <Button>1</Button>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
