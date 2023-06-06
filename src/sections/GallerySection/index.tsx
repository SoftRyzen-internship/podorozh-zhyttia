import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { SwiperSlide } from 'swiper/react';

import Slider from '@/components/Slider';
import SlideGallery from '@/components/SlideGallery';
import Heading from '@/components/Heading';

import banners from './api';

const GallerySection: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="#gallery"
      className="py-10 tablet:py-20 desktop:py-[100px] border-b-[1px] border-b-accent"
    >
      <div className="container">
        <Heading className="flex justify-center tablet:justify-start desktop:justify-start">
          {t('gallery')}
        </Heading>
        <Slider
          nextButtonSelector="gallery-btn-next"
          prevButtonSelector="gallery-btn-prev"
        >
          {banners.map(({ id, title, photo }) => (
            <SwiperSlide key={id}>
              <SlideGallery id={id} title={title} photo={photo} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GallerySection;
