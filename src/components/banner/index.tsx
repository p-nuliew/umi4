import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './index.less';

interface IBanner {
  images: string[]
}

export default ({ images }: IBanner) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      modules={[Pagination, Autoplay, A11y]}
    >
      {images.map((img) => (
        <SwiperSlide key={img}><img src={img} className={styles.img} /></SwiperSlide>
      ))}
    </Swiper>
  );
};