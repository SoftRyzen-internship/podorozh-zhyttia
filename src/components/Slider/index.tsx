import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { TypePsychologist } from '@/types';

import PrevArrow from 'public/svg/arrowPrev.svg';
import NextArrow from 'public/svg/arrowNext.svg';

SwiperCore.use([Navigation]);

interface SliderProps {
  allPsychologists: TypePsychologist[];
}

const Slider: FC<SliderProps> = ({ allPsychologists }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <Swiper
          className="w-full max-w-[1200px] z-0 mt-8 tablet:mt-10 desktop:mt-12"
          spaceBetween={32}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
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
          {allPsychologists?.map(
            ({
              id,
              name,
              description,
              psychologistPhoto,
            }: TypePsychologist) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col items-center">
                  <div className="w-full tablet:w-[336px] desktop:w-[384px]">
                    <div className="relative w-full h-[350px] tablet:w-[336px] tablet:h-[350px] desktop:w-[384px] desktop:h-[400px]">
                      <Image
                        className="w-full h-full object-cover object-top absolute top-0 left-0"
                        src={psychologistPhoto.url}
                        alt={name}
                        fill={true}
                      />
                    </div>

                    <div className=" h-[180px] flex flex-col items-center py-7 px-5 tablet:px-7 desktop:px-7 bg-white">
                      <p className="font-semibold text-lg text-black-charcoal">
                        {name}
                      </p>
                      <p className="mt-5 font-normal text-base text-black-charcoal">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className="w-[120px] flex items-center mt-8 m-auto tablet:absolute tablet:mt-0 tablet:top-[-70px] tablet:right-0 desktop:absolute desktop:mt-0 desktop:top-[-80px] desktop:right-0">
          <button
            type="button"
            aria-label={t('slider.prev') as string}
            className="custom-swiper-button-prev mr-[23px] enabled:text-accent disabled:text-accent-light focus:disabled:text-accent-light"
          >
            <PrevArrow fill="currentColor" />
          </button>
          <button
            type="button"
            aria-label={t('slider.next') as string}
            className="custom-swiper-button-next enabled:text-accent disabled:text-accent-light focus:disabled:text-accent-light"
          >
            <NextArrow fill="currentColor" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
