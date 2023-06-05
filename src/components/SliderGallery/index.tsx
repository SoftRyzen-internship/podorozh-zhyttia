import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { TypeBanner } from '@/types';

import PrevArrow from 'public/svg/arrowPrev.svg';
import NextArrow from 'public/svg/arrowNext.svg';

SwiperCore.use([Navigation]);

interface SliderProps {
  BunnerApi: TypeBanner[];
}

const SliderGallery: FC<SliderProps> = ({ BunnerApi }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <Swiper
          className="w-full max-w-[1200px] z-0 mt-8 tablet:mt-10 desktop:mt-12"
          spaceBetween={32}
          navigation={{
            nextEl: '.gallery-swiper-button-next',
            prevEl: '.gallery-swiper-button-prev',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {BunnerApi?.map(({ id, title, photo }: TypeBanner) => (
            <SwiperSlide key={id}>
              <div className="flex flex-col items-center">
                <div className="w-[320px] tablet:w-[336px] desktop:w-[384px]">
                  <div className="relative w-[320px] h-[234px] tablet:w-[336px] tablet:h-[245px] desktop:w-[384px] desktop:h-[280px]">
                    <Image
                      className="w-full h-full object-cover absolute top-0 left-0"
                      src={`/images/gallery/${photo.url}.jpg`}
                      alt={photo.alt}
                      fill={true}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-[120px] flex items-center mt-8 m-auto tablet:absolute tablet:mt-0 tablet:top-[-70px] tablet:right-0 desktop:absolute desktop:mt-0 desktop:top-[-80px] desktop:right-0">
          <button
            type="button"
            aria-label={t('slider.prev') as string}
            className="gallery-swiper-button-prev mr-[23px] enabled:text-accent disabled:text-accent-light focus:disabled:text-accent-light"
          >
            <PrevArrow fill="currentColor" />
          </button>
          <button
            type="button"
            aria-label={t('slider.next') as string}
            className="gallery-swiper-button-next enabled:text-accent disabled:text-accent-light focus:disabled:text-accent-light"
          >
            <NextArrow fill="currentColor" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderGallery;
