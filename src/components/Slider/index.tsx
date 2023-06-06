import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

import { SliderProps } from './types';

import PrevArrow from 'public/svg/arrowPrev.svg';
import NextArrow from 'public/svg/arrowNext.svg';

SwiperCore.use([Navigation]);

const Slider: FC<SliderProps> = ({
  children,
  nextButtonSelector,
  prevButtonSelector,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <Swiper
          className="w-full max-w-[1200px] z-0 mt-8 tablet:mt-10 desktop:mt-12"
          spaceBetween={32}
          navigation={{
            nextEl: '.' + nextButtonSelector,
            prevEl: '.' + prevButtonSelector,
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
          {children}
        </Swiper>
        <div className="w-[120px] flex items-center mt-8 m-auto tablet:absolute tablet:mt-0 tablet:top-[-70px] tablet:right-0 desktop:absolute desktop:mt-0 desktop:top-[-80px] desktop:right-0">
          <button
            type="button"
            aria-label={t('slider.prev') as string}
            className={`${prevButtonSelector} mr-[23px] enabled:text-accent disabled:text-accent-light focus:disabled:text-accent-light focus:outline-accent`}
          >
            <PrevArrow fill="currentColor" />
          </button>
          <button
            type="button"
            aria-label={t('slider.next') as string}
            className={`${nextButtonSelector} enabled:text-accent disabled:text-accent-light focus:disabled:text-accent-light focus:outline-accent`}
          >
            <NextArrow fill="currentColor" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
