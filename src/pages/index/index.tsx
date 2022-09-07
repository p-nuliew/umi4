import yayJpg from '@/assets/image/yay.jpg';
import { useIntl } from 'umi';
import { DatePicker, Button } from '@/components/Library';
import cx from 'classnames';
import { Banner } from '@/components'
import BANNER_1 from '@/assets/image/banner1.jpg';
import BANNER_2 from '@/assets/image/banner2.jpg';

import Header from './components/Header';
import styles from './index.less';


export default function HomePage() {
  const intl = useIntl()

  return (
    <div>
      <Header />
      <Banner images={[BANNER_1, BANNER_2]} />
      <div className={cx(styles.wel, 'ml1', 'H1-Bold')}>{intl.formatMessage({ id: 'Welcome' })}</div>
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
